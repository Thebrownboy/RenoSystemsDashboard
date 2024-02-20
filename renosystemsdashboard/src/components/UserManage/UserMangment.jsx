import React from "react";

function UserMangment({ updateShowPopup }) {
  return (
    <div className=" flex justify-between p-3 mt-5">
      <h2 className=" text-2xl font-bold">User Mangement</h2>
      <div>
        <button
          onClick={() => updateShowPopup(true)}
          className=" bg-green-600 text-white rounded-md px-2 py-3"
        >
          + Add new{" "}
        </button>
      </div>
    </div>
  );
}

export default UserMangment;
