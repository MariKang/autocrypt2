import React from 'react';
import "./usermain.css";
import UserTemplate from "../components/userTemplate"

const UserMain = () => {
    const name = 'Pedestrian'
    return(
    <>
    <UserTemplate user={name}/>

    <div className="circle-1"></div>
    <div className="circle-2"></div>
    <div className="circle-3"></div>
    </>
    )
}

export default UserMain;