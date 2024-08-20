import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navLinkStyle = {
    margin: "20px",
    textDecoration: "none",
    color: "Grey",
    fontSize: "24px",
  };

  const activeStyle = {
    fontWeight: "bold",
    color: "Green",
  };

  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...navLinkStyle,
          ...(isActive ? activeStyle : {}),
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive }) => ({
          ...navLinkStyle,
          ...(isActive ? activeStyle : {}),
        })}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;