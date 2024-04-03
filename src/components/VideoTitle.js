import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PiInfoFill } from "react-icons/pi";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-12 pt-[20%] absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-5">{title}</h1>
        <p className="w-[30%] text-md">{overview}</p>
      </div>
      <div className="flex ">
        <button className="bg-white p-2 px-10 mr-2 text-black rounded-lg hover:bg-opacity-80 flex items-center"> 
          <span className="mr-2"> <IoLogoGooglePlaystore /></span> Play
        </button>
        <button className="bg-white p-2 px-10 text-black rounded-lg hover:bg-opacity-80 flex items-center">
        <span className="mr-2"> <PiInfoFill /></span> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
