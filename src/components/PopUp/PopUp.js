import React from "react";
import './style.css'

const PopUp = (props) => {
  return props.trigger ? (
    <div className="popup">
        <div className="popup-inner">
            {props.children}
            <button className="close btn btn-danger fs-3 mt-3 " onClick={()=>{props.setTrigger(false)}}>close</button>
        </div>
    </div>
  ) : ' '
};

export default PopUp;
