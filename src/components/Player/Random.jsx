import React from "react";

const Random = () => {
  const handleClick = () => {
    alert("Button clicked!");
    // Add your logic here for button click handling
  };

  return (
    <p>
      safnas<button onClick={handleClick}>me</button>
    </p>
  );
};

export default Random;
