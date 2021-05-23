import React from 'react';
import "./drivermain.css";
import ButtonActivated from "../components/buttonactivated"
import { ReactComponent as CarSvg } from '../font/car.svg';

const DriverMain = () => {
    return(
        <>
        <div className= "dri">
          Driver
        </div>
        
        <div className="graybox">
          <div className="car"><CarSvg/></div>
        </div>
        
        <div className="road"></div>

        <div className="bar-5"></div>
        <div className="bar-6"></div>
        <div className="bar-7"></div>
        <div className="bar-8"></div>
    

        </>

    )
}

export default DriverMain;