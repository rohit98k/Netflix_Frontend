import { useSelector } from "react-redux";

const VideoBackground = () => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);

  let path;
  if (trailerMovie === null) {
    path =
      "https://www.youtube.com/embed/bON-KPiiNCk?autoplay=1&mute=1&quality=hd1440&loop=1&controls=0&playlist=bON-KPiiNCk";
  } else {
    path = `https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&quality=hd1440&loop=1&controls=0&playlist=${trailerMovie.key}`;
  }

  return (
    <div className="w-screen">
      <iframe
        className="h-[120vh] w-screen aspect-video"
        src={path}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
