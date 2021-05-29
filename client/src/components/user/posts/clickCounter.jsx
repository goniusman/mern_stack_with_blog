import React from "react";
import WithCounter from "../HOC/withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <button type="button" onClick={incrementCount}>
        Clickt {count} times
      </button>
    </>
  );
};

export default WithCounter(ClickCounter);
