import {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../template-components/Footer';
import "../../App.css";
import Header from '../template-components/Header';
import "../user-management/UserManagement.css";
import {db, auth} from '../../context/Config';
import firebase from "firebase";
import {AirlineContext}  from '../../context/AirlineContext';


  
export const  Airlines = () => {

    const { airlines } = useContext(AirlineContext);

   
    console.log(airlines);

   

 
    return (

        <div className="page-container">
          
            <Header />
            <div className="content-wrap">
            {airlines.length !== 0 && <h1 style={{color:"white"}}>Airlines</h1>}
                <div className="container text-center">
                {airlines.length === 0 && <div>slow internet...no products to display</div>}
                    {airlines.map(airline => (
                    <div className="cards">
                 
                        <div className="kartica mx-auto">
                          
                            
                                <div class="card text-bg-primary mb-3 mt-3">
                                
                                    <div class="card-body"  style={{backgroundColor:"#a6a6a6 "  }}>
                        
                                   <h1 class="velikiTekst">{airline.AirlineName}</h1>
                               
                                   <img src={airline.AirlineLogo} width="100%" height="300"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></img>
                                    <br/>
                                     <p class="AirlineInfo">{airline.AirlineInfo}</p>
                              
                               </div>
                                    <div class="card-footer">
                                   
                    <h1 class="velikiTekst"> {airline.AirlineCountry}</h1>
                                  
                                    </div>
                           
                                </div>
                                    
                       
                            
                        </div> 
                                        
                    </div>
                ))}
                </div>
       
            </div>
            <Footer />
    
        </div>

    )
}

export default Airlines;