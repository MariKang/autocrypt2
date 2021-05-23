/*eslint no-unused-expressions: "off"*/
import React, { useEffect, useState } from "react";
import "./drivermain.css";
import ButtonActivated from "../components/buttonactivated";
import { ReactComponent as CarSvg } from "../font/car.svg";
import axios from "axios";
import AlertTemplate from "../components/alertTemplate";

const DriverMain = () => {
  const [geo, setGeo] = useState([37.553744, 126.9443578]);
  const [carId, _] = useState(1);
  const [pop, setPop] = useState(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeo([position.coords.latitude, position.coords.longitude]);
    });
    setGeo([37.553744, 126.9443578]);
  }, []);

  useEffect(() => {
    const countdown = setInterval(async () => {
      if (geo === undefined) return;
      console.log("sending geo info to server...");

      const res = axios.get(`http://3.36.109.28:8000/driver/?lat=${geo[0]}&lon=${geo[1]}&id=${carId}`);
      const data = await res.then((data) => data.data);
      if (data["car_msg"]) {
        // signal 수신
        setPop(data["car_msg"]);
        setGeo(undefined);
      }
    }, 1000);
    () => clearInterval(countdown);
  }, [geo]);

  return (
    <>
      <div className="dri">Driver</div>

      <div className="graybox3">
        {pop ? <AlertTemplate value={pop} /> : <> </>}
        <div className="car">
          <CarSvg />
        </div>
      </div>

      <div className="road"></div>

      <div className="bar-5"></div>
      <div className="bar-6"></div>
      <div className="bar-7"></div>
      <div className="bar-8"></div>
    </>
  );
};

export default DriverMain;
