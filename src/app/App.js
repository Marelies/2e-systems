
import './App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {    BrowserRouter,  Routes, Route} from 'react-router-dom';
import AdminCheckList from '../app/pages/admin-checklist/AdminCheckList';

import Home  from '../app/pages/Home';
import Airlines from '../app/pages/airline-list/Airlines'
import AddAirport from '../app/pages/user-management/main/airports/AddAirport';

import UserManagement from '../app/pages/user-management/main/UserManagement'
import Login from '../../src/app/Login';

import {AirlineContextProvider} from '../app/context/AirlineContext';
import {AirportsContextProvider} from '../app/context/AirportContext';
import Signup from '../app/Signup';

export class App extends Component {
  state = {
    user: null,
}


    render(){
  return (

    <AirportsContextProvider >
      <AirlineContextProvider>
             <BrowserRouter>
            <Routes> 
         
            <Route path="/" element={<Login exact/>}/>
            <Route path="/home" element={<Home/>}  />
            <Route path="/signup" element={<Signup />}/>
            <Route path="/add-airport" element={<AddAirport/>}/>
           
            <Route path="/user" element={<UserManagement/>}/>
            <Route path="/weather-list" element={<AdminCheckList/>}/>
            <Route path="/airline-list" element={<Airlines/>}/>
     
            </Routes>
            </BrowserRouter>
            </AirlineContextProvider>
            </AirportsContextProvider >
  );
    }
}

export default App;
