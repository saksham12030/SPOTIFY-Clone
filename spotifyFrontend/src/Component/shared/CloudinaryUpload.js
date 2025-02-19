import { openUploadWidget } from "../../utils/CloudinaryService";
import { cloudinary_preset } from "../../config";
// import songContext from "../../context/songContext";
// import { useContext } from "react";
import {useEffect} from "react";
const CloudinaryUpload = ({ setUrl, setSongName}) => {
  //  const {setDurationinSeconds } =useContext(songContext); // Access setDuration from context

  useEffect(() => {
    if (!window.cloudinary) {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.async = true;
      script.onload = () => console.log("Cloudinary script loaded");
      document.body.appendChild(script);
    }
  }, []);
  const uploadImageWidget = () => {
    console.log("hello",cloudinary_preset);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dy6egtbic", // Replace with your Cloudinary cloud name
        uploadPreset: cloudinary_preset, // Replace with your upload preset
        // uploadPreset: , // Replace with your upload preset
        sources: ["local"],
        resourceType: "video", // Specify that it's an audio/video upload
      },
      function (error, result) {
        if (!error && result.event === "success") {
          // const durationInSeconds = result.info.duration;
          // const durationInMinutes = (durationInSeconds / 60).toFixed(0);
          setSongName(result.info.original_filename);
          setUrl(result.info.secure_url);
          // setDurationinMinutes(durationInMinutes); // Pass the duration in minutes
          // setDurationinSeconds(durationInSeconds); // Pass the duration in minutes
          console.log(`Song Name: ${result.info.original_filename}`);
        } else {
          if (error) {
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button
      className="bg-white text-black rounded-full p-4 font-semibold"
      onClick={uploadImageWidget}
    >
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
