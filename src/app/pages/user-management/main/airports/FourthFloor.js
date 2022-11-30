
import {useRef, useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../../template-components/Footer.js';
import "../../../../App.css";
import Header from '../../../template-components/Header';
import "../../../user-management/airport.css"
import React from 'react';
import Desk from '../../../../../lib/images/Desk.png';

export const FourthFloor = () => {

    return(
        

    <div className="page-container">
        <Header />
      

   
<section id="gallery"/>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Airline</h5>
            <p class="card-text" onChange={onAirportChange}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
            <a href="" class="btn btn-outline-success btn-sm">Read More</a>
            <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
          </div>
        </div>
      </div>
     
    
      <div class="col-lg-4 mb-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Country</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
            <a href="" class="btn btn-outline-success btn-sm">Read More</a>
            <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Airport</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
            <a href="" class="btn btn-outline-success btn-sm">Read More</a>
            <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
<section/>

        <Footer />
    </div>

)
}
export default FourthFloor;