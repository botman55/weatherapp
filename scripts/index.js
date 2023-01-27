const apiKey='a29aa41001ceafbdc70829de0a6fc613';


const getweather=async(city)=>{
    // const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`;
    // const url=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}&units=metrics`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    setvals(data);
}
getweather(prompt("Enter your city to get weather report"));
function setvals(data){
    document.getElementById('head').innerHTML=`Weather for ${data.name}`
    document.getElementById('row1').innerHTML=`Curr Temp: ${Math.round(((data.main.temp)-273)*10)/10} Deg C`;
    document.getElementById('row2').innerHTML=`Real feel: ${Math.round(((data.main.feels_like)-273)*10)/10} Deg C`;
    document.getElementById('row3').innerHTML=`Maximum temp: ${Math.round(((data.main.temp_max)-273)*10)/10} Deg C`;
    document.getElementById('row4').innerHTML=`Minimum temp: ${Math.round(((data.main.temp_min)-273)*10)/10} Deg C`;
    document.getElementById('row5').innerHTML=`Humidity: ${Math.round(data.main.humidity)} % `;
    document.getElementById('row6').innerHTML=`Sky: ${data.weather[0].main}`;
    document.getElementById('row7').innerHTML=`Visibility: ${data.visibility} meters`;
    document.getElementById('row8').innerHTML=`Pressure: ${data.main.pressure} pa`;
    document.getElementById('row9').innerHTML=`Sunrise: ${data.sys.sunrise} am`;
    document.getElementById('row10').innerHTML=`Sunset: ${data.sys.sunset} pm`;

}