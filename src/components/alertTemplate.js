import React from "react";
import "./alertTemplate.css";

const AlertTemplate = (props) => {
  let num = parseInt(props.value / 100) * 100;
  if (num < 10) num = 10;

  console.log(props);

  if (props.status !== undefined) {
    if (props.status === "GO") {
      return (
        <>
          <div>
            <div className="alertbox">
              <div className="successtitle">OK</div>

              <div className="alertbody">Good to go</div>

              <button className="gotit" onClick={props.onClick}>
                Got it!
              </button>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="alertbox">
        <div className="alerttitle">Around {num}m</div>

        <div className="alertbody">Watch Out! Fast car is approaching!</div>

        <button className="gotit" onClick={props.onClick}>
          Got it!
        </button>
      </div>
    </>
  );
};

export default AlertTemplate;
