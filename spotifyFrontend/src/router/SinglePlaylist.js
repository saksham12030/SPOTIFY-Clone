import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoggedinContainer from "../Container/LoggedinContainer";
import { makeAuthenticatedGetAsync } from '../utils/helper';
import MyNewSong from '../Component/shared/MyNewSong';
const SinglePlaylist = () => {
  const {playlistid}=useParams();
  const [playlistdata,setplaylistdata]=useState({});
  useEffect(()=>{
    const getdata = async () => {
      const response = await makeAuthenticatedGetAsync(
        "/playlist/get/" + playlistid
      );
      setplaylistdata(response);
    };
    getdata();
    //eslint-disable-next-line
  },[])
  return (
    <>
      <LoggedinContainer curActiveScreen={"library"}>
        {playlistdata._id && (
          <div>
            <div className="text-white text-xl pt-6 font-semibold">
              {playlistdata.name}
            </div>
            <div className="pt-10 space-y-3">
              {playlistdata.songs.map((item) => {
                return (
                  <MyNewSong
                    info={item}
                    key={JSON.stringify(item)}
                    playSound={() => {}}
                  />
                );
              })}
            </div>
          </div>
        )}
      </LoggedinContainer>
    </>
  );
}

export default SinglePlaylist;
