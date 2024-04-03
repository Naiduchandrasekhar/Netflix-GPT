
const MovieCard = ({moviePoster}) => {

  
  return (
    <div className="m-1 flex-shrink-0" >
        <img className="h-[200px]" src={"https://image.tmdb.org/t/p/w500/" + moviePoster} alt="moviePoster" />
    </div>
  )
}

export default MovieCard