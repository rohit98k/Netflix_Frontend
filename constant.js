const API_END_POINT = "http://localhost:2000/api/v1/user";

export default API_END_POINT;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTI5OGNhZTU3ZDZjOTk1ZjQxNmQ4MjA5MTYyZTg5OCIsIm5iZiI6MTcyMjA4MDYyNi4xNzExODMsInN1YiI6IjY2YTRkYjY3NTJlOGU5ZjRlNDgwZjdmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.40z95FFt9Nh7Jp_JIi5VRHIOaVDxcnGPkciJ_ONaKfU",
  },
};

export const Now_Playing_Movies =
  " https://api.themoviedb.org/3/movie/now_playing";

export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";

export const Top_Rated_Movies = " https://api.themoviedb.org/3/movie/top_rated";

export const Upcoming_Movies = " https://api.themoviedb.org/3/movie/upcoming";
