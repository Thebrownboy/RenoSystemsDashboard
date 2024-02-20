import React, { useEffect, useRef, useState } from "react";
import CustomizedSelect from "../CustomizedSelect/CustomizedSelect";
import styles from "./popup.module.css";
import { months } from "../../../constants";
import { groups } from "../../../constants";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import InputField from "../InputField/InputField";
function Popup({ updateShowPopup, user }) {
  const [userGroupValue, updateUserGroupValue] = useState("Choose User Group");
  const [userProfileValue, updateUserProfileValue] = useState("Choose Profile");
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const [firstNameErrorShow, updateFirstNameErrorShow] = useState(false);
  const [lastNameErrorShow, updateLastNameErrorShow] = useState(false);
  const [usernameErrorShow, updateUserNameNameErrorShow] = useState(false);
  const [emailErrorShow, updateEmailErrorShow] = useState(false);
  const [groupErrorShow, updateGroupErrorShow] = useState(false);
  const [userNameErrorMsg, updateUserNameErrorMsg] = useState(
    " Please enter a valid user name no spaces allowed , only charcters, dot and  underscore"
  );

  const submitValues = async () => {
    const nameRegex = new RegExp("^[a-zA-Z]{3,}$");
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
    );

    const userNameReg = new RegExp("^[A-Za-z][A-Za-z0-9_.]{7,29}$");

    if (!nameRegex.test(firstNameRef.current.value)) {
      updateFirstNameErrorShow(true);
      return;
    }
    if (!nameRegex.test(lastNameRef.current.value)) {
      updateLastNameErrorShow(true);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/employees?userName=${userNameRef.current.value}`
      ).then((res) => res.json());

      if (
        (response.length !== 0 && !user) ||
        (user &&
          user.userName !== userNameRef.current.value &&
          response.length !== 0)
      ) {
        updateUserNameErrorMsg("this user name is already taken");
        updateUserNameNameErrorShow(true);
        return;
      }
    } catch (err) {}
    if (!userNameReg.test(userNameRef.current.value)) {
      updateUserNameErrorMsg("Please enter a valid user name ");
      updateUserNameNameErrorShow(true);

      return;
    }

    if (!emailRegex.test(emailRef.current.value)) {
      updateEmailErrorShow(true);
      return;
    }

    if (userGroupValue === "Choose User Group") {
      updateGroupErrorShow(true);
      return;
    }
    const newDate = new Date();
    try {
      const response = await fetch(
        `http://localhost:3000/employees/${user ? user.id : ""}`,
        {
          method: user ? "PUT" : "POST",
          body: JSON.stringify({
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            userName: userNameRef.current.value,
            email: emailRef.current.value,
            status: "active",
            group: userGroupValue,
            createdOn: `${months[newDate.getMonth()].substring(
              0,
              3
            )} ${newDate.getDate()}, ${newDate.getFullYear()}`,
          }),
        }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const resetValues = () => {
    updateUserGroupValue("Choose User Group");
    updateUserProfileValue("Choose Profile");
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    userNameRef.current.value = "";
    emailRef.current.value = "";
  };

  useEffect(() => {
    if (user === undefined) return;
    firstNameRef.current.value = user.firstName;
    lastNameRef.current.value = user.lastName;
    userNameRef.current.value = user.userName;
    emailRef.current.value = user.email;
    updateUserGroupValue(user.group);
  }, []);

  return (
    <div className=" text-[1rem]  flex sm:justify-center   fixed top-0 left-0 bg-[#7F7F7F] bg-opacity-35 w-screen h-full z-[40000000000]">
      <div
        className={` flex-1 sm:flex-none overflow-scroll bg-[#FAF8FB] add-new-user-card w-1/2  rounded-md  mt-10 ${styles["popup"]}`}
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
          <InputField
            placeholder={"Enter user first name"}
            errorMsg={
              "Please enter a name that contains at least three characters"
            }
            reference={firstNameRef}
            label={"firstName"}
            showError={firstNameErrorShow}
            updateError={updateFirstNameErrorShow}
          />

          <InputField
            placeholder={"Enter user last name"}
            errorMsg={
              "Please enter a name that contains at least three characters"
            }
            reference={lastNameRef}
            label={"lastName"}
            showError={lastNameErrorShow}
            updateError={updateLastNameErrorShow}
          />

          <InputField
            placeholder={"Enter user  user name"}
            errorMsg={userNameErrorMsg}
            reference={userNameRef}
            label={"UserName"}
            showError={usernameErrorShow}
            updateError={updateUserNameNameErrorShow}
          />

          <InputField
            placeholder={"Enter user email"}
            errorMsg={"Please enter a valid email"}
            reference={emailRef}
            label={"Email"}
            showError={emailErrorShow}
            updateError={updateEmailErrorShow}
          />

          <div className="flex flex-col mt-5 gap-3">
            <label htmlFor="" className="text-[16px] font-bold text-[#0C1533]">
              User Group
            </label>
            <CustomizedSelect
              selectValue={userGroupValue}
              items={groups}
              updateSelectValue={updateUserGroupValue}
            />

            {groupErrorShow && <ErrorMsg errorMsg={"Please Select a group"} />}
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
          <div
            className="reset underline cursor-pointer"
            onClick={() => resetValues()}
          >
            Reset fields
          </div>
          <div className="buttons flex gap-4">
            <button
              onClick={() => updateShowPopup(false)}
              className=" p-3 rounded-md bg-[#f6f8f9] border-2"
            >
              Cancel
            </button>
            <button
              className=" px-3  rounded-md bg-[#22A565]"
              onClick={() => submitValues()}
            >
              {user ? "Edit" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
