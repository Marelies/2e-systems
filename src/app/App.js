
import './App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {    BrowserRouter,  Routes, Route} from 'react-router-dom';
import AdminCheckList from '../app/pages/admin-checklist/AdminCheckList';
import Home  from '../app/pages/Home';
import Airlines from '../app/pages/airline-list/Airlines'
import UserManagement from '../app/pages/user-management/main/UserManagement'

import Success from '../app/pages/Success';



export class App extends Component {

    render(){
  return (
             <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>} exact />
        
      
            <Route path="/user" element={<UserManagement/>}/>
            <Route path="/weather-list" element={<AdminCheckList/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="/airline-list" element={<Airlines/>}/>
            </Routes>
            </BrowserRouter>
  );
    }
}

export default App;
