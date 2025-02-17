// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import CityWeather from "./Components/CityWeather"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <CityWeather/>

    </>
  )
}


export default App

/*
{
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.5171,
        "lon": -0.1062,
        "tz_id": "Europe/London",
        "localtime_epoch": 1737787462,
        "localtime": "2025-01-25 06:44"
    },
    "current": {
        "last_updated_epoch": 1737786600,
        "last_updated": "2025-01-25 06:30",
        "temp_c": 4.1,
        "temp_f": 39.4,
        "is_day": 0,
        "condition": {
            "text": "Overcast",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
            "code": 1009
        },
        "wind_mph": 3.1,
        "wind_kph": 5.0,
        "wind_degree": 334,
        "wind_dir": "NNW",
        "pressure_mb": 1002.0,
        "pressure_in": 29.59,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 87,
        "cloud": 100,
        "feelslike_c": 3.1,
        "feelslike_f": 37.5,
        "windchill_c": 3.7,
        "windchill_f": 38.7,
        "heatindex_c": 4.7,
        "heatindex_f": 40.4,
        "dewpoint_c": 0.2,
        "dewpoint_f": 32.3,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 0.0,
        "gust_mph": 4.5,
        "gust_kph": 7.3
    }
}
*/








{/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */}
