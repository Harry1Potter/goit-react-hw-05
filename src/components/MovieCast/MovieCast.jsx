import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/api";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieCastRes = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const cast = await fetchMovieCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieCastRes();
  }, [movieId]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  const imageStyle = {
    width: "220px",
    height: "280px",
    objectFit: "cover",
    borderRadius: "5px",
  };

  if (movieCast.length === 0) {
    return <p>There are no info about cast</p>;
  } else {
    return (
      <>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {movieCast.map(({ id, name, profile_path }) => {
            if (profile_path) {
              return (
                <li key={id} style={{ marginBottom: "10px" }}>
                  <img
                    src={baseUrl + profile_path}
                    alt={name}
                    style={imageStyle}
                  />
                  <p>{name}</p>
                </li>
              );
            }
          })}
        </ul>
        {isLoading && <Loader />}
        {error && <h2>Something went wrong ...</h2>}
      </>
    );
  }
};

export default MovieCast;