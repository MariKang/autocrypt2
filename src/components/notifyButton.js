import React from "react";
import "./notifyButton.css";

const NotifyButton = (props) => {
  return (
    <>
      <div>
        <div>
          <button className="button-activated button-text" onClick={props.onClick}>
            Notify
          </button>
        </div>
      </div>
    </>
  );
};
export default NotifyButton;
