import React from "react";

function Counter(props) {
  // console.log("COUNTER - rendered");
  return (
    <div className="w-[95vw] h-[6vh] bg-white flex items-center rounded-xl justify-around sm:w-[30vw]">
      <span className="font-light text-xl"> Ilość zaznaczonych </span>
      <span className="font-medium text-xl">{props.counter}</span>
    </div>
  );
}

export default React.memo(Counter);
