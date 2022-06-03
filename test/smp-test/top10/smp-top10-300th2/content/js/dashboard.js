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

    var data = {"OkPercent": 99.99958897634559, "KoPercent": 4.110236544113114E-4};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9994636141309933, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9997953922330892, 500, 1500, "IMSPJ00008:ZSMPSCFC00010_TR01"], "isController": false}, {"data": [0.9987441324219715, 500, 1500, "IMSPJ00031:ZSMPSCCD00010_TR01"], "isController": false}, {"data": [0.999650479049303, 500, 1500, "IMSPJ00024:ZSMPSCOM01010_TR01"], "isController": false}, {"data": [0.9995876458702734, 500, 1500, "IMSPJ00010:ZSMPSCFC00110_TR01"], "isController": false}, {"data": [0.9996697353754695, 500, 1500, "IMSPJ00034:ZSMPSCOM00042_TR02"], "isController": false}, {"data": [0.9997743497169115, 500, 1500, "IMSPJ00011:ZSMPSCFC00010_TR05"], "isController": false}, {"data": [0.9997535225732244, 500, 1500, "IMSPJ00009:ZSMPSCFC00010_TR04"], "isController": false}, {"data": [0.9986919020561664, 500, 1500, "IMSPJ00038:ZSMPSCOM10010_TR01"], "isController": false}, {"data": [0.9995492726900226, 500, 1500, "IMSPJ00003:ZSMPSCFC00100_TR02"], "isController": false}, {"data": [0.9994213441349095, 500, 1500, "IMSPJ00040"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 243295, 1, 4.110236544113114E-4, 81.50762654390647, 11, 7018, 103.0, 208.0, 249.0, 345.0, 761.5248337944937, 4415.848635147809, 1647.4421327632997], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["IMSPJ00008:ZSMPSCFC00010_TR01", 24437, 0, 0.0, 76.50992347669522, 18, 589, 50.0, 158.90000000000146, 198.0, 295.0, 76.88048399122877, 262.94796579122055, 142.34902114000948], "isController": false}, {"data": ["IMSPJ00031:ZSMPSCCD00010_TR01", 24286, 0, 0.0, 120.58758132257238, 39, 677, 90.0, 218.0, 263.0, 366.0, 76.60473772198215, 2586.9238764864526, 142.51174351599218], "isController": false}, {"data": ["IMSPJ00024:ZSMPSCOM01010_TR01", 24319, 0, 0.0, 66.14182326575914, 11, 578, 39.0, 147.0, 190.0, 285.0, 76.63655070920086, 86.08118897796136, 142.64576723802426], "isController": false}, {"data": ["IMSPJ00010:ZSMPSCFC00110_TR01", 24251, 0, 0.0, 67.10354212197444, 12, 605, 39.0, 150.0, 191.0, 280.9900000000016, 76.61057213891057, 197.6074183272179, 147.68483340059518], "isController": false}, {"data": ["IMSPJ00034:ZSMPSCOM00042_TR02", 24223, 0, 0.0, 79.00189902159137, 19, 604, 52.0, 160.90000000000146, 202.0, 299.0, 76.63808649982599, 94.54346359686937, 177.8243100816275], "isController": false}, {"data": ["IMSPJ00011:ZSMPSCFC00010_TR05", 24374, 0, 0.0, 77.59062935915306, 23, 599, 51.0, 158.0, 199.0, 286.9900000000016, 76.75641631239175, 138.68921970949455, 149.09034379428437], "isController": false}, {"data": ["IMSPJ00009:ZSMPSCFC00010_TR04", 24343, 0, 0.0, 66.25477550014443, 12, 603, 39.0, 147.0, 190.0, 283.0, 76.74797670730592, 94.00094726079116, 147.12527175433743], "isController": false}, {"data": ["IMSPJ00038:ZSMPSCOM10010_TR01", 24463, 1, 0.004087806074479827, 80.88975187017148, 18, 7018, 51.0, 156.0, 198.0, 291.9900000000016, 76.64039198977419, 95.38132857731397, 231.03439333731734], "isController": false}, {"data": ["IMSPJ00003:ZSMPSCFC00100_TR02", 24405, 0, 0.0, 75.67994263470639, 18, 644, 49.0, 158.0, 200.0, 288.9900000000016, 76.84677876440583, 478.6171188657189, 163.67463328629796], "isController": false}, {"data": ["IMSPJ00040", 24194, 0, 0.0, 105.5150863850537, 45, 575, 78.0, 188.0, 227.95000000000073, 315.9900000000016, 76.6491576006032, 415.1155363722334, 215.27634497981916], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to smp.sktelecom.com:443 [smp.sktelecom.com/100.64.40.250] failed: Connection timed out (Connection timed out)", 1, 100.0, 4.110236544113114E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 243295, 1, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to smp.sktelecom.com:443 [smp.sktelecom.com/100.64.40.250] failed: Connection timed out (Connection timed out)", 1, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["IMSPJ00038:ZSMPSCOM10010_TR01", 24463, 1, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to smp.sktelecom.com:443 [smp.sktelecom.com/100.64.40.250] failed: Connection timed out (Connection timed out)", 1, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
