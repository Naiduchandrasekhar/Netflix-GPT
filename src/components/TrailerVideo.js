import { useNavigate, useParams } from "react-router-dom"
import VideoBackground from "./VideoBackground"
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";


const TrailerVideo = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const {id} =  useParams()
    const navigate = useNavigate()
  return (
    <div className={showGptSearch ? "bg-BG-Image-Netflix bg-cover bg-center h-[100vh] overflow-scroll" : ""} >
        {showGptSearch ? <GptSearch /> : navigate("/browse") }
        {!showGptSearch && <VideoBackground movieId={id} />} 
    </div>
  )
}

export default TrailerVideo