import React, { useState } from "react";
import Texter from "../Component/shared/Texter";
import { Icon } from "@iconify-icon/react";
import spotify_logo from "../asset/spotify_logo_white.svg";
import { Howl } from "howler";
import { useContext } from "react";
import songContext from "../context/songContext";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import CreatePlaylistmodal from "../modals/CreatePlaylistmodal";
import AddtoPlaylist from "../modals/AddtoPlaylist";
import { makeAuthenticatedAsync } from "../utils/helper";
import Navbar from "../router/Navbar";
import Sidebar from "../router/Sidebar";
const LoggedinContainer = ({children,curractivescreen}) => {
  //eslint-disable-next-line 
   const [isSidebarOpen, setSidebarOpen] = useState(true);
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
    <div className="w-full  h-full">
      {closeit && <CreatePlaylistmodal closemodel={() => setcloseit(false)} />}
      {closeplaylist && (
        <AddtoPlaylist
          closemodel={() => setCloseplaylist(false)}
          addtosong={addsongtoplaylist}
        />
      )}

      <div
        className="w-full grid grid-cols-5 "
        style={{ height: currentsong ? "90%" : "100%" }}
      >
        <div className="lefter  xl:col-span-1  h-full bg-black justify-between pb-4">
          <div className=" w-full  bg-black ">
            <div className="text-white ml-4 mt-6 invisible xl:visible  md:invisible w-full">
              <img src={spotify_logo} width={200} alt="" />
            </div>
            <div className="py-5 ">
              <div className="flex w-full mr-16 items-center justify-center my-5">
                <div className="w-full xl:hidden md:hidden "></div>
                <span
                  className=" xl:hidden absolute left-6 text-white text-xl top-5  cursor-pointer"
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                >
                  <svg
                    class="w-10  h-10 bi top-3 fixed z-30  bi-app-indcator px-2 py-2 mt-2 rounded-md bg-gray-600"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </span>
                <Sidebar
                  isSidebarOpen={isSidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                  curractivescreen={curractivescreen}
                  setcloseit={setcloseit}
                ></Sidebar>
              </div>
              {/* */}
            </div>
          </div>
        </div>

        <div
          className="righter  bg-red-400  col-span-4 w-full  overflow-auto"
          style={{ backgroundColor: "#121212" }}
        >
          <div className="mr-3 bg-grey-900 border-b border-gray-700 w-full ">
            <div className=" relative  mt-2 w-full flex items-center xl:justify-between justify-around px-4 py-3">
              <ul className="flex justify-around w-full gap-2 items-center ">
                <li>
                  <Texter text={"Premium"} active={false} />
                </li>
                <li>
                  <Texter text={"Support"} active={false} />
                </li>
                <li>
                  <Texter text={"Download"} active={false} />
                </li>
                <li>
                  <Link to="/upload">
                    <Texter text={"Uploads"} active={false} />
                  </Link>
                </li>
              <div className="ml-5 h-full  flex md:flex justify-around items-center xl:pr-4">
                <div className="bg-white font-semibold rounded-full h-10 w-10 flex items-center justify-center px-3">
                  SB
                </div>
              </div>
              </ul>
            </div>
          </div>

          <div
            className="nav w-full  bg-opacity-40 bg-black flex justify-end"
            // style={{ height: "10%" }}
          ></div>
          <div className="p-4 ">{children}</div>
        </div>
      </div>
      {currentsong && (
        <div
          className=" flex items-center justify-center overflow-hidden text-white p-5"
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
            <div className=" w-1/3  flex items-center justify-between">
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
