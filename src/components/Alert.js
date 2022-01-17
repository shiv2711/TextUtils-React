import React from "react";

export default function Alert(props) {
  const close = () => {
    props.setAlert(null);
  };

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style = {{height : '38px'}}>
      {props.alert && (
        <div className={`alert ${props.alert.type}`}>
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
          <button className="btn" onClick={close}>
            <span>X</span>
          </button>
        </div>
      )}
    </div>
  );
}
