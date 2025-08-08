import { useState } from "react";
import { NavLink } from "react-router";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.querySelector(".rightNav").classList.toggle("active");
  };
  return (
    <>
      <nav>
        <div className="leftNav">
          <p>Atta Haider</p>
        </div>
        <div className="rightNav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <button className="hamburger" onClick={toggleNav}>&#9776;</button>
      </nav>
    </>
  );
};
