import React, { useState } from "react";
import Textinput from "../Component/shared/Textinput";
import CloudinaryUpload from "../Component/shared/CloudinaryUpload";
import { makeAuthenticatedAsync } from "../utils/helper";
import {  useNavigate } from "react-router-dom";
import LoggedinContainer from "../Container/LoggedinContainer";
const Upload = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [url, setUrl] = useState();
  const [songName, setSongName] = useState();
  const submitbtn = async () => {
    const data = { name, thumbnail, track: url };
    const response = await makeAuthenticatedAsync("/songs/create", data);
    if (response.error) {
      alert("song not created");
      return;
    }
    alert("success");
    navigate("/home");
  };

  return (
    <LoggedinContainer>
      <div className="p-4 overflow-auto text-white">
        <div className="font-semibold text-xl pb-4">Upload</div>
        <div className="flex w-2/3 gap-x-2">
          <div className="w-1/2">
            <Textinput
              labelname="Name "
              placeholder="Name"
              value={name}
              setValue={setName}
            />
          </div>
          <div className="w-1/2">
            <Textinput
              labelname="Thumbnail "
              placeholder="Thumbnail "
              value={thumbnail}
              setValue={setThumbnail}
            />
          </div>
        </div>
        <div className="pt-2">
          {songName ? (
            <div className="text-black w-1/3 bg-white rounded-lg p-3 ">
              {songName.substring(0, 20)}...
            </div>
          ) : (
            <CloudinaryUpload
              setUrl={setUrl}
              setSongName={setSongName}
            />
          )}
        </div>

      </div>
      <div
        className="bg-white rounded-full py-2 flex w-40 items-center justify-center m-3 cursor-pointer"
        onClick={submitbtn}
      >
        Submit Song
      </div>
    </LoggedinContainer>
  );
};


export default Upload;


