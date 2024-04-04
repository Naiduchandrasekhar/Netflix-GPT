import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import lang from "../Utils/languageConstants"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  const currentLanguage = useSelector(store => store.config.lang)
  return (
    <div className=" bg-black pl-12">
      <div className="sm:pt-[35%] md:pt-[0%] relative -mt-48">
      <MovieList title={lang[currentLanguage].nowPlaying} movies={movies?.nowPlayingMovies} id={1}   />
      <MovieList title= {lang[currentLanguage].topMovies} movies={movies?.topRatedMovies}  id={2}  />
      <MovieList title={lang[currentLanguage].PopularMovies} movies={movies?.popularMovies} id={3}   />
      <MovieList title= {lang[currentLanguage].UpcomingMovies} movies={movies?.upcomingMovies}  id={4}  />
      </div>
    </div>
  )
}

export default SecondaryContainer