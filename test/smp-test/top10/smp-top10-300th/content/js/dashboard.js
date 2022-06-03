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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.999867666337211, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9999176242843609, 500, 1500, "IMSPJ00008:ZSMPSCFC00010_TR01"], "isController": false}, {"data": [0.9996478873239436, 500, 1500, "IMSPJ00031:ZSMPSCCD00010_TR01"], "isController": false}, {"data": [0.9999793114862628, 500, 1500, "IMSPJ00024:ZSMPSCOM01010_TR01"], "isController": false}, {"data": [0.9999377825708242, 500, 1500, "IMSPJ00010:ZSMPSCFC00110_TR01"], "isController": false}, {"data": [0.9998753945838179, 500, 1500, "IMSPJ00034:ZSMPSCOM00042_TR02"], "isController": false}, {"data": [0.9999380830512672, 500, 1500, "IMSPJ00011:ZSMPSCFC00010_TR05"], "isController": false}, {"data": [0.9999586708546867, 500, 1500, "IMSPJ00009:ZSMPSCFC00010_TR04"], "isController": false}, {"data": [0.9996504359269617, 500, 1500, "IMSPJ00038:ZSMPSCOM10010_TR01"], "isController": false}, {"data": [0.9999587696874742, 500, 1500, "IMSPJ00003:ZSMPSCFC00100_TR02"], "isController": false}, {"data": [0.999812882032517, 500, 1500, "IMSPJ00040"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 241813, 0, 0.0, 84.00560350353331, 12, 1095, 106.0, 216.0, 259.0, 342.0, 756.7818782704489, 4388.512429612976, 1637.2057904060832], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["IMSPJ00008:ZSMPSCFC00010_TR01", 24279, 0, 0.0, 78.86683965566941, 19, 513, 51.0, 174.0, 214.0, 305.9900000000016, 76.24906961625793, 260.7910620889824, 141.17991796135257], "isController": false}, {"data": ["IMSPJ00031:ZSMPSCCD00010_TR01", 24140, 0, 0.0, 123.78193869096914, 41, 639, 92.0, 239.0, 284.0, 376.9900000000016, 76.1795362957306, 2572.5656389986607, 141.7207193782879], "isController": false}, {"data": ["IMSPJ00024:ZSMPSCOM01010_TR01", 24168, 0, 0.0, 68.66484607745846, 13, 525, 40.0, 162.0, 205.0, 289.0, 76.27463666345804, 85.67684498824383, 141.97212644585062], "isController": false}, {"data": ["IMSPJ00010:ZSMPSCFC00110_TR01", 24109, 0, 0.0, 68.89763158986281, 12, 582, 40.0, 162.0, 207.0, 296.0, 76.1684811798232, 196.46844132279907, 146.83259946188576], "isController": false}, {"data": ["IMSPJ00034:ZSMPSCOM00042_TR02", 24076, 0, 0.0, 81.67801960458495, 19, 538, 54.0, 178.0, 219.0, 308.0, 76.27169653520707, 94.09351898674528, 176.97417086684766], "isController": false}, {"data": ["IMSPJ00011:ZSMPSCFC00010_TR05", 24226, 0, 0.0, 80.46759679682955, 23, 597, 52.0, 172.0, 219.0, 311.0, 76.26272960508712, 137.7990940731588, 148.13141521925613], "isController": false}, {"data": ["IMSPJ00009:ZSMPSCFC00010_TR04", 24196, 0, 0.0, 68.88836997850889, 12, 532, 41.0, 163.0, 206.0, 301.9900000000016, 76.2143552365083, 93.34948611771709, 146.10232356373612], "isController": false}, {"data": ["IMSPJ00038:ZSMPSCOM10010_TR01", 24316, 0, 0.0, 82.91647474913631, 18, 1095, 52.0, 176.0, 219.0, 306.0, 76.10665448092169, 94.71227316047937, 229.43480701426293], "isController": false}, {"data": ["IMSPJ00003:ZSMPSCFC00100_TR02", 24254, 0, 0.0, 77.9668920590421, 18, 584, 49.0, 177.0, 220.0, 304.0, 76.35375708713596, 475.5475978308091, 162.62455488969096], "isController": false}, {"data": ["IMSPJ00040", 24049, 0, 0.0, 108.12428791217924, 44, 634, 80.0, 202.0, 248.0, 336.0, 76.18616173679992, 412.610716332157, 213.9759776904654], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 241813, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
