import React from 'react';
import "../template-components/template-css/Template.css";
import Desk from '../../../lib/images/Airport.png';


const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Informacije</h4>
                        <ul className="list-unstyled">
                            <li>World 33</li>
                            <li>000000, World</li>
                            <li>
                                <a href="mailto:info@tis.hr" className="link">info@world.hr</a>
                            </li>
                        </ul>    
                    </div>
                    <div className="col align-self-end">
                        <img src={Desk} className="slika" width="100px" height="100px"></img>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">&copy; 2022 Croatia</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;