import React, { useState } from "react";
import Textimages from "../Component/shared/Textimages";
import { Icon } from "@iconify-icon/react";
import spotify_logo from "../asset/spotify_logo_white.svg";
import Texter from "../Component/shared/Texter";
import { Howl } from "howler";
import { useContext } from "react";
import songContext from "../context/songContext";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import CreatePlaylistmodal from "../modals/CreatePlaylistmodal";
import AddtoPlaylist from "../modals/AddtoPlaylist";
import { makeAuthenticatedAsync } from "../utils/helper";
const LoggedinContainer = ({children,curractivescreen}) => {
  //eslint-disable-next-line 
  const addsongtoplaylist=async (playlistid)=>{
    const songid=currentsong._id;
    const payload={songid,playlistid,}
    const response = await makeAuthenticatedAsync("/playlist/add/song",payload);
    if(response._id){
      console.log(response);
      setCloseplaylist(false);
    }
  }
  //eslint-disable-next-line 
  const { currentsong, setcurrentsong,soundplayed,setSoundplayed,ispaused,setispaused,duration,setDuration} = useContext(songContext);
  const firstupdate=useRef(true);
    useLayoutEffect(() => {
      if (firstupdate.current) {
        firstupdate.current = false;
        return;
      }
      if (!currentsong) {
        return;
      }
      changesong(currentsong.track);
      //eslint-disable-next-line
    }, [currentsong && currentsong.track]);

  const playSound=()=>{
      if(!soundplayed){
        return;
      }
      console.log(currentsong);
      soundplayed.play();
  }
  const changesong = (songSrc) => {
    if (soundplayed) {
      soundplayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundplayed(sound);
    sound.play();
    setispaused(false);
  };

  const togglepause = () => {
    if (ispaused) {
      playSound();
      
      setispaused(false);
    } else {
      soundplayed.pause();
    
      setispaused(true);
    }
  };
const [closeit,setcloseit]=useState(false);
const [closeplaylist, setCloseplaylist] = useState(false);
  return (
    <div className="w-full h-full">
      {closeit && <CreatePlaylistmodal closemodel={() => setcloseit(false)} />}
      {closeplaylist && (
        <AddtoPlaylist
          closemodel={() => setCloseplaylist(false)}
          addtosong={addsongtoplaylist}
        />
      )}
      <div
        className="w-full  flex"
        style={{ height: currentsong ? "90%" : "100%" }}
      >
        <div className="lefter w-1/5 h-full bg-black flex flex-col justify-between pb-4">
          <div className="">
            <div className="text-white p-5">
              <img src={spotify_logo} width={150} alt="" />
            </div>
            <div className="py-4">
              <Textimages
                image="oi-home"
                text="Home"
                active={curractivescreen === "home"}
                targetlink={"/home"}
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
            <div className="pt-5">
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
          </div>
          <div className="px-5">
            <div className="border-gray-100 text-white flex items-center justify-center border-2 rounded-full w-2/5 px-3 py-1">
              <Icon icon="ph:globe" style={{ color: "white" }} />
              <div className="text-sm ml-1">English</div>
            </div>
          </div>
        </div>

        <div
          className="righter w-4/5 overflow-auto"
          style={{ backgroundColor: "#121212" }}
        >
          <div
            className="nav w-full bg-opacity-40 bg-black flex justify-end"
            style={{ height: "10%" }}
          >
            <div className="w-1/2 flex h-full ">
              <div className="w-2/3 flex items-center justify-around">
                <Texter text={"Premium"} active={false} />
                <Texter text={"Support"} active={false} />
                <Texter text={"Download"} active={false} />
                <div className="h-1/2  border-r border-white"></div>
              </div>
              <div className="w-2/5 h-full flex justify-around items-center">
                <Link to="/upload">
                  <Texter text={"Upload Songs"} active={false} />
                </Link>
                <div className="bg-white font-semibold rounded-full h-10 w-10 flex items-center justify-center px-3 ">
                  SB
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 overflow-auto">{children}</div>
        </div>
      </div>
      {currentsong && (
        <div
          className=" flex items-center  text-white p-3"
          style={{ height: "10%", opacity: 0.97, backgroundColor: "#121212" }}
        >
          <div className="w-1/4 flex items-center ">
            <img
              src={currentsong.thumbnail}
              alt=""
              className=" rounded w-12 h-12 bg-cover bg-center"
            />
            <div className="pl-4">
              <div className="cursor-pointer hover:underline text-md">
                {currentsong.name}
              </div>
              <div className="cursor-pointer hover:underline text-xs text-gray-400">
                {currentsong.artist.firstname +
                  " " +
                  currentsong.artist.lastname}
              </div>
            </div>
          </div>
          <div className="w-1/2  h-full flex flex-cols justify-center items-center">
            <div className=" w-1/3 flex items-center justify-between">
              <Icon
                icon="solar:shuffle-linear"
                className="cursor-pointer text-gray-500 hover:text-white"
                width="1.8em"
                height="1.8em"
              />
              <Icon
                icon="ic:sharp-skip-previous"
                className="cursor-pointer text-gray-500 hover:text-white"
                width="1.8em"
                height="1.8em"
              />
              <Icon
                icon={
                  !ispaused
                    ? "zondicons:pause-solid"
                    : "heroicons:play-16-solid"
                }
                className="cursor-pointer text-gray-500 hover:text-white"
                width="2.2em"
                height="2.2em"
                onClick={togglepause}
              />
              <Icon
                icon="ic:sharp-skip-next"
                className="cursor-pointer text-gray-500 hover:text-white"
                width="1.8em"
                height="1.8em"
              />
              <Icon
                icon="ic:round-repeat"
                className="cursor-pointer text-gray-500 hover:text-white"
                width="1.8em"
                height="1.8em"
              />
            </div>
          </div>
          <div className="w-1/4 pr-3 gap-x-3 flex items-center justify-end">
            <div className="cursor-pointer">
              <Icon
                icon="tabler:playlist-add"
                width="1.8em"
                height="1.8em"
                onClick={() => setCloseplaylist(true)}
              />
            </div>
            <div className="cursor-pointer">
              <Icon icon="ph:heart" width="1.5em" height="1.5em" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default LoggedinContainer;
