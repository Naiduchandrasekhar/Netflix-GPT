import { useState } from "react";
import MovieCard from "./MovieCard";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const MovieList = ({ title, movies, id }) => {
  const [isRightEnd, setIsRightEnd] = useState(true);
  const [isLeftEnd, setIsLeftEnd] = useState(true);

  //HandleScroll
  const handleScroll = (direction) => {
    let container = document.getElementById(id)

    if (direction === "right") {
      setIsLeftEnd(true)
      container.scrollLeft += 140;

      const containerStyle = getComputedStyle(container);
      const scrollableWidth = container.scrollWidth +
        parseInt(containerStyle.marginLeft) +
        parseInt(containerStyle.marginRight) +
        parseInt(containerStyle.borderLeftWidth) +
        parseInt(containerStyle.borderRightWidth) -
        container.clientWidth - 10;

        console.log(scrollableWidth, container.scrollLeft)
        container.scrollLeft >= scrollableWidth
        ? setIsRightEnd(false)
        : setIsRightEnd(true);
    } else {
      setIsRightEnd(true)
      container.scrollLeft -= 140;
      container.scrollLeft <= 0 ? setIsLeftEnd(false) : setIsLeftEnd(true)
    }
  };

  return (
    <div className="relative">
      <h1 className="text-2xl text-white font-medium pb-3">{title}</h1>
      <div className="absolute left-3 top-32">
        {isLeftEnd && (
          <button>
            <MdOutlineKeyboardArrowLeft
              onClick={() => handleScroll("left")}
              className="text-white text-4xl cursor-pointer bg-gray-600 rounded-[50%]"
            />
          </button>
        )}
      </div>
      <div className="flex overflow-x-hidden scroll-smooth w-[100%]" id={id}>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={title}
            moviePoster={movie.poster_path}
            id={movie.id}
          />
        ))}
      </div>
      <div className="absolute right-3 top-32">
        {isRightEnd && (
          <button>
            <MdOutlineKeyboardArrowRight
              onClick={() => handleScroll("right")}
              className="text-white text-4xl cursor-pointer bg-gray-600 rounded-[50%]"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
