import React from "react";
import "./driverTemplate.css";
import ButtonActivated from "./buttonactivated";
import AlertTemplate from "./alertTemplate";

const DriverTemplate = () => {
  return (
    <>
      <div className="ped">Pedestrian</div>

      <div className="graybox">
        <AlertTemplate />
        {/* TODO: design crossroad image moving vertically */}
      </div>

      <ButtonActivated status="Notify" />
    </>
  );
};

export default DriverTemplate;
