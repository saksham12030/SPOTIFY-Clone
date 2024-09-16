import React, { useEffect, useState } from 'react'
import LoggedinContainer from '../Container/LoggedinContainer'
import { makeAuthenticatedGetAsync } from '../utils/helper'
import { useNavigate } from 'react-router-dom';

const Library = () => {
    const [data,setdata]=useState([]);
    useEffect(() => {
       const getdata=async()=>{
        const response = await makeAuthenticatedGetAsync(
          "/playlist/get/playlists/me"
        );
        setdata(response.data);;
       }
       getdata();
    }, [])
    return <LoggedinContainer curractivescreen={"library"}>
    <div className='font-semibold text-xl text-white py-3'>Playlists</div>
    <div className='grid gap-2 grid-cols-5'>
        {data.map((item)=>{
            return <Card key={JSON.stringify(item)} title={item.name} description={""} playlistid={item._id} imgUrl={item.thumbnail}/>
          })}
    </div>
  </LoggedinContainer>;
}

const Card = ({ title, description, playlistid,imgUrl }) => {
  const navigate = useNavigate();
 
  return (
    <div className="p-1 mt-3 rounded-lg cursor-pointer item-center flex-cols bg-opacity-50 bg-black" 
    onClick={()=>navigate("/playlist/"+playlistid)}
    >
      
      <div className="rounded-md flex items-center justify-center w-full  py-3">
        <img src={imgUrl} className=" bg-cover rounded-lg w-40 h-40" alt="" />
      </div>

      <div className="text-white font-semibold py-3 pl-2 ">{title}</div>
      <div className="text-gray-300 text-sm">{description}</div>
    </div>
  );
};
export default Library
