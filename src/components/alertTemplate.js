import React from 'react';
import "./alertTemplate.css";

const AlertTemplate = () => {

    let title = "Select your\ntype";
    return(
    <>
    <div className= "alertbox">
        <div className="alerttitle">
            Around 400m
        </div>

        <div className="alertbody">
            Watch Out!
            Fast car is approaching!
        </div>

        <button className="gotit">
            Got it!
        </button>
    </div>
    </>
    )
}

export default AlertTemplate;