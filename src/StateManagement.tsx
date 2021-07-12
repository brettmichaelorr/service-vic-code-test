import React, { useState, createContext, useCallback } from "react";
import { DataContextType, TemperatureDisplay } from "./typings/interfaces";

const InitialDataContext: DataContextType = {
  degreesDisplay: "C",
  changeDegrees: () => {},
};

export const DataContext = createContext<DataContextType>(InitialDataContext);
export const DataProvider: React.FC = ({ children }) => {
  const [degreesDisplay, setDegreesDisplay] = useState(
    "C" as TemperatureDisplay
  );

  const changeDegrees = useCallback((val: TemperatureDisplay) => {
    setDegreesDisplay(val);
  }, []);

  return (
    <div>
      <DataContext.Provider value={{ degreesDisplay, changeDegrees }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};
