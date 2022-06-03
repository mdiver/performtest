/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 99.99945680514514, "KoPercent": 5.431948548583348E-4};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9999103728489483, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "IMSPJ00008:ZSMPSCFC00010_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00031:ZSMPSCCD00010_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00024:ZSMPSCOM01010_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00010:ZSMPSCFC00110_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00034:ZSMPSCOM00042_TR02"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00011:ZSMPSCFC00010_TR05"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00009:ZSMPSCFC00010_TR04"], "isController": false}, {"data": [0.9991078669910787, 500, 1500, "IMSPJ00038:ZSMPSCOM10010_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00003:ZSMPSCFC00100_TR02"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00040"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 184096, 1, 5.431948548583348E-4, 36.80700830001719, 11, 7020, 30.0, 64.0, 75.0, 101.0, 576.4529058116233, 3343.383431291293, 1247.0552066046155], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["IMSPJ00008:ZSMPSCFC00010_TR01", 18472, 0, 0.0, 32.82985058466865, 17, 249, 28.0, 48.0, 58.0, 83.0, 58.19547403540498, 199.03208467753367, 107.75255739367952], "isController": false}, {"data": ["IMSPJ00031:ZSMPSCCD00010_TR01", 18386, 0, 0.0, 65.69917328402022, 39, 291, 61.0, 85.0, 97.0, 128.0, 58.08024968252665, 1961.3786748083708, 108.04968324727857], "isController": false}, {"data": ["IMSPJ00024:ZSMPSCOM01010_TR01", 18405, 0, 0.0, 23.7068187992394, 11, 227, 19.0, 38.0, 48.0, 72.0, 58.13751472785452, 65.29141335480783, 108.21299128055733], "isController": false}, {"data": ["IMSPJ00010:ZSMPSCFC00110_TR01", 18359, 0, 0.0, 23.90909090909092, 12, 242, 19.0, 38.0, 48.0, 71.0, 58.096814311075384, 149.84506931907362, 111.99522602545197], "isController": false}, {"data": ["IMSPJ00034:ZSMPSCOM00042_TR02", 18341, 0, 0.0, 34.728041001036026, 18, 277, 30.0, 50.0, 60.0, 85.0, 58.02773409940109, 71.57166570301798, 134.6424767775166], "isController": false}, {"data": ["IMSPJ00011:ZSMPSCFC00010_TR05", 18440, 0, 0.0, 35.205422993492355, 22, 248, 31.0, 50.0, 59.95000000000073, 82.59000000000015, 58.17823868852873, 105.10842349573444, 113.00441089012074], "isController": false}, {"data": ["IMSPJ00009:ZSMPSCFC00010_TR04", 18425, 0, 0.0, 24.034843962008086, 11, 180, 19.0, 39.0, 49.0, 74.0, 58.23711434703314, 71.31798783065564, 111.6400932258067], "isController": false}, {"data": ["IMSPJ00038:ZSMPSCOM10010_TR01", 18495, 1, 0.005406866720735334, 36.27672343876712, 18, 7020, 29.0, 53.0, 64.0, 94.0, 58.00351251332874, 72.1776590333532, 174.85074390994478], "isController": false}, {"data": ["IMSPJ00003:ZSMPSCFC00100_TR02", 18453, 0, 0.0, 30.877526689427196, 17, 232, 26.0, 46.0, 56.0, 81.0, 58.25141580014016, 362.78290045974046, 124.06868931650946], "isController": false}, {"data": ["IMSPJ00040", 18320, 0, 0.0, 60.9539301310045, 43, 282, 56.0, 78.0, 88.0, 110.0, 58.177383859586726, 315.05294840071736, 163.39663669938616], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to smp.sktelecom.com:443 [smp.sktelecom.com/100.64.40.250] failed: Connection timed out (Connection timed out)", 1, 100.0, 5.431948548583348E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 184096, 1, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to smp.sktelecom.com:443 [smp.sktelecom.com/100.64.40.250] failed: Connection timed out (Connection timed out)", 1, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["IMSPJ00038:ZSMPSCOM10010_TR01", 18495, 1, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to smp.sktelecom.com:443 [smp.sktelecom.com/100.64.40.250] failed: Connection timed out (Connection timed out)", 1, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
