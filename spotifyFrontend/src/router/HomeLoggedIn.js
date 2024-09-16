// import React, { useState } from "react";
// import Textimages from "../Component/shared/Textimages";
// import { Icon } from "@iconify-icon/react";
// import spotify_logo from "../asset/spotify_logo_white.svg";
// import Texter from "../Component/shared/Texter";
// import { Howl } from "howler";
import LoggedinContainer from "../Container/LoggedinContainer";
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
const HomeLoggedIn = () => {
  
  return (
    <LoggedinContainer curractivescreen={"home"}>
          <div className="p-4 overflow-auto">
            <Playlist titletext={"Focus"} titlecard={Focusdetail} />
            <Playlist titletext={"Spotify Playlists"} titlecard={Focusdetail} />
            <Playlist titletext={"Sound of India"} titlecard={Focusdetail} />
          </div>
    </LoggedinContainer>

  );
};

const Playlist = ({ titletext, titlecard }) => {
  return (
    <div className="mt-4 text-white content">
      <div className="font-semibold text-xl pb-4">{titletext}</div>
      <div className="w-full flex justify-between space-x-3 p-2">
        {titlecard.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

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
export default HomeLoggedIn;
