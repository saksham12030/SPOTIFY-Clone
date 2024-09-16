import React, { useState } from 'react'
import LoggedinContainer from '../Container/LoggedinContainer'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { makeAuthenticatedGetAsync } from "../utils/helper";
import MyNewSong from '../Component/shared/MyNewSong';

const Search = () => {
    // http://localhost:8080/songs/get/mysongs
    const [searchtext,setsearchtext]=useState("");
    const [isfocused,setisfocused]=useState(false);
    const [songer,setsonger]=useState([]);

    const searchstate=async ()=>{
        const response = await makeAuthenticatedGetAsync("/songs/get/songname/"+searchtext);
        console.log(response.data);
        setsonger(response.data);
    }
  return (
    <>
      <LoggedinContainer curractivescreen={"search"}>
        <div className="w-full py-4">
          <div
            className={`w-1/3 bg-gray-800  text-white text-sm rounded-full p-3 px-5 flex items-center ${
              isfocused ? "border-white border-2" : "border:none"
            }`}
          >
            <Icon
              icon="ic:twotone-search"
              width="1.2em"
              height="1.2em"
              className="text-lg"
            />
            <input
              type="text"
              className="w-full bg-gray-800 pl-1 focus:outline-none"
              placeholder="What do you want to Listen?"
              onFocus={() => setisfocused(true)}
              onBlur={() => setisfocused(false)}
              onChange={(e) => setsearchtext(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchstate();
                }
              }}
            />
          </div>
        </div>
{searchtext?
        <div className="space-y-2 pt-2">
          <div className="text-white text-xl pb-3 pl-2 ">
            Search Result for{" "}
            <span className="font-bold">{searchtext}</span>
          </div>
          {songer.map((data) => {
            return (
              <MyNewSong key={data._id} info={data} playSound={() => {}} />
            );
          })}
        </div>:
        <div className='text-white font-light pl-3 pt-3'>Nothing to show here.</div>
}
      </LoggedinContainer>
    </>
  );
}

export default Search
