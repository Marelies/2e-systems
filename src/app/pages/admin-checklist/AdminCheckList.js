import { useState } from "react";
import AdminSearch from "../admin-search/AdminSearch";
import LiveWeather from "../checklist-live-weather/LiveWeather";

import { WEATHER_API_URL, WEATHER_API_KEY } from "../../context/api";
import "../../App.css";



import Header from '../template-components/Header';
function AdminCheackList() {
  const [liveWeather, setLiveWeather] = useState(null);
  

  const handleOnSearchChange = (searchData) => {
    const [latitude, longtitude] = searchData.value.split(" ");

    const liveWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
  

    Promise.all([liveWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
       

        setLiveWeather({ city: searchData.label, ...weatherResponse });
       
      })
      .catch(console.log);
  };
console.log(liveWeather);
  return (
    <div className="page-container" style={{height:"700px"}} >
    <Header
    
    />
    <div className="container"  style={{ marginTop:"3%"} }>
      <AdminSearch  onSearchChange={handleOnSearchChange} />
      {liveWeather && <LiveWeather data={liveWeather} />}
      
    </div>
   
    </div>
  );
}

export default AdminCheackList;