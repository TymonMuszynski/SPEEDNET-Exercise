import React, { useEffect } from "react";
import { useLocation } from "react-router";

import Box from "../components/Box";

function ListBox(props) {
  const { data, handleChangeCheckBox, pageNumber, handlePageNumber } = props;
  const { search } = useLocation();
  const query = useQuery();

  function useQuery() {
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  // Change state value of page to url id when page rendered
  useEffect(() => {
    handlePageNumber(query.get("page"));
  });

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

export default ListBox;
