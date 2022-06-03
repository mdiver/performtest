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

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9998940228910556, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9993665540540541, 500, 1500, "IMSPJ00008:ZSMPSCFC00010_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00031:ZSMPSCCD00010_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00024:ZSMPSCOM01010_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00010:ZSMPSCFC00110_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00034:ZSMPSCOM00042_TR02"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00011:ZSMPSCFC00010_TR05"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00009:ZSMPSCFC00010_TR04"], "isController": false}, {"data": [0.9995780590717299, 500, 1500, "IMSPJ00038:ZSMPSCOM10010_TR01"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00003:ZSMPSCFC00100_TR02"], "isController": false}, {"data": [1.0, 500, 1500, "IMSPJ00040"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 23590, 0, 0.0, 28.60924120389999, 12, 866, 24.0, 52.0, 54.0, 60.0, 73.93570508460765, 428.62955550623553, 159.94798506398465], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["IMSPJ00008:ZSMPSCFC00010_TR01", 2368, 0, 0.0, 25.105152027027057, 18, 673, 24.0, 28.0, 30.0, 39.0, 7.477272942565828, 25.57243245528793, 13.844638182719542], "isController": false}, {"data": ["IMSPJ00031:ZSMPSCCD00010_TR01", 2354, 0, 0.0, 51.981733220051076, 40, 119, 52.0, 60.0, 63.0, 78.44999999999982, 7.46654486746407, 252.1649237079848, 13.890398410663138], "isController": false}, {"data": ["IMSPJ00024:ZSMPSCOM01010_TR01", 2357, 0, 0.0, 16.25159100551548, 12, 68, 16.0, 18.0, 21.0, 27.0, 7.471155065297325, 8.390479017093, 13.906271049274121], "isController": false}, {"data": ["IMSPJ00010:ZSMPSCFC00110_TR01", 2353, 0, 0.0, 16.450063748406304, 12, 79, 16.0, 19.0, 21.0, 25.460000000000036, 7.463657096818192, 19.250462067540862, 14.38794834874913], "isController": false}, {"data": ["IMSPJ00034:ZSMPSCOM00042_TR02", 2351, 0, 0.0, 27.182050191407914, 19, 127, 26.0, 31.0, 34.0, 60.48000000000002, 7.460791967351498, 9.2021446504281, 17.311368861745276], "isController": false}, {"data": ["IMSPJ00011:ZSMPSCFC00010_TR05", 2363, 0, 0.0, 27.619974608548464, 23, 73, 27.0, 31.0, 32.0, 39.0, 7.482489138832947, 13.518342023454423, 14.533858297987043], "isController": false}, {"data": ["IMSPJ00009:ZSMPSCFC00010_TR04", 2363, 0, 0.0, 16.342784595852685, 12, 54, 16.0, 19.0, 21.0, 25.360000000000127, 7.486993606113797, 9.168642560612014, 14.352508250782602], "isController": false}, {"data": ["IMSPJ00038:ZSMPSCOM10010_TR01", 2370, 0, 0.0, 28.468354430379748, 19, 866, 26.0, 33.0, 37.0, 52.0, 7.467106921409487, 9.291198733545585, 22.51070221327255], "isController": false}, {"data": ["IMSPJ00003:ZSMPSCFC00100_TR02", 2364, 0, 0.0, 24.126480541455155, 18, 240, 23.0, 27.0, 31.0, 46.34999999999991, 7.480113150950202, 46.58439634830305, 15.931764435764054], "isController": false}, {"data": ["IMSPJ00040", 2347, 0, 0.0, 52.73625905411154, 43, 98, 52.0, 56.0, 59.0, 73.0, 7.501925824588545, 40.624860157965564, 21.06986198390298], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 23590, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
