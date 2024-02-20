import React, { useRef, useState } from "react";
import CustomizedSelect from "../CustomizedSelect/CustomizedSelect";
import styles from "./popup.module.css";
function Popup({ updateShowPopup }) {
  const [userGroupValue, updateUserGroupValue] = useState("Choose User Group");
  const [userProfileValue, updateUserProfileValue] = useState("Choose Profile");
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();

  return (
    <div className="  flex justify-center   fixed top-0 left-0 bg-[#7F7F7F] bg-opacity-35 w-screen h-full z-[40000000000]">
      <div
        className={` overflow-scroll bg-[#FAF8FB] add-new-user-card w-1/2  rounded-md  mt-10 ${styles["popup"]}`}
      >
        <div className="card-header flex justify-between rounded-tl-md px-4 py-3 bg-[#050E2D]">
          <h2 className="text-white"> Add New User</h2>
          <div
            onClick={() => updateShowPopup(false)}
            className="text-white cursor-pointer"
          >
            X
          </div>
        </div>

        <div className="bg-[#FAF8FB] px-4 flex flex-col gap-1">
          <div className="full-name flex flex-col mt-5 gap-3">
            <label htmlFor="" className="text-[16px] font-bold text-[#0C1533]">
              First Name
            </label>
            <div>
              <input
                ref={firstNameRef}
                type="text"
                placeholder="Enter first name"
                className="px-2 py-3 rounded-md w-full outline-none border border-1"
              />
            </div>
          </div>

          <div className="full-name flex flex-col mt-5 gap-3">
            <label htmlFor="" className="text-[16px] font-bold text-[#0C1533]">
              Last Name
            </label>
            <div>
              <input
                ref={lastNameRef}
                type="text"
                placeholder="Enter last name"
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
                ref={userNameRef}
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
                ref={emailRef}
                type="text"
                placeholder="Enter user eamil addresss"
                className="px-2 py-3 rounded-md w-full outline-none border border-1"
              />
            </div>
          </div>

          <div className="flex flex-col mt-5 gap-3">
            <label htmlFor="" className="text-[16px] font-bold text-[#0C1533]">
              User Group
            </label>
            <CustomizedSelect
              selectValue={userGroupValue}
              items={["one", "Two", "three"]}
              updateSelectValue={updateUserGroupValue}
            />
          </div>

          <div className="flex flex-col mt-5 gap-3">
            <label htmlFor="" className="text-[16px] font-bold text-[#0C1533]">
              Assign Profile
            </label>
            <CustomizedSelect
              selectValue={userProfileValue}
              items={["one", "Two", "three"]}
              updateSelectValue={updateUserProfileValue}
            />
          </div>
        </div>
        <div className=" mt-5 py-1 bg-[#F8FAFB] footer flex justify-between items-center  px-4  border-t-2 ">
          <div className="reset underline cursor-pointer">Reset fields</div>
          <div className="buttons flex gap-4">
            <button
              onClick={() => updateShowPopup(false)}
              className=" p-3 rounded-md bg-[#f6f8f9] border-2"
            >
              Cancel
            </button>
            <button className=" px-3  rounded-md bg-[#22A565]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
