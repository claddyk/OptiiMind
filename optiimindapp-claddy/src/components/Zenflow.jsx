import React, { useState, useEffect } from "react";
import "../styles1/zenflow.css";

function Zenflow() {
  const [state, setState] = useState("inhale");
  const [class2, setClass2] = useState("mostInner");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state === "inhale") {
        setState("exhale");
      } else {
        setState("inhale");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [state]);

  const handleClick = () => {
    if (state === "inhale") {
      setState("exhale");
    } else {
      setState("inhale");
    }
  };

  useEffect(() => {
    if (state === "exhale") {
      setClass2("shrink");
    } else {
      setClass2("expand");
    }
  }, [state]);

  return (
    <div className="container">
      <div className={`mostInner ${class2}`}>
        <button onClick={handleClick}>{state}</button>
      </div>
      
      
    </div>
  );
}

export default Zenflow;
