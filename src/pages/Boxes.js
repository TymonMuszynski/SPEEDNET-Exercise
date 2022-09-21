import React from "react";
import { useLocation } from "react-router";

import Box from "../components/Box";

function Boxes(props) {
  const { data, handleChangeCheckBox } = props;
  const { search } = useLocation();
  const query = useQuery();
  const pageNumber = query.get("page")


  function useQuery() {
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }


  // console.log(`BOXES page number: ${pageNumber} - rendered`);
  // Change state value of page to url id when page rendered

  const mappedBoxComponent = data
    .slice(pageNumber * 12, pageNumber * 12 + 12)
    .map((boxData) => (
      <Box
        boxData={boxData}
        key={boxData.id}
        handleChangeCheckBox={handleChangeCheckBox}
      />
    ));

  return (
    <div className="sm:w-[80vw] w-[95vw] h-[80vh] bg-white rounded-2xl flex justify-center items-center">
      <ul className="flex items-center justify-start flex-col h-[70vh]  ">
        {mappedBoxComponent}
      </ul>
    </div>
  );
}

export default React.memo(Boxes);
