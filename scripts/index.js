const apiKey='a29aa41001ceafbdc70829de0a6fc613';
let data;
document.cookie="user=bot;expires=Tue, 15 Feb 2023 00:00:00 UTC"
// if(document.cookie=='')
//     document.cookie="loc=;expires=Tue, 15 Feb 2023 00:00:00 UTC"

const getweather=async(city)=>{
    // const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`;
    // const url=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}&units=metrics`;
    if(getCityfromCookie()==city){
        document.getElementById('star').classList.remove('fa-star-o');
        document.getElementById('star').classList.add('fa-star');
    }
    else{
        document.getElementById('star').classList.remove('fa-star');
        document.getElementById('star').classList.add('fa-star-o');
    }
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`
    const response=await fetch(url);
    data=await response.json();
    console.log(data);
    setvals(data);
}

// let cityname;
// cityname=prompt("Enter your current city");
// document.cookie="user=kislay;expires=Tue, 15 Feb 2023 00:00:00 UTC";
// document.cookie=`loc=${cityname};expires=Tue, 15 Feb 2023 00:00:00 UTC`;
function getCityfromCookie(){
    let cont=decodeURIComponent(document.cookie);
    let dc=cont.split(";");
    let cn;
    for(let i=0;i<dc.length;i++){
        let word=dc[i];
        if(word.substring(0,5)==" loc="){
            console.log(`${word.slice(5,)}`);
            cn=`${word.slice(5,)}`;
        }
    }
    return cn;
}
function begin(){
    let cityname;
    if(document.cookie!=` loc=`){
        cityname=getCityfromCookie();
        getweather(cityname);
    }
}
// getweather(cn);
begin();
function setvals(data){
    var format=setdate(data);
    document.getElementById('current-city').innerText=`${data.name}`
    document.getElementById('temperature').innerText=`${Math.round(((data.main.temp)-273)*10)/10} °C`;
    document.getElementById('date').innerText=format;
    document.getElementById('wind-speed').innerText=`${data.wind.speed} m/s`;
    document.getElementById('humidity').innerText=`${data.main.humidity} %`
    // document.getElementById('row2').innerHTML=`Real feel: ${Math.round(((data.main.feels_like)-273)*10)/10} Deg C`;
    // document.getElementById('row3').innerHTML=`Maximum temp: ${Math.round(((data.main.temp_max)-273)*10)/10} Deg C`;
    // document.getElementById('row4').innerHTML=`Minimum temp: ${Math.round(((data.main.temp_min)-273)*10)/10} Deg C`;
    // document.getElementById('row5').innerHTML=`Humidity: ${Math.round(data.main.humidity)} % `;
    document.getElementById('desc').innerText=`${data.weather[0].main}`;
    // document.getElementById('row7').innerHTML=`Visibility: ${data.visibility} meters`;
    // document.getElementById('row8').innerHTML=`Pressure: ${data.main.pressure} pa`;
    // document.getElementById('row9').innerHTML=`Sunrise: ${data.sys.sunrise} am`;
    // document.getElementById('row10').innerHTML=`Sunset: ${data.sys.sunset} pm`;

}
function setdate(data){
    let unix=data.sys.sunrise;
    var date=new Date(unix*1000);
    var format=`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return format;
}
function searchweatherdata(){
    let city=document.getElementById('search-city').value;
    // console.log(city);
    getweather(city);
    document.getElementById('search-city').value='';
}
function setfav(){
    let element=document.getElementById('star');
    let status;
    if(element.classList=='fa fa-star-o'){
        status=1;
        // console.log(status);
        element.classList.remove('fa-star-o');
        element.classList.add('fa-star');
        document.cookie=`loc=${data.name};expires=Tue, 15 Feb 2023 00:00:00 UTC`;
    }
    else{
        status=0;
        // console.log(status);
        element.classList.remove('fa-star');
        console.log();
        element.classList.add('fa-star-o');
        document.cookie=`loc=`;
    }
}