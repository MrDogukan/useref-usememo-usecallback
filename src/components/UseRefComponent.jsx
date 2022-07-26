import React, { useEffect, useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  useEffect(() => {
    // document.querySelector("input").focus();
    inputRef.current.focus();
  }, []);

  const changeBGColor = () => {
    // const colors = [
    //   "orange",
    //   "pink",
    //   "purple",
    //   "red",
    //   "#00ff00",
    //   "rgb(150,150,150)",
    // ];
    // const random = Math.trunc(Math.random() * colors.length);
    divRef.current.style.backgroundColor = inputRef.current.value;
  };

  return (
    <div ref={divRef} className="useref">
      <h2>Useref Component</h2>
      <input ref={inputRef} type="color" placeholder="Enter Text..." />
      <button onClick={changeBGColor}>ChangeBGColor</button>
    </div>
  );
};

export default UseRefComponent;
