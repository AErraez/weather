import {weather_data} from "./data.js"


let loadDayForecastData = (base) => {
	let info_gye= base[0]
    let {city_code, city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, forecast_week} = info_gye
    document.getElementById("city").innerHTML=city
    document.getElementById("date").innerHTML=date
    document.getElementById("maxtemperature").innerHTML=maxtemperature
    document.getElementById("mintemperature").innerHTML=mintemperature
    document.getElementById("cloudiness").innerHTML=cloudiness
    document.getElementById("wind").innerHTML=wind
    document.getElementById("rainfall").innerHTML=rainfall

    let late_weather= forecast_today[0]
    let {text: txtlt, temperature: templt, forecast: forelt, icon: iconlt } =late_weather
    document.getElementById("late_icon").innerHTML=iconlt
    document.getElementById("late_temperature").innerHTML=templt
    document.getElementById("late_forecast").innerHTML=forelt
    document.getElementById("late_text").innerHTML=txtlt

    let night_weather= forecast_today[1]
    let {text: txtnt, temperature: tempnt, forecast: forent, icon: iconnt } =night_weather
    document.getElementById("night_icon").innerHTML=iconnt
    document.getElementById("night_temperature").innerHTML=tempnt
    document.getElementById("night_forecast").innerHTML=forent
    document.getElementById("night_text").innerHTML=txtnt


}

let loadWeekForecastData = (base) => {
	let info_gye= base[0]
    let {forecast_week} =info_gye
    let list=document.getElementsByClassName("list-group")[0]
    for (let elem of forecast_week){
        let {day,text,date,temperature,icon} =elem
        let forecast_text= `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
          <span class="text-xs">${date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${temperature["min"]}</span> |  <span class="text-dark mx-2">${temperature["max"]}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
        </div>
        </li>`
        list.innerHTML+=forecast_text 


    }

	
}

document.addEventListener = ('DOMContentLoaded',()=>{
    loadDayForecastData(weather_data)
    
})



if (document.readyState !== 'loading') {
    loadDayForecastData(weather_data)
    let loadbutton = document.getElementById("loadinfo")
    loadbutton.onclick= (event) => {
        loadWeekForecastData(weather_data)
    }
} else {
    document.addEventListener('DOMContentLoaded', function () {
        loadDayForecastData(weather_data)
        let loadbutton = document.getElementById("loadinfo")
        loadbutton.onclick= (event) => {
            loadWeekForecastData(weather_data)
        }
    });
}