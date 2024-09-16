import React from 'react'
import { useEffect,useState } from 'react';
import { makeAuthenticatedGetAsync } from '../utils/helper';

const AddtoPlaylist = ({closemodel,addtosong}) => {
    const [data,setdata]=useState([]);
    useEffect(() => {
       const getdata=async()=>{
        const response = await makeAuthenticatedGetAsync(
          "/playlist/get/playlists/me"
        );
        setdata(response.data);
       }
       getdata();
    }, [])
  return (
    
      <div
        className="absolute bg-black flex items-center justify-center bg-opacity-80 w-screen h-screen"
        onClick={closemodel}
      >
        <div
          className="w-1/3 rounded-md text-white p-3"
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: "#121212" }}
        >
          <div className="font-semibold w-full px-2 py-2">Add To playlist</div>
          {data.map((item)=>{
            return <Playlistcomponent key={JSON.stringify(item)} item={item} addtosong={addtosong}/>;
          })}
         
          </div>
        </div>
  );
}

const Playlistcomponent=({item,addtosong})=>{
    return (
      <div>
        <div
          className="w-full text-white flex items-center space-x-3 hover:bg-opacity-20 rounded-sm p-2 mb-2 hover:bg-gray-400"
          onClick={() => addtosong(item._id)}
        >
          <div className="cursor-pointer pr-2 text-md">
            <img src={item.thumbnail} alt="" className="h-10 rounded w-10" />
          </div>
          <div className="cursor-pointer font-semibold text-white text-sm">
            {item.name}
          </div>
        </div>
      </div>
    );
}
export default AddtoPlaylist
