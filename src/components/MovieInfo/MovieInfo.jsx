import { Link, NavLink, Outlet } from "react-router-dom";

const MovieInfo = ({
  backLink,
  backdrop_path,
  title,
  vote_average,
  overview,
  genres,
}) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  const navLinkStyle = {
    marginRight: "10px",
    color: "Grey",
    fontSize: "18px",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const activeStyle = {
    fontWeight: "bold",
    color: "green",
    backgroundColor: "rgba(0, 255, 0, 0.2)",
  };

  const backLinkStyle = {
    color: "black",
    fontSize: "18px",
  };

  return (
    <div>
      <Link to={backLink.current} style={backLinkStyle}>
        Back
      </Link>
      <div>
        {backdrop_path && <img src={baseUrl + backdrop_path} alt={title} />}
        <h2>{title}</h2>
        <p>User score : {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <div>
        <NavLink
          to="cast"
          style={({ isActive }) => ({
            ...navLinkStyle,
            ...(isActive ? activeStyle : {}),
          })}
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => ({
            ...navLinkStyle,
            ...(isActive ? activeStyle : {}),
          })}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieInfo;