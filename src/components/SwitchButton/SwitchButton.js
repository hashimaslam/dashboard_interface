import React, { useState } from "react";

const SwitchButton = () => {
  const [activeBtn, setActive] = useState("btn1");
  const handleToggle = button => {
    setActive(button);
  };
  return (
    <>
      <div className="switch-button-wrapper">
        <div
          className={
            activeBtn === "btn1"
              ? "switch-button1 active-btn-right"
              : "switch-button1 "
          }
          onClick={() => handleToggle("btn1")}
        >
          Your Pro
        </div>
        <div
          className={
            activeBtn === "btn2"
              ? "switch-button2 active-btn-left"
              : "switch-button2 "
          }
          onClick={() => handleToggle("btn2")}
        >
          Your Portfolio
        </div>
      </div>
    </>
  );
};

export default SwitchButton;
