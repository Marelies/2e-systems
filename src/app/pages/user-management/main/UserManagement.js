import { useContext, useState, useEffect } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../template-components/Footer.js';
import "../../../App.css";
import Header from '../../template-components/Header.js';
import  firebase from 'firebase'
import "../UserManagement.css";
import { set, ref, onValue, remove, update } from "firebase/database";
import {AirportContext} from '../../../context/AirportContext';
import { db } from '../../../context/Config';
import { useNavigate } from 'react-router-dom';

export const UserManagement = () => {

    const { airports } = useContext(AirportContext);

const navigate = useNavigate();
    

     
 
    return (
                        <>
                        <Header/>
                    {airports.length !== 0 && <h1 style={{color:"white"}}>Airports</h1>}
                    <div class="col-sm-6" style={{margin:"0 auto"}}>
                    {airports.length === 0 && <div>slow internet...no products to display</div>}
                    {airports.map(airport => (
                    <div class="card">
                 

                   
                        <div class="image">
                        <iframe src={airport.airportGPS} width="100%" height="250" style={{border:0, padding:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div class="card-inner">
                        <div class="header">
                            <h2>{airport.airportName}</h2>
                            <h3>{airport.airportCountry}</h3>
                            <h4>{airport.airportISO}</h4>
                        </div>
                        
                        
                        
              
                        </div>
                    </div>
                    ))}
                    </div>
                    <Footer/>
                    </>




   


    )
}

export default UserManagement;


