import React from "react";
import WithCounter from "../HOC/withCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button type="button" onMouseOver={incrementCount}>
        Hover {count} times
      </button>
    </div>
  );
};

export default WithCounter(HoverCounter);
