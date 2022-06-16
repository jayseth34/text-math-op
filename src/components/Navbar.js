import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-success" to="/">
            <b>SmartText</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-success" aria-current="page" to="/SmartText/">
                <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success" to="/textAnalyzer">
                <strong>Text Analyze</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success" to="/mathoperation">
                <strong>Math Operations</strong>
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <input
                className="htmlForm-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
