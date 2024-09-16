import MyNewSong from "../Component/shared/MyNewSong";
import { makeAuthenticatedGetAsync } from "../utils/helper";
import { useEffect, useState } from "react";
import LoggedinContainer from "../Container/LoggedinContainer";
const MyMusic = () => {
    const [songdata,setSongdata]=useState([]);
      useEffect(() => {
        const getsongs=async ()=>{
            const response = await makeAuthenticatedGetAsync("/songs/get/mysongs");
            setSongdata(response.song);
        }
        getsongs();
      }, [])
  return (
  
      <LoggedinContainer curractivescreen={"mymusic"}>
        <div className="text-white font-semibold text-xl pb-2 pl-2">My Songs</div>;
      {
        songdata.map((data) => {
          return <MyNewSong key={data._id} info={data} playSound={()=>{}} />;
        })
      }
      </LoggedinContainer>
  );
};

export default MyMusic;

  
