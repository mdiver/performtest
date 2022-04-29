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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 31201.0, "series": [{"data": [[0.0, 7.0], [0.1, 7.0], [0.2, 7.0], [0.3, 7.0], [0.4, 7.0], [0.5, 7.0], [0.6, 7.0], [0.7, 7.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 9.0], [14.5, 9.0], [14.6, 9.0], [14.7, 9.0], [14.8, 9.0], [14.9, 9.0], [15.0, 9.0], [15.1, 9.0], [15.2, 9.0], [15.3, 9.0], [15.4, 9.0], [15.5, 9.0], [15.6, 9.0], [15.7, 9.0], [15.8, 9.0], [15.9, 9.0], [16.0, 9.0], [16.1, 9.0], [16.2, 9.0], [16.3, 9.0], [16.4, 9.0], [16.5, 9.0], [16.6, 9.0], [16.7, 9.0], [16.8, 9.0], [16.9, 9.0], [17.0, 9.0], [17.1, 9.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 9.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 9.0], [18.2, 9.0], [18.3, 9.0], [18.4, 9.0], [18.5, 9.0], [18.6, 9.0], [18.7, 9.0], [18.8, 9.0], [18.9, 9.0], [19.0, 9.0], [19.1, 9.0], [19.2, 9.0], [19.3, 9.0], [19.4, 9.0], [19.5, 9.0], [19.6, 9.0], [19.7, 9.0], [19.8, 9.0], [19.9, 9.0], [20.0, 9.0], [20.1, 9.0], [20.2, 9.0], [20.3, 9.0], [20.4, 9.0], [20.5, 9.0], [20.6, 9.0], [20.7, 9.0], [20.8, 9.0], [20.9, 9.0], [21.0, 9.0], [21.1, 9.0], [21.2, 9.0], [21.3, 9.0], [21.4, 9.0], [21.5, 9.0], [21.6, 9.0], [21.7, 10.0], [21.8, 10.0], [21.9, 10.0], [22.0, 10.0], [22.1, 10.0], [22.2, 10.0], [22.3, 10.0], [22.4, 10.0], [22.5, 10.0], [22.6, 10.0], [22.7, 10.0], [22.8, 10.0], [22.9, 10.0], [23.0, 10.0], [23.1, 10.0], [23.2, 10.0], [23.3, 10.0], [23.4, 10.0], [23.5, 10.0], [23.6, 10.0], [23.7, 10.0], [23.8, 10.0], [23.9, 10.0], [24.0, 10.0], [24.1, 10.0], [24.2, 10.0], [24.3, 10.0], [24.4, 10.0], [24.5, 10.0], [24.6, 10.0], [24.7, 10.0], [24.8, 10.0], [24.9, 10.0], [25.0, 10.0], [25.1, 10.0], [25.2, 10.0], [25.3, 10.0], [25.4, 10.0], [25.5, 10.0], [25.6, 10.0], [25.7, 10.0], [25.8, 10.0], [25.9, 10.0], [26.0, 10.0], [26.1, 10.0], [26.2, 10.0], [26.3, 10.0], [26.4, 10.0], [26.5, 10.0], [26.6, 10.0], [26.7, 10.0], [26.8, 10.0], [26.9, 10.0], [27.0, 10.0], [27.1, 10.0], [27.2, 10.0], [27.3, 10.0], [27.4, 10.0], [27.5, 10.0], [27.6, 10.0], [27.7, 10.0], [27.8, 10.0], [27.9, 10.0], [28.0, 10.0], [28.1, 10.0], [28.2, 10.0], [28.3, 10.0], [28.4, 10.0], [28.5, 10.0], [28.6, 10.0], [28.7, 10.0], [28.8, 10.0], [28.9, 10.0], [29.0, 10.0], [29.1, 10.0], [29.2, 10.0], [29.3, 10.0], [29.4, 10.0], [29.5, 10.0], [29.6, 10.0], [29.7, 10.0], [29.8, 10.0], [29.9, 10.0], [30.0, 10.0], [30.1, 10.0], [30.2, 10.0], [30.3, 10.0], [30.4, 10.0], [30.5, 10.0], [30.6, 10.0], [30.7, 10.0], [30.8, 10.0], [30.9, 10.0], [31.0, 10.0], [31.1, 10.0], [31.2, 10.0], [31.3, 10.0], [31.4, 10.0], [31.5, 10.0], [31.6, 10.0], [31.7, 10.0], [31.8, 10.0], [31.9, 10.0], [32.0, 11.0], [32.1, 11.0], [32.2, 11.0], [32.3, 11.0], [32.4, 11.0], [32.5, 11.0], [32.6, 11.0], [32.7, 11.0], [32.8, 11.0], [32.9, 11.0], [33.0, 11.0], [33.1, 11.0], [33.2, 11.0], [33.3, 11.0], [33.4, 11.0], [33.5, 11.0], [33.6, 11.0], [33.7, 11.0], [33.8, 11.0], [33.9, 11.0], [34.0, 11.0], [34.1, 11.0], [34.2, 11.0], [34.3, 11.0], [34.4, 11.0], [34.5, 11.0], [34.6, 11.0], [34.7, 11.0], [34.8, 11.0], [34.9, 11.0], [35.0, 11.0], [35.1, 11.0], [35.2, 11.0], [35.3, 11.0], [35.4, 11.0], [35.5, 11.0], [35.6, 11.0], [35.7, 11.0], [35.8, 11.0], [35.9, 11.0], [36.0, 11.0], [36.1, 11.0], [36.2, 11.0], [36.3, 11.0], [36.4, 11.0], [36.5, 11.0], [36.6, 11.0], [36.7, 11.0], [36.8, 11.0], [36.9, 11.0], [37.0, 11.0], [37.1, 11.0], [37.2, 11.0], [37.3, 11.0], [37.4, 11.0], [37.5, 11.0], [37.6, 11.0], [37.7, 11.0], [37.8, 12.0], [37.9, 12.0], [38.0, 12.0], [38.1, 12.0], [38.2, 12.0], [38.3, 12.0], [38.4, 12.0], [38.5, 12.0], [38.6, 12.0], [38.7, 12.0], [38.8, 12.0], [38.9, 12.0], [39.0, 12.0], [39.1, 12.0], [39.2, 12.0], [39.3, 12.0], [39.4, 12.0], [39.5, 12.0], [39.6, 12.0], [39.7, 12.0], [39.8, 12.0], [39.9, 12.0], [40.0, 12.0], [40.1, 12.0], [40.2, 12.0], [40.3, 12.0], [40.4, 12.0], [40.5, 12.0], [40.6, 12.0], [40.7, 12.0], [40.8, 12.0], [40.9, 12.0], [41.0, 12.0], [41.1, 12.0], [41.2, 13.0], [41.3, 13.0], [41.4, 13.0], [41.5, 13.0], [41.6, 13.0], [41.7, 13.0], [41.8, 13.0], [41.9, 13.0], [42.0, 13.0], [42.1, 13.0], [42.2, 13.0], [42.3, 13.0], [42.4, 13.0], [42.5, 13.0], [42.6, 13.0], [42.7, 13.0], [42.8, 13.0], [42.9, 13.0], [43.0, 13.0], [43.1, 13.0], [43.2, 13.0], [43.3, 13.0], [43.4, 14.0], [43.5, 14.0], [43.6, 14.0], [43.7, 14.0], [43.8, 14.0], [43.9, 14.0], [44.0, 14.0], [44.1, 14.0], [44.2, 14.0], [44.3, 14.0], [44.4, 15.0], [44.5, 15.0], [44.6, 15.0], [44.7, 15.0], [44.8, 15.0], [44.9, 15.0], [45.0, 15.0], [45.1, 15.0], [45.2, 15.0], [45.3, 15.0], [45.4, 15.0], [45.5, 16.0], [45.6, 16.0], [45.7, 16.0], [45.8, 16.0], [45.9, 16.0], [46.0, 16.0], [46.1, 16.0], [46.2, 16.0], [46.3, 16.0], [46.4, 17.0], [46.5, 17.0], [46.6, 19.0], [46.7, 19.0], [46.8, 19.0], [46.9, 19.0], [47.0, 19.0], [47.1, 20.0], [47.2, 26.0], [47.3, 27.0], [47.4, 30.0], [47.5, 30.0], [47.6, 30.0], [47.7, 610.0], [47.8, 648.0], [47.9, 826.0], [48.0, 852.0], [48.1, 852.0], [48.2, 889.0], [48.3, 940.0], [48.4, 983.0], [48.5, 1013.0], [48.6, 1057.0], [48.7, 1076.0], [48.8, 1076.0], [48.9, 1082.0], [49.0, 1089.0], [49.1, 1095.0], [49.2, 1118.0], [49.3, 1143.0], [49.4, 1143.0], [49.5, 1145.0], [49.6, 1152.0], [49.7, 1165.0], [49.8, 1216.0], [49.9, 1223.0], [50.0, 1223.0], [50.1, 1242.0], [50.2, 1250.0], [50.3, 1254.0], [50.4, 1299.0], [50.5, 1341.0], [50.6, 1344.0], [50.7, 1344.0], [50.8, 1362.0], [50.9, 1366.0], [51.0, 1387.0], [51.1, 1387.0], [51.2, 1391.0], [51.3, 1391.0], [51.4, 1393.0], [51.5, 1426.0], [51.6, 1428.0], [51.7, 1468.0], [51.8, 1516.0], [51.9, 1528.0], [52.0, 1528.0], [52.1, 1533.0], [52.2, 1567.0], [52.3, 1572.0], [52.4, 1581.0], [52.5, 1584.0], [52.6, 1584.0], [52.7, 1614.0], [52.8, 1628.0], [52.9, 1698.0], [53.0, 1720.0], [53.1, 1781.0], [53.2, 1843.0], [53.3, 1843.0], [53.4, 1887.0], [53.5, 1901.0], [53.6, 1920.0], [53.7, 1985.0], [53.8, 2072.0], [53.9, 2072.0], [54.0, 2087.0], [54.1, 2186.0], [54.2, 2199.0], [54.3, 2222.0], [54.4, 2261.0], [54.5, 2261.0], [54.6, 2266.0], [54.7, 2383.0], [54.8, 2389.0], [54.9, 2409.0], [55.0, 2414.0], [55.1, 2417.0], [55.2, 2417.0], [55.3, 2463.0], [55.4, 2470.0], [55.5, 2478.0], [55.6, 2502.0], [55.7, 2506.0], [55.8, 2506.0], [55.9, 2532.0], [56.0, 2536.0], [56.1, 2537.0], [56.2, 2557.0], [56.3, 2600.0], [56.4, 2619.0], [56.5, 2619.0], [56.6, 2626.0], [56.7, 2634.0], [56.8, 2646.0], [56.9, 2673.0], [57.0, 2721.0], [57.1, 2721.0], [57.2, 2766.0], [57.3, 2777.0], [57.4, 2814.0], [57.5, 2851.0], [57.6, 2882.0], [57.7, 2882.0], [57.8, 2947.0], [57.9, 2982.0], [58.0, 2986.0], [58.1, 2998.0], [58.2, 3024.0], [58.3, 3043.0], [58.4, 3043.0], [58.5, 3159.0], [58.6, 3169.0], [58.7, 3180.0], [58.8, 3189.0], [58.9, 3191.0], [59.0, 3191.0], [59.1, 3203.0], [59.2, 3238.0], [59.3, 3249.0], [59.4, 3344.0], [59.5, 3374.0], [59.6, 3375.0], [59.7, 3375.0], [59.8, 3523.0], [59.9, 3543.0], [60.0, 3571.0], [60.1, 3673.0], [60.2, 3736.0], [60.3, 3736.0], [60.4, 3775.0], [60.5, 3800.0], [60.6, 3874.0], [60.7, 3921.0], [60.8, 3934.0], [60.9, 3934.0], [61.0, 4044.0], [61.1, 4057.0], [61.2, 4087.0], [61.3, 4116.0], [61.4, 4162.0], [61.5, 4196.0], [61.6, 4196.0], [61.7, 4252.0], [61.8, 4274.0], [61.9, 4315.0], [62.0, 4357.0], [62.1, 4385.0], [62.2, 4385.0], [62.3, 4406.0], [62.4, 4411.0], [62.5, 4467.0], [62.6, 4500.0], [62.7, 4510.0], [62.8, 4562.0], [62.9, 4562.0], [63.0, 4630.0], [63.1, 4633.0], [63.2, 4636.0], [63.3, 4648.0], [63.4, 4660.0], [63.5, 4660.0], [63.6, 4662.0], [63.7, 4739.0], [63.8, 4853.0], [63.9, 4857.0], [64.0, 4871.0], [64.1, 4872.0], [64.2, 4872.0], [64.3, 4921.0], [64.4, 4937.0], [64.5, 4957.0], [64.6, 5004.0], [64.7, 5055.0], [64.8, 5055.0], [64.9, 5070.0], [65.0, 5074.0], [65.1, 5117.0], [65.2, 5146.0], [65.3, 5156.0], [65.4, 5156.0], [65.5, 5217.0], [65.6, 5295.0], [65.7, 5333.0], [65.8, 5350.0], [65.9, 5386.0], [66.0, 5482.0], [66.1, 5482.0], [66.2, 5531.0], [66.3, 5537.0], [66.4, 5626.0], [66.5, 5676.0], [66.6, 5709.0], [66.7, 5709.0], [66.8, 5723.0], [66.9, 5730.0], [67.0, 5764.0], [67.1, 5806.0], [67.2, 5832.0], [67.3, 5998.0], [67.4, 5998.0], [67.5, 6018.0], [67.6, 6058.0], [67.7, 6085.0], [67.8, 6105.0], [67.9, 6128.0], [68.0, 6128.0], [68.1, 6131.0], [68.2, 6164.0], [68.3, 6170.0], [68.4, 6274.0], [68.5, 6335.0], [68.6, 6335.0], [68.7, 6373.0], [68.8, 6389.0], [68.9, 6448.0], [69.0, 6475.0], [69.1, 6499.0], [69.2, 6505.0], [69.3, 6505.0], [69.4, 6609.0], [69.5, 6679.0], [69.6, 6744.0], [69.7, 6776.0], [69.8, 6776.0], [69.9, 6776.0], [70.0, 6795.0], [70.1, 6862.0], [70.2, 6898.0], [70.3, 6915.0], [70.4, 7000.0], [70.5, 7001.0], [70.6, 7001.0], [70.7, 7046.0], [70.8, 7052.0], [70.9, 7111.0], [71.0, 7181.0], [71.1, 7209.0], [71.2, 7209.0], [71.3, 7223.0], [71.4, 7233.0], [71.5, 7240.0], [71.6, 7266.0], [71.7, 7307.0], [71.8, 7307.0], [71.9, 7348.0], [72.0, 7394.0], [72.1, 7441.0], [72.2, 7521.0], [72.3, 7585.0], [72.4, 7761.0], [72.5, 7761.0], [72.6, 7878.0], [72.7, 7882.0], [72.8, 8041.0], [72.9, 8044.0], [73.0, 8061.0], [73.1, 8061.0], [73.2, 8109.0], [73.3, 8131.0], [73.4, 8216.0], [73.5, 8258.0], [73.6, 8371.0], [73.7, 8417.0], [73.8, 8417.0], [73.9, 8449.0], [74.0, 8495.0], [74.1, 8542.0], [74.2, 8548.0], [74.3, 8584.0], [74.4, 8584.0], [74.5, 8593.0], [74.6, 8667.0], [74.7, 8762.0], [74.8, 8782.0], [74.9, 8811.0], [75.0, 8811.0], [75.1, 8838.0], [75.2, 9002.0], [75.3, 9007.0], [75.4, 9103.0], [75.5, 9257.0], [75.6, 9282.0], [75.7, 9282.0], [75.8, 9289.0], [75.9, 9391.0], [76.0, 9445.0], [76.1, 9458.0], [76.2, 9460.0], [76.3, 9460.0], [76.4, 9497.0], [76.5, 9518.0], [76.6, 9518.0], [76.7, 9534.0], [76.8, 9560.0], [76.9, 9731.0], [77.0, 9731.0], [77.1, 9890.0], [77.2, 9914.0], [77.3, 9939.0], [77.4, 9959.0], [77.5, 9979.0], [77.6, 9979.0], [77.7, 10005.0], [77.8, 10031.0], [77.9, 10051.0], [78.0, 10103.0], [78.1, 10235.0], [78.2, 10347.0], [78.3, 10347.0], [78.4, 10391.0], [78.5, 10448.0], [78.6, 10590.0], [78.7, 10601.0], [78.8, 10670.0], [78.9, 10670.0], [79.0, 10734.0], [79.1, 10809.0], [79.2, 10874.0], [79.3, 10923.0], [79.4, 10938.0], [79.5, 10938.0], [79.6, 10957.0], [79.7, 11075.0], [79.8, 11087.0], [79.9, 11157.0], [80.0, 11284.0], [80.1, 11287.0], [80.2, 11287.0], [80.3, 11292.0], [80.4, 11383.0], [80.5, 11416.0], [80.6, 11421.0], [80.7, 11431.0], [80.8, 11431.0], [80.9, 11501.0], [81.0, 11514.0], [81.1, 11535.0], [81.2, 11804.0], [81.3, 11903.0], [81.4, 11922.0], [81.5, 11922.0], [81.6, 11943.0], [81.7, 12026.0], [81.8, 12077.0], [81.9, 12085.0], [82.0, 12096.0], [82.1, 12096.0], [82.2, 12114.0], [82.3, 12348.0], [82.4, 12358.0], [82.5, 12374.0], [82.6, 12400.0], [82.7, 12400.0], [82.8, 12481.0], [82.9, 12530.0], [83.0, 12634.0], [83.1, 12697.0], [83.2, 12730.0], [83.3, 12902.0], [83.4, 12902.0], [83.5, 12970.0], [83.6, 13220.0], [83.7, 13236.0], [83.8, 13347.0], [83.9, 13358.0], [84.0, 13358.0], [84.1, 13428.0], [84.2, 13478.0], [84.3, 13538.0], [84.4, 13602.0], [84.5, 13672.0], [84.6, 13749.0], [84.7, 13749.0], [84.8, 13773.0], [84.9, 13777.0], [85.0, 13798.0], [85.1, 13890.0], [85.2, 13891.0], [85.3, 13891.0], [85.4, 13972.0], [85.5, 14024.0], [85.6, 14070.0], [85.7, 14085.0], [85.8, 14166.0], [85.9, 14166.0], [86.0, 14333.0], [86.1, 14402.0], [86.2, 14495.0], [86.3, 14615.0], [86.4, 14640.0], [86.5, 14693.0], [86.6, 14693.0], [86.7, 14722.0], [86.8, 14850.0], [86.9, 14925.0], [87.0, 14967.0], [87.1, 15073.0], [87.2, 15073.0], [87.3, 15078.0], [87.4, 15276.0], [87.5, 15376.0], [87.6, 15466.0], [87.7, 15479.0], [87.8, 15517.0], [87.9, 15517.0], [88.0, 15527.0], [88.1, 15554.0], [88.2, 15637.0], [88.3, 15750.0], [88.4, 16027.0], [88.5, 16027.0], [88.6, 16270.0], [88.7, 16457.0], [88.8, 16680.0], [88.9, 16692.0], [89.0, 16696.0], [89.1, 16746.0], [89.2, 16746.0], [89.3, 16786.0], [89.4, 16835.0], [89.5, 16887.0], [89.6, 16892.0], [89.7, 17298.0], [89.8, 17298.0], [89.9, 17354.0], [90.0, 17362.0], [90.1, 17374.0], [90.2, 17511.0], [90.3, 17625.0], [90.4, 17625.0], [90.5, 17646.0], [90.6, 17702.0], [90.7, 17785.0], [90.8, 17952.0], [90.9, 18061.0], [91.0, 18068.0], [91.1, 18068.0], [91.2, 18178.0], [91.3, 18251.0], [91.4, 18375.0], [91.5, 18391.0], [91.6, 18515.0], [91.7, 18515.0], [91.8, 18584.0], [91.9, 18639.0], [92.0, 18753.0], [92.1, 19048.0], [92.2, 19188.0], [92.3, 19202.0], [92.4, 19202.0], [92.5, 19496.0], [92.6, 19732.0], [92.7, 19751.0], [92.8, 19770.0], [92.9, 19801.0], [93.0, 19801.0], [93.1, 19806.0], [93.2, 19813.0], [93.3, 20002.0], [93.4, 20140.0], [93.5, 20166.0], [93.6, 20166.0], [93.7, 20625.0], [93.8, 20641.0], [93.9, 20890.0], [94.0, 20944.0], [94.1, 21043.0], [94.2, 21171.0], [94.3, 21171.0], [94.4, 21281.0], [94.5, 21371.0], [94.6, 21423.0], [94.7, 21440.0], [94.8, 21528.0], [94.9, 21528.0], [95.0, 21595.0], [95.1, 21646.0], [95.2, 21791.0], [95.3, 21844.0], [95.4, 22061.0], [95.5, 22234.0], [95.6, 22234.0], [95.7, 22346.0], [95.8, 22410.0], [95.9, 22458.0], [96.0, 22500.0], [96.1, 22646.0], [96.2, 22646.0], [96.3, 22712.0], [96.4, 22803.0], [96.5, 22901.0], [96.6, 23136.0], [96.7, 23440.0], [96.8, 23440.0], [96.9, 23633.0], [97.0, 23659.0], [97.1, 23958.0], [97.2, 23994.0], [97.3, 24084.0], [97.4, 24215.0], [97.5, 24215.0], [97.6, 24560.0], [97.7, 24811.0], [97.8, 24895.0], [97.9, 24937.0], [98.0, 25079.0], [98.1, 25079.0], [98.2, 25337.0], [98.3, 25779.0], [98.4, 26131.0], [98.5, 26164.0], [98.6, 26234.0], [98.7, 26661.0], [98.8, 26661.0], [98.9, 26826.0], [99.0, 27295.0], [99.1, 27349.0], [99.2, 27652.0], [99.3, 28309.0], [99.4, 28309.0], [99.5, 28948.0], [99.6, 29375.0], [99.7, 29787.0], [99.8, 30126.0], [99.9, 31201.0], [100.0, 31201.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 402.0, "series": [{"data": [[0.0, 402.0], [600.0, 2.0], [800.0, 3.0], [900.0, 2.0], [1000.0, 6.0], [1100.0, 5.0], [1200.0, 6.0], [1300.0, 8.0], [1400.0, 3.0], [1500.0, 7.0], [1600.0, 3.0], [1700.0, 2.0], [1800.0, 2.0], [1900.0, 3.0], [2000.0, 2.0], [2100.0, 2.0], [2300.0, 2.0], [2200.0, 3.0], [2400.0, 6.0], [2500.0, 6.0], [2600.0, 6.0], [2700.0, 3.0], [2800.0, 3.0], [2900.0, 4.0], [3000.0, 2.0], [3100.0, 5.0], [3200.0, 3.0], [3300.0, 3.0], [3500.0, 3.0], [3700.0, 2.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 3.0], [4100.0, 3.0], [4300.0, 3.0], [4200.0, 2.0], [4600.0, 6.0], [4400.0, 3.0], [4500.0, 3.0], [4800.0, 4.0], [4700.0, 1.0], [5000.0, 4.0], [5100.0, 3.0], [4900.0, 3.0], [5300.0, 3.0], [5200.0, 2.0], [5600.0, 2.0], [5500.0, 2.0], [5400.0, 1.0], [5700.0, 4.0], [5800.0, 2.0], [5900.0, 1.0], [6100.0, 5.0], [6000.0, 3.0], [6300.0, 3.0], [6200.0, 1.0], [6400.0, 3.0], [6500.0, 1.0], [6600.0, 2.0], [6900.0, 1.0], [6700.0, 4.0], [6800.0, 2.0], [7100.0, 2.0], [7000.0, 4.0], [7200.0, 5.0], [7300.0, 3.0], [7400.0, 1.0], [7500.0, 2.0], [7800.0, 2.0], [7700.0, 1.0], [8000.0, 3.0], [8100.0, 2.0], [8700.0, 2.0], [8600.0, 1.0], [8200.0, 2.0], [8400.0, 3.0], [8500.0, 4.0], [8300.0, 1.0], [9200.0, 3.0], [9000.0, 2.0], [8800.0, 2.0], [9100.0, 1.0], [9500.0, 4.0], [9700.0, 1.0], [9400.0, 4.0], [9300.0, 1.0], [10200.0, 1.0], [9900.0, 4.0], [10100.0, 1.0], [10000.0, 3.0], [9800.0, 1.0], [10600.0, 2.0], [10500.0, 1.0], [10300.0, 2.0], [10700.0, 1.0], [10400.0, 1.0], [10800.0, 2.0], [11200.0, 3.0], [10900.0, 3.0], [11100.0, 1.0], [11000.0, 2.0], [11400.0, 3.0], [11500.0, 3.0], [11300.0, 1.0], [11900.0, 3.0], [12000.0, 4.0], [12100.0, 1.0], [11800.0, 1.0], [12400.0, 2.0], [12300.0, 3.0], [12600.0, 2.0], [12500.0, 1.0], [12700.0, 1.0], [13200.0, 2.0], [12900.0, 2.0], [13300.0, 2.0], [13400.0, 2.0], [13700.0, 4.0], [13600.0, 2.0], [13800.0, 2.0], [13500.0, 1.0], [13900.0, 1.0], [14000.0, 3.0], [14100.0, 1.0], [14300.0, 1.0], [14400.0, 2.0], [14700.0, 1.0], [14600.0, 3.0], [14800.0, 1.0], [14900.0, 2.0], [15000.0, 2.0], [15300.0, 1.0], [15200.0, 1.0], [15400.0, 2.0], [15500.0, 3.0], [15700.0, 1.0], [15600.0, 1.0], [16000.0, 1.0], [16200.0, 1.0], [16800.0, 3.0], [16600.0, 3.0], [17200.0, 1.0], [16400.0, 1.0], [17600.0, 2.0], [18000.0, 2.0], [18200.0, 1.0], [18600.0, 1.0], [19200.0, 1.0], [19400.0, 1.0], [19000.0, 1.0], [19800.0, 3.0], [20000.0, 1.0], [21000.0, 1.0], [20800.0, 1.0], [21200.0, 1.0], [20600.0, 2.0], [21400.0, 2.0], [22400.0, 2.0], [21800.0, 1.0], [22000.0, 1.0], [21600.0, 1.0], [22200.0, 1.0], [22800.0, 1.0], [22600.0, 1.0], [23400.0, 1.0], [24200.0, 1.0], [24000.0, 1.0], [23600.0, 2.0], [25000.0, 1.0], [24800.0, 2.0], [26200.0, 1.0], [26600.0, 1.0], [26800.0, 1.0], [27200.0, 1.0], [27600.0, 1.0], [31200.0, 1.0], [16700.0, 2.0], [17300.0, 3.0], [17900.0, 1.0], [17700.0, 2.0], [18300.0, 2.0], [17500.0, 1.0], [18100.0, 1.0], [19100.0, 1.0], [18700.0, 1.0], [18500.0, 2.0], [20100.0, 2.0], [19700.0, 3.0], [21500.0, 2.0], [20900.0, 1.0], [21300.0, 1.0], [21100.0, 1.0], [22500.0, 1.0], [21700.0, 1.0], [22300.0, 1.0], [22700.0, 1.0], [22900.0, 1.0], [23100.0, 1.0], [23900.0, 2.0], [24500.0, 1.0], [24900.0, 1.0], [25300.0, 1.0], [26100.0, 2.0], [25700.0, 1.0], [27300.0, 1.0], [28300.0, 1.0], [29300.0, 1.0], [28900.0, 1.0], [30100.0, 1.0], [29700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 31200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 35.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 407.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 35.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 407.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 402.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 14.496453900709222, "minX": 1.65124548E12, "maxY": 36.333333333333336, "series": [{"data": [[1.65124548E12, 14.496453900709222], [1.6512456E12, 36.333333333333336], [1.65124554E12, 35.43529411764705]], "isOverall": false, "label": "jp@gc - Stepping Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512456E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1787.5652173913038, "minX": 1.0, "maxY": 26661.0, "series": [{"data": [[32.0, 7829.6], [33.0, 14538.0], [2.0, 25337.0], [34.0, 8174.200000000001], [35.0, 8661.857142857143], [36.0, 5567.6], [37.0, 4011.6], [38.0, 7008.6], [39.0, 5496.428571428572], [40.0, 6678.37037037037], [3.0, 5121.4], [4.0, 7729.0], [5.0, 7350.0], [6.0, 4276.2], [7.0, 6483.333333333333], [8.0, 3506.4], [9.0, 4013.8], [10.0, 1787.5652173913038], [11.0, 5236.0], [12.0, 2902.4], [13.0, 5873.0], [14.0, 9679.0], [15.0, 3789.8], [16.0, 10292.0], [1.0, 26661.0], [17.0, 2715.8], [18.0, 8120.333333333333], [19.0, 2939.6000000000004], [20.0, 3409.5309734513276], [21.0, 3065.0], [22.0, 5419.2], [23.0, 12142.666666666666], [24.0, 6078.4], [25.0, 12220.0], [26.0, 6544.2], [27.0, 12807.333333333332], [28.0, 7937.0], [29.0, 10009.6], [30.0, 4349.4958677685945], [31.0, 24895.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[28.67535545023698, 5281.048578199054]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 539.8333333333334, "minX": 1.65124548E12, "maxY": 881.1666666666666, "series": [{"data": [[1.65124548E12, 653.3833333333333], [1.6512456E12, 539.8333333333334], [1.65124554E12, 789.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65124548E12, 730.85], [1.6512456E12, 575.0166666666667], [1.65124554E12, 881.1666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512456E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2242.390070921987, "minX": 1.65124548E12, "maxY": 9013.121621621622, "series": [{"data": [[1.65124548E12, 2242.390070921987], [1.6512456E12, 9013.121621621622], [1.65124554E12, 5364.523529411764]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512456E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2242.354609929076, "minX": 1.65124548E12, "maxY": 9013.10810810811, "series": [{"data": [[1.65124548E12, 2242.354609929076], [1.6512456E12, 9013.10810810811], [1.65124554E12, 5364.494117647056]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512456E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 7.723529411764703, "minX": 1.65124548E12, "maxY": 10.978723404255316, "series": [{"data": [[1.65124548E12, 10.978723404255316], [1.6512456E12, 8.094594594594593], [1.65124554E12, 7.723529411764703]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512456E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 610.0, "minX": 1.65124548E12, "maxY": 31201.0, "series": [{"data": [[1.65124548E12, 14925.0], [1.6512456E12, 31201.0], [1.65124554E12, 26826.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65124548E12, 9478.599999999999], [1.6512456E12, 25257.0], [1.65124554E12, 20130.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65124548E12, 14215.62000000002], [1.6512456E12, 30857.000000000007], [1.65124554E12, 26332.549999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65124548E12, 11249.400000000001], [1.6512456E12, 27914.799999999996], [1.65124554E12, 22595.399999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65124548E12, 610.0], [1.6512456E12, 940.0], [1.65124554E12, 852.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65124548E12, 3800.0], [1.6512456E12, 15276.0], [1.65124554E12, 9936.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512456E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7.0, "minX": 1.0, "maxY": 25337.0, "series": [{"data": [[2.0, 17362.0], [4.0, 7521.0], [8.0, 5743.5], [1.0, 25337.0], [5.0, 3447.5], [6.0, 8472.0], [3.0, 16270.0], [7.0, 2459.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 27.0], [4.0, 9.0], [8.0, 9.5], [5.0, 10.0], [6.0, 10.0], [3.0, 7.0], [7.0, 10.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 7.0, "minX": 1.0, "maxY": 25337.0, "series": [{"data": [[2.0, 17362.0], [4.0, 7521.0], [8.0, 5743.0], [1.0, 25337.0], [5.0, 3447.5], [6.0, 8472.0], [3.0, 16270.0], [7.0, 2459.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 27.0], [4.0, 9.0], [8.0, 9.5], [5.0, 10.0], [6.0, 10.0], [3.0, 7.0], [7.0, 10.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.033333333333333, "minX": 1.65124548E12, "maxY": 5.95, "series": [{"data": [[1.65124548E12, 5.083333333333333], [1.6512456E12, 3.033333333333333], [1.65124554E12, 5.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512456E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.65124548E12, "maxY": 2.8333333333333335, "series": [{"data": [[1.65124548E12, 2.35], [1.6512456E12, 2.183333333333333], [1.65124554E12, 2.8333333333333335]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.65124548E12, 2.35], [1.6512456E12, 1.5166666666666666], [1.65124554E12, 2.8333333333333335]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512456E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.65124548E12, "maxY": 2.8333333333333335, "series": [{"data": [[1.65124548E12, 2.35], [1.6512456E12, 2.183333333333333], [1.65124554E12, 2.8333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.65124548E12, 2.35], [1.6512456E12, 1.5166666666666666], [1.65124554E12, 2.8333333333333335]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512456E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.65124548E12, "maxY": 2.8333333333333335, "series": [{"data": [[1.65124548E12, 2.35], [1.6512456E12, 2.183333333333333], [1.65124554E12, 2.8333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65124548E12, 2.35], [1.6512456E12, 1.5166666666666666], [1.65124554E12, 2.8333333333333335]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512456E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

