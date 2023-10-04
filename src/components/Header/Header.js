import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEarth,
  faMoon
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../context";
import { LanguageContext } from "../../context/language";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { theme, toggle } = React.useContext(ThemeContext);
  const language = useSelector((state) => state.language.current_lang);
  const { contextLang, setContextLang } = useContext(LanguageContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light" // Set background color to grey
      style={{ color: theme.color }}
    >
      <div className="container fluid">
        <div className="me-auto">
          <NavLink
            className="navbar-brand"
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "orange" : theme.color
              };
            }}
          >
           <span ><strong>Product App</strong></span>
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink
              className="nav-link"
              to="/Register"
              style={({ isActive }) => {
                return {
                  color: isActive ? "orange" : theme.color
                };
              }}
            >
              Register
            </NavLink>
            <NavLink
              className="nav-link"
              to="/Login"
              style={({ isActive }) => {
                return {
                  color: isActive ? "orange" : theme.color
                };
              }}
            >
              Log In
            </NavLink>
            <NavLink
              className="nav-link nav-cart"
              to="/CartList"
              style={({ isActive }) => {
                return {
                  color: isActive ? "orange" : theme.color
                };
              }}
            >
              <span className="position-relative">
  <FontAwesomeIcon icon={faCartShopping} />
  {cart.carts.length > 0 && (
    <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
      {cart.carts.length}
    </span>
  )}
</span>
            </NavLink>
            <button
              className="nav-link ms-4"
              type="button"
              onClick={toggle}
              style={{
                color: theme.color,
                outline: "none"
              }}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>

            <button
              className="nav-link ms-3"
              type="button"
              onClick={() =>
                setContextLang((prevLanguage) =>
                  prevLanguage === "en" ? "ar" : "en"
                )
              }
            >
              <FontAwesomeIcon icon={faEarth} /> {contextLang}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
