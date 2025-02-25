import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { options } from "../../constant";
import { getTrailerMovie } from "../redux/moviesSlice";

const useMoviesById = (movieId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        console.log(res.data.results);
        const trailer = res?.data?.results?.filter(
          (item) => item.type === "Trailer"
        );
        dispatch(
          getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
        );
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      getMovieById();
    }
  }, [movieId, dispatch]);

  return { loading, error };
};

export default useMoviesById;
