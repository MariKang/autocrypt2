import React from 'react';
import "./useralertfail.css";
import UserMain from "./usermain"
import AlertTemplate from "../components/alertTemplate"

const UserAlertFail = () => {
    return(
    <> 
    <UserMain/>
    <div className="dim"></div>

    <AlertTemplate/>

    </>
    )
}

export default UserAlertFail;