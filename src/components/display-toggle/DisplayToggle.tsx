import React, { useContext } from "react";
import { DataContext } from "../../StateManagement";
import "./DisplayToggle.style.scss";
import { TemperatureDisplay } from "../../typings/interfaces";

export default function DisplayToggle() {
  const { degreesDisplay, changeDegrees } = useContext(DataContext);

  const isSelected = (val: TemperatureDisplay) => degreesDisplay === val;

  return (
    <div id="display-toggle">
      <span
        className={`${isSelected("C") ? "selected" : ""}`}
        onClick={() => changeDegrees("C")}
      >
        C&#xb0;
      </span>
      &nbsp;|&nbsp;
      <span
        className={`${isSelected("F") ? "selected" : ""}`}
        onClick={() => changeDegrees("F")}
      >
        F&#xb0;
      </span>
    </div>
  );
}
