const testResponse = `{
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.5171,
        "lon": -0.1062,
        "tz_id": "Europe/London",
        "localtime_epoch": 1737821926,
        "localtime": "2025-01-25 16:18"
    },
    "current": {
        "last_updated_epoch": 1737821700,
        "last_updated": "2025-01-25 16:15",
        "temp_c": 6.0,
        "temp_f": 42.8,
        "is_day": 1,
        "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
        },
        "wind_mph": 3.6,
        "wind_kph": 5.8,
        "wind_degree": 281,
        "wind_dir": "WNW",
        "pressure_mb": 1006.0,
        "pressure_in": 29.71,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 56,
        "cloud": 0,
        "feelslike_c": 5.0,
        "feelslike_f": 40.9,
        "windchill_c": 4.9,
        "windchill_f": 40.9,
        "heatindex_c": 6.0,
        "heatindex_f": 42.7,
        "dewpoint_c": -1.3,
        "dewpoint_f": 29.8,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 0.0,
        "gust_mph": 5.3,
        "gust_kph": 8.5
    }
}`;


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

let TRobjecy = JSON.parse(testResponse);

    const { location: {name, country, localtime}, current: {last_updated}} = TRobjecy;

    
    console.log(stringKeys.location.name, name);
    console.log(stringKeys.location.country, country);
    console.log(stringKeys.location.localtime, localtime);
    console.log(stringKeys.current.last_updated, last_updated);
    console.log("-------------");
   
    //recursive key lookup prob. fail on array type objects
    const extractKeys = (keys, title) => {
        let queryObjects = Object.entries(keys)
        for (const [key, value] of queryObjects) {           
            console.log(`key /${title}${key}/    /object value: ${value}/`);
            if(typeof value === 'object') extractKeys(value, `${title}${key}.`);
          }
        }


        
    extractKeys(stringKeys, "");

//   const outputHTML = (weatherData) => {
//     //select values from current and current_units objects using keys defined in stringKeys object
//     queryKeys = Object.keys(stringKeys);
