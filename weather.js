
function showWeather(){
  // XMLHttpRequestオブジェクトの作成
var request = new XMLHttpRequest();
request.responseType = 'json';

// URLを開く
var id = "130010";
//var url = "http://weather.livedoor.com/forecast/webservice/json/v1?city=" + id;
var url = "https://weather.tsukumijima.net/api/forecast?city=" + id;

request.open('GET', url, true);
request.setRequestHeader('Access-Control-Allow-Origin', '*');

// レスポンスが返ってきた時の処理を記述 
request.onload = function () {
      var data = this.response;
      console.log(data);
      var pls0_date = data.forecasts[0].date;
      var pls1_date = data.forecasts[1].date;
      var pls2_date = data.forecasts[2].date;
      
      var pls0_weather = data.forecasts[0].telop;
      var pls1_weather = data.forecasts[1].telop;
      var pls2_weather = data.forecasts[2].telop;
      
      var pls0_max_temp = data.forecasts[0].temperature.max.celsius;
      var pls0_min_temp = data.forecasts[0].temperature.min.celsius;
      var pls1_max_temp = data.forecasts[1].temperature.max.celsius;
      var pls1_min_temp = data.forecasts[1].temperature.min.celsius;
      var pls2_max_temp = data.forecasts[2].temperature.max.celsius;
      var pls2_min_temp = data.forecasts[2].temperature.min.celsius;
      
      
      var pub_time = data.publicTime;
      document.getElementById("publicTime").innerHTML = "データ取得日時：" + pub_time;
      
      
      var table  = document.getElementById('WeatherTable');
      //１行目：日付
      table.rows[0].cells[0].innerHTML = pls0_date.split("-")[1]+" / "+pls0_date.split("-")[2];
      table.rows[0].cells[1].innerHTML = pls1_date.split("-")[1]+" / "+pls1_date.split("-")[2];
      table.rows[0].cells[2].innerHTML = pls2_date.split("-")[1]+" / "+pls2_date.split("-")[2];
      //2行目：日付
      table.rows[2].cells[0].innerHTML = pls0_weather;
      table.rows[2].cells[1].innerHTML = pls1_weather;
      table.rows[2].cells[2].innerHTML = pls2_weather;
      //3行目：最高気温
      table.rows[3].cells[0].innerHTML = pls0_max_temp + "°";
      table.rows[3].cells[1].innerHTML = pls1_max_temp + "°";
      table.rows[3].cells[2].innerHTML = pls2_max_temp + "°";
      //4行目：最低気温
      table.rows[4].cells[0].innerHTML = pls0_min_temp + "°";
      table.rows[4].cells[1].innerHTML = pls1_min_temp + "°";
      table.rows[4].cells[2].innerHTML = pls2_min_temp + "°";
      
      
      var img0 = document.getElementById("img0");
      var img1 = document.getElementById("img1");
      var img2 = document.getElementById("img2");
      var img0_url = data.forecasts[0].image.url;
      var img1_url = data.forecasts[1].image.url;
      var img2_url = data.forecasts[2].image.url;
      img0.src = img0_url;
      img1.src = img1_url;
      img2.src = img2_url;
    };

// リクエストをURLに送信
request.send();
}
showWeather();

setInterval('showWeather()',30*60*1000);