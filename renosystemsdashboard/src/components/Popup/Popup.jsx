import React from "react";
import CustomizedSelect from "../CustomizedSelect/CustomizedSelect";

function Popup() {
  return (
    <div className=" flex justify-center   fixed top-0 left-0 bg-white bg-opacity-50 w-screen h-full z-[40000000000]">
      <div className="add-new-user-card w-1/2 py-3 rounded-md  mt-10 ">
        <div className="card-header flex justify-between rounded-md  px-4 py-3 bg-[#050E2D]">
          <h2 className="text-white"> Add New User</h2>
          <div className="text-white">X</div>
        </div>

        <div className="bg-[#FAF8FB] px-4 flex flex-col gap-1">
          <div className="full-name flex flex-col mt-5 gap-3">
            <label htmlFor="" className="text-[16px] font-bold text-[#0C1533]">
              Full Name
            </label>
            <div>
              <input
                type="text"
                placeholder="Enter full name"
                className="px-2 py-3 rounded-md w-full outline-none border border-1"
              />
            </div>
          </div>

          <div className="full-name flex flex-col mt-5 gap-3">
            <label htmlFor="" className="text-[16px] font-bold text-[#0C1533]">
              User Name
            </label>
            <div>
              <input
                type="text"
                placeholder="Enter Username"
                className="px-2 py-3 rounded-md w-full outline-none border border-1"
              />
            </div>
          </div>

          <div className="full-name flex flex-col mt-5 gap-3">
            <label htmlFor="" className="text-[16px] font-bold text-[#0C1533]">
              Email Address
            </label>
            <div>
              <input
                type="text"
                placeholder="Enter user eamil addresss"
                className="px-2 py-3 rounded-md w-full outline-none border border-1"
              />
            </div>
          </div>

          <div className="relative">
            <CustomizedSelect />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
