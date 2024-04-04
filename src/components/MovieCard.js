import { useNavigate } from "react-router-dom"

const MovieCard = ({moviePoster, id}) => {
  const navigate = useNavigate()
  const handlePosterTrailer = () => {

    navigate(`/browse/${id}`)
  }
  
  return (
    <div className="m-1 flex-shrink-0" >
        <img onClick={handlePosterTrailer} className="h-[200px]" src={"https://image.tmdb.org/t/p/w500/" + moviePoster} alt="moviePoster" />
    </div>
  )
}

export default MovieCard