import React from 'react';
import "./usercrosswalk.css";
import UserTemplate from "../components/userTemplate"

const UserCrossWalk = () => {
    return(
    <>
    <UserTemplate/>
    <div className="crosswalk"></div>

    <div className="bar-1"></div>
    <div className="bar-2"></div>
    <div className="bar-3"></div>
    <div className="bar-4"></div>


    <div className="circle-i"></div>
    <div className="circle-ii"></div>
    <div className="circle-iii"></div>

    
    </>
    )
}

export default UserCrossWalk;