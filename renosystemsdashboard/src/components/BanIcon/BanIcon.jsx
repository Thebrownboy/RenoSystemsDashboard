import React from "react";
import blockIcon from "../../assets/block-prohibited-svgrepo-com.svg";
import { useSelector } from "react-redux";
import lockIcon from "../../assets/lock-keyhole-svgrepo-com.svg";

function BanIcon({ status }) {
  const selected = useSelector((state) => state.rows.selected);
  const handleClick = async () => {
    for (let i = 0; i < selected.length; i++) {
      try {
        console.log(selected);
        const res = await fetch(
          `http://localhost:3000/employees/${selected[i]}`,
          {
            method: "PATCH",
            body: JSON.stringify({
              status,
            }),
          }
        ).then((res) => res.json());

        // just for json
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div
      className=" w-full flex justify-center sm:w-auto sm:block block-icon bg-[#E7E9Ef] p-1 rounded-md cursor-pointer min-w-[24px] min-h-[24px]"
      onClick={handleClick}
    >
      <img
        src={status === "InActive" ? blockIcon : lockIcon}
        width={24}
        height={24}
        alt=""
      />
    </div>
  );
}

export default BanIcon;
