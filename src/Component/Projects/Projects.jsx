import React from "react";
import "./Projects.css";
export default function Projects() {
  return (
    <div id="projects" className="projects position-relative">
      <div className="title position-relative ">
        <h1 className="justify-content-center d-flex main-title ">Projects</h1>
        <h1 className="shadow-title ">Projects</h1>
      </div>
      <div className="projects-slider">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../../images/SushiDesign.png")}
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption  ">
                <h5>Sushi Design</h5>
                <p>It is a simple design for a sushi restaurent</p>
                <div className="project-links d-flex justify-content-center">
                  <p className="d-flex ms-5">
                    <a
                      className=" text-decoration-none text-light  fs-5 me-5 "
                      href={require("../../images/SushiDesign.png")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check Design ?
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../../images/digital store.PNG")}
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption ">
                <h5>Digital Store</h5>
                <p>
                  It is a digial store website that present (E-Commerce)
                  projects{" "}
                </p>
                <div className="project-links d-flex justify-content-center">
                  <p className="d-flex ms-3 ">
                    <a
                      className="link"
                      target="_blank"
                      href="https://tinyurl.com/3a6etszt"
                      rel="noreferrer"
                    >
                      <i class="fa-solid fa-rocket fs-4 mx-2 text-light "> </i>
                      https://tinyurl.com/3a6etszt
                    </a>
                  </p>
                  <p className="d-flex ms-5">
                    <a
                      className="link"
                      target="_blank"
                      href="https://github.com/mrwan14/digital_store"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fs-4 mx-2 fa-github-alt text-light">
                        {" "}
                      </i>
                      https://github.com/mrwan14/digital_store{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../../images/movie3.PNG")}
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption ">
                <h5>Trending Movies </h5>
                <p>
                  It is a Trending Movie website that shows trending movies and
                  TV shows around whole World .
                </p>
                <div className="project-links d-flex justify-content-center">
                  <p className="d-flex ms-3 ">
                    <a
                      className="link"
                      target="_blank"
                      href="https://tinyurl.com/mr37wj9m"
                      rel="noreferrer"
                    >
                      <i class="fa-solid fa-rocket fs-4 mx-2 text-light "> </i>{" "}
                      https://tinyurl.com/mr37wj9m{" "}
                    </a>
                  </p>
                  <p className="d-flex ms-5">
                    <a
                      className="link"
                      target="_blank"
                      href="https://github.com/mrwan14/Trending-Movies-"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fs-4 mx-2 fa-github-alt text-light">
                        {" "}
                      </i>
                      https://github.com/mrwan14/Trending-Movies-{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
