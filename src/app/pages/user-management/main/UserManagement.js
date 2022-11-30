import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../template-components/Footer.js';
import "../../../App.css";
import Header from '../../template-components/Header.js';
import "../UserManagement.css";
import {db, auth} from './../../../context/FireBaseProvider';
import {getDocs,  collection } from "firebase/firestore"



  
export const UserManagement = () => {

    const [airports, setAirport] = useState([]);
    const usersCollectionRef = collection(db,'airports')

    const [countrys, setCountry] = useState([]);
    const countryCollectionCountry = collection(db,'countrys');

    useEffect(() => {
        const getAirports = async() => {
            const data = await getDocs(usersCollectionRef);
            setAirport(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
        };
    
        getAirports();
    }, []);

   

 
    return (

        <div className="page-container">
          
            <Header />
            <div className="content-wrap">
         
                <div className="container text-center">
                {airports.map((airport) => {
                    console.log(airport.Name, airport.GPS);
                    return(
                    <div className="cards">
                 
                        <div className="kartica mx-auto">
                         
                            
                                <div class="card text-bg-primary mb-5 mt-5">
                                
                                    <div class="card-body">
                        
                                   <h1 class="velikiTekst">{airport.Name}</h1>
                               
                                   <iframe src={airport.GPS} width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                              
                              
                               </div>
                                    <div class="card-footer">
                                   
                    <h1 class="velikiTekst"> {airport.CountryName}</h1>
                    <h1 class="velikiTekst"> {airport.CountryISO}</h1>
                                  
                                    </div>
                           
                                </div>
                    
                            
                        </div> 
                                        
                    </div>
                )})}
                </div>
       
            </div>
            <Footer />
    
        </div>

    )
}

export default UserManagement;