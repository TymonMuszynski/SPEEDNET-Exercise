import React from "react";
import { Link, useParams } from "react-router-dom";
import backSvg from "../assets/back.svg";

function InfoBox(props) {
  const { id } = useParams();

  function getBoxData() {
    for (let index = 0; index < props.data.length; index++) {
      if (parseInt(id) === props.data[index].id) {
        return props.data[index];
      }
    }
  }

  const { from, sentDate, subject, snippet } = getBoxData();

  return (
    <div className=" absolute w-[95vw] h-[95vh] rounded-xl bg-white flex flex-col items-center">
      <Link to={"/boxes?page=" + props.pageNumber}>
        <div className="w-[90vw] h-[5vh] flex justify-left items-center mt-4">
          <img
            src={backSvg}
            alt="back arrow"
            className="w-[4.5vw] sm:w-[2.8vw]"
          />
          <span className=" text-2xl font-light ml-3"> back </span>
        </div>
      </Link>

      <div className="w-[65vw] flex flex-col justify-center items-center mt-10">
        <span className="text-2xl font-light text-center">{from}</span>
        <span className="text-l font-semibol text-center text-gray-800 font-semibold italic">
          data wysłania: {sentDate}
        </span>
      </div>
      <div className="h-[30vh] mt-20">
        <div className="w-[70vw] flex justify-center items-center">
          <span className="text-xl font-light text-center"> {snippet} </span>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <span className="text-xl font-normal text-center"> {subject}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
