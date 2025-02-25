import React, { useEffect } from "react";
import MovieContainer from "./MovieContainer";
import VideoBackground from "./VideoBackground";
import { useDispatch, useSelector } from "react-redux";
import {
  Now_Playing_Movies,
  options,
  Popular_Movies,
  Top_Rated_Movies,
  Upcoming_Movies,
} from "../../constant";
import axios from "axios";
import {
  getnowPlayingMovies,
  getpopularMovies,
  gettopRatedMovies,
  getupcomingMovies,
} from "../redux/moviesSlice";
import Movies from "./Movies";

const MainContainer = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    try {
      const res = await axios(Now_Playing_Movies, options);
      console.log(res.data.results);
      dispatch(getnowPlayingMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPopularMovies = async () => {
    try {
      const res = await axios(Popular_Movies, options);
      console.log(res.data.results);
      dispatch(getpopularMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTpoRatedMovies = async () => {
    try {
      const res = await axios(Top_Rated_Movies, options);
      console.log(res.data.results);
      dispatch(gettopRatedMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUpcomingMovies = async () => {
    try {
      const res = await axios(Upcoming_Movies, options);
      console.log(res.data.results);
      dispatch(getupcomingMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const NowPlayingMOvies = useSelector((store) => store.movie.nowPlayingMovies);
  const TopRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const PopularMovies = useSelector((store) => store.movie.popularMovies);
  const UpcomingMovies = useSelector((store) => store.movie.upcomingMovies);

  useEffect(() => {
    fetchNowPlayingMovies();
    fetchPopularMovies();
    fetchTpoRatedMovies();
    fetchUpcomingMovies();
    console.log(NowPlayingMOvies, "now playing movies");
    console.log(TopRatedMovies, "top");
    console.log(PopularMovies, "popular");
    console.log(UpcomingMovies, "upcoming");
  }, []);

  return (
    <div className="absolute bg-black text-white font-bold w-screen">
      <MovieContainer />
      <VideoBackground />
      <div className="h-full w-screen text-white font-semibold flex flex-wrap"></div>
      <Movies MOVIES={NowPlayingMOvies} title={"Now Playing Movies"} />
      <Movies MOVIES={TopRatedMovies} title={"Top Rated Movies"} />
      <Movies MOVIES={PopularMovies} title={"Popular Movies"} />
      <Movies MOVIES={UpcomingMovies} title={"Upcoming Movies"} />
    </div>
  );
};

export default MainContainer;
