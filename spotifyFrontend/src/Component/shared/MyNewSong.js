import React, { useContext } from 'react'
import songContext from '../../context/songContext';
const MyNewSong = ({ info, playSound }) => {
  //eslint-disable-next-line
  const { currentsong, setcurrentsong } = useContext(songContext);
  const {setDurationinSeconds,DurationinSeconds}=useContext(songContext);
  const minutes = Math.floor(DurationinSeconds / 60);
  const seconds = Math.round(DurationinSeconds % (60).toFixed(0));
  return (
    <div
      className="flex hover:bg-gray-600 ,,hover: bg-opacity-20 rounded-sm p-2"
      onClick={() => {
        setcurrentsong(info);
      }}
    >
      <div
        className="bg-red cursor-pointer bg-cover w-12 h-10 bg-center"
        style={{
          backgroundImage: `url(${info.thumbnail})`,
        }}
      ></div>
      <div className=" flex w-full ">
        <div className="text-white flex-cols  justify-center pl-4 w-5/6">
          <div className="hover:underline cursor-pointer text-md">
            {info.name}
          </div>
          <div className=" hover:underline cursor-pointer text-gray-400 text-xs">
            {info.artist.firstname + " " + info.artist.lastname}
          </div>
        </div>
        <div className="flex text-white items-center justify-center w-1/6">
          {DurationinSeconds?`${minutes}:${seconds}`:"2:30"}
        </div>
      </div>
    </div>
  );
};

export default MyNewSong
