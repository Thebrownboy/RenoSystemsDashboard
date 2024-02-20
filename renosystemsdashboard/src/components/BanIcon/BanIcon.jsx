import React from "react";
import blockIcon from "../../assets/block-prohibited-svgrepo-com.svg";
import { useSelector } from "react-redux";

function BanIcon() {
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
              status: "InActive",
            }),
          }
        ).then((res) => res.json());

        // window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div
      className="block-icon bg-[#E7E9Ef] p-1 rounded-md cursor-pointer"
      onClick={handleClick}
    >
      <img src={blockIcon} width={24} height={24} alt="" />
    </div>
  );
}

export default BanIcon;
