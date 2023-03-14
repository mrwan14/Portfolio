import React from "react";
import "./Nav.css";
export default function Nav() {
  return (
    <div>
      <nav
        id="navbar"
        className="navbar fixed-top bg-transparent  navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#projects"
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  CONTACT
                </a>
              </li>
              <li className="nav-item d-flex">
                <a
                  className="nav-link text-dark mx-1 fs-5 fw-bolder"
                  target="_blank"
                  href="https://github.com/mrwan14"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github-alt"></i>
                </a>
                <a
                  className="nav-link text-dark fs-5 fw-bolder"
                  target="_blank"
                  href="https://linkedin.com/in/marwan-abdelwahab-448593209"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link text-dark fs-5 fw-bolder"
                  target="_blank"
                  href="https://github.com/mrwan14"
                >
                  <i class="fa-brands fa-github-alt"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fs-5 fw-bolder"
                  target="_blank"
                  href="https://linkedin.com/in/marwan-abdelwahab-448593209"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
