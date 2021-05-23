import React, { useEffect, useState } from "react";
import "./usercrosswalk.css";
// import UserTemplate from "../components/userTemplate"
import NotifyButton from "../components/notifyButton";
import { ReactComponent as BlueCarSvg } from "../font/car-blue.svg";
import { ReactComponent as RedCarSvg } from "../font/car-red.svg";
import axios from "axios";
import AlertTemplate from "../components/alertTemplate";

const UserCrossWalk = () => {
  const [geo, setGeo] = useState([37.553744, 126.9443578]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeo([position.coords.latitude, position.coords.longitude]);
    });
    setGeo([37.553744, 126.9443578]);
  }, []);

  // {"msg":"WAIT"}
  // {'msg':'GO'}
  // {"msg":"STOP", "distance": distance}
  const [resp, setResp] = useState({});

  const onClickHandler = async () => {
    if (geo === undefined) return;
    const res = axios.post(`http://3.36.109.28:8000/user/?lat=${geo[0]}&lon=${geo[1]}`);
    const data = await res.then((data) => data.data);
    if (data["msg"]) {
      setResp(data);
    } else {
      setResp({});
    }
  };

  return (
    <>
      <div className="ped">Pedestrian</div>

      <div className="graybox2">
        {resp["msg"] ? (
          <AlertTemplate status={resp["msg"]} value={resp["distance"]} onClick={() => setResp({})} />
        ) : (
          <> </>
        )}

        <div className="bluecar">
          <BlueCarSvg />
        </div>
        <div className="redcar">
          <RedCarSvg />
        </div>
      </div>

      <div className="crosswalk"></div>

      <NotifyButton onClick={onClickHandler} />

      <div className="bar-1"></div>
      <div className="bar-2"></div>
      <div className="bar-3"></div>
      <div className="bar-4"></div>

      <div className="circle-i"></div>
      <div className="circle-ii"></div>
      <div className="circle-iii"></div>
    </>
  );
};

export default UserCrossWalk;
