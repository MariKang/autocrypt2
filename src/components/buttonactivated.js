import React from "react";
import "./buttonactivated.css";
import { Link } from "react-router-dom";

const ButtonActivated = (props) => {
  const clicked = props.which;
  console.log({ clicked });
  return (
    <>
      <div>
        {/* {props.ped='box'? 'Driver': 'Ped'};
        activated === 'ButtonB' ? <ButtonB/> : <ButtonActivated ped='pedClick' status='Next'/> */}
        <Link to={clicked}>
          <button className="button-activated button-text">{props.status}</button>
        </Link>
      </div>
    </>
  );
};
export default ButtonActivated;
