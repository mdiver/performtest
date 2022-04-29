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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 1086.0, "series": [{"data": [[0.0, 9.0], [0.1, 15.0], [0.2, 17.0], [0.3, 19.0], [0.4, 20.0], [0.5, 21.0], [0.6, 22.0], [0.7, 23.0], [0.8, 23.0], [0.9, 24.0], [1.0, 25.0], [1.1, 25.0], [1.2, 26.0], [1.3, 27.0], [1.4, 27.0], [1.5, 28.0], [1.6, 28.0], [1.7, 29.0], [1.8, 29.0], [1.9, 29.0], [2.0, 30.0], [2.1, 30.0], [2.2, 31.0], [2.3, 31.0], [2.4, 32.0], [2.5, 32.0], [2.6, 32.0], [2.7, 33.0], [2.8, 33.0], [2.9, 34.0], [3.0, 34.0], [3.1, 34.0], [3.2, 35.0], [3.3, 35.0], [3.4, 35.0], [3.5, 36.0], [3.6, 36.0], [3.7, 37.0], [3.8, 37.0], [3.9, 37.0], [4.0, 38.0], [4.1, 38.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 41.0], [4.9, 41.0], [5.0, 41.0], [5.1, 42.0], [5.2, 42.0], [5.3, 42.0], [5.4, 43.0], [5.5, 43.0], [5.6, 43.0], [5.7, 44.0], [5.8, 44.0], [5.9, 44.0], [6.0, 45.0], [6.1, 45.0], [6.2, 46.0], [6.3, 46.0], [6.4, 46.0], [6.5, 46.0], [6.6, 47.0], [6.7, 47.0], [6.8, 47.0], [6.9, 48.0], [7.0, 48.0], [7.1, 48.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 50.0], [7.6, 50.0], [7.7, 50.0], [7.8, 50.0], [7.9, 51.0], [8.0, 51.0], [8.1, 51.0], [8.2, 52.0], [8.3, 52.0], [8.4, 52.0], [8.5, 53.0], [8.6, 53.0], [8.7, 53.0], [8.8, 53.0], [8.9, 54.0], [9.0, 54.0], [9.1, 54.0], [9.2, 55.0], [9.3, 55.0], [9.4, 55.0], [9.5, 56.0], [9.6, 56.0], [9.7, 56.0], [9.8, 57.0], [9.9, 57.0], [10.0, 57.0], [10.1, 58.0], [10.2, 58.0], [10.3, 58.0], [10.4, 59.0], [10.5, 59.0], [10.6, 59.0], [10.7, 60.0], [10.8, 60.0], [10.9, 60.0], [11.0, 61.0], [11.1, 61.0], [11.2, 61.0], [11.3, 62.0], [11.4, 62.0], [11.5, 62.0], [11.6, 63.0], [11.7, 63.0], [11.8, 63.0], [11.9, 64.0], [12.0, 64.0], [12.1, 64.0], [12.2, 65.0], [12.3, 65.0], [12.4, 66.0], [12.5, 66.0], [12.6, 66.0], [12.7, 67.0], [12.8, 67.0], [12.9, 67.0], [13.0, 68.0], [13.1, 68.0], [13.2, 68.0], [13.3, 69.0], [13.4, 69.0], [13.5, 70.0], [13.6, 70.0], [13.7, 70.0], [13.8, 71.0], [13.9, 71.0], [14.0, 71.0], [14.1, 72.0], [14.2, 72.0], [14.3, 72.0], [14.4, 73.0], [14.5, 73.0], [14.6, 73.0], [14.7, 74.0], [14.8, 74.0], [14.9, 74.0], [15.0, 75.0], [15.1, 75.0], [15.2, 75.0], [15.3, 76.0], [15.4, 76.0], [15.5, 76.0], [15.6, 77.0], [15.7, 77.0], [15.8, 77.0], [15.9, 78.0], [16.0, 78.0], [16.1, 78.0], [16.2, 78.0], [16.3, 79.0], [16.4, 79.0], [16.5, 79.0], [16.6, 80.0], [16.7, 80.0], [16.8, 80.0], [16.9, 80.0], [17.0, 81.0], [17.1, 81.0], [17.2, 81.0], [17.3, 82.0], [17.4, 82.0], [17.5, 82.0], [17.6, 83.0], [17.7, 83.0], [17.8, 83.0], [17.9, 83.0], [18.0, 84.0], [18.1, 84.0], [18.2, 84.0], [18.3, 85.0], [18.4, 85.0], [18.5, 85.0], [18.6, 86.0], [18.7, 86.0], [18.8, 86.0], [18.9, 87.0], [19.0, 87.0], [19.1, 87.0], [19.2, 88.0], [19.3, 88.0], [19.4, 88.0], [19.5, 89.0], [19.6, 89.0], [19.7, 89.0], [19.8, 90.0], [19.9, 90.0], [20.0, 90.0], [20.1, 90.0], [20.2, 91.0], [20.3, 91.0], [20.4, 91.0], [20.5, 92.0], [20.6, 92.0], [20.7, 92.0], [20.8, 93.0], [20.9, 93.0], [21.0, 93.0], [21.1, 94.0], [21.2, 94.0], [21.3, 94.0], [21.4, 95.0], [21.5, 95.0], [21.6, 95.0], [21.7, 96.0], [21.8, 96.0], [21.9, 96.0], [22.0, 97.0], [22.1, 97.0], [22.2, 98.0], [22.3, 98.0], [22.4, 98.0], [22.5, 99.0], [22.6, 99.0], [22.7, 99.0], [22.8, 100.0], [22.9, 100.0], [23.0, 100.0], [23.1, 101.0], [23.2, 101.0], [23.3, 101.0], [23.4, 102.0], [23.5, 102.0], [23.6, 102.0], [23.7, 102.0], [23.8, 103.0], [23.9, 103.0], [24.0, 104.0], [24.1, 104.0], [24.2, 104.0], [24.3, 104.0], [24.4, 105.0], [24.5, 105.0], [24.6, 105.0], [24.7, 106.0], [24.8, 106.0], [24.9, 106.0], [25.0, 106.0], [25.1, 107.0], [25.2, 107.0], [25.3, 107.0], [25.4, 107.0], [25.5, 108.0], [25.6, 108.0], [25.7, 108.0], [25.8, 109.0], [25.9, 109.0], [26.0, 109.0], [26.1, 109.0], [26.2, 110.0], [26.3, 110.0], [26.4, 110.0], [26.5, 110.0], [26.6, 111.0], [26.7, 111.0], [26.8, 111.0], [26.9, 111.0], [27.0, 112.0], [27.1, 112.0], [27.2, 112.0], [27.3, 113.0], [27.4, 113.0], [27.5, 113.0], [27.6, 113.0], [27.7, 114.0], [27.8, 114.0], [27.9, 114.0], [28.0, 115.0], [28.1, 115.0], [28.2, 115.0], [28.3, 116.0], [28.4, 116.0], [28.5, 116.0], [28.6, 116.0], [28.7, 117.0], [28.8, 117.0], [28.9, 117.0], [29.0, 118.0], [29.1, 118.0], [29.2, 118.0], [29.3, 119.0], [29.4, 119.0], [29.5, 119.0], [29.6, 120.0], [29.7, 120.0], [29.8, 120.0], [29.9, 121.0], [30.0, 121.0], [30.1, 121.0], [30.2, 122.0], [30.3, 122.0], [30.4, 122.0], [30.5, 123.0], [30.6, 123.0], [30.7, 123.0], [30.8, 124.0], [30.9, 124.0], [31.0, 124.0], [31.1, 125.0], [31.2, 125.0], [31.3, 126.0], [31.4, 126.0], [31.5, 126.0], [31.6, 127.0], [31.7, 127.0], [31.8, 128.0], [31.9, 128.0], [32.0, 128.0], [32.1, 129.0], [32.2, 129.0], [32.3, 129.0], [32.4, 130.0], [32.5, 130.0], [32.6, 130.0], [32.7, 131.0], [32.8, 131.0], [32.9, 131.0], [33.0, 132.0], [33.1, 132.0], [33.2, 132.0], [33.3, 133.0], [33.4, 133.0], [33.5, 133.0], [33.6, 134.0], [33.7, 134.0], [33.8, 134.0], [33.9, 135.0], [34.0, 135.0], [34.1, 135.0], [34.2, 135.0], [34.3, 136.0], [34.4, 136.0], [34.5, 136.0], [34.6, 136.0], [34.7, 137.0], [34.8, 137.0], [34.9, 137.0], [35.0, 138.0], [35.1, 138.0], [35.2, 138.0], [35.3, 138.0], [35.4, 139.0], [35.5, 139.0], [35.6, 139.0], [35.7, 140.0], [35.8, 140.0], [35.9, 140.0], [36.0, 140.0], [36.1, 141.0], [36.2, 141.0], [36.3, 141.0], [36.4, 142.0], [36.5, 142.0], [36.6, 142.0], [36.7, 142.0], [36.8, 143.0], [36.9, 143.0], [37.0, 143.0], [37.1, 144.0], [37.2, 144.0], [37.3, 144.0], [37.4, 144.0], [37.5, 145.0], [37.6, 145.0], [37.7, 145.0], [37.8, 146.0], [37.9, 146.0], [38.0, 146.0], [38.1, 147.0], [38.2, 147.0], [38.3, 147.0], [38.4, 148.0], [38.5, 148.0], [38.6, 148.0], [38.7, 149.0], [38.8, 149.0], [38.9, 149.0], [39.0, 150.0], [39.1, 150.0], [39.2, 150.0], [39.3, 151.0], [39.4, 151.0], [39.5, 152.0], [39.6, 152.0], [39.7, 152.0], [39.8, 153.0], [39.9, 153.0], [40.0, 153.0], [40.1, 154.0], [40.2, 154.0], [40.3, 154.0], [40.4, 155.0], [40.5, 155.0], [40.6, 156.0], [40.7, 156.0], [40.8, 156.0], [40.9, 157.0], [41.0, 157.0], [41.1, 157.0], [41.2, 158.0], [41.3, 158.0], [41.4, 158.0], [41.5, 158.0], [41.6, 159.0], [41.7, 159.0], [41.8, 159.0], [41.9, 160.0], [42.0, 160.0], [42.1, 160.0], [42.2, 161.0], [42.3, 161.0], [42.4, 161.0], [42.5, 162.0], [42.6, 162.0], [42.7, 162.0], [42.8, 162.0], [42.9, 163.0], [43.0, 163.0], [43.1, 163.0], [43.2, 164.0], [43.3, 164.0], [43.4, 164.0], [43.5, 165.0], [43.6, 165.0], [43.7, 165.0], [43.8, 165.0], [43.9, 166.0], [44.0, 166.0], [44.1, 166.0], [44.2, 166.0], [44.3, 167.0], [44.4, 167.0], [44.5, 167.0], [44.6, 168.0], [44.7, 168.0], [44.8, 168.0], [44.9, 168.0], [45.0, 169.0], [45.1, 169.0], [45.2, 169.0], [45.3, 169.0], [45.4, 170.0], [45.5, 170.0], [45.6, 170.0], [45.7, 171.0], [45.8, 171.0], [45.9, 171.0], [46.0, 171.0], [46.1, 172.0], [46.2, 172.0], [46.3, 172.0], [46.4, 172.0], [46.5, 173.0], [46.6, 173.0], [46.7, 173.0], [46.8, 173.0], [46.9, 174.0], [47.0, 174.0], [47.1, 174.0], [47.2, 175.0], [47.3, 175.0], [47.4, 175.0], [47.5, 176.0], [47.6, 176.0], [47.7, 176.0], [47.8, 176.0], [47.9, 177.0], [48.0, 177.0], [48.1, 177.0], [48.2, 177.0], [48.3, 178.0], [48.4, 178.0], [48.5, 178.0], [48.6, 179.0], [48.7, 179.0], [48.8, 179.0], [48.9, 180.0], [49.0, 180.0], [49.1, 180.0], [49.2, 181.0], [49.3, 181.0], [49.4, 181.0], [49.5, 182.0], [49.6, 182.0], [49.7, 182.0], [49.8, 183.0], [49.9, 183.0], [50.0, 183.0], [50.1, 184.0], [50.2, 184.0], [50.3, 184.0], [50.4, 185.0], [50.5, 185.0], [50.6, 185.0], [50.7, 186.0], [50.8, 186.0], [50.9, 186.0], [51.0, 187.0], [51.1, 187.0], [51.2, 187.0], [51.3, 188.0], [51.4, 188.0], [51.5, 188.0], [51.6, 189.0], [51.7, 189.0], [51.8, 190.0], [51.9, 190.0], [52.0, 190.0], [52.1, 190.0], [52.2, 191.0], [52.3, 191.0], [52.4, 191.0], [52.5, 192.0], [52.6, 192.0], [52.7, 192.0], [52.8, 193.0], [52.9, 193.0], [53.0, 193.0], [53.1, 194.0], [53.2, 194.0], [53.3, 194.0], [53.4, 195.0], [53.5, 195.0], [53.6, 195.0], [53.7, 196.0], [53.8, 196.0], [53.9, 196.0], [54.0, 197.0], [54.1, 197.0], [54.2, 197.0], [54.3, 198.0], [54.4, 198.0], [54.5, 198.0], [54.6, 198.0], [54.7, 199.0], [54.8, 199.0], [54.9, 199.0], [55.0, 200.0], [55.1, 200.0], [55.2, 200.0], [55.3, 200.0], [55.4, 201.0], [55.5, 201.0], [55.6, 201.0], [55.7, 201.0], [55.8, 202.0], [55.9, 202.0], [56.0, 202.0], [56.1, 203.0], [56.2, 203.0], [56.3, 203.0], [56.4, 203.0], [56.5, 204.0], [56.6, 204.0], [56.7, 204.0], [56.8, 205.0], [56.9, 205.0], [57.0, 205.0], [57.1, 205.0], [57.2, 206.0], [57.3, 206.0], [57.4, 206.0], [57.5, 207.0], [57.6, 207.0], [57.7, 207.0], [57.8, 208.0], [57.9, 208.0], [58.0, 208.0], [58.1, 208.0], [58.2, 209.0], [58.3, 209.0], [58.4, 209.0], [58.5, 210.0], [58.6, 210.0], [58.7, 210.0], [58.8, 211.0], [58.9, 211.0], [59.0, 211.0], [59.1, 212.0], [59.2, 212.0], [59.3, 212.0], [59.4, 213.0], [59.5, 213.0], [59.6, 213.0], [59.7, 214.0], [59.8, 214.0], [59.9, 214.0], [60.0, 215.0], [60.1, 215.0], [60.2, 215.0], [60.3, 216.0], [60.4, 216.0], [60.5, 216.0], [60.6, 217.0], [60.7, 217.0], [60.8, 217.0], [60.9, 218.0], [61.0, 218.0], [61.1, 218.0], [61.2, 219.0], [61.3, 219.0], [61.4, 219.0], [61.5, 220.0], [61.6, 220.0], [61.7, 221.0], [61.8, 221.0], [61.9, 221.0], [62.0, 222.0], [62.1, 222.0], [62.2, 222.0], [62.3, 223.0], [62.4, 223.0], [62.5, 223.0], [62.6, 224.0], [62.7, 224.0], [62.8, 224.0], [62.9, 225.0], [63.0, 225.0], [63.1, 225.0], [63.2, 226.0], [63.3, 226.0], [63.4, 226.0], [63.5, 227.0], [63.6, 227.0], [63.7, 227.0], [63.8, 228.0], [63.9, 228.0], [64.0, 228.0], [64.1, 229.0], [64.2, 229.0], [64.3, 229.0], [64.4, 230.0], [64.5, 230.0], [64.6, 230.0], [64.7, 231.0], [64.8, 231.0], [64.9, 232.0], [65.0, 232.0], [65.1, 232.0], [65.2, 232.0], [65.3, 233.0], [65.4, 233.0], [65.5, 233.0], [65.6, 234.0], [65.7, 234.0], [65.8, 234.0], [65.9, 235.0], [66.0, 235.0], [66.1, 235.0], [66.2, 236.0], [66.3, 236.0], [66.4, 236.0], [66.5, 237.0], [66.6, 237.0], [66.7, 237.0], [66.8, 238.0], [66.9, 238.0], [67.0, 238.0], [67.1, 239.0], [67.2, 239.0], [67.3, 239.0], [67.4, 240.0], [67.5, 240.0], [67.6, 240.0], [67.7, 241.0], [67.8, 241.0], [67.9, 241.0], [68.0, 242.0], [68.1, 242.0], [68.2, 242.0], [68.3, 242.0], [68.4, 243.0], [68.5, 243.0], [68.6, 243.0], [68.7, 244.0], [68.8, 244.0], [68.9, 244.0], [69.0, 245.0], [69.1, 245.0], [69.2, 245.0], [69.3, 246.0], [69.4, 246.0], [69.5, 246.0], [69.6, 247.0], [69.7, 247.0], [69.8, 247.0], [69.9, 247.0], [70.0, 248.0], [70.1, 248.0], [70.2, 248.0], [70.3, 249.0], [70.4, 249.0], [70.5, 249.0], [70.6, 250.0], [70.7, 250.0], [70.8, 250.0], [70.9, 251.0], [71.0, 251.0], [71.1, 251.0], [71.2, 252.0], [71.3, 252.0], [71.4, 253.0], [71.5, 253.0], [71.6, 253.0], [71.7, 254.0], [71.8, 254.0], [71.9, 254.0], [72.0, 255.0], [72.1, 255.0], [72.2, 255.0], [72.3, 256.0], [72.4, 256.0], [72.5, 256.0], [72.6, 257.0], [72.7, 257.0], [72.8, 257.0], [72.9, 258.0], [73.0, 258.0], [73.1, 258.0], [73.2, 259.0], [73.3, 259.0], [73.4, 259.0], [73.5, 260.0], [73.6, 260.0], [73.7, 260.0], [73.8, 261.0], [73.9, 261.0], [74.0, 262.0], [74.1, 262.0], [74.2, 262.0], [74.3, 263.0], [74.4, 263.0], [74.5, 264.0], [74.6, 264.0], [74.7, 264.0], [74.8, 265.0], [74.9, 265.0], [75.0, 265.0], [75.1, 266.0], [75.2, 266.0], [75.3, 266.0], [75.4, 267.0], [75.5, 267.0], [75.6, 267.0], [75.7, 268.0], [75.8, 268.0], [75.9, 268.0], [76.0, 269.0], [76.1, 269.0], [76.2, 270.0], [76.3, 270.0], [76.4, 270.0], [76.5, 270.0], [76.6, 271.0], [76.7, 271.0], [76.8, 271.0], [76.9, 272.0], [77.0, 272.0], [77.1, 272.0], [77.2, 273.0], [77.3, 273.0], [77.4, 273.0], [77.5, 274.0], [77.6, 274.0], [77.7, 274.0], [77.8, 274.0], [77.9, 275.0], [78.0, 275.0], [78.1, 275.0], [78.2, 275.0], [78.3, 276.0], [78.4, 276.0], [78.5, 276.0], [78.6, 277.0], [78.7, 277.0], [78.8, 277.0], [78.9, 278.0], [79.0, 278.0], [79.1, 278.0], [79.2, 278.0], [79.3, 279.0], [79.4, 279.0], [79.5, 279.0], [79.6, 280.0], [79.7, 280.0], [79.8, 280.0], [79.9, 280.0], [80.0, 281.0], [80.1, 281.0], [80.2, 281.0], [80.3, 281.0], [80.4, 282.0], [80.5, 282.0], [80.6, 282.0], [80.7, 283.0], [80.8, 283.0], [80.9, 283.0], [81.0, 284.0], [81.1, 284.0], [81.2, 284.0], [81.3, 285.0], [81.4, 285.0], [81.5, 285.0], [81.6, 286.0], [81.7, 286.0], [81.8, 286.0], [81.9, 286.0], [82.0, 287.0], [82.1, 287.0], [82.2, 287.0], [82.3, 288.0], [82.4, 288.0], [82.5, 288.0], [82.6, 289.0], [82.7, 289.0], [82.8, 290.0], [82.9, 290.0], [83.0, 290.0], [83.1, 291.0], [83.2, 291.0], [83.3, 291.0], [83.4, 292.0], [83.5, 292.0], [83.6, 293.0], [83.7, 293.0], [83.8, 293.0], [83.9, 294.0], [84.0, 294.0], [84.1, 295.0], [84.2, 295.0], [84.3, 296.0], [84.4, 296.0], [84.5, 297.0], [84.6, 297.0], [84.7, 298.0], [84.8, 298.0], [84.9, 299.0], [85.0, 299.0], [85.1, 300.0], [85.2, 300.0], [85.3, 301.0], [85.4, 301.0], [85.5, 302.0], [85.6, 302.0], [85.7, 303.0], [85.8, 303.0], [85.9, 304.0], [86.0, 304.0], [86.1, 305.0], [86.2, 305.0], [86.3, 306.0], [86.4, 306.0], [86.5, 307.0], [86.6, 307.0], [86.7, 308.0], [86.8, 309.0], [86.9, 309.0], [87.0, 310.0], [87.1, 310.0], [87.2, 311.0], [87.3, 312.0], [87.4, 312.0], [87.5, 313.0], [87.6, 313.0], [87.7, 314.0], [87.8, 314.0], [87.9, 315.0], [88.0, 315.0], [88.1, 316.0], [88.2, 316.0], [88.3, 317.0], [88.4, 318.0], [88.5, 318.0], [88.6, 319.0], [88.7, 320.0], [88.8, 320.0], [88.9, 321.0], [89.0, 321.0], [89.1, 322.0], [89.2, 323.0], [89.3, 323.0], [89.4, 324.0], [89.5, 325.0], [89.6, 325.0], [89.7, 326.0], [89.8, 326.0], [89.9, 327.0], [90.0, 327.0], [90.1, 328.0], [90.2, 329.0], [90.3, 329.0], [90.4, 330.0], [90.5, 330.0], [90.6, 331.0], [90.7, 331.0], [90.8, 332.0], [90.9, 333.0], [91.0, 333.0], [91.1, 334.0], [91.2, 334.0], [91.3, 335.0], [91.4, 335.0], [91.5, 336.0], [91.6, 336.0], [91.7, 337.0], [91.8, 337.0], [91.9, 338.0], [92.0, 338.0], [92.1, 339.0], [92.2, 339.0], [92.3, 340.0], [92.4, 340.0], [92.5, 341.0], [92.6, 341.0], [92.7, 342.0], [92.8, 342.0], [92.9, 343.0], [93.0, 343.0], [93.1, 344.0], [93.2, 345.0], [93.3, 345.0], [93.4, 346.0], [93.5, 346.0], [93.6, 347.0], [93.7, 347.0], [93.8, 348.0], [93.9, 348.0], [94.0, 349.0], [94.1, 350.0], [94.2, 350.0], [94.3, 351.0], [94.4, 352.0], [94.5, 352.0], [94.6, 353.0], [94.7, 354.0], [94.8, 354.0], [94.9, 355.0], [95.0, 356.0], [95.1, 357.0], [95.2, 357.0], [95.3, 358.0], [95.4, 359.0], [95.5, 360.0], [95.6, 361.0], [95.7, 362.0], [95.8, 363.0], [95.9, 364.0], [96.0, 365.0], [96.1, 366.0], [96.2, 367.0], [96.3, 369.0], [96.4, 370.0], [96.5, 372.0], [96.6, 373.0], [96.7, 375.0], [96.8, 377.0], [96.9, 378.0], [97.0, 380.0], [97.1, 382.0], [97.2, 384.0], [97.3, 386.0], [97.4, 388.0], [97.5, 390.0], [97.6, 393.0], [97.7, 396.0], [97.8, 398.0], [97.9, 401.0], [98.0, 404.0], [98.1, 407.0], [98.2, 411.0], [98.3, 415.0], [98.4, 419.0], [98.5, 423.0], [98.6, 427.0], [98.7, 432.0], [98.8, 437.0], [98.9, 441.0], [99.0, 447.0], [99.1, 455.0], [99.2, 462.0], [99.3, 469.0], [99.4, 477.0], [99.5, 488.0], [99.6, 499.0], [99.7, 514.0], [99.8, 534.0], [99.9, 566.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 39029.0, "series": [{"data": [[0.0, 27496.0], [300.0, 15428.0], [600.0, 42.0], [400.0, 2130.0], [100.0, 39029.0], [200.0, 36408.0], [800.0, 1.0], [1000.0, 10.0], [500.0, 430.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 120974.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 120974.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 120974.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.622799964263384, "minX": 1.65121914E12, "maxY": 95.18337279663218, "series": [{"data": [[1.65121932E12, 61.205327588924405], [1.6512195E12, 81.36685288640578], [1.65121944E12, 95.18337279663218], [1.65121914E12, 12.622799964263384], [1.65121926E12, 44.37188981831726], [1.6512192E12, 26.369598116697645], [1.65121938E12, 77.8606949482205]], "isOverall": false, "label": "jp@gc - Stepping Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512195E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 15.0, "minX": 1.0, "maxY": 315.32000000000016, "series": [{"data": [[2.0, 71.11764705882354], [3.0, 51.31034482758622], [4.0, 47.54761904761905], [5.0, 20.77485380116958], [6.0, 41.129870129870135], [7.0, 38.72527472527473], [8.0, 40.77083333333332], [9.0, 51.42045454545455], [10.0, 42.58198614318703], [11.0, 52.40816326530613], [12.0, 44.856060606060595], [13.0, 53.747899159663866], [14.0, 47.321428571428584], [15.0, 51.646396396396455], [16.0, 58.31944444444445], [17.0, 61.57142857142856], [18.0, 67.48437500000003], [19.0, 65.33333333333329], [20.0, 69.6507283442677], [21.0, 73.28187919463082], [22.0, 78.75694444444441], [23.0, 79.44137931034481], [24.0, 79.42857142857147], [25.0, 80.27114967462039], [26.0, 82.70886075949369], [27.0, 84.01234567901236], [28.0, 96.05999999999999], [29.0, 90.69230769230768], [30.0, 98.41147523819492], [31.0, 102.42675159235671], [32.0, 103.54430379746836], [33.0, 113.5253164556962], [34.0, 109.35802469135803], [35.0, 108.35791757049896], [36.0, 123.4933333333334], [37.0, 114.64497041420117], [38.0, 122.0538922155689], [39.0, 126.1329113924051], [40.0, 129.07175211035653], [41.0, 131.1515151515152], [42.0, 129.9345238095238], [43.0, 139.0284090909092], [44.0, 140.8456790123457], [45.0, 141.57845433255275], [46.0, 142.51249999999987], [47.0, 145.53254437869825], [48.0, 149.07182320441987], [49.0, 162.17721518987344], [50.0, 157.60832411782366], [51.0, 167.09271523178813], [52.0, 160.75], [53.0, 171.34810126582278], [54.0, 170.95321637426892], [55.0, 164.42350332594245], [56.0, 178.3485714285714], [57.0, 179.65562913907277], [58.0, 183.05945945945953], [59.0, 183.5906432748538], [60.0, 188.55505369868575], [61.0, 202.14545454545458], [62.0, 195.11627906976742], [63.0, 196.2790697674418], [64.0, 203.12258064516124], [65.0, 205.8801843317973], [66.0, 207.85714285714278], [67.0, 202.0399999999999], [68.0, 222.97093023255815], [69.0, 216.9358288770053], [70.0, 220.37929298015965], [71.0, 230.30322580645162], [72.0, 225.9351351351351], [73.0, 232.5142857142859], [74.0, 227.87500000000017], [75.0, 236.64583333333337], [76.0, 237.52071005917162], [77.0, 237.43939393939397], [78.0, 257.35333333333335], [79.0, 245.70059880239523], [80.0, 251.99062216396086], [81.0, 253.01204819277112], [82.0, 256.6214689265538], [83.0, 270.1859296482412], [84.0, 266.5345911949685], [85.0, 268.1654676258991], [86.0, 272.4970414201184], [87.0, 278.6818181818182], [88.0, 280.47058823529403], [89.0, 288.8241206030151], [90.0, 283.28802099101904], [91.0, 285.28301886792457], [92.0, 273.9068322981364], [93.0, 308.12834224598913], [94.0, 298.1635514018691], [95.0, 313.62952646239586], [96.0, 315.32000000000016], [97.0, 314.0225988700564], [98.0, 301.05714285714276], [99.0, 308.7388535031847], [100.0, 315.1439508358936], [1.0, 15.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[59.60295600707561, 189.82154843189437]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 28915.25, "minX": 1.65121914E12, "maxY": 108175.11666666667, "series": [{"data": [[1.65121932E12, 108175.11666666667], [1.6512195E12, 91569.93333333333], [1.65121944E12, 108026.45], [1.65121914E12, 63614.066666666666], [1.65121926E12, 106674.75], [1.6512192E12, 101397.61666666667], [1.65121938E12, 108123.83333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65121932E12, 49168.583333333336], [1.6512195E12, 41617.5], [1.65121944E12, 49096.25], [1.65121914E12, 28915.25], [1.65121926E12, 48486.583333333336], [1.6512192E12, 46089.25], [1.65121938E12, 49142.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512195E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 50.8234610917537, "minX": 1.65121914E12, "maxY": 300.3117600631379, "series": [{"data": [[1.65121932E12, 192.59501917721892], [1.6512195E12, 256.547051520794], [1.65121944E12, 300.3117600631379], [1.65121914E12, 50.8234610917537], [1.65121926E12, 141.46912462038517], [1.6512192E12, 87.9558881228632], [1.65121938E12, 245.18167481469806]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512195E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 50.788081836862396, "minX": 1.65121914E12, "maxY": 300.2911865298604, "series": [{"data": [[1.65121932E12, 192.57636736195047], [1.6512195E12, 256.5129112352563], [1.65121944E12, 300.2911865298604], [1.65121914E12, 50.788081836862396], [1.65121926E12, 141.44472268101742], [1.6512192E12, 87.92169721428137], [1.65121938E12, 245.15765126425907]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512195E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 38.630662020905895, "minX": 1.65121914E12, "maxY": 279.90781373323074, "series": [{"data": [[1.65121932E12, 177.6632690590029], [1.6512195E12, 237.22216014897467], [1.65121944E12, 279.90781373323074], [1.65121914E12, 38.630662020905895], [1.65121926E12, 127.62736427087253], [1.6512192E12, 73.36231152962276], [1.65121938E12, 228.0165063344378]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512195E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.0, "minX": 37.0, "maxY": 319.0, "series": [{"data": [[37.0, 48.0], [87.0, 45.0], [149.0, 39.0], [180.0, 41.0], [192.0, 52.5], [198.0, 51.0], [197.0, 16.0], [202.0, 46.0], [201.0, 47.0], [209.0, 49.0], [208.0, 46.0], [223.0, 45.0], [220.0, 43.0], [221.0, 43.0], [216.0, 46.5], [224.0, 44.5], [229.0, 42.0], [239.0, 39.0], [236.0, 40.0], [238.0, 39.0], [234.0, 39.0], [246.0, 38.0], [241.0, 39.0], [240.0, 47.5], [251.0, 38.0], [253.0, 37.0], [252.0, 36.0], [250.0, 40.0], [255.0, 36.0], [264.0, 36.0], [267.0, 35.0], [268.0, 50.0], [271.0, 58.0], [266.0, 80.5], [286.0, 64.0], [281.0, 67.0], [272.0, 76.5], [282.0, 68.5], [273.0, 74.0], [280.0, 70.0], [279.0, 67.0], [278.0, 319.0], [284.0, 69.0], [275.0, 73.0], [285.0, 101.0], [283.0, 67.0], [290.0, 73.0], [289.0, 70.0], [288.0, 74.0], [293.0, 105.0], [301.0, 102.0], [300.0, 149.5], [291.0, 89.0], [294.0, 125.5], [296.0, 117.0], [299.0, 84.0], [297.0, 98.0], [298.0, 215.0], [302.0, 145.0], [303.0, 276.0], [305.0, 112.0], [311.0, 202.0], [309.0, 169.0], [304.0, 151.0], [307.0, 171.0], [317.0, 206.0], [316.0, 249.0], [318.0, 239.0], [319.0, 195.0], [306.0, 184.0], [313.0, 194.0], [314.0, 186.0], [315.0, 239.0], [310.0, 183.5], [312.0, 195.0], [308.0, 161.0], [320.0, 206.0], [323.0, 223.0], [329.0, 199.0], [330.0, 231.0], [321.0, 212.0], [324.0, 223.0], [325.0, 161.0], [327.0, 238.0], [322.0, 213.0], [326.0, 215.0], [328.0, 277.0], [332.0, 256.0], [333.0, 299.0], [334.0, 274.0], [341.0, 234.0], [336.0, 281.5], [340.0, 292.0], [347.0, 279.0], [345.0, 302.0], [337.0, 301.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 347.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.0, "minX": 37.0, "maxY": 319.0, "series": [{"data": [[37.0, 47.0], [87.0, 45.0], [149.0, 39.0], [180.0, 41.0], [192.0, 52.5], [198.0, 51.0], [197.0, 16.0], [202.0, 46.0], [201.0, 47.0], [209.0, 49.0], [208.0, 46.0], [223.0, 45.0], [220.0, 43.0], [221.0, 43.0], [216.0, 46.0], [224.0, 44.5], [229.0, 42.0], [239.0, 39.0], [236.0, 40.0], [238.0, 39.0], [234.0, 39.0], [246.0, 38.0], [241.0, 39.0], [240.0, 47.5], [251.0, 38.0], [253.0, 37.0], [252.0, 36.0], [250.0, 40.0], [255.0, 36.0], [264.0, 36.0], [267.0, 35.0], [268.0, 50.0], [271.0, 58.0], [266.0, 80.5], [286.0, 64.0], [281.0, 67.0], [272.0, 76.5], [282.0, 68.5], [273.0, 74.0], [280.0, 70.0], [279.0, 67.0], [278.0, 319.0], [284.0, 69.0], [275.0, 73.0], [285.0, 101.0], [283.0, 67.0], [290.0, 73.0], [289.0, 70.0], [288.0, 74.0], [293.0, 105.0], [301.0, 102.0], [300.0, 149.0], [291.0, 89.0], [294.0, 125.5], [296.0, 117.0], [299.0, 84.0], [297.0, 98.0], [298.0, 215.0], [302.0, 145.0], [303.0, 276.0], [305.0, 112.0], [311.0, 202.0], [309.0, 169.0], [304.0, 151.0], [307.0, 171.0], [317.0, 206.0], [316.0, 249.0], [318.0, 239.0], [319.0, 195.0], [306.0, 184.0], [313.0, 194.0], [314.0, 186.0], [315.0, 239.0], [310.0, 183.5], [312.0, 195.0], [308.0, 161.0], [320.0, 206.0], [323.0, 223.0], [329.0, 199.0], [330.0, 231.0], [321.0, 212.0], [324.0, 223.0], [325.0, 161.0], [327.0, 238.0], [322.0, 213.0], [326.0, 215.0], [328.0, 277.0], [332.0, 256.0], [333.0, 299.0], [334.0, 274.0], [341.0, 234.0], [336.0, 281.5], [340.0, 292.0], [347.0, 279.0], [345.0, 302.0], [337.0, 301.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 347.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 186.86666666666667, "minX": 1.65121914E12, "maxY": 317.53333333333336, "series": [{"data": [[1.65121932E12, 317.53333333333336], [1.6512195E12, 266.85], [1.65121944E12, 316.9], [1.65121914E12, 186.86666666666667], [1.65121926E12, 313.03333333333336], [1.6512192E12, 297.65], [1.65121938E12, 317.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512195E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 186.55, "minX": 1.65121914E12, "maxY": 317.21666666666664, "series": [{"data": [[1.65121932E12, 317.21666666666664], [1.6512195E12, 268.5], [1.65121944E12, 316.75], [1.65121914E12, 186.55], [1.65121926E12, 312.81666666666666], [1.6512192E12, 297.35], [1.65121938E12, 317.05]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512195E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 186.55, "minX": 1.65121914E12, "maxY": 317.21666666666664, "series": [{"data": [[1.65121932E12, 317.21666666666664], [1.6512195E12, 268.5], [1.65121944E12, 316.75], [1.65121914E12, 186.55], [1.65121926E12, 312.81666666666666], [1.6512192E12, 297.35], [1.65121938E12, 317.05]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512195E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 186.55, "minX": 1.65121914E12, "maxY": 317.21666666666664, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65121932E12, 317.21666666666664], [1.6512195E12, 268.5], [1.65121944E12, 316.75], [1.65121914E12, 186.55], [1.65121926E12, 312.81666666666666], [1.6512192E12, 297.35], [1.65121938E12, 317.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512195E12, "title": "Total Transactions Per Second"}},
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

