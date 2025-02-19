import { useState } from "react";
import Textimages from "../Component/shared/Textimages"
const Sidebar = ({ isSidebarOpen ,setSidebarOpen,setcloseit,curractivescreen}) => {

  return (
    <div className=" p-4  w-[80%] bg-black text-white ">
      {isSidebarOpen && (
        <>
          <div className="">
           
            <Textimages
              image="ion:home-sharp"
              text="Home"
              active={curractivescreen === "home"}
              targetlink={"/"}
            />
            <Textimages
              image="ion:search-sharp"
              text="Search"
              active={curractivescreen === "search"}
              targetlink={"/search"}
            />
            <Textimages
              image="icomoon-free:books"
              text="Library"
              active={curractivescreen === "library"}
              targetlink={"/library"}
            />
            <Textimages
              image="material-symbols:library-music"
              text="My Music"
              active={curractivescreen === "mymusic"}
              targetlink={"/mymusic"}
            />
          </div>
          <div className="pt-5 ">
            <Textimages
              image="carbon:add-filled"
              text="Create Playlist"
              onclick={() => setcloseit(true)}
              active={curractivescreen === "playlist"}
            />
            <Textimages
              image="solar:chat-square-like-bold-duotone"
              text="Liked Song"
              active={curractivescreen === "likedsong"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
