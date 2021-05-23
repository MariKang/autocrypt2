import React from 'react';
import "./usercrosswalk.css";
// import UserTemplate from "../components/userTemplate"
import ButtonActivated from "../components/buttonactivated"
import { ReactComponent as BlueCarSvg } from '../font/car-blue.svg';
import { ReactComponent as RedCarSvg } from '../font/car-red.svg';

const UserCrossWalk = () => {
    return(
    <>
    <div className= "ped">
      Pedestrian
    </div>

    <div className="graybox2">
        <div className="bluecar"><BlueCarSvg/></div>
        <div className="redcar"><RedCarSvg/></div>
        
    </div>

    <div className="crosswalk"></div>

    <ButtonActivated status='Notify'/>

    


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