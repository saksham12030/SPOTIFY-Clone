import React from 'react'

const PasswordText = ({ labelname, placeholder,value, setValue }) => {
  return (
    <div className="textinputdiv flex flex-col space-y-2 w-full">
      <label htmlFor="13" className="font-semibold">
        {labelname}
      </label>
      <input
        id="13"
        type="password"
        className="pb-2 border-2 border-gray-400 placeholder-gray-500 border-solid rounded p-2"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default PasswordText
