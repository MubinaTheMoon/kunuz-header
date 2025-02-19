import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="cont">
      <div className="transparent"></div>
      <div className="navbar bg-base-100">
        <div className="navbar-container">
          <div className="logo">
            <NavLink to={"/"}>
              <img src="../kunuz-logo.png" alt="" />
            </NavLink>
          </div>
          <ul className="list">
            <li className="item">
              <NavLink to={"/politics"}>POLITICS</NavLink>
            </li>
            <li className="item">
              <NavLink to={"/society"}>SOCIETY</NavLink>
            </li>
            <li className="item">
              <NavLink to={"/business"}>BUSINESS</NavLink>
            </li>
            <li className="item">
              <NavLink to={"/tech"}>TECH</NavLink>
            </li>
            <li className="item">
              <NavLink to={"/culture"}>CULTURE</NavLink>
            </li>
            <li className="item">
              <NavLink to={"/sport"}>SPORT</NavLink>
            </li>
            <li className="item">
              <NavLink to={"/tourism"}>TOURISM</NavLink>
            </li>
          </ul>
          <div className="right-side">
            <div className="lang">
              <i className="fa-solid fa-globe"></i>
              <p>English</p>
            </div>
            <div className="search">
              <i className="fa-solid fa-search"></i>
            </div>
            <div className="hamburger">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
