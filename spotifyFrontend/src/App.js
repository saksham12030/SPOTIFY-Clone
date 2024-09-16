
import React from "react";
import "./output.css";
import Signup from "./router/Signup"
import Home from "./router/Home"
import Upload from "./router/Upload"
import songContext from "./context/songContext";
import HomeLoggedIn from "./router/HomeLoggedIn"
import Logincomponent from "./router/Logincomponent";
import MyMusic from "./router/MyMusic";
import { useCookies } from "react-cookie";
import { useState } from "react";
import Library from "./router/Library"
import { Navigate, Route, Routes } from "react-router-dom";
import Search from "./router/Search";
import SinglePlaylist from "./router/SinglePlaylist";
function App() {
  //eslint-disable-next-line 
  const [cookie,setcookie]=useCookies(["token"]);
  const [soundplayed, setSoundplayed] = useState(null);
  const [ispaused, setispaused] = useState(true);
   const [currentsong, setcurrentsong] = useState(null);
   const [DurationinSeconds,setDurationinSeconds] = useState(null);
  return (
    <>
      <div
        className="w-screen h-screen "
        style={{ fontFamily: "Poppins,sans-serif" }}
      >
        {cookie.token ? (
          <songContext.Provider
            value={{
              currentsong,
              setcurrentsong,
              soundplayed,
              setSoundplayed,
              ispaused,
              setispaused,
              DurationinSeconds,
              setDurationinSeconds

            }}
          >
            <Routes>
              <Route path="/" element={<HomeLoggedIn />} />
              <Route path="/upload" element={<Upload />} />
              <Route
                path="/playlist/:playlistid"
                element={<SinglePlaylist />}
              />
              <Route path="/mymusic" element={<MyMusic />} />
              <Route path="/login" element={<Logincomponent />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          <Routes>
            <Route path="/login" element={<Logincomponent />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
