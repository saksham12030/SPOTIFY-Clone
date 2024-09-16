import React from "react";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";

const Textimages = ({ image, text, active,targetlink,onclick}) => {
  return (
    <Link to={targetlink} className="block">
      <div className="flex items-center justify-start" onClick={onclick}>
        <div className={`px-5 py-1  hover:text-white cursor-pointer`}>
          <Icon
            icon={image}
            style={{ fontSize: "25px", color: active ? "white" : "gray" }}
          />
        </div>
        <div
          className={`${
            active ? "text-white" : "text-gray-300"
          } hover:text-white text-sm font-semibold cursor-pointer`}
        >
          {text}
        </div>
      </div>
    </Link>
  );
};

export default Textimages;
