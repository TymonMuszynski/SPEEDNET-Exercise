import React from "react";
import { Link } from "react-router-dom";
import nextSvg from "../assets/next.svg";
import backSvg from "../assets/back.svg";

function Pagination(props) {
  const { data, pageNumber } = props;
  const numberOfPages = Math.round(data.length / 12);

  const createUrl = (goNext) => {
    if (goNext === true) {
      if (pageNumber >= numberOfPages) {
        return "boxes?page=" + pageNumber.toString();
      } else {
        return "boxes?page=" + (parseInt(pageNumber) + 1).toString();
      }
    } else {
      if (pageNumber <= 0) {
        return "boxes?page=" + pageNumber.toString();
      } else {
        return "boxes?page=" + (parseInt(pageNumber) - 1).toString();
      }
    }
  };

  return (
    <div className="w-[95vw]  sm:w-[30vw] h-[6vh] bg-white flex items-center rounded-xl justify-around">
      <img src={backSvg} alt="back arrow" className=" h-1/3" />
      <Link to={createUrl(false)}>
        <span className=" font-light text-xl"> back</span>
      </Link>
      <span className=" font-light text-xl">
        {parseInt(pageNumber) + 1} / {numberOfPages + 1}
      </span>
      <Link to={createUrl(true)}>
        <span className=" font-light text-xl "> next</span>
      </Link>
      <img src={nextSvg} alt="next arrow" className=" h-1/3" />
    </div>
  );
}

export default Pagination;
