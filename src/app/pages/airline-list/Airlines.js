import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../template-components/Footer';
import "../../App.css";
import Header from '../template-components/Header';
import "../user-management/UserManagement.css";
import {db, auth} from '../../context/FireBaseProvider';
import {getDocs,  collection } from "firebase/firestore"



  
export const  Airlines = () => {

    const [airlines, setAirline] = useState([]);
    const usersCollectionRefAirline = collection(db,'airlines')


    useEffect(() => {
        const getAirlines = async() => {
            const data = await getDocs(usersCollectionRefAirline);
            setAirline(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
        };
    
        getAirlines();
    }, []);

   

 
    return (

        <div className="page-container">
          
            <Header />
            <div className="content-wrap">
         
                <div className="container text-center">
                {airlines.map((airline) => {
                    console.log(airline.AirlineName, airline.AirlineCountry);
                    return(
                    <div className="cards">
                 
                        <div className="kartica mx-auto">
                            <a href="/fourth" className='linkKartica'>
                            
                                <div class="card text-bg-primary mb-3 mt-3">
                                
                                    <div class="card-body"  style={{backgroundColor:"#a6a6a6 ",  }}>
                        
                                   <h1 class="velikiTekst">{airline.AirlineName}</h1>
                               
                                   <iframe src={airline.AirlineLogo} width="100%" height="450" style={{border:0, padding:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <br/>
                                     <p class="AirlineInfo">{airline.AirlineInfo}</p>
                              
                               </div>
                                    <div class="card-footer">
                                   
                    <h1 class="velikiTekst"> {airline.AirlineCountry}</h1>
                                  
                                    </div>
                           
                                </div>
                                    
                            </a>
                            
                        </div> 
                                        
                    </div>
                )})}
                </div>
       
            </div>
            <Footer />
    
        </div>

    )
}

export default Airlines;