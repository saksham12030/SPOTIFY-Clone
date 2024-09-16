import React from 'react'

const Textinput = ({labelname,placeholder,value,setValue}) => { 
  return (
    <div className="flex flex-col py-2 space-y-2 w-full">
      <label htmlFor="13" className="font-semibold">
        {labelname}
      </label>
      <input
        id="13"
        type="text"
        className="pb-2 border-2 text-black placeholder-gray-500 border-gray-400 border-solid rounded p-2"
        placeholder={placeholder}
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
    </div>
  );
}

export default Textinput
