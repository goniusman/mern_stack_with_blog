import React from "react";
import { connect } from "react-redux";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { logout } from "../../../store/actions/authAction";
import List from "./list";

const Header = ({ auth, logout }) => {
  return (
    <>
      <header
        id="header"
        className="fixed-top header-inner-pages header-scrolled"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link>Tempo</Link>
          </h1>

          <Link className="logo">
            <img src="../assets/img/favicon.png" alt="" className="img-fluid" />
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <List name="Home" link="/" />

              <List name="Blog" link="/blog" />

              {auth.isAuthenticated ? (
                <>
                  <List name="Profile" link="/profile" />
                  <li>
                    <Link onClick={logout}>Logout</Link>
                  </li>
                </>
              ) : (
                <List name="Login" link="/login" />
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
