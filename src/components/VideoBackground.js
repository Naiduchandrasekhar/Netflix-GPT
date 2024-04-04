import { useSelector } from "react-redux";
import useTrailer from "../Hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.trailerVideo);
  useTrailer(movieId)

  return (
    <div >
      <iframe
       className="w-screen aspect-video  z-30 "
        src={"https://www.youtube.com/embed/" + trailerId?.key + "?autoplay=1&mute=1&controls=0&showinfo=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
