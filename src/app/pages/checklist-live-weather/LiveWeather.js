import React from "react";
import "./LiveWeather.css";
import Moment from 'moment';

const LiveWeather = ({ data }) => {



  return (
    <div class="container" id="wrapper">
    <div class="container-fluid" id="current-weather">
      <div class="row">
        
      
        <div class="col-md-4 col-sm-5">
          <h5><spam id="cityName"></spam>{data.city} <spam id="cityCode"></spam></h5>
            <h6 id="localDate">{data.weather[0].description} </h6>
          <h5 id="localTime"></h5>
         
        </div>
     
        <div class="col-md-5 col-sm-7" style={{margin:"10px", autoPadding:"0"}}>
          <div class="row">
          <img src={`icons/${data.weather[0].icon}.png`}  alt="weather" />
            <div>
              <spam id="mainTemperature"></spam>
              
            </div>
            <p style={{fontSize:"40px"}}><a href="#" class="active" id="celcius">  {Math.round(data.main.feels_like)}°C</a> | <a href="#" id="farenheit">°F</a></p>
          </div>
        </div>
        
    
        <div class="col-xs-12 col-sm-12 col-md-3 row" style={{textAlign:"right"}}>
          <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
            <h6>Humidity: <spam id="humidity"></spam>{data.main.humidity}%</h6>
          </div>
          <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
            <h6>Wind: <spam id="wind"></spam>{data.wind.speed} m/s</h6>
          </div>
          <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
  <h6>High: <spam id="mainTempHot"></spam>{data.main.temp_max}°</h6>
          </div>
          <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
            <h6>Low: <spam id="mainTempLow"></spam>{data.main.temp_min}°</h6>
          </div>
        </div>
        
      </div>
    </div>
    
    
    <div class="modal fade" id="protocol-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
          
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  


   
  </div>
  );
};

export default LiveWeather;