import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <span className="nav-class">
        <div>
          <div>photo</div>
        </div>
        <div>
          <Link className="Login" to={`/login`}>LOGIN</Link>
          <Link className="Register" to={`/register`}>REGISTER</Link>
        </div>
      </span>
    </>
  );
};

export default Nav;
