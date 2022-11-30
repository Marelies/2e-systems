import {useRef, useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './template-components/Footer.js';
import "../App.css";
import Header from './template-components/Header.js';
import "../pages/user-management/UserManagement.css";

export const Success = () => {

    return(
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <div className='success'>
                    <p className='Auth-form-title2'>Uspješno ste rezervirali stol!</p>
                    <a href='/home'>
                        <button class='btn btn-primary btn-lg'>Return to home page</button>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Success;