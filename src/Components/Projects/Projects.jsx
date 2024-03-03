import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <>
      <div id="Projects">
        <h1>My Projects</h1>
        <div id="Projects_1">
          <div className="Box" id="Projects_1_1">
            <h1>1.SCMA</h1>
            <p>
              SCMA stands for Simat
              <br />
              Computer Maintenance App
              <br /> which is an app for our collage
              <br /> to report computers which need
              <br /> maintenance
            </p>
          </div>
          <div className="Box" id="Projects_1_2">
            <img src="src\Assets\SCMA.png" />
            <div id="Projects_1_3">
              <a href="https://youtu.be/dQw4w9WgXcQ?si=yUDlPOFwsT48rrWE">
                Click to see source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
