import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const Apps = () => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <div>
      <h1>Apps</h1>
      <button onClick={() => openBuyWindow("TCS")}>Buy TCS</button>
    </div>
  );
};

export default Apps;
