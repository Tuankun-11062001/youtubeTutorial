import React from "react";

const Buttons = ({ title, func, style }) => {
  return (
    <button onClick={func} className={style}>
      {title}
    </button>
  );
};

export default Buttons;
