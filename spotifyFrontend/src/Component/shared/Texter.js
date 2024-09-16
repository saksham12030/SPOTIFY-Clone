import React from 'react'

const Texter = ({text,active}) => {
  return (
    <div className="flex items-center justify-start">
      <div
        className={`${
          active ? "text-white" : "text-gray-300"
        } hover:text-white text-sm font-semibold  cursor-pointer`}
      >
        {text}
      </div>
    </div>
  );
}

export default Texter
