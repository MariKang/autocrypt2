import React, {useState} from 'react';
import "./type.css";
import { IoIosArrowForward } from 'react-icons/io';
import ButtonB from "./buttonb"
import ButtonActivated from "./buttonactivated"


const Type = () => { 

    let [pedClicked, setPedClicked] = useState('box');
    let [driveClicked, setDriveClicked] = useState('box');
    let [activated, setActivated] = useState('ButtonB');
    let [which, setWhich] = useState("./user");

    function onChangePedClicked(){
        setPedClicked('box-clicked');
        setDriveClicked('box');
        setActivated('ButtonActivated');
        setWhich("./user");
        
    }

    function onChangeDriveClicked(){
        setDriveClicked('box-clicked');
        setPedClicked('box');
        setActivated('ButtonActivated');
        setWhich("./driver");
    }

    return(
        <>
        <div className="type">
            <div>
                <button className={`pedestrian-box ${pedClicked}`} onClick={onChangePedClicked}>
                    Pedestrian
                </button>

                <div className="arrow-1">
                    <IoIosArrowForward size="24px"/>
                </div>
            </div>
            <div>
                <button className={`driver-box ${driveClicked}`} onClick={onChangeDriveClicked}>
                    Driver
                </button>
                <div className="arrow-2">
                    <IoIosArrowForward size="24px"/>
                </div>
            </div>
        </div>

        <div>{activated === 'ButtonB' ? <ButtonB/> : <ButtonActivated which={which} status='Next'/>}</div>
        </>
    )
    
}

export default Type;