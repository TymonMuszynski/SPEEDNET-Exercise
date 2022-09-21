import React, {useEffect} from "react";
import { Link, useLocation} from "react-router-dom";
import data from "../data/data"
import nextSvg from "../assets/next.svg";
import backSvg from "../assets/back.svg";

function Pagination(props) {
  const {handlePageNumber} = props
  const numberOfPages = Math.round(data.length / 12);
  const { search } = useLocation();
  const query = useQuery();
  const pageNumber = query.get("page")


  function useQuery() {
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

useEffect(()=>{
  handlePageNumber(pageNumber)
},[])



  // console.log("PAGINATION - rendered")


  const createUrl = (goNext) => {

    if (goNext === true && pageNumber != null) {
      if (pageNumber >= numberOfPages) {
        return "boxes?page=" + pageNumber.toString();
      } else {
        return "boxes?page=" + (parseInt(pageNumber) + 1).toString();
      }
    } else {
      if (pageNumber <= 0 && pageNumber != null) {
        return "boxes?page=" + pageNumber.toString();
      } else {
        return "boxes?page=" + (parseInt(pageNumber) - 1).toString();
      }
    }
  };

  return (
    <div className="w-[95vw]  sm:w-[30vw] h-[6vh] bg-white flex items-center rounded-xl justify-around">
      <img src={backSvg} alt="back arrow" className="h-1/3" />
      <Link to={createUrl(false)}>
        <span className="font-light text-xl"> back</span>
      </Link>
      <span className="font-light text-xl">
        {parseInt(pageNumber) + 1} / {numberOfPages + 1}
      </span>
      <Link to={createUrl(true)}>
        <span className="font-light text-xl "> next</span>
      </Link>
      <img src={nextSvg} alt="next arrow" className="h-1/3" />
    </div>
  );
}

export default React.memo(Pagination);
