import React from 'react';
import "./usercrosswalk.css";
import UserTemplate from "../components/userTemplate"
import { ReactComponent as BlueCarSvg } from '../font/car-blue.svg';
import { ReactComponent as RedCarSvg } from '../font/car-red.svg';

const UserCrossWalk = () => {
    return(
    <>
    <UserTemplate/>
    <div className="crosswalk">
        <div className="bluecar"><BlueCarSvg/></div>
        <RedCarSvg/>
    </div>

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