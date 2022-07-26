import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const [value, setValue] = useState(0);

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

  const valueRef = useRef(0);
  const increase = () => {
    setValue(value + 1);
    valueRef.current++;
  };

  return (
    <div ref={divRef} className="useref">
      <h2>Useref Component</h2>
      <input ref={inputRef} type="color" />
      <button onClick={changeBGColor}>ChangeBGColor</button>
      <h2>{value}</h2>
      <button onClick={increase}>Increase Value</button>
    </div>
  );
};

export default UseRefComponent;
