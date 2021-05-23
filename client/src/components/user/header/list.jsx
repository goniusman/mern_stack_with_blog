import React from "react";
import { NavLink, Link } from "react-router-dom";

function List({ name, link }) {
  return (
    <>
      <li>
        <Link
          to={link}
          className={link ? "nav-link scrollto " : "nav-link scrollto "}
        >
          {name}
        </Link>
      </li>
    </>
  );
}

export default List;
