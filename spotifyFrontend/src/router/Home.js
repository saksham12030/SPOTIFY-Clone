import React from "react";
import Textimages from "../Component/shared/Textimages";
import { Icon } from "@iconify-icon/react";
import spotify_logo from "../asset/spotify_logo_white.svg"
import Texter from "../Component/shared/Texter";

const Focusdetail = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
    imgUrl:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with the music.",
    imgUrl:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
  },
  {
    title: "Instrumental Study",
    description: "Focus with the soft study in the music background.",
    imgUrl:
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Focus Piano",
    description: "Upbeat instrumental and hip hop tracks.",
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Beats to Think To",
    description: "Focus with deep techno and techno news.",
    imgUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];
const Home=()=>{
    return (
      <div className="w-full h-full flex ">
        
          <div className="lefter w-1/5 h-full bg-black flex flex-col justify-between pb-4">
            <div>
              <div className="text-white p-5">
                <img src={spotify_logo} width={150} alt="" />
              </div>
              <div className="py-4">
                <Textimages image="oi-home" text="Home" active={true} />
                <Textimages
                  image="ion:search-sharp"
                  text="Search"
                  active={false}
                />
                <Textimages
                  image="icomoon-free:books"
                  text="Library"
                  active={false}
                />
                <Textimages
                  image="material-symbols:library-music"
                  text="My Music"
                  active={false}
                />
              </div>
              <div className="pt-5">
                <Textimages
                  image="carbon:add-filled"
                  text="Create Playlist"
                  active={false}
                />
                <Textimages
                  image="solar:chat-square-like-bold-duotone"
                  text="Liked Song"
                  active={false}
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
                <div className="w-3/5 flex items-center justify-around">
                  <Texter text={"Premium"} active={false} />
                  <Texter text={"Support"} active={false} />
                  <Texter text={"Download"} active={false} />
                  <div className="h-1/2  border-r border-white"></div>
                </div>
                <div className="w-2/5 h-full flex justify-around items-center">
                  <Texter text={"Sign up"} active={false} />
                  <div className="bg-white font-semibold rounded-full h-2/3 flex items-center justify-center px-8 ">
                    Log in
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 overflow-auto">
              <Playlist titletext={"Focus"} titlecard={Focusdetail} />
              <Playlist
                titletext={"Spotify Playlists"}
                titlecard={Focusdetail}
              />
              <Playlist titletext={"Sound of India"} titlecard={Focusdetail} />
            </div>
          </div>
        </div>
        
    );
}

const Playlist=({titletext,titlecard})=>{
  return (  
    <div className="mt-4 text-white content">
      <div className="font-semibold text-xl pb-4">{titletext}</div>
      <div className="w-full flex justify-between space-x-3 p-2">
        {titlecard.map((item,index)=>{
          return (
          <Card 
            key={index}
            title={item.title} 
            description={item.description} 
            imgUrl={item.imgUrl}
            />
        )}
        )
      }
        
      </div>
    </div>
  )
}

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="p-3 w-1/5  rounded-lg bg-opacity-60 bg-black">
      <div className="rounded-lg w-full py-4">
        <img src={imgUrl} className=" rounded-lg  w-full" alt="" />
      </div>

      <div className="text-white font-semibold py-3 ">{title}</div>
      <div className="text-gray-300 text-sm">{description}</div>
    </div>
  );
};
export default Home;
