import React, { useState } from 'react'
import Textinput from '../Component/shared/Textinput';
import { makeAuthenticatedAsync } from '../utils/helper';

const CreatePlaylistmodal = ({closemodel}) => {
    const [playlistthumbnail,setPlaylistthumbnail]=useState("");
    const [playlistname,setPlaylistName]=useState("");
    const createplaylist=async ()=>{
        const response = await makeAuthenticatedAsync("/playlist/create",{name:playlistname,thumbnail:playlistthumbnail,songs:[]});
        if(response._id){
            closemodel();
        }
    }
  return (
    <div className="absolute bg-black flex items-center justify-center  bg-opacity-80 w-screen h-screen" onClick={closemodel}>
      <div
        className="w-1/3 rounded-md text-white p-3"
        onClick={(e)=>e.stopPropagation()}

        style={{ backgroundColor: "#121212" }}
      >
        <div className='font-semibold w-full py-2'>
          Create playlist
        </div>
        <div className=' flex-cols space-y-1  px-1 items-center justify-center'>
                <Textinput   
                    labelname="Playlist Name"
                    placeholder="Enter Playlist Name"
                    value={playlistname}
                    setValue={setPlaylistName}
                />
                <Textinput
                    labelname="Playlist Thumbnail"
                    placeholder="Enter Playlist Thumbnail"
                    value={playlistthumbnail}
                    setValue={setPlaylistthumbnail}
                />
      </div>
        <div className='bg-white text-black cursor-pointer rounded w-1/3 mx-auto my-3 flex items-center justify-center py-2' onClick={createplaylist}>Create Playlist</div>
      </div>
    </div>
  );
}

export default CreatePlaylistmodal
