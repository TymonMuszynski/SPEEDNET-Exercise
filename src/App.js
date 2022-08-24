import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import humps from "humps";
import dataFromFile from "./data/data.js";
//pages
import Boxes from "./pages/Boxes";
import InfoBox from "./pages/InfoBox";
//components
import Pagination from "./components/Pagination";
import Counter from "./components/Counter.js";

function App() {
  const [data, setData] = useState(humps.camelizeKeys(dataFromFile));
  const [page, setPage] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(0);
    for (let index = 0; index < data.length; index++) {
      if (data[index].isUnread === false) {
        setCounter((prevCounter) => (prevCounter += 1));
      }
    }
  }, [data]);

  // change check box value
  const changeCheckBox = (id) => {
    setData((prevData) => {
      return prevData.map((prevBoxData) =>
        prevBoxData.id === id
          ? { ...prevBoxData, isUnread: !prevBoxData.isUnread }
          : prevBoxData
      );
    });
  };

  return (
    <BrowserRouter>
      <div className="h-screen w-screen bg-gray-100 flex flex-col justify-around items-center ">
        <Counter counter={counter} />

        <Routes>
          <Route
            path="/boxes"
            element={
              <Boxes
                data={data}
                handleChangeCheckBox={changeCheckBox}
                handlePageNumber={(pageNumber) => setPage(pageNumber)}
                pageNumber={page}
              />
            }
          />
          <Route
            path="boxes/box/:id"
            element={<InfoBox pageNumber={page} data={data} />}
          />
        </Routes>

        <Pagination data={data} pageNumber={page} />
      </div>
    </BrowserRouter>
  );
}

export default App;
