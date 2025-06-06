import React, { useState } from "react";




function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handClick() {
    setIsOn((isOn) => !isOn);
  }
const color = isOn ? "red" : "white";

  return <button style={{ background: color }} onClick={handClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
