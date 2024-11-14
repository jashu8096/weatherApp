import './Weather.css'
import React, { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { TiWeatherSunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { SiApacheairflow } from "react-icons/si";



function Weather() {
    const [weatherData,setWeatherData] = useState(false); 
    const search =async (city)=>{
        try{
            const url = `api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_API_ID}`
            const response = await fetch(url);
            const data = await response.json()
            console.log(data)
            setWeatherData({
                humidity:data.main.humidity,
                windSpeed: data.main.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name
            })
        }catch(erro){

        }
    }
   useEffect(()=>{
    search('London');

   },[])

  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            <BiSearch  className='icon'/>
        </div>
        <TiWeatherSunny className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature}</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
            <div className='col'>
              <WiHumidity  className='humidity-icon'/>
                <div>
                    <p>{weatherData.humidity}</p>
                    <span>Humidity</span>
                </div>

            </div>

            <div className='col'>
              <SiApacheairflow  className='wind-icon'/>
                <div>
                    <p>{weatherData.speed}</p>
                    <span>Wind speed</span>
                </div>

            </div>
            
            

        </div>
      
    </div>
  )
}

export default Weather