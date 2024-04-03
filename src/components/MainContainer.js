import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [randomNumber, setRandomNumber] = useState(null);
 

  useEffect(() => {
    //the trailer will change on every refresh
    if (movies && randomNumber === null) {
      const randomNumber = Math.trunc(Math.random() * movies.length);
      setRandomNumber(randomNumber);
    }

  }, [movies, randomNumber]);

  if (!movies || randomNumber === null) return;

  const mainMovie = movies[randomNumber];
  const { id, original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
