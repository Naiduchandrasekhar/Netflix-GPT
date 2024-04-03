import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";


const useTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getVideo = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
          API_OPTIONS
        );
        const videoList = await data.json();
        const trailer = videoList.results.filter(
          (video) => video.type === "Trailer"
        )[0];
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        getVideo();
      }, []);
    
}

export default useTrailer