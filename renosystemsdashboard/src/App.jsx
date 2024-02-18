import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className=" flex gap-3 relative  h-[1880px]">
      <SideBar />
      <Routes>
        <Route path="/home" element={<MainSection />} />
        <Route path="/*" element={<div />} />
      </Routes>
    </div>
  );
}

export default App;
