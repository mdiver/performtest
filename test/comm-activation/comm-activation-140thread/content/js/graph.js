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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 7026.0, "series": [{"data": [[0.0, 11.0], [0.1, 16.0], [0.2, 18.0], [0.3, 20.0], [0.4, 21.0], [0.5, 22.0], [0.6, 23.0], [0.7, 24.0], [0.8, 25.0], [0.9, 26.0], [1.0, 27.0], [1.1, 27.0], [1.2, 28.0], [1.3, 29.0], [1.4, 29.0], [1.5, 30.0], [1.6, 30.0], [1.7, 31.0], [1.8, 31.0], [1.9, 32.0], [2.0, 33.0], [2.1, 33.0], [2.2, 34.0], [2.3, 34.0], [2.4, 35.0], [2.5, 35.0], [2.6, 36.0], [2.7, 36.0], [2.8, 37.0], [2.9, 37.0], [3.0, 38.0], [3.1, 38.0], [3.2, 39.0], [3.3, 40.0], [3.4, 40.0], [3.5, 40.0], [3.6, 41.0], [3.7, 41.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 43.0], [4.2, 43.0], [4.3, 44.0], [4.4, 44.0], [4.5, 45.0], [4.6, 45.0], [4.7, 46.0], [4.8, 46.0], [4.9, 46.0], [5.0, 47.0], [5.1, 47.0], [5.2, 48.0], [5.3, 48.0], [5.4, 49.0], [5.5, 49.0], [5.6, 50.0], [5.7, 50.0], [5.8, 50.0], [5.9, 51.0], [6.0, 51.0], [6.1, 52.0], [6.2, 52.0], [6.3, 52.0], [6.4, 53.0], [6.5, 53.0], [6.6, 54.0], [6.7, 54.0], [6.8, 55.0], [6.9, 55.0], [7.0, 56.0], [7.1, 56.0], [7.2, 56.0], [7.3, 57.0], [7.4, 57.0], [7.5, 58.0], [7.6, 58.0], [7.7, 59.0], [7.8, 59.0], [7.9, 59.0], [8.0, 60.0], [8.1, 60.0], [8.2, 61.0], [8.3, 61.0], [8.4, 62.0], [8.5, 62.0], [8.6, 63.0], [8.7, 63.0], [8.8, 64.0], [8.9, 64.0], [9.0, 65.0], [9.1, 65.0], [9.2, 66.0], [9.3, 66.0], [9.4, 67.0], [9.5, 67.0], [9.6, 68.0], [9.7, 68.0], [9.8, 69.0], [9.9, 69.0], [10.0, 70.0], [10.1, 71.0], [10.2, 71.0], [10.3, 72.0], [10.4, 72.0], [10.5, 72.0], [10.6, 73.0], [10.7, 73.0], [10.8, 74.0], [10.9, 74.0], [11.0, 75.0], [11.1, 75.0], [11.2, 76.0], [11.3, 76.0], [11.4, 76.0], [11.5, 77.0], [11.6, 77.0], [11.7, 78.0], [11.8, 78.0], [11.9, 79.0], [12.0, 79.0], [12.1, 79.0], [12.2, 80.0], [12.3, 80.0], [12.4, 81.0], [12.5, 81.0], [12.6, 81.0], [12.7, 82.0], [12.8, 82.0], [12.9, 83.0], [13.0, 83.0], [13.1, 83.0], [13.2, 84.0], [13.3, 84.0], [13.4, 85.0], [13.5, 85.0], [13.6, 85.0], [13.7, 86.0], [13.8, 86.0], [13.9, 87.0], [14.0, 87.0], [14.1, 88.0], [14.2, 88.0], [14.3, 88.0], [14.4, 89.0], [14.5, 89.0], [14.6, 90.0], [14.7, 90.0], [14.8, 91.0], [14.9, 91.0], [15.0, 92.0], [15.1, 92.0], [15.2, 93.0], [15.3, 93.0], [15.4, 94.0], [15.5, 94.0], [15.6, 94.0], [15.7, 95.0], [15.8, 95.0], [15.9, 96.0], [16.0, 96.0], [16.1, 97.0], [16.2, 97.0], [16.3, 98.0], [16.4, 99.0], [16.5, 99.0], [16.6, 99.0], [16.7, 100.0], [16.8, 100.0], [16.9, 101.0], [17.0, 101.0], [17.1, 102.0], [17.2, 102.0], [17.3, 103.0], [17.4, 103.0], [17.5, 104.0], [17.6, 104.0], [17.7, 104.0], [17.8, 105.0], [17.9, 105.0], [18.0, 106.0], [18.1, 106.0], [18.2, 107.0], [18.3, 107.0], [18.4, 107.0], [18.5, 108.0], [18.6, 108.0], [18.7, 109.0], [18.8, 109.0], [18.9, 109.0], [19.0, 110.0], [19.1, 110.0], [19.2, 111.0], [19.3, 111.0], [19.4, 112.0], [19.5, 112.0], [19.6, 113.0], [19.7, 113.0], [19.8, 113.0], [19.9, 114.0], [20.0, 114.0], [20.1, 115.0], [20.2, 115.0], [20.3, 116.0], [20.4, 116.0], [20.5, 116.0], [20.6, 117.0], [20.7, 117.0], [20.8, 118.0], [20.9, 118.0], [21.0, 119.0], [21.1, 119.0], [21.2, 119.0], [21.3, 120.0], [21.4, 120.0], [21.5, 121.0], [21.6, 121.0], [21.7, 122.0], [21.8, 122.0], [21.9, 122.0], [22.0, 123.0], [22.1, 123.0], [22.2, 124.0], [22.3, 124.0], [22.4, 125.0], [22.5, 125.0], [22.6, 126.0], [22.7, 126.0], [22.8, 127.0], [22.9, 127.0], [23.0, 128.0], [23.1, 128.0], [23.2, 128.0], [23.3, 129.0], [23.4, 129.0], [23.5, 130.0], [23.6, 130.0], [23.7, 130.0], [23.8, 131.0], [23.9, 131.0], [24.0, 132.0], [24.1, 132.0], [24.2, 132.0], [24.3, 133.0], [24.4, 133.0], [24.5, 133.0], [24.6, 134.0], [24.7, 134.0], [24.8, 135.0], [24.9, 135.0], [25.0, 136.0], [25.1, 136.0], [25.2, 136.0], [25.3, 137.0], [25.4, 137.0], [25.5, 137.0], [25.6, 138.0], [25.7, 138.0], [25.8, 138.0], [25.9, 139.0], [26.0, 139.0], [26.1, 140.0], [26.2, 140.0], [26.3, 140.0], [26.4, 141.0], [26.5, 141.0], [26.6, 141.0], [26.7, 142.0], [26.8, 142.0], [26.9, 143.0], [27.0, 143.0], [27.1, 144.0], [27.2, 144.0], [27.3, 144.0], [27.4, 145.0], [27.5, 145.0], [27.6, 146.0], [27.7, 146.0], [27.8, 146.0], [27.9, 147.0], [28.0, 147.0], [28.1, 148.0], [28.2, 148.0], [28.3, 149.0], [28.4, 149.0], [28.5, 149.0], [28.6, 150.0], [28.7, 150.0], [28.8, 151.0], [28.9, 151.0], [29.0, 152.0], [29.1, 152.0], [29.2, 153.0], [29.3, 153.0], [29.4, 154.0], [29.5, 154.0], [29.6, 155.0], [29.7, 155.0], [29.8, 156.0], [29.9, 156.0], [30.0, 156.0], [30.1, 157.0], [30.2, 157.0], [30.3, 158.0], [30.4, 158.0], [30.5, 159.0], [30.6, 159.0], [30.7, 160.0], [30.8, 160.0], [30.9, 161.0], [31.0, 161.0], [31.1, 161.0], [31.2, 162.0], [31.3, 162.0], [31.4, 163.0], [31.5, 163.0], [31.6, 164.0], [31.7, 164.0], [31.8, 164.0], [31.9, 165.0], [32.0, 165.0], [32.1, 166.0], [32.2, 166.0], [32.3, 167.0], [32.4, 167.0], [32.5, 167.0], [32.6, 168.0], [32.7, 168.0], [32.8, 169.0], [32.9, 169.0], [33.0, 169.0], [33.1, 170.0], [33.2, 170.0], [33.3, 171.0], [33.4, 171.0], [33.5, 171.0], [33.6, 172.0], [33.7, 172.0], [33.8, 173.0], [33.9, 173.0], [34.0, 173.0], [34.1, 174.0], [34.2, 174.0], [34.3, 175.0], [34.4, 175.0], [34.5, 176.0], [34.6, 176.0], [34.7, 176.0], [34.8, 177.0], [34.9, 177.0], [35.0, 178.0], [35.1, 178.0], [35.2, 179.0], [35.3, 179.0], [35.4, 179.0], [35.5, 180.0], [35.6, 180.0], [35.7, 181.0], [35.8, 181.0], [35.9, 181.0], [36.0, 182.0], [36.1, 182.0], [36.2, 183.0], [36.3, 183.0], [36.4, 184.0], [36.5, 184.0], [36.6, 184.0], [36.7, 185.0], [36.8, 185.0], [36.9, 186.0], [37.0, 186.0], [37.1, 187.0], [37.2, 187.0], [37.3, 188.0], [37.4, 188.0], [37.5, 188.0], [37.6, 189.0], [37.7, 189.0], [37.8, 190.0], [37.9, 190.0], [38.0, 191.0], [38.1, 191.0], [38.2, 192.0], [38.3, 192.0], [38.4, 192.0], [38.5, 193.0], [38.6, 193.0], [38.7, 194.0], [38.8, 194.0], [38.9, 195.0], [39.0, 195.0], [39.1, 196.0], [39.2, 196.0], [39.3, 196.0], [39.4, 197.0], [39.5, 197.0], [39.6, 198.0], [39.7, 198.0], [39.8, 199.0], [39.9, 199.0], [40.0, 199.0], [40.1, 200.0], [40.2, 200.0], [40.3, 201.0], [40.4, 201.0], [40.5, 202.0], [40.6, 202.0], [40.7, 203.0], [40.8, 203.0], [40.9, 203.0], [41.0, 204.0], [41.1, 204.0], [41.2, 205.0], [41.3, 205.0], [41.4, 206.0], [41.5, 206.0], [41.6, 207.0], [41.7, 207.0], [41.8, 208.0], [41.9, 208.0], [42.0, 209.0], [42.1, 209.0], [42.2, 210.0], [42.3, 210.0], [42.4, 211.0], [42.5, 211.0], [42.6, 212.0], [42.7, 212.0], [42.8, 213.0], [42.9, 213.0], [43.0, 214.0], [43.1, 214.0], [43.2, 215.0], [43.3, 215.0], [43.4, 216.0], [43.5, 216.0], [43.6, 217.0], [43.7, 217.0], [43.8, 218.0], [43.9, 218.0], [44.0, 218.0], [44.1, 219.0], [44.2, 219.0], [44.3, 220.0], [44.4, 220.0], [44.5, 220.0], [44.6, 221.0], [44.7, 221.0], [44.8, 222.0], [44.9, 222.0], [45.0, 223.0], [45.1, 223.0], [45.2, 223.0], [45.3, 224.0], [45.4, 224.0], [45.5, 225.0], [45.6, 225.0], [45.7, 225.0], [45.8, 226.0], [45.9, 226.0], [46.0, 227.0], [46.1, 227.0], [46.2, 227.0], [46.3, 228.0], [46.4, 228.0], [46.5, 229.0], [46.6, 229.0], [46.7, 229.0], [46.8, 230.0], [46.9, 230.0], [47.0, 231.0], [47.1, 231.0], [47.2, 232.0], [47.3, 232.0], [47.4, 232.0], [47.5, 233.0], [47.6, 233.0], [47.7, 233.0], [47.8, 234.0], [47.9, 234.0], [48.0, 235.0], [48.1, 235.0], [48.2, 236.0], [48.3, 236.0], [48.4, 236.0], [48.5, 237.0], [48.6, 237.0], [48.7, 238.0], [48.8, 238.0], [48.9, 239.0], [49.0, 239.0], [49.1, 239.0], [49.2, 240.0], [49.3, 240.0], [49.4, 241.0], [49.5, 241.0], [49.6, 242.0], [49.7, 242.0], [49.8, 242.0], [49.9, 243.0], [50.0, 243.0], [50.1, 243.0], [50.2, 244.0], [50.3, 244.0], [50.4, 244.0], [50.5, 245.0], [50.6, 245.0], [50.7, 246.0], [50.8, 246.0], [50.9, 246.0], [51.0, 247.0], [51.1, 247.0], [51.2, 248.0], [51.3, 248.0], [51.4, 248.0], [51.5, 249.0], [51.6, 249.0], [51.7, 250.0], [51.8, 250.0], [51.9, 251.0], [52.0, 251.0], [52.1, 251.0], [52.2, 252.0], [52.3, 252.0], [52.4, 253.0], [52.5, 253.0], [52.6, 253.0], [52.7, 254.0], [52.8, 254.0], [52.9, 255.0], [53.0, 255.0], [53.1, 256.0], [53.2, 256.0], [53.3, 257.0], [53.4, 257.0], [53.5, 257.0], [53.6, 258.0], [53.7, 258.0], [53.8, 259.0], [53.9, 259.0], [54.0, 260.0], [54.1, 260.0], [54.2, 261.0], [54.3, 261.0], [54.4, 262.0], [54.5, 262.0], [54.6, 263.0], [54.7, 263.0], [54.8, 264.0], [54.9, 264.0], [55.0, 264.0], [55.1, 265.0], [55.2, 265.0], [55.3, 266.0], [55.4, 266.0], [55.5, 267.0], [55.6, 267.0], [55.7, 268.0], [55.8, 268.0], [55.9, 268.0], [56.0, 269.0], [56.1, 269.0], [56.2, 270.0], [56.3, 270.0], [56.4, 271.0], [56.5, 271.0], [56.6, 272.0], [56.7, 272.0], [56.8, 272.0], [56.9, 273.0], [57.0, 273.0], [57.1, 274.0], [57.2, 274.0], [57.3, 275.0], [57.4, 275.0], [57.5, 276.0], [57.6, 276.0], [57.7, 276.0], [57.8, 277.0], [57.9, 277.0], [58.0, 278.0], [58.1, 278.0], [58.2, 279.0], [58.3, 279.0], [58.4, 279.0], [58.5, 280.0], [58.6, 280.0], [58.7, 281.0], [58.8, 281.0], [58.9, 281.0], [59.0, 282.0], [59.1, 282.0], [59.2, 283.0], [59.3, 283.0], [59.4, 284.0], [59.5, 284.0], [59.6, 284.0], [59.7, 285.0], [59.8, 285.0], [59.9, 286.0], [60.0, 286.0], [60.1, 287.0], [60.2, 287.0], [60.3, 288.0], [60.4, 288.0], [60.5, 289.0], [60.6, 289.0], [60.7, 290.0], [60.8, 290.0], [60.9, 291.0], [61.0, 291.0], [61.1, 292.0], [61.2, 292.0], [61.3, 293.0], [61.4, 293.0], [61.5, 294.0], [61.6, 294.0], [61.7, 295.0], [61.8, 295.0], [61.9, 296.0], [62.0, 296.0], [62.1, 297.0], [62.2, 297.0], [62.3, 298.0], [62.4, 298.0], [62.5, 299.0], [62.6, 300.0], [62.7, 300.0], [62.8, 301.0], [62.9, 301.0], [63.0, 302.0], [63.1, 302.0], [63.2, 303.0], [63.3, 303.0], [63.4, 304.0], [63.5, 304.0], [63.6, 305.0], [63.7, 305.0], [63.8, 305.0], [63.9, 306.0], [64.0, 306.0], [64.1, 307.0], [64.2, 307.0], [64.3, 308.0], [64.4, 308.0], [64.5, 309.0], [64.6, 309.0], [64.7, 309.0], [64.8, 310.0], [64.9, 310.0], [65.0, 311.0], [65.1, 311.0], [65.2, 312.0], [65.3, 312.0], [65.4, 313.0], [65.5, 313.0], [65.6, 313.0], [65.7, 314.0], [65.8, 314.0], [65.9, 315.0], [66.0, 315.0], [66.1, 316.0], [66.2, 316.0], [66.3, 317.0], [66.4, 317.0], [66.5, 317.0], [66.6, 318.0], [66.7, 318.0], [66.8, 319.0], [66.9, 319.0], [67.0, 320.0], [67.1, 320.0], [67.2, 321.0], [67.3, 321.0], [67.4, 322.0], [67.5, 322.0], [67.6, 323.0], [67.7, 323.0], [67.8, 324.0], [67.9, 324.0], [68.0, 325.0], [68.1, 325.0], [68.2, 326.0], [68.3, 326.0], [68.4, 327.0], [68.5, 327.0], [68.6, 328.0], [68.7, 328.0], [68.8, 329.0], [68.9, 329.0], [69.0, 330.0], [69.1, 330.0], [69.2, 331.0], [69.3, 331.0], [69.4, 332.0], [69.5, 332.0], [69.6, 333.0], [69.7, 333.0], [69.8, 334.0], [69.9, 334.0], [70.0, 335.0], [70.1, 335.0], [70.2, 336.0], [70.3, 336.0], [70.4, 337.0], [70.5, 337.0], [70.6, 338.0], [70.7, 338.0], [70.8, 339.0], [70.9, 340.0], [71.0, 340.0], [71.1, 340.0], [71.2, 341.0], [71.3, 341.0], [71.4, 342.0], [71.5, 342.0], [71.6, 343.0], [71.7, 343.0], [71.8, 344.0], [71.9, 344.0], [72.0, 345.0], [72.1, 345.0], [72.2, 346.0], [72.3, 346.0], [72.4, 347.0], [72.5, 347.0], [72.6, 348.0], [72.7, 348.0], [72.8, 349.0], [72.9, 349.0], [73.0, 350.0], [73.1, 350.0], [73.2, 351.0], [73.3, 351.0], [73.4, 352.0], [73.5, 352.0], [73.6, 353.0], [73.7, 353.0], [73.8, 354.0], [73.9, 354.0], [74.0, 355.0], [74.1, 355.0], [74.2, 356.0], [74.3, 356.0], [74.4, 357.0], [74.5, 357.0], [74.6, 358.0], [74.7, 359.0], [74.8, 359.0], [74.9, 360.0], [75.0, 360.0], [75.1, 361.0], [75.2, 361.0], [75.3, 362.0], [75.4, 362.0], [75.5, 363.0], [75.6, 363.0], [75.7, 364.0], [75.8, 364.0], [75.9, 365.0], [76.0, 365.0], [76.1, 366.0], [76.2, 366.0], [76.3, 367.0], [76.4, 368.0], [76.5, 368.0], [76.6, 368.0], [76.7, 369.0], [76.8, 369.0], [76.9, 370.0], [77.0, 370.0], [77.1, 371.0], [77.2, 371.0], [77.3, 372.0], [77.4, 372.0], [77.5, 373.0], [77.6, 373.0], [77.7, 374.0], [77.8, 374.0], [77.9, 375.0], [78.0, 375.0], [78.1, 376.0], [78.2, 376.0], [78.3, 377.0], [78.4, 377.0], [78.5, 378.0], [78.6, 378.0], [78.7, 379.0], [78.8, 379.0], [78.9, 380.0], [79.0, 380.0], [79.1, 381.0], [79.2, 381.0], [79.3, 382.0], [79.4, 382.0], [79.5, 383.0], [79.6, 383.0], [79.7, 384.0], [79.8, 384.0], [79.9, 385.0], [80.0, 385.0], [80.1, 386.0], [80.2, 387.0], [80.3, 387.0], [80.4, 388.0], [80.5, 388.0], [80.6, 389.0], [80.7, 389.0], [80.8, 390.0], [80.9, 390.0], [81.0, 391.0], [81.1, 391.0], [81.2, 392.0], [81.3, 392.0], [81.4, 393.0], [81.5, 393.0], [81.6, 394.0], [81.7, 394.0], [81.8, 395.0], [81.9, 395.0], [82.0, 396.0], [82.1, 396.0], [82.2, 397.0], [82.3, 397.0], [82.4, 398.0], [82.5, 399.0], [82.6, 399.0], [82.7, 399.0], [82.8, 400.0], [82.9, 400.0], [83.0, 401.0], [83.1, 402.0], [83.2, 402.0], [83.3, 403.0], [83.4, 403.0], [83.5, 404.0], [83.6, 404.0], [83.7, 405.0], [83.8, 405.0], [83.9, 406.0], [84.0, 406.0], [84.1, 407.0], [84.2, 407.0], [84.3, 408.0], [84.4, 408.0], [84.5, 409.0], [84.6, 409.0], [84.7, 410.0], [84.8, 411.0], [84.9, 411.0], [85.0, 412.0], [85.1, 412.0], [85.2, 413.0], [85.3, 413.0], [85.4, 414.0], [85.5, 415.0], [85.6, 415.0], [85.7, 416.0], [85.8, 416.0], [85.9, 417.0], [86.0, 417.0], [86.1, 418.0], [86.2, 418.0], [86.3, 419.0], [86.4, 420.0], [86.5, 421.0], [86.6, 421.0], [86.7, 422.0], [86.8, 423.0], [86.9, 423.0], [87.0, 424.0], [87.1, 425.0], [87.2, 425.0], [87.3, 426.0], [87.4, 427.0], [87.5, 428.0], [87.6, 428.0], [87.7, 429.0], [87.8, 430.0], [87.9, 431.0], [88.0, 432.0], [88.1, 432.0], [88.2, 433.0], [88.3, 434.0], [88.4, 435.0], [88.5, 436.0], [88.6, 436.0], [88.7, 437.0], [88.8, 438.0], [88.9, 439.0], [89.0, 440.0], [89.1, 441.0], [89.2, 442.0], [89.3, 443.0], [89.4, 444.0], [89.5, 444.0], [89.6, 445.0], [89.7, 446.0], [89.8, 447.0], [89.9, 448.0], [90.0, 449.0], [90.1, 450.0], [90.2, 451.0], [90.3, 452.0], [90.4, 453.0], [90.5, 454.0], [90.6, 455.0], [90.7, 455.0], [90.8, 456.0], [90.9, 457.0], [91.0, 458.0], [91.1, 459.0], [91.2, 459.0], [91.3, 460.0], [91.4, 461.0], [91.5, 462.0], [91.6, 463.0], [91.7, 464.0], [91.8, 465.0], [91.9, 465.0], [92.0, 466.0], [92.1, 467.0], [92.2, 468.0], [92.3, 469.0], [92.4, 470.0], [92.5, 471.0], [92.6, 472.0], [92.7, 473.0], [92.8, 473.0], [92.9, 474.0], [93.0, 475.0], [93.1, 476.0], [93.2, 477.0], [93.3, 478.0], [93.4, 479.0], [93.5, 480.0], [93.6, 481.0], [93.7, 482.0], [93.8, 483.0], [93.9, 484.0], [94.0, 485.0], [94.1, 486.0], [94.2, 487.0], [94.3, 488.0], [94.4, 489.0], [94.5, 490.0], [94.6, 491.0], [94.7, 492.0], [94.8, 494.0], [94.9, 495.0], [95.0, 496.0], [95.1, 498.0], [95.2, 499.0], [95.3, 500.0], [95.4, 502.0], [95.5, 503.0], [95.6, 505.0], [95.7, 506.0], [95.8, 508.0], [95.9, 509.0], [96.0, 511.0], [96.1, 513.0], [96.2, 515.0], [96.3, 517.0], [96.4, 519.0], [96.5, 522.0], [96.6, 524.0], [96.7, 526.0], [96.8, 528.0], [96.9, 530.0], [97.0, 533.0], [97.1, 535.0], [97.2, 539.0], [97.3, 541.0], [97.4, 544.0], [97.5, 547.0], [97.6, 550.0], [97.7, 554.0], [97.8, 557.0], [97.9, 561.0], [98.0, 565.0], [98.1, 569.0], [98.2, 573.0], [98.3, 577.0], [98.4, 581.0], [98.5, 586.0], [98.6, 591.0], [98.7, 597.0], [98.8, 603.0], [98.9, 611.0], [99.0, 619.0], [99.1, 627.0], [99.2, 639.0], [99.3, 651.0], [99.4, 664.0], [99.5, 680.0], [99.6, 695.0], [99.7, 716.0], [99.8, 762.0], [99.9, 824.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 39074.0, "series": [{"data": [[0.0, 27719.0], [600.0, 1481.0], [700.0, 414.0], [200.0, 37732.0], [800.0, 139.0], [900.0, 53.0], [1000.0, 14.0], [1100.0, 1.0], [300.0, 33580.0], [1200.0, 2.0], [400.0, 20917.0], [100.0, 39074.0], [7000.0, 2.0], [500.0, 5851.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 166979.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 166979.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 166979.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.945507939960873, "minX": 1.65121962E12, "maxY": 139.94080651128377, "series": [{"data": [[1.65121998E12, 110.38714451844812], [1.6512198E12, 58.670168855534804], [1.6512201E12, 139.94080651128377], [1.65121992E12, 93.70127129820088], [1.65121962E12, 10.945507939960873], [1.65122004E12, 127.04935463394017], [1.65121974E12, 42.14214770118005], [1.65121968E12, 24.91034207069847], [1.65122016E12, 68.3371855061993], [1.65121986E12, 75.6078369075986]], "isOverall": false, "label": "jp@gc - Stepping Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65122016E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 15.0, "minX": 1.0, "maxY": 467.489932885906, "series": [{"data": [[2.0, 53.91666666666668], [3.0, 48.58620689655173], [4.0, 44.976190476190474], [5.0, 21.41159420289856], [6.0, 40.054054054054056], [7.0, 40.89285714285715], [8.0, 49.500000000000014], [9.0, 59.42465753424657], [10.0, 42.01486939048899], [11.0, 54.04], [12.0, 53.419642857142854], [13.0, 46.8273381294964], [14.0, 53.4296296296296], [15.0, 50.09176470588235], [16.0, 58.347517730496456], [17.0, 59.53061224489795], [18.0, 61.4258064516129], [19.0, 67.7928571428571], [20.0, 69.88828246825574], [21.0, 74.41780821917806], [22.0, 75.57142857142864], [23.0, 79.78082191780823], [24.0, 78.57236842105267], [25.0, 79.25450450450452], [26.0, 81.9590643274854], [27.0, 90.47260273972603], [28.0, 94.75510204081633], [29.0, 94.71794871794874], [30.0, 99.87510584250617], [31.0, 108.15999999999998], [32.0, 105.56874999999995], [33.0, 105.71250000000002], [34.0, 109.98701298701299], [35.0, 111.28538812785388], [36.0, 114.77976190476191], [37.0, 117.40718562874252], [38.0, 123.11842105263156], [39.0, 126.05696202531644], [40.0, 127.89956198431287], [41.0, 130.09146341463418], [42.0, 132.8773006134969], [43.0, 134.05851063829775], [44.0, 140.0], [45.0, 143.57664233576642], [46.0, 147.78488372093008], [47.0, 142.0880503144655], [48.0, 158.9239130434783], [49.0, 148.89696969696962], [50.0, 157.56046394351978], [51.0, 161.01980198019805], [52.0, 164.53416149068323], [53.0, 170.99999999999997], [54.0, 169.0967741935484], [55.0, 175.2317073170732], [56.0, 175.4342857142858], [57.0, 181.56804733727813], [58.0, 179.9044585987262], [59.0, 192.31137724550894], [60.0, 193.86846698839707], [61.0, 199.98000000000008], [62.0, 211.39735099337742], [63.0, 196.33532934131736], [64.0, 204.9757575757576], [65.0, 217.37313432835816], [66.0, 210.63586956521746], [67.0, 216.79268292682937], [68.0, 225.40441176470594], [69.0, 216.94318181818193], [70.0, 221.0759135877246], [71.0, 221.590909090909], [72.0, 227.34895833333323], [73.0, 231.5126582278481], [74.0, 233.84848484848482], [75.0, 239.32828282828282], [76.0, 245.20903954802264], [77.0, 246.60818713450288], [78.0, 249.49696969696964], [79.0, 242.8231707317073], [80.0, 254.7811990212072], [81.0, 264.5757575757576], [82.0, 255.17469879518066], [83.0, 260.74213836478], [84.0, 265.02453987730087], [85.0, 270.52028639618123], [86.0, 283.8387096774194], [87.0, 276.5882352941175], [88.0, 293.1119402985075], [89.0, 284.360576923077], [90.0, 284.1746835443034], [91.0, 293.0641711229946], [92.0, 290.22784810126586], [93.0, 301.1975308641974], [94.0, 296.0104712041887], [95.0, 310.5679758308156], [96.0, 313.28413284132824], [97.0, 303.7191780821917], [98.0, 295.73157894736835], [99.0, 322.66666666666663], [100.0, 315.87465940054636], [101.0, 332.89115646258523], [102.0, 310.7111111111111], [103.0, 342.04761904761904], [104.0, 333.43529411764706], [105.0, 334.33902439024394], [106.0, 332.0635838150287], [107.0, 325.95475113122177], [108.0, 333.6666666666666], [109.0, 337.5076923076923], [110.0, 348.66771829839155], [111.0, 382.0479041916168], [112.0, 352.82692307692304], [113.0, 356.8595505617978], [114.0, 339.3496932515334], [115.0, 375.4306784660767], [116.0, 363.9367816091953], [117.0, 362.23350253807115], [118.0, 392.9038461538463], [119.0, 376.311320754717], [120.0, 379.14641586171786], [121.0, 352.8980582524271], [122.0, 413.37297297297295], [123.0, 392.37414965986403], [124.0, 392.7374301675978], [125.0, 395.7535885167464], [126.0, 404.26785714285717], [127.0, 401.2484848484848], [128.0, 416.4604651162792], [129.0, 395.3467336683419], [130.0, 411.70332013402276], [131.0, 427.8793103448275], [132.0, 392.914772727273], [133.0, 467.489932885906], [134.0, 425.1608040201005], [135.0, 433.06547619047643], [136.0, 415.6431718061674], [137.0, 450.63387978142083], [138.0, 436.18333333333334], [139.0, 393.19895287958127], [140.0, 444.18618193264064], [1.0, 15.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[79.83169739907505, 254.49568508614803]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 140.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 21459.75, "minX": 1.65121962E12, "maxY": 107753.86666666667, "series": [{"data": [[1.65121998E12, 107528.73333333334], [1.6512198E12, 106075.1], [1.6512201E12, 107554.8], [1.65121992E12, 107753.86666666667], [1.65121962E12, 52252.933333333334], [1.65122004E12, 107462.45], [1.65121974E12, 106436.96666666666], [1.65121968E12, 99522.7], [1.65122016E12, 47215.55], [1.65121986E12, 107379.88333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65121998E12, 48871.5], [1.6512198E12, 48189.5], [1.6512201E12, 48879.25], [1.65121992E12, 48972.25], [1.65121962E12, 23751.166666666668], [1.65122004E12, 48835.333333333336], [1.65121974E12, 48378.083333333336], [1.65121968E12, 45236.75], [1.65122016E12, 21459.75], [1.65121986E12, 48783.666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65122016E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 45.77180770067422, "minX": 1.65121962E12, "maxY": 443.707573595476, "series": [{"data": [[1.65121998E12, 349.57960672375305], [1.6512198E12, 188.36537121415205], [1.6512201E12, 443.707573595476], [1.65121992E12, 296.3244184206356], [1.65121962E12, 45.77180770067422], [1.65122004E12, 401.7501586965698], [1.65121974E12, 134.46173973407468], [1.65121968E12, 84.68014390954285], [1.65122016E12, 218.4017094017089], [1.65121986E12, 239.58940958432532]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65122016E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 45.73754622579949, "minX": 1.65121962E12, "maxY": 443.6921410073471, "series": [{"data": [[1.65121998E12, 349.5572470662837], [1.6512198E12, 187.9533101045297], [1.6512201E12, 443.6921410073471], [1.65121992E12, 296.30611383657856], [1.65121962E12, 45.73754622579949], [1.65122004E12, 401.72508463816985], [1.65121974E12, 134.4450792972713], [1.65121968E12, 84.6566158414715], [1.65122016E12, 218.38666185145087], [1.65121986E12, 239.19083929044075]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65122016E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 34.03861213835108, "minX": 1.65121962E12, "maxY": 412.51672744569595, "series": [{"data": [[1.65121998E12, 325.35453007717416], [1.6512198E12, 171.16483516483427], [1.6512201E12, 412.51672744569595], [1.65121992E12, 275.9884475391677], [1.65121962E12, 34.03861213835108], [1.65122004E12, 372.72005924671987], [1.65121974E12, 120.22828002349561], [1.65121968E12, 70.16932214036895], [1.65122016E12, 200.3179246418684], [1.65121986E12, 222.66497220015947]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65122016E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 16.0, "minX": 17.0, "maxY": 446.5, "series": [{"data": [[17.0, 38.0], [26.0, 16.0], [69.0, 46.0], [120.0, 42.0], [160.0, 43.0], [162.0, 55.5], [187.0, 52.0], [197.0, 51.0], [199.0, 48.0], [205.0, 47.0], [204.0, 50.0], [203.0, 47.0], [211.0, 46.0], [212.0, 47.0], [208.0, 52.0], [219.0, 46.0], [225.0, 43.0], [231.0, 41.0], [224.0, 42.0], [230.0, 44.0], [237.0, 42.0], [234.0, 39.5], [239.0, 40.0], [247.0, 38.0], [240.0, 40.0], [244.0, 39.5], [254.0, 38.0], [250.0, 38.0], [257.0, 37.0], [264.0, 36.0], [256.0, 39.0], [270.0, 46.0], [268.0, 56.5], [269.0, 436.0], [261.0, 76.0], [266.0, 74.5], [258.0, 278.5], [271.0, 404.0], [275.0, 65.0], [272.0, 34.0], [273.0, 75.0], [278.0, 45.0], [287.0, 116.0], [277.0, 69.0], [276.0, 76.0], [281.0, 68.0], [280.0, 103.0], [286.0, 329.0], [284.0, 274.5], [285.0, 217.5], [283.0, 70.0], [282.0, 126.0], [291.0, 88.0], [290.0, 109.0], [289.0, 82.0], [288.0, 149.0], [292.0, 192.5], [294.0, 145.0], [293.0, 200.5], [295.0, 311.0], [296.0, 241.0], [302.0, 233.0], [303.0, 275.0], [301.0, 348.0], [300.0, 352.0], [297.0, 162.0], [299.0, 192.5], [298.0, 325.5], [305.0, 172.0], [310.0, 283.0], [312.0, 295.0], [304.0, 241.0], [311.0, 225.0], [315.0, 164.0], [314.0, 250.0], [313.0, 244.0], [308.0, 201.0], [306.0, 229.0], [316.0, 246.0], [317.0, 194.0], [319.0, 224.0], [318.0, 210.0], [307.0, 246.0], [309.0, 289.0], [322.0, 273.0], [320.0, 291.0], [324.0, 272.0], [325.0, 334.0], [321.0, 221.0], [323.0, 217.0], [332.0, 360.0], [334.0, 246.5], [333.0, 318.0], [328.0, 321.0], [335.0, 388.0], [327.0, 290.0], [331.0, 216.5], [330.0, 296.0], [329.0, 280.0], [326.0, 304.0], [338.0, 326.0], [340.0, 214.0], [341.0, 310.0], [349.0, 379.0], [345.0, 400.0], [347.0, 399.0], [339.0, 377.0], [350.0, 385.5], [344.0, 446.5], [343.0, 422.0], [342.0, 445.0], [337.0, 370.0], [367.0, 293.0], [352.0, 421.0], [353.0, 411.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 367.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.0, "minX": 17.0, "maxY": 446.5, "series": [{"data": [[17.0, 38.0], [26.0, 16.0], [69.0, 46.0], [120.0, 42.0], [160.0, 43.0], [162.0, 55.5], [187.0, 52.0], [197.0, 51.0], [199.0, 48.0], [205.0, 47.0], [204.0, 50.0], [203.0, 47.0], [211.0, 46.0], [212.0, 47.0], [208.0, 52.0], [219.0, 46.0], [225.0, 43.0], [231.0, 41.0], [224.0, 42.0], [230.0, 44.0], [237.0, 42.0], [234.0, 39.5], [239.0, 40.0], [247.0, 38.0], [240.0, 40.0], [244.0, 39.5], [254.0, 38.0], [250.0, 38.0], [257.0, 37.0], [264.0, 36.0], [256.0, 39.0], [270.0, 46.0], [268.0, 56.5], [269.0, 436.0], [261.0, 76.0], [266.0, 74.0], [258.0, 277.5], [271.0, 404.0], [275.0, 65.0], [272.0, 34.0], [273.0, 75.0], [278.0, 45.0], [287.0, 116.0], [277.0, 69.0], [276.0, 76.0], [281.0, 68.0], [280.0, 103.0], [286.0, 329.0], [284.0, 274.5], [285.0, 217.5], [283.0, 70.0], [282.0, 126.0], [291.0, 88.0], [290.0, 109.0], [289.0, 82.0], [288.0, 149.0], [292.0, 192.5], [294.0, 145.0], [293.0, 200.5], [295.0, 311.0], [296.0, 241.0], [302.0, 233.0], [303.0, 275.0], [301.0, 348.0], [300.0, 352.0], [297.0, 162.0], [299.0, 192.5], [298.0, 325.5], [305.0, 172.0], [310.0, 283.0], [312.0, 295.0], [304.0, 241.0], [311.0, 225.0], [315.0, 163.5], [314.0, 250.0], [313.0, 244.0], [308.0, 201.0], [306.0, 229.0], [316.0, 246.0], [317.0, 194.0], [319.0, 224.0], [318.0, 210.0], [307.0, 246.0], [309.0, 289.0], [322.0, 273.0], [320.0, 291.0], [324.0, 272.0], [325.0, 334.0], [321.0, 221.0], [323.0, 217.0], [332.0, 360.0], [334.0, 246.5], [333.0, 318.0], [328.0, 321.0], [335.0, 388.0], [327.0, 290.0], [331.0, 216.5], [330.0, 296.0], [329.0, 279.0], [326.0, 304.0], [338.0, 326.0], [340.0, 214.0], [341.0, 310.0], [349.0, 379.0], [345.0, 400.0], [347.0, 399.0], [339.0, 377.0], [350.0, 385.5], [344.0, 446.5], [343.0, 422.0], [342.0, 445.0], [337.0, 370.0], [367.0, 293.0], [352.0, 421.0], [353.0, 411.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 367.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 136.2, "minX": 1.65121962E12, "maxY": 316.25, "series": [{"data": [[1.65121998E12, 315.6333333333333], [1.6512198E12, 311.25], [1.6512201E12, 315.26666666666665], [1.65121992E12, 316.25], [1.65121962E12, 153.56666666666666], [1.65122004E12, 315.4], [1.65121974E12, 312.45], [1.65121968E12, 292.01666666666665], [1.65122016E12, 136.2], [1.65121986E12, 314.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65122016E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.65121962E12, "maxY": 315.95, "series": [{"data": [[1.6512198E12, 0.016666666666666666], [1.65121986E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.65121998E12, 315.3], [1.6512198E12, 310.9], [1.6512201E12, 315.35], [1.65121992E12, 315.95], [1.65121962E12, 153.23333333333332], [1.65122004E12, 315.06666666666666], [1.65121974E12, 312.1166666666667], [1.65121968E12, 291.85], [1.65122016E12, 138.45], [1.65121986E12, 314.73333333333335]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65122016E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 138.45, "minX": 1.65121962E12, "maxY": 315.95, "series": [{"data": [[1.65121998E12, 315.3], [1.6512198E12, 310.9166666666667], [1.6512201E12, 315.35], [1.65121992E12, 315.95], [1.65121962E12, 153.23333333333332], [1.65122004E12, 315.06666666666666], [1.65121974E12, 312.1166666666667], [1.65121968E12, 291.85], [1.65122016E12, 138.45], [1.65121986E12, 314.75]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65122016E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 138.45, "minX": 1.65121962E12, "maxY": 315.95, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65121998E12, 315.3], [1.6512198E12, 310.9166666666667], [1.6512201E12, 315.35], [1.65121992E12, 315.95], [1.65121962E12, 153.23333333333332], [1.65122004E12, 315.06666666666666], [1.65121974E12, 312.1166666666667], [1.65121968E12, 291.85], [1.65122016E12, 138.45], [1.65121986E12, 314.75]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65122016E12, "title": "Total Transactions Per Second"}},
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

