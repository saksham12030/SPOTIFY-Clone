import { createContext } from "react";

const songContext = createContext({
  currentsong: null,
  setcurrentsong: (currentsong) => {},
  ispaused: null,
  setispaused: () => {},
  soundplayed: null,
  setSoundplayed: () => {},
  DurationinSeconds:null,
  setDurationinSeconds: () => {},
});
export default songContext;