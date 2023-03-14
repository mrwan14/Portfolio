import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about text-white">
      <h2 className=" d-flex justify-content-center my-4 ">
        MARWAN ABDELWAHAB
      </h2>
      <h4 className="d-flex justify-content-center">I AM WEB</h4>
      <h3 className="d-flex justify-content-center">
        <span className="text-danger">DESIGNER </span> &{" "}
        <span className="text-primary"> DEVELOPER</span>
      </h3>

      <p className="lead d-flex justify-content-center">
        Specialized in front end web development
      </p>
      <h6 className="">
        <span className="d-flex justify-content-center">
          Have an experience in web designing and development{" "}
        </span>{" "}
        <br /> building high quality & responsive websites using HTML, CSS,
        Bootstrap, <br />
        <span className="d-flex justify-content-center">
          Tailwind CSS, JavaScript and React JS.
        </span>
      </h6>
      <div className="d-flex justify-content-center my-4">
        {" "}
        <button type="submit" className=" btn btn-danger text-white border-5 ">
          <a
            className=" text-decoration-none text-light  "
            href="https://docdro.id/YTXk9Dy"
            download
            target="_blank" rel="noreferrer"
          >
            CHECK CV
          </a>
        </button>
      </div>
    </div>
  );
}
