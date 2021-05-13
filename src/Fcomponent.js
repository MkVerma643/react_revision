import React, { useState } from "react";

function Fcomponent(props) {
  var a = 17;
  const [result, setResult] = useState(props.title);
  const [count, setCount] = useState(0);

  const clickHandler = (props) => {
    if (a < 18) {
      console.log("Not Eligible");
      setResult("Your Are not eligible");
    } else {
      console.log("Eligible");
      setResult("Your Are eligible");
    }
  };
  return (
    <div>
      <h2>Hi Functional Component</h2>
      <button onClick={clickHandler}>Check StateFul Component</button>
      <h3>{result}</h3>
      <br></br>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Fcomponent;
