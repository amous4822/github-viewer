import React from "react";

const Navbar = ({icon, title}) => {
  return (
    <nav className="nav bg-primary">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  //set deafult props to give developer option to set it if he wants to or else display something instead of error
  title: "Github Finder",
  icon: "fab fa-github",
};

export default Navbar;
