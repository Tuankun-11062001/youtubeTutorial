import React from "react";

const DecorationLeft = ({ style }) => {
  const handleDulicated = () => {
    let arr = [];
    for (let i = 0; i <= 10; i++) {
      arr.push(
        <div className="decoration_item">
          <span></span>
          <span></span>
        </div>
      );
    }
    return arr;
  };
  return <div className={`decoration_left ${style}`}>{handleDulicated()}</div>;
};

export default DecorationLeft;
