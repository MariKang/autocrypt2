import React from 'react';
import "./useralertfail.css";
import UserMain from "./usermain"
import AlertTemplate from "../components/alertTemplate"

const UserAlertFail = () => {
    return(
    <>
    
    <div className="z1"><UserMain/></div>
    <div className="z2">
        <div className="dim"></div>
    </div>
    <div className="z3">
        <AlertTemplate/>
    </div>
    
    
    </>
    )
}

export default UserAlertFail;