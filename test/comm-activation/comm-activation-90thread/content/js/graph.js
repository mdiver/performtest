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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 1057.0, "series": [{"data": [[0.0, 10.0], [0.1, 15.0], [0.2, 17.0], [0.3, 18.0], [0.4, 19.0], [0.5, 20.0], [0.6, 21.0], [0.7, 21.0], [0.8, 22.0], [0.9, 23.0], [1.0, 23.0], [1.1, 24.0], [1.2, 24.0], [1.3, 25.0], [1.4, 25.0], [1.5, 26.0], [1.6, 26.0], [1.7, 27.0], [1.8, 27.0], [1.9, 28.0], [2.0, 28.0], [2.1, 29.0], [2.2, 29.0], [2.3, 29.0], [2.4, 30.0], [2.5, 30.0], [2.6, 30.0], [2.7, 31.0], [2.8, 31.0], [2.9, 31.0], [3.0, 32.0], [3.1, 32.0], [3.2, 33.0], [3.3, 33.0], [3.4, 33.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 37.0], [4.6, 37.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 42.0], [6.1, 42.0], [6.2, 42.0], [6.3, 43.0], [6.4, 43.0], [6.5, 43.0], [6.6, 43.0], [6.7, 44.0], [6.8, 44.0], [6.9, 44.0], [7.0, 45.0], [7.1, 45.0], [7.2, 45.0], [7.3, 46.0], [7.4, 46.0], [7.5, 46.0], [7.6, 46.0], [7.7, 47.0], [7.8, 47.0], [7.9, 47.0], [8.0, 47.0], [8.1, 48.0], [8.2, 48.0], [8.3, 48.0], [8.4, 48.0], [8.5, 49.0], [8.6, 49.0], [8.7, 49.0], [8.8, 50.0], [8.9, 50.0], [9.0, 50.0], [9.1, 50.0], [9.2, 51.0], [9.3, 51.0], [9.4, 51.0], [9.5, 52.0], [9.6, 52.0], [9.7, 52.0], [9.8, 52.0], [9.9, 53.0], [10.0, 53.0], [10.1, 53.0], [10.2, 53.0], [10.3, 54.0], [10.4, 54.0], [10.5, 54.0], [10.6, 55.0], [10.7, 55.0], [10.8, 55.0], [10.9, 55.0], [11.0, 56.0], [11.1, 56.0], [11.2, 56.0], [11.3, 57.0], [11.4, 57.0], [11.5, 57.0], [11.6, 58.0], [11.7, 58.0], [11.8, 58.0], [11.9, 59.0], [12.0, 59.0], [12.1, 59.0], [12.2, 60.0], [12.3, 60.0], [12.4, 60.0], [12.5, 60.0], [12.6, 61.0], [12.7, 61.0], [12.8, 61.0], [12.9, 62.0], [13.0, 62.0], [13.1, 62.0], [13.2, 63.0], [13.3, 63.0], [13.4, 63.0], [13.5, 64.0], [13.6, 64.0], [13.7, 64.0], [13.8, 65.0], [13.9, 65.0], [14.0, 65.0], [14.1, 66.0], [14.2, 66.0], [14.3, 66.0], [14.4, 67.0], [14.5, 67.0], [14.6, 68.0], [14.7, 68.0], [14.8, 68.0], [14.9, 69.0], [15.0, 69.0], [15.1, 69.0], [15.2, 70.0], [15.3, 70.0], [15.4, 70.0], [15.5, 71.0], [15.6, 71.0], [15.7, 72.0], [15.8, 72.0], [15.9, 72.0], [16.0, 72.0], [16.1, 73.0], [16.2, 73.0], [16.3, 73.0], [16.4, 74.0], [16.5, 74.0], [16.6, 74.0], [16.7, 75.0], [16.8, 75.0], [16.9, 75.0], [17.0, 76.0], [17.1, 76.0], [17.2, 76.0], [17.3, 77.0], [17.4, 77.0], [17.5, 77.0], [17.6, 77.0], [17.7, 78.0], [17.8, 78.0], [17.9, 78.0], [18.0, 78.0], [18.1, 79.0], [18.2, 79.0], [18.3, 79.0], [18.4, 80.0], [18.5, 80.0], [18.6, 80.0], [18.7, 81.0], [18.8, 81.0], [18.9, 81.0], [19.0, 81.0], [19.1, 82.0], [19.2, 82.0], [19.3, 82.0], [19.4, 83.0], [19.5, 83.0], [19.6, 83.0], [19.7, 83.0], [19.8, 84.0], [19.9, 84.0], [20.0, 84.0], [20.1, 85.0], [20.2, 85.0], [20.3, 85.0], [20.4, 85.0], [20.5, 86.0], [20.6, 86.0], [20.7, 86.0], [20.8, 87.0], [20.9, 87.0], [21.0, 87.0], [21.1, 88.0], [21.2, 88.0], [21.3, 88.0], [21.4, 88.0], [21.5, 89.0], [21.6, 89.0], [21.7, 89.0], [21.8, 90.0], [21.9, 90.0], [22.0, 90.0], [22.1, 91.0], [22.2, 91.0], [22.3, 91.0], [22.4, 92.0], [22.5, 92.0], [22.6, 92.0], [22.7, 92.0], [22.8, 93.0], [22.9, 93.0], [23.0, 93.0], [23.1, 94.0], [23.2, 94.0], [23.3, 94.0], [23.4, 95.0], [23.5, 95.0], [23.6, 95.0], [23.7, 96.0], [23.8, 96.0], [23.9, 96.0], [24.0, 97.0], [24.1, 97.0], [24.2, 97.0], [24.3, 97.0], [24.4, 98.0], [24.5, 98.0], [24.6, 98.0], [24.7, 99.0], [24.8, 99.0], [24.9, 99.0], [25.0, 100.0], [25.1, 100.0], [25.2, 100.0], [25.3, 101.0], [25.4, 101.0], [25.5, 101.0], [25.6, 102.0], [25.7, 102.0], [25.8, 102.0], [25.9, 102.0], [26.0, 103.0], [26.1, 103.0], [26.2, 103.0], [26.3, 104.0], [26.4, 104.0], [26.5, 104.0], [26.6, 104.0], [26.7, 105.0], [26.8, 105.0], [26.9, 105.0], [27.0, 105.0], [27.1, 106.0], [27.2, 106.0], [27.3, 106.0], [27.4, 107.0], [27.5, 107.0], [27.6, 107.0], [27.7, 107.0], [27.8, 108.0], [27.9, 108.0], [28.0, 108.0], [28.1, 108.0], [28.2, 109.0], [28.3, 109.0], [28.4, 109.0], [28.5, 109.0], [28.6, 110.0], [28.7, 110.0], [28.8, 110.0], [28.9, 110.0], [29.0, 111.0], [29.1, 111.0], [29.2, 111.0], [29.3, 111.0], [29.4, 112.0], [29.5, 112.0], [29.6, 112.0], [29.7, 112.0], [29.8, 113.0], [29.9, 113.0], [30.0, 113.0], [30.1, 113.0], [30.2, 114.0], [30.3, 114.0], [30.4, 114.0], [30.5, 114.0], [30.6, 115.0], [30.7, 115.0], [30.8, 115.0], [30.9, 115.0], [31.0, 116.0], [31.1, 116.0], [31.2, 116.0], [31.3, 116.0], [31.4, 117.0], [31.5, 117.0], [31.6, 117.0], [31.7, 117.0], [31.8, 118.0], [31.9, 118.0], [32.0, 118.0], [32.1, 119.0], [32.2, 119.0], [32.3, 119.0], [32.4, 120.0], [32.5, 120.0], [32.6, 120.0], [32.7, 120.0], [32.8, 121.0], [32.9, 121.0], [33.0, 121.0], [33.1, 122.0], [33.2, 122.0], [33.3, 122.0], [33.4, 123.0], [33.5, 123.0], [33.6, 123.0], [33.7, 124.0], [33.8, 124.0], [33.9, 124.0], [34.0, 125.0], [34.1, 125.0], [34.2, 125.0], [34.3, 125.0], [34.4, 126.0], [34.5, 126.0], [34.6, 126.0], [34.7, 126.0], [34.8, 127.0], [34.9, 127.0], [35.0, 127.0], [35.1, 128.0], [35.2, 128.0], [35.3, 128.0], [35.4, 128.0], [35.5, 129.0], [35.6, 129.0], [35.7, 129.0], [35.8, 130.0], [35.9, 130.0], [36.0, 130.0], [36.1, 130.0], [36.2, 131.0], [36.3, 131.0], [36.4, 131.0], [36.5, 131.0], [36.6, 132.0], [36.7, 132.0], [36.8, 132.0], [36.9, 132.0], [37.0, 133.0], [37.1, 133.0], [37.2, 133.0], [37.3, 133.0], [37.4, 134.0], [37.5, 134.0], [37.6, 134.0], [37.7, 134.0], [37.8, 135.0], [37.9, 135.0], [38.0, 135.0], [38.1, 135.0], [38.2, 136.0], [38.3, 136.0], [38.4, 136.0], [38.5, 136.0], [38.6, 136.0], [38.7, 137.0], [38.8, 137.0], [38.9, 137.0], [39.0, 137.0], [39.1, 138.0], [39.2, 138.0], [39.3, 138.0], [39.4, 138.0], [39.5, 138.0], [39.6, 139.0], [39.7, 139.0], [39.8, 139.0], [39.9, 139.0], [40.0, 140.0], [40.1, 140.0], [40.2, 140.0], [40.3, 140.0], [40.4, 141.0], [40.5, 141.0], [40.6, 141.0], [40.7, 141.0], [40.8, 141.0], [40.9, 142.0], [41.0, 142.0], [41.1, 142.0], [41.2, 142.0], [41.3, 143.0], [41.4, 143.0], [41.5, 143.0], [41.6, 143.0], [41.7, 144.0], [41.8, 144.0], [41.9, 144.0], [42.0, 144.0], [42.1, 145.0], [42.2, 145.0], [42.3, 145.0], [42.4, 145.0], [42.5, 146.0], [42.6, 146.0], [42.7, 146.0], [42.8, 147.0], [42.9, 147.0], [43.0, 147.0], [43.1, 147.0], [43.2, 148.0], [43.3, 148.0], [43.4, 148.0], [43.5, 149.0], [43.6, 149.0], [43.7, 149.0], [43.8, 150.0], [43.9, 150.0], [44.0, 150.0], [44.1, 150.0], [44.2, 151.0], [44.3, 151.0], [44.4, 151.0], [44.5, 152.0], [44.6, 152.0], [44.7, 152.0], [44.8, 153.0], [44.9, 153.0], [45.0, 153.0], [45.1, 153.0], [45.2, 154.0], [45.3, 154.0], [45.4, 154.0], [45.5, 155.0], [45.6, 155.0], [45.7, 155.0], [45.8, 156.0], [45.9, 156.0], [46.0, 156.0], [46.1, 157.0], [46.2, 157.0], [46.3, 157.0], [46.4, 158.0], [46.5, 158.0], [46.6, 158.0], [46.7, 159.0], [46.8, 159.0], [46.9, 159.0], [47.0, 160.0], [47.1, 160.0], [47.2, 160.0], [47.3, 161.0], [47.4, 161.0], [47.5, 161.0], [47.6, 161.0], [47.7, 162.0], [47.8, 162.0], [47.9, 162.0], [48.0, 162.0], [48.1, 163.0], [48.2, 163.0], [48.3, 163.0], [48.4, 164.0], [48.5, 164.0], [48.6, 164.0], [48.7, 164.0], [48.8, 165.0], [48.9, 165.0], [49.0, 165.0], [49.1, 165.0], [49.2, 166.0], [49.3, 166.0], [49.4, 166.0], [49.5, 166.0], [49.6, 167.0], [49.7, 167.0], [49.8, 167.0], [49.9, 168.0], [50.0, 168.0], [50.1, 168.0], [50.2, 168.0], [50.3, 168.0], [50.4, 169.0], [50.5, 169.0], [50.6, 169.0], [50.7, 170.0], [50.8, 170.0], [50.9, 170.0], [51.0, 170.0], [51.1, 170.0], [51.2, 171.0], [51.3, 171.0], [51.4, 171.0], [51.5, 171.0], [51.6, 172.0], [51.7, 172.0], [51.8, 172.0], [51.9, 173.0], [52.0, 173.0], [52.1, 173.0], [52.2, 173.0], [52.3, 173.0], [52.4, 174.0], [52.5, 174.0], [52.6, 174.0], [52.7, 175.0], [52.8, 175.0], [52.9, 175.0], [53.0, 175.0], [53.1, 176.0], [53.2, 176.0], [53.3, 176.0], [53.4, 176.0], [53.5, 176.0], [53.6, 177.0], [53.7, 177.0], [53.8, 177.0], [53.9, 178.0], [54.0, 178.0], [54.1, 178.0], [54.2, 178.0], [54.3, 179.0], [54.4, 179.0], [54.5, 179.0], [54.6, 179.0], [54.7, 180.0], [54.8, 180.0], [54.9, 180.0], [55.0, 181.0], [55.1, 181.0], [55.2, 181.0], [55.3, 181.0], [55.4, 182.0], [55.5, 182.0], [55.6, 182.0], [55.7, 183.0], [55.8, 183.0], [55.9, 183.0], [56.0, 184.0], [56.1, 184.0], [56.2, 184.0], [56.3, 184.0], [56.4, 185.0], [56.5, 185.0], [56.6, 185.0], [56.7, 186.0], [56.8, 186.0], [56.9, 186.0], [57.0, 187.0], [57.1, 187.0], [57.2, 187.0], [57.3, 188.0], [57.4, 188.0], [57.5, 188.0], [57.6, 188.0], [57.7, 189.0], [57.8, 189.0], [57.9, 189.0], [58.0, 190.0], [58.1, 190.0], [58.2, 190.0], [58.3, 191.0], [58.4, 191.0], [58.5, 191.0], [58.6, 192.0], [58.7, 192.0], [58.8, 192.0], [58.9, 193.0], [59.0, 193.0], [59.1, 193.0], [59.2, 194.0], [59.3, 194.0], [59.4, 194.0], [59.5, 195.0], [59.6, 195.0], [59.7, 195.0], [59.8, 196.0], [59.9, 196.0], [60.0, 196.0], [60.1, 196.0], [60.2, 197.0], [60.3, 197.0], [60.4, 197.0], [60.5, 198.0], [60.6, 198.0], [60.7, 198.0], [60.8, 199.0], [60.9, 199.0], [61.0, 199.0], [61.1, 200.0], [61.2, 200.0], [61.3, 200.0], [61.4, 200.0], [61.5, 201.0], [61.6, 201.0], [61.7, 201.0], [61.8, 202.0], [61.9, 202.0], [62.0, 202.0], [62.1, 202.0], [62.2, 203.0], [62.3, 203.0], [62.4, 203.0], [62.5, 204.0], [62.6, 204.0], [62.7, 204.0], [62.8, 205.0], [62.9, 205.0], [63.0, 205.0], [63.1, 206.0], [63.2, 206.0], [63.3, 206.0], [63.4, 206.0], [63.5, 207.0], [63.6, 207.0], [63.7, 207.0], [63.8, 208.0], [63.9, 208.0], [64.0, 208.0], [64.1, 209.0], [64.2, 209.0], [64.3, 209.0], [64.4, 210.0], [64.5, 210.0], [64.6, 210.0], [64.7, 211.0], [64.8, 211.0], [64.9, 211.0], [65.0, 211.0], [65.1, 212.0], [65.2, 212.0], [65.3, 213.0], [65.4, 213.0], [65.5, 213.0], [65.6, 213.0], [65.7, 214.0], [65.8, 214.0], [65.9, 214.0], [66.0, 215.0], [66.1, 215.0], [66.2, 215.0], [66.3, 216.0], [66.4, 216.0], [66.5, 216.0], [66.6, 217.0], [66.7, 217.0], [66.8, 217.0], [66.9, 217.0], [67.0, 218.0], [67.1, 218.0], [67.2, 219.0], [67.3, 219.0], [67.4, 219.0], [67.5, 220.0], [67.6, 220.0], [67.7, 220.0], [67.8, 221.0], [67.9, 221.0], [68.0, 221.0], [68.1, 222.0], [68.2, 222.0], [68.3, 222.0], [68.4, 223.0], [68.5, 223.0], [68.6, 224.0], [68.7, 224.0], [68.8, 224.0], [68.9, 224.0], [69.0, 225.0], [69.1, 225.0], [69.2, 225.0], [69.3, 226.0], [69.4, 226.0], [69.5, 226.0], [69.6, 227.0], [69.7, 227.0], [69.8, 227.0], [69.9, 228.0], [70.0, 228.0], [70.1, 228.0], [70.2, 228.0], [70.3, 229.0], [70.4, 229.0], [70.5, 229.0], [70.6, 230.0], [70.7, 230.0], [70.8, 230.0], [70.9, 231.0], [71.0, 231.0], [71.1, 231.0], [71.2, 232.0], [71.3, 232.0], [71.4, 232.0], [71.5, 233.0], [71.6, 233.0], [71.7, 233.0], [71.8, 233.0], [71.9, 234.0], [72.0, 234.0], [72.1, 234.0], [72.2, 235.0], [72.3, 235.0], [72.4, 235.0], [72.5, 236.0], [72.6, 236.0], [72.7, 236.0], [72.8, 236.0], [72.9, 237.0], [73.0, 237.0], [73.1, 237.0], [73.2, 238.0], [73.3, 238.0], [73.4, 238.0], [73.5, 239.0], [73.6, 239.0], [73.7, 239.0], [73.8, 240.0], [73.9, 240.0], [74.0, 240.0], [74.1, 240.0], [74.2, 241.0], [74.3, 241.0], [74.4, 241.0], [74.5, 241.0], [74.6, 242.0], [74.7, 242.0], [74.8, 242.0], [74.9, 243.0], [75.0, 243.0], [75.1, 243.0], [75.2, 243.0], [75.3, 244.0], [75.4, 244.0], [75.5, 244.0], [75.6, 244.0], [75.7, 245.0], [75.8, 245.0], [75.9, 245.0], [76.0, 246.0], [76.1, 246.0], [76.2, 246.0], [76.3, 246.0], [76.4, 247.0], [76.5, 247.0], [76.6, 247.0], [76.7, 247.0], [76.8, 248.0], [76.9, 248.0], [77.0, 248.0], [77.1, 248.0], [77.2, 248.0], [77.3, 249.0], [77.4, 249.0], [77.5, 249.0], [77.6, 249.0], [77.7, 250.0], [77.8, 250.0], [77.9, 250.0], [78.0, 251.0], [78.1, 251.0], [78.2, 251.0], [78.3, 251.0], [78.4, 252.0], [78.5, 252.0], [78.6, 252.0], [78.7, 252.0], [78.8, 253.0], [78.9, 253.0], [79.0, 253.0], [79.1, 253.0], [79.2, 254.0], [79.3, 254.0], [79.4, 254.0], [79.5, 254.0], [79.6, 255.0], [79.7, 255.0], [79.8, 255.0], [79.9, 255.0], [80.0, 256.0], [80.1, 256.0], [80.2, 256.0], [80.3, 256.0], [80.4, 257.0], [80.5, 257.0], [80.6, 257.0], [80.7, 257.0], [80.8, 258.0], [80.9, 258.0], [81.0, 258.0], [81.1, 259.0], [81.2, 259.0], [81.3, 259.0], [81.4, 259.0], [81.5, 260.0], [81.6, 260.0], [81.7, 260.0], [81.8, 260.0], [81.9, 261.0], [82.0, 261.0], [82.1, 261.0], [82.2, 262.0], [82.3, 262.0], [82.4, 262.0], [82.5, 263.0], [82.6, 263.0], [82.7, 263.0], [82.8, 264.0], [82.9, 264.0], [83.0, 264.0], [83.1, 265.0], [83.2, 265.0], [83.3, 265.0], [83.4, 266.0], [83.5, 266.0], [83.6, 267.0], [83.7, 267.0], [83.8, 267.0], [83.9, 268.0], [84.0, 268.0], [84.1, 269.0], [84.2, 269.0], [84.3, 269.0], [84.4, 270.0], [84.5, 270.0], [84.6, 271.0], [84.7, 271.0], [84.8, 271.0], [84.9, 272.0], [85.0, 272.0], [85.1, 273.0], [85.2, 273.0], [85.3, 274.0], [85.4, 274.0], [85.5, 274.0], [85.6, 275.0], [85.7, 275.0], [85.8, 276.0], [85.9, 276.0], [86.0, 277.0], [86.1, 277.0], [86.2, 278.0], [86.3, 278.0], [86.4, 278.0], [86.5, 279.0], [86.6, 279.0], [86.7, 280.0], [86.8, 281.0], [86.9, 281.0], [87.0, 282.0], [87.1, 282.0], [87.2, 283.0], [87.3, 283.0], [87.4, 284.0], [87.5, 284.0], [87.6, 285.0], [87.7, 286.0], [87.8, 286.0], [87.9, 287.0], [88.0, 287.0], [88.1, 288.0], [88.2, 289.0], [88.3, 289.0], [88.4, 290.0], [88.5, 290.0], [88.6, 291.0], [88.7, 292.0], [88.8, 292.0], [88.9, 293.0], [89.0, 293.0], [89.1, 294.0], [89.2, 294.0], [89.3, 295.0], [89.4, 296.0], [89.5, 296.0], [89.6, 297.0], [89.7, 297.0], [89.8, 298.0], [89.9, 298.0], [90.0, 299.0], [90.1, 299.0], [90.2, 300.0], [90.3, 300.0], [90.4, 301.0], [90.5, 301.0], [90.6, 302.0], [90.7, 302.0], [90.8, 303.0], [90.9, 303.0], [91.0, 304.0], [91.1, 304.0], [91.2, 305.0], [91.3, 305.0], [91.4, 306.0], [91.5, 306.0], [91.6, 307.0], [91.7, 307.0], [91.8, 308.0], [91.9, 308.0], [92.0, 309.0], [92.1, 309.0], [92.2, 309.0], [92.3, 310.0], [92.4, 310.0], [92.5, 311.0], [92.6, 311.0], [92.7, 312.0], [92.8, 312.0], [92.9, 312.0], [93.0, 313.0], [93.1, 313.0], [93.2, 314.0], [93.3, 314.0], [93.4, 315.0], [93.5, 315.0], [93.6, 316.0], [93.7, 316.0], [93.8, 317.0], [93.9, 317.0], [94.0, 317.0], [94.1, 318.0], [94.2, 318.0], [94.3, 319.0], [94.4, 320.0], [94.5, 320.0], [94.6, 321.0], [94.7, 321.0], [94.8, 322.0], [94.9, 322.0], [95.0, 323.0], [95.1, 324.0], [95.2, 324.0], [95.3, 325.0], [95.4, 326.0], [95.5, 326.0], [95.6, 327.0], [95.7, 328.0], [95.8, 329.0], [95.9, 330.0], [96.0, 331.0], [96.1, 332.0], [96.2, 333.0], [96.3, 334.0], [96.4, 335.0], [96.5, 336.0], [96.6, 337.0], [96.7, 338.0], [96.8, 340.0], [96.9, 341.0], [97.0, 342.0], [97.1, 344.0], [97.2, 345.0], [97.3, 347.0], [97.4, 349.0], [97.5, 351.0], [97.6, 353.0], [97.7, 355.0], [97.8, 357.0], [97.9, 360.0], [98.0, 362.0], [98.1, 365.0], [98.2, 367.0], [98.3, 370.0], [98.4, 374.0], [98.5, 377.0], [98.6, 382.0], [98.7, 387.0], [98.8, 391.0], [98.9, 396.0], [99.0, 401.0], [99.1, 407.0], [99.2, 413.0], [99.3, 420.0], [99.4, 428.0], [99.5, 436.0], [99.6, 447.0], [99.7, 459.0], [99.8, 486.0], [99.9, 515.0], [100.0, 1057.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 39531.0, "series": [{"data": [[0.0, 27317.0], [300.0, 9675.0], [600.0, 11.0], [700.0, 1.0], [200.0, 31770.0], [100.0, 39531.0], [400.0, 950.0], [500.0, 155.0], [1000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 109413.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 109413.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 109413.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.726112617642336, "minX": 1.65121854E12, "maxY": 87.8767180999526, "series": [{"data": [[1.65121884E12, 87.8767180999526], [1.65121854E12, 9.726112617642336], [1.65121866E12, 38.36150761828409], [1.6512186E12, 21.89270711785294], [1.65121878E12, 73.26030710980218], [1.65121872E12, 55.37326607818408], [1.6512189E12, 66.6689729097647]], "isOverall": false, "label": "jp@gc - Stepping Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512189E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 291.23030303030305, "series": [{"data": [[2.0, 77.35294117647058], [3.0, 43.000000000000014], [4.0, 38.40384615384616], [5.0, 20.8742857142857], [6.0, 43.22535211267607], [7.0, 45.95999999999999], [8.0, 42.446808510638284], [9.0, 46.00000000000001], [10.0, 42.10899072705262], [11.0, 41.45736434108528], [12.0, 42.93571428571428], [13.0, 44.67567567567567], [14.0, 51.68840579710144], [15.0, 50.715962441314566], [16.0, 54.84], [17.0, 61.37241379310347], [18.0, 67.9548872180451], [19.0, 67.80851063829788], [20.0, 69.7167944870514], [21.0, 73.13157894736845], [22.0, 73.27096774193548], [23.0, 71.73717948717955], [24.0, 76.74522292993633], [25.0, 80.03275109170305], [26.0, 83.2530864197531], [27.0, 93.54861111111116], [28.0, 94.07741935483872], [29.0, 94.99363057324847], [30.0, 99.24907768525347], [31.0, 102.99354838709675], [32.0, 103.0062893081761], [33.0, 106.28289473684211], [34.0, 110.71153846153848], [35.0, 112.7964205816555], [36.0, 116.31868131868136], [37.0, 113.7080745341615], [38.0, 123.50310559006205], [39.0, 125.38364779874213], [40.0, 126.4504332057222], [41.0, 128.14814814814812], [42.0, 130.26946107784414], [43.0, 131.98265895953745], [44.0, 144.6089743589744], [45.0, 145.37170263788965], [46.0, 147.59146341463403], [47.0, 146.15294117647056], [48.0, 154.90697674418604], [49.0, 152.0236686390533], [50.0, 157.68311766476077], [51.0, 159.40462427745658], [52.0, 165.9939393939394], [53.0, 160.53503184713378], [54.0, 176.06626506024094], [55.0, 173.95903614457836], [56.0, 186.98192771084334], [57.0, 182.18235294117636], [58.0, 180.89570552147237], [59.0, 184.38461538461536], [60.0, 188.73934079225893], [61.0, 192.64242424242428], [62.0, 202.89729729729737], [63.0, 195.08641975308646], [64.0, 208.93939393939394], [65.0, 204.23776223776224], [66.0, 211.07142857142853], [67.0, 203.76111111111115], [68.0, 222.24675324675323], [69.0, 211.2388888888888], [70.0, 220.56838722635084], [71.0, 221.4670658682634], [72.0, 216.0887573964497], [73.0, 239.04020100502518], [74.0, 233.85443037974693], [75.0, 231.34848484848484], [76.0, 257.8833333333332], [77.0, 243.35233160621763], [78.0, 233.66463414634137], [79.0, 252.7417218543046], [80.0, 251.4275646833796], [81.0, 254.8434343434343], [82.0, 255.5958904109589], [83.0, 268.48913043478257], [84.0, 261.2529411764705], [85.0, 269.7613365155131], [86.0, 291.23030303030305], [87.0, 276.2441860465117], [88.0, 269.6380368098161], [89.0, 273.05487804878044], [90.0, 283.8624771838319], [1.0, 16.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[54.41397274546807, 173.49214444353132]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 90.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 16194.916666666666, "minX": 1.65121854E12, "maxY": 108173.65, "series": [{"data": [[1.65121884E12, 107929.85], [1.65121854E12, 35630.55], [1.65121866E12, 106310.05], [1.6512186E12, 97414.63333333333], [1.65121878E12, 108083.78333333334], [1.65121872E12, 108173.65], [1.6512189E12, 58326.73333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65121884E12, 49054.916666666664], [1.65121854E12, 16194.916666666666], [1.65121866E12, 48321.25], [1.6512186E12, 44278.333333333336], [1.65121878E12, 49124.666666666664], [1.65121872E12, 49166.0], [1.6512189E12, 26510.166666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512189E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 43.1569628329875, "minX": 1.65121854E12, "maxY": 277.0349676128283, "series": [{"data": [[1.65121884E12, 277.0349676128283], [1.65121854E12, 43.1569628329875], [1.65121866E12, 122.45533279871655], [1.6512186E12, 75.30530921820319], [1.65121878E12, 230.3460244005052], [1.65121872E12, 174.14191887347587], [1.6512189E12, 211.98002338725487]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512189E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 43.10719412984519, "minX": 1.65121854E12, "maxY": 277.02022223392584, "series": [{"data": [[1.65121884E12, 277.02022223392584], [1.65121854E12, 43.10719412984519], [1.65121866E12, 122.43539160652263], [1.6512186E12, 75.28646441073523], [1.65121878E12, 230.33166806899484], [1.65121872E12, 174.12536780159826], [1.6512189E12, 211.96238549990198]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512189E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 31.472483649704948, "minX": 1.65121854E12, "maxY": 258.37864026541786, "series": [{"data": [[1.65121884E12, 258.37864026541786], [1.65121854E12, 31.472483649704948], [1.65121866E12, 108.87992515370225], [1.6512186E12, 61.08494749124869], [1.65121878E12, 213.52766091712158], [1.65121872E12, 160.061685582178], [1.6512189E12, 194.954589748588]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512189E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 16.0, "minX": 50.0, "maxY": 291.0, "series": [{"data": [[50.0, 40.5], [108.0, 39.0], [143.0, 45.0], [152.0, 16.0], [182.0, 42.0], [187.0, 53.0], [190.0, 53.0], [202.0, 47.5], [200.0, 48.0], [209.0, 45.0], [210.0, 46.0], [213.0, 46.0], [208.0, 48.0], [217.0, 44.0], [220.0, 45.0], [222.0, 43.0], [216.0, 45.0], [236.0, 40.0], [238.0, 40.0], [239.0, 40.0], [234.0, 41.0], [245.0, 37.0], [240.0, 39.0], [252.0, 36.0], [255.0, 34.0], [251.0, 38.0], [270.0, 37.0], [258.0, 36.0], [267.0, 34.0], [264.0, 36.0], [271.0, 53.0], [269.0, 35.0], [261.0, 48.0], [262.0, 52.0], [260.0, 78.0], [284.0, 67.0], [280.0, 60.0], [274.0, 70.0], [275.0, 76.0], [279.0, 72.0], [283.0, 54.0], [286.0, 77.0], [278.0, 72.0], [276.0, 74.5], [282.0, 67.0], [281.0, 71.0], [287.0, 62.0], [302.0, 103.0], [288.0, 79.0], [294.0, 79.0], [296.0, 80.0], [303.0, 115.0], [292.0, 134.0], [293.0, 92.0], [300.0, 113.0], [301.0, 109.0], [298.0, 121.0], [297.0, 229.0], [289.0, 95.0], [306.0, 210.0], [307.0, 186.0], [317.0, 195.0], [318.0, 198.0], [319.0, 186.0], [316.0, 152.0], [305.0, 117.0], [313.0, 210.0], [315.0, 210.0], [314.0, 187.0], [304.0, 112.0], [312.0, 186.0], [310.0, 161.0], [311.0, 190.0], [309.0, 196.0], [308.0, 195.0], [321.0, 178.0], [320.0, 200.0], [327.0, 243.0], [329.0, 143.0], [333.0, 239.0], [328.0, 244.0], [334.0, 270.5], [324.0, 250.0], [326.0, 170.0], [322.0, 208.0], [323.0, 232.0], [330.0, 234.0], [331.0, 255.0], [325.0, 209.0], [340.0, 183.0], [337.0, 239.0], [345.0, 220.0], [341.0, 291.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 345.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.0, "minX": 50.0, "maxY": 291.0, "series": [{"data": [[50.0, 40.5], [108.0, 39.0], [143.0, 45.0], [152.0, 16.0], [182.0, 42.0], [187.0, 53.0], [190.0, 53.0], [202.0, 47.0], [200.0, 48.0], [209.0, 45.0], [210.0, 46.0], [213.0, 46.0], [208.0, 48.0], [217.0, 44.0], [220.0, 45.0], [222.0, 43.0], [216.0, 45.0], [236.0, 40.0], [238.0, 40.0], [239.0, 40.0], [234.0, 41.0], [245.0, 37.0], [240.0, 39.0], [252.0, 36.0], [255.0, 34.0], [251.0, 38.0], [270.0, 37.0], [258.0, 36.0], [267.0, 34.0], [264.0, 36.0], [271.0, 53.0], [269.0, 35.0], [261.0, 48.0], [262.0, 52.0], [260.0, 78.0], [284.0, 67.0], [280.0, 60.0], [274.0, 70.0], [275.0, 76.0], [279.0, 72.0], [283.0, 54.0], [286.0, 77.0], [278.0, 72.0], [276.0, 74.5], [282.0, 67.0], [281.0, 71.0], [287.0, 62.0], [302.0, 103.0], [288.0, 79.0], [294.0, 79.0], [296.0, 80.0], [303.0, 115.0], [292.0, 134.0], [293.0, 92.0], [300.0, 113.0], [301.0, 109.0], [298.0, 121.0], [297.0, 229.0], [289.0, 95.0], [306.0, 210.0], [307.0, 186.0], [317.0, 195.0], [318.0, 198.0], [319.0, 186.0], [316.0, 152.0], [305.0, 117.0], [313.0, 210.0], [315.0, 210.0], [314.0, 187.0], [304.0, 112.0], [312.0, 186.0], [310.0, 161.0], [311.0, 190.0], [309.0, 196.0], [308.0, 195.0], [321.0, 178.0], [320.0, 200.0], [327.0, 243.0], [329.0, 143.0], [333.0, 239.0], [328.0, 244.0], [334.0, 270.5], [324.0, 250.0], [326.0, 170.0], [322.0, 208.0], [323.0, 232.0], [330.0, 234.0], [331.0, 255.0], [325.0, 209.0], [340.0, 183.0], [337.0, 239.0], [345.0, 220.0], [341.0, 291.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 345.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 104.65, "minX": 1.65121854E12, "maxY": 317.3666666666667, "series": [{"data": [[1.65121884E12, 316.65], [1.65121854E12, 104.65], [1.65121866E12, 312.0833333333333], [1.6512186E12, 286.0], [1.65121878E12, 317.26666666666665], [1.65121872E12, 317.3666666666667], [1.6512189E12, 169.53333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512189E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 104.48333333333333, "minX": 1.65121854E12, "maxY": 317.2, "series": [{"data": [[1.65121884E12, 316.48333333333335], [1.65121854E12, 104.48333333333333], [1.65121866E12, 311.75], [1.6512186E12, 285.6666666666667], [1.65121878E12, 316.93333333333334], [1.65121872E12, 317.2], [1.6512189E12, 171.03333333333333]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6512189E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 104.48333333333333, "minX": 1.65121854E12, "maxY": 317.2, "series": [{"data": [[1.65121884E12, 316.48333333333335], [1.65121854E12, 104.48333333333333], [1.65121866E12, 311.75], [1.6512186E12, 285.6666666666667], [1.65121878E12, 316.93333333333334], [1.65121872E12, 317.2], [1.6512189E12, 171.03333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512189E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 104.48333333333333, "minX": 1.65121854E12, "maxY": 317.2, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65121884E12, 316.48333333333335], [1.65121854E12, 104.48333333333333], [1.65121866E12, 311.75], [1.6512186E12, 285.6666666666667], [1.65121878E12, 316.93333333333334], [1.65121872E12, 317.2], [1.6512189E12, 171.03333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6512189E12, "title": "Total Transactions Per Second"}},
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

