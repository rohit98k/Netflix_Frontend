import React from "react";
import useMoviesById from "../customHook/useMoviesById";
import { useDispatch } from "react-redux";
import { getdetail } from "../redux/moviesSlice";

const Movies = ({ MOVIES, title }) => {
  const [selectedMovieId, setSelectedMovieId] = React.useState(null);
  const { loading, error } = useMoviesById(selectedMovieId);
  const dispatch = useDispatch();

  const handleclick = (movieId, title, description) => {
    setSelectedMovieId(movieId);
    const detail = {
      title: title,
      description: description,
    };
    dispatch(getdetail(detail));
    window.scrollTo(0, 0); // Move this inside handleclick
  };

  return (
    <div className="bg-gray-100 text-black p-6 flex flex-col items-center w-full hover:cursor-pointer">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {MOVIES && MOVIES.length > 0 ? (
          MOVIES.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-md rounded-lg p-4 w-64"
              onClick={() =>
                handleclick(movie.id, movie.title, movie.overview.slice(0, 90))
              } // Pass the movie ID, title, and sliced overview
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-700 mb-4">
                {movie.overview.slice(0, 30)}...
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Release Date: {movie.release_date}
              </p>
              <p className="text-sm text-gray-500">
                Rating: {movie.vote_average} ({movie.vote_count} votes)
              </p>
            </div>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default Movies;
