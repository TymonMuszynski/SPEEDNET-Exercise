import React from "react";
import { useLocation, Link } from "react-router-dom";

// Assets
import checkedSvg from "../assets/checkbox-checked.svg";
import unCheckedSvg from "../assets/checkbox-unchecked.svg";

function Box({
  boxData: { id, from, snippet, isUnread },
  handleChangeCheckBox,
}) {
  const { pathname } = useLocation();

  return (
    <li className="sm:w-[73vw] w-[88vw] flex h-[6vh] items-center justify-left border-t-2 border-gray-300 last:border-b-2 hover:bg-gray-100">
      {isUnread === true ? (
        <img
          src={unCheckedSvg}
          alt="unchecked"
          onClick={() => handleChangeCheckBox(id)}
          className="w-[7vw] sm:w-[3vw] cursor-pointer max-w-[35px] "
        />
      ) : (
        <img
          src={checkedSvg}
          alt="check" // alty lepsze
          onClick={() => handleChangeCheckBox(id)}
          className="w-[7vw] sm:w-[3vw] cursor-pointer  max-w-[35px] "
        />
      )}
      <Link to={`${pathname}"/box/"${id}`}>
        <div className="w-[75vw] sm:w-[65vw] flex flex-col">
          <div className="ml-3 w-full ">
            <span className="text-sm font-bold sm:text-l "> {from}</span>
          </div>
          <div className="ml-3 w-full">
            <span className="text-sm"> {snippet}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Box;
