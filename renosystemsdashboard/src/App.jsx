import { useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import Fallback from "./components/Fallback/Fallback";
function App() {
  const [sideBarDisplay, updateSideBarDisplay] = useState(false);
  return (
    <div className=" flex  relative  h-[1880px]">
      {sideBarDisplay && (
        <SideBar updateSideBarDisplay={updateSideBarDisplay} />
      )}
      {console.log(sideBarDisplay)}
      <div
        className={`!w-full  ${
          !sideBarDisplay ? "md:!w-full" : "md:!w-[calc(100%-200px)]"
        } ${!sideBarDisplay ? "lg:!w-full" : "lg:!w-[calc(100%-300px)]"} `}
      >
        <Routes>
          <Route
            path="/*"
            element={
              <MainSection
                updateSideBarDisplay={updateSideBarDisplay}
                sideBarDisplay={sideBarDisplay}
              />
            }
          />
          <Route path="/*" element={<Fallback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
