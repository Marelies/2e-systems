
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../../template-components/Footer.js';
import "../../../../App.css";
import Header from '../../../template-components/Header';
import "../../../user-management/airport.css"
import React from 'react';
import {db, storage} from '../../../../context/Config';

export const  AddAirport = () => {

  const [airportName, setAirportName] = useState('');
  const [airportCountry, setAirportCountry] = useState('');
  const [airportGPS, setAirportGPS] = useState('');
  const [airportISO, setAirportISO] = useState('');

  const [error, setError] = useState('');

  


  //product-images/${productImg.name}
  // add product
  const addAirportInfo = (e) => {
      e.preventDefault();
        db.collection('airports').add({
                      airportName: airportName,
                      airportCountry: airportCountry,
                      airportGPS:airportGPS,
                      airportISO:airportISO,
                    
                  }).then(() => {
                      setAirportName('');
                      setAirportCountry('');
                      setAirportGPS('');
                      setAirportISO('');
                 
                      setError('');
                      document.getElementById('file').value = '';
                  }).catch(err => setError(err.message))
          
  }
 

  return (


      <div className='page-container'>
               <Header/>
          <br />
          <h2 style={{textAlign:"center", marginTop:"4%"}}>Add Airport</h2>
          <hr />
          <form autoComplete="off" className='form-group' onSubmit={addAirportInfo}>
              <label htmlFor="airport-name">Airport Name</label>
              <input type="text" className='form-control' required
                  onChange={(e) => setAirportName(e.target.value)} value={airportName} />
              <br />
              <label htmlFor="airport-country">Airport Country</label>
              <input type="text" className='form-control' required
                  onChange={(e) => setAirportCountry(e.target.value)} value={airportCountry} />

                   <label htmlFor="airport-gps">Airport  GPS/link</label>
              <input type="text" className='form-control' required
                  onChange={(e) => setAirportGPS(e.target.value)} value={airportGPS} />

                   <label htmlFor="airport-iso">Country ISO</label>
              <input type="text" className='form-control' required
                  onChange={(e) => setAirportISO(e.target.value)} value={airportISO} />
                   <br />
               
                  
              <button type="submit" className='btn btn-success btn-md mybtn'>ADD</button>
          </form>
         
          <Footer/>
      </div>
           
  )
}
export default  AddAirport;