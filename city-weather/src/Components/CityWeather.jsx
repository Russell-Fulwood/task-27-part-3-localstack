import { useState, useRef} from 'react';
import './CityWeather.css'

// .env keys for vite/react MUST begin with VITE_ to be processed
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const weatherUrl = 'http://api.weatherapi.com/v1/current.json?key='+ apiKey;


    const stringKeys ={
      location: {
        name: "City Name:",
        country: "Country:",
        localtime: "Time:"
      },
      current: {
        last_updated: "Last Update:",
        temp_c: "Temperature c:",
        condition: {
          text: "Condition:",
          icon: "icon"
        },
        wind_mph: "Wind Speed mph:",
        wind_dir: "Wind Direction:",
        humidity: "Humidity:",
        cloud: "Cloud Cover",
        feelslike_c: "Feels Like c:",
        uv: "UV index:"
      }    
    };


function CityWeather() {
  const [cityName, setCityName] = useState('');
  const [cityWeather, setCityWeather]= useState(null);
  const  displayWeather = useRef('');

  const handleChange = (event) => {
    setCityName(event.target.value);
  }

  const APIWeatherQuery =  async (apiAddress) => {
    try {  // check for api errors 
      let res = await fetch(apiAddress);
      if(!res.ok) console.log('Bad request return 400-403 status code with a json error object');
      let result = await res.json(); 
      setCityWeather(result);  // async result object stored and  state changed
    } catch (error) {
      console.log(error + "Error in Weather Query");
    }      
  }


  const findWeather = () => {
    //check for empty strings 
    if(cityName.trim() === '') return;

    let queryName = weatherUrl + '&q=' + cityName;
    console.log(weatherUrl + '&q=' + cityName);
    setCityName('');
    APIWeatherQuery(queryName); 

  }


    return (
      <>          
        {displayWeather.current}
        <input type='text'  value={cityName} placeholder='City Name' onChange={handleChange} />
        <button onClick={findWeather}>Input</button>
        {/* handle error object returned */}
        {cityWeather && Object.keys(cityWeather)[0] != 'error' ? (
          <div className = 'WeatherInformation'>
            <div className = 'LocationInfo'>
              <p>{stringKeys.location.name} {cityWeather.location.name}</p>
              <p>{stringKeys.location.country} {cityWeather.location.country}</p>
              <p>{stringKeys.location.localtime} {new Date(cityWeather.location.localtime).toUTCString()}</p>
              <p>{stringKeys.current.last_updated} {new Date(cityWeather.current.last_updated).toUTCString()}</p>
            </div>

            <div className = 'WeatherPicture'>
              <p>{stringKeys.current.condition.text} {cityWeather.current.condition.text}</p>
              <img 
                src={`https:${cityWeather.current.condition.icon}`} 
                alt ={stringKeys.current.condition.icon}/>
            </div>
            <div className ='TempDetails'>
              <p>{stringKeys.current.temp_c} {cityWeather.current.temp_c}</p>
              <p>{stringKeys.current.feelslike_c} {cityWeather.current.feelslike_c}</p>
              <p>{stringKeys.current.cloud} {cityWeather.current.cloud}%</p>
              <p>{stringKeys.current.uv} {cityWeather.current.uv}</p>
            </div>
            <div className = 'WindDetails'>
            <p>{stringKeys.current.humidity} {cityWeather.current.humidity}%</p>
            <p>{stringKeys.current.wind_mph} {cityWeather.current.wind_mph}</p>
            <p>{stringKeys.current.wind_dir} {cityWeather.current.wind_dir}</p>
            </div>
          </div>
        ) : (
          <div>
            <h1>Enter City Name for the Weather</h1>
          </div>

        )}        
      </>
    );
  }
   
  export default CityWeather


// London: JSON: http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
// https://api.weatherapi.com/v1/current.json?key=de303478863243e0ac663615252501&q=London

