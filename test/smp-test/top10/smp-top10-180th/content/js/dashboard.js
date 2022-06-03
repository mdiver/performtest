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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9992908989725515, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9991353092015027, 500, 1500, "IMSPJ00008:ZSMPSCFC00010_TR01"], "isController": false}, {"data": [0.9990708548135715, 500, 1500, "IMSPJ00031:ZSMPSCCD00010_TR01"], "isController": false}, {"data": [0.9991619275665968, 500, 1500, "IMSPJ00024:ZSMPSCOM01010_TR01"], "isController": false}, {"data": [0.9992798415651444, 500, 1500, "IMSPJ00010:ZSMPSCFC00110_TR01"], "isController": false}, {"data": [0.9995495224938434, 500, 1500, "IMSPJ00034:ZSMPSCOM00042_TR02"], "isController": false}, {"data": [0.9994323274574246, 500, 1500, "IMSPJ00011:ZSMPSCFC00010_TR05"], "isController": false}, {"data": [0.9992824254021407, 500, 1500, "IMSPJ00009:ZSMPSCFC00010_TR04"], "isController": false}, {"data": [0.9998809098487556, 500, 1500, "IMSPJ00038:ZSMPSCOM10010_TR01"], "isController": false}, {"data": [0.9990749582239198, 500, 1500, "IMSPJ00003:ZSMPSCFC00100_TR02"], "isController": false}, {"data": [0.9990382881529122, 500, 1500, "IMSPJ00040"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 167113, 0, 0.0, 34.026138002429676, 11, 1038, 27.0, 56.0, 62.0, 77.0, 522.9979125525382, 3032.7160555555993, 1131.465302249561], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["IMSPJ00008:ZSMPSCFC00010_TR01", 16769, 0, 0.0, 30.36782157552624, 17, 950, 27.0, 39.0, 45.0, 62.0, 52.72690112723443, 180.32830321839575, 97.62715286839499], "isController": false}, {"data": ["IMSPJ00031:ZSMPSCCD00010_TR01", 16682, 0, 0.0, 60.98914998201662, 39, 1000, 58.0, 73.0, 80.0, 99.0, 52.57551308557309, 1775.4994732343773, 97.8089379179851], "isController": false}, {"data": ["IMSPJ00024:ZSMPSCOM01010_TR01", 16705, 0, 0.0, 21.723795270876966, 11, 1038, 18.0, 29.0, 35.0, 53.0, 52.65978406493813, 59.13981228820238, 98.01713713649617], "isController": false}, {"data": ["IMSPJ00010:ZSMPSCFC00110_TR01", 16663, 0, 0.0, 21.669567304807067, 11, 949, 18.0, 29.0, 35.0, 52.0, 52.660687309984766, 135.82326062485382, 101.51581713858391], "isController": false}, {"data": ["IMSPJ00034:ZSMPSCOM00042_TR02", 16649, 0, 0.0, 31.770256471860005, 18, 961, 29.0, 42.0, 48.0, 67.0, 52.58569772620314, 64.85933949166474, 122.01525175533074], "isController": false}, {"data": ["IMSPJ00011:ZSMPSCFC00010_TR05", 16735, 0, 0.0, 32.933970720048, 22, 979, 30.0, 41.0, 47.0, 63.0, 52.714140367345266, 95.23669795305497, 102.39104022524388], "isController": false}, {"data": ["IMSPJ00009:ZSMPSCFC00010_TR04", 16723, 0, 0.0, 21.879327871793254, 11, 1017, 18.0, 30.0, 36.0, 53.0, 52.67269102236613, 64.50375113881898, 100.97313718447727], "isController": false}, {"data": ["IMSPJ00038:ZSMPSCOM10010_TR01", 16794, 0, 0.0, 30.885375729426997, 17, 768, 28.0, 40.0, 47.0, 67.0, 52.62597142140887, 65.48199810220294, 158.6488025174699], "isController": false}, {"data": ["IMSPJ00003:ZSMPSCFC00100_TR02", 16756, 0, 0.0, 29.042014800668383, 17, 923, 25.0, 38.0, 44.0, 60.0, 52.669960896734686, 328.0182673288918, 112.1808444490023], "isController": false}, {"data": ["IMSPJ00040", 16637, 0, 0.0, 59.16192823225352, 43, 1032, 55.0, 69.0, 76.0, 93.0, 52.63624139840228, 285.0420223888713, 147.8338186150439], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 167113, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
