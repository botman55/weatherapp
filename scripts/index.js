const apiKey = 'a29aa41001ceafbdc70829de0a6fc613';
const apiKey2 = 'd73f43cd2bc0437f899174523230703';
let data;
document.cookie = "user=bot;expires=Tue, 15 Mar 2023 00:00:00 UTC"


const getweather = async (city) => {
    
    if (getCityfromCookie() == city) {
        document.getElementById('star').classList.remove('fa-star-o');
        document.getElementById('star').classList.add('fa-star');
    }
    else {
        document.getElementById('star').classList.remove('fa-star');
        document.getElementById('star').classList.add('fa-star-o');
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units`
    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    
    const url2 = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey2}&q=${city}&days=7`
    const response2 = await fetch(url2);
    let data2 = await response2.json();
    console.log(data2);

    setvals(data,data2);
    fivedays(data2);
}


function getCityfromCookie() {
    let cont = decodeURIComponent(document.cookie);
    let dc = cont.split(";");
    let cn;
    for (let i = 0; i < dc.length; i++) {
        let word = dc[i];
        if (word.substring(0, 5) == " loc=") {
           
            cn = `${word.slice(5,)}`;
        }
    } 
    return cn;;
}
function begin() {
    let cityname;
    if (document.cookie != ` loc=`) {
        cityname = getCityfromCookie();
        console.log(cityname);
        getweather(cityname);
    }
}

begin();
function setvals(data,data2) {
    var format = setdate(data2);
    document.getElementById('current-city').innerText = `${data.name}`
    document.getElementById('temperature').innerText = `${Math.round(((data.main.temp) - 273) * 10) / 10} °C`;
    document.getElementById('date').innerText = format;
    document.getElementById('wind-speed').innerText = `${data.wind.speed} m/s`;
    document.getElementById('humidity').innerText = `${data.main.humidity} %`
    document.getElementById('feels').innerText = `Feels Like ${Math.round(((data.main.feels_like) - 273) * 10) / 10} °C`;
    document.getElementById('desc').innerText = `${data2.current.condition.text}`;
    document.getElementById('visibility').innerText = `${data.visibility} m`;
    document.getElementById('pressure').innerText = `${data.main.pressure} pa`;

}
function setdate(data) {
    let a=`${data.forecast.forecastday[0].date_epoch}`;
    var date=Date(a);
    d=date.toString().split(" ");
    format=d[0]+", "+d[1]+" "+d[2]+", "+d[3];
    return format;
}
function searchweatherdata() {
    let city = document.getElementById('search-city').value;
    
    getweather(city);
    document.getElementById('search-city').value = '';
}
const searchBox=document.getElementById('search-city');
searchBox.addEventListener('keydown',function(e) {
    if(e.key=='Enter'){
        searchweatherdata();
    }
});


function setfav() {
    let element = document.getElementById('star');
    let status;
    if (element.classList == 'fa fa-star-o') {
        status = 1;
        
        element.classList.remove('fa-star-o');
        element.classList.add('fa-star');
        document.cookie = `loc=${data.name};expires=Tue, 15 Mar 2023 00:00:00 UTC`;
    }
    else {
        status = 0;
        
        element.classList.remove('fa-star');
        console.log();
        element.classList.add('fa-star-o');
        document.cookie = `loc=`;
    }

}


function fivedays(data) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    

    document.getElementById('today_min').innerText = `${data.forecast.forecastday[0].day.mintemp_c}°C`;
    document.getElementById('today_max').innerText = `${data.forecast.forecastday[0].day.maxtemp_c}°C`;
    document.getElementById('today_sunrise').innerText = `${data.forecast.forecastday[0].astro.sunrise}`;
    document.getElementById('today_sunset').innerText = `${data.forecast.forecastday[0].astro.sunset}`;
    document.getElementById('todayIcon').innerHTML=`<img src="https:${data.forecast.forecastday[0].day.condition.icon}">`;
    document.getElementById('icon').innerHTML=`<img src="https:${data.current.condition.icon}">`;
    
    document.getElementById('tempMin1').innerText = `${data.forecast.forecastday[1].day.mintemp_c}°C`;
    document.getElementById('tempMax1').innerText = `${data.forecast.forecastday[1].day.maxtemp_c}°C`;
    document.getElementById('wicon1').innerHTML=`<img src="https:${data.forecast.forecastday[1].day.condition.icon}">`;
    document.getElementById('day1').innerText = `Tomorrow`;

    document.getElementById('tempMin2').innerText = `${data.forecast.forecastday[2].day.mintemp_c}°C`;
    document.getElementById('tempMax2').innerText = `${data.forecast.forecastday[2].day.maxtemp_c}°C`;
    document.getElementById('wicon2').innerHTML=`<img src="https:${data.forecast.forecastday[2].day.condition.icon}">`;
    let a=new Date(`${data.forecast.forecastday[2].date}`);
    document.getElementById('day2').innerText = `${weekday[a.getDay()]}`;

    document.getElementById('tempMin3').innerText = `${data.forecast.forecastday[3].day.mintemp_c}°C`;
    document.getElementById('tempMax3').innerText = `${data.forecast.forecastday[3].day.maxtemp_c}°C`;
    document.getElementById('wicon3').innerHTML=`<img src="https:${data.forecast.forecastday[3].day.condition.icon}">`;
    let b=new Date(`${data.forecast.forecastday[3].date}`);
    document.getElementById('day3').innerText = `${weekday[b.getDay()]}`;

    document.getElementById('tempMin4').innerText = `${data.forecast.forecastday[4].day.mintemp_c}°C`;
    document.getElementById('tempMax4').innerText = `${data.forecast.forecastday[4].day.maxtemp_c}°C`;
    document.getElementById('wicon4').innerHTML=`<img src="https:${data.forecast.forecastday[4].day.condition.icon}">`;
    let c=new Date(`${data.forecast.forecastday[4].date}`);
    document.getElementById('day4').innerText = `${weekday[c.getDay()]}`;

    document.getElementById('tempMin5').innerText = `${data.forecast.forecastday[5].day.mintemp_c}°C`;
    document.getElementById('tempMax5').innerText = `${data.forecast.forecastday[5].day.maxtemp_c}°C`;
    document.getElementById('wicon5').innerHTML=`<img src="https:${data.forecast.forecastday[5].day.condition.icon}">`;
    let d=new Date(`${data.forecast.forecastday[5].date}`);
    document.getElementById('day5').innerText = `${weekday[d.getDay()]}`;

    document.getElementById('tempMin6').innerText = `${data.forecast.forecastday[6].day.mintemp_c}°C`;
    document.getElementById('tempMax6').innerText = `${data.forecast.forecastday[6].day.maxtemp_c}°C`;
    document.getElementById('wicon6').innerHTML=`<img src="https:${data.forecast.forecastday[6].day.condition.icon}">`;
    let e=new Date(`${data.forecast.forecastday[6].date}`);
    document.getElementById('day6').innerText = `${weekday[e.getDay()]}`;

    document.getElementById('uv-index').innerText=`${data.current.uv}`;
    document.getElementById('ppt').innerText=`${data.current.precip_mm} mm`;
} 