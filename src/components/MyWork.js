import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function MyWork(props) {
  return (
    <div>
      {props.projects.map((item) => (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src={require(`../images/projects/${item.name}`)}
              className="img-fluid"
            />
            <div className="portfolio-info">
              <h4>{item.heading}</h4>
              <ul className="details text-left">{item.details.map((detail) => 
                <li>{detail}</li>
              )}</ul>
              <div className="portfolio-links">
                <a
                  href={"https://github.com/GunjanHardasmalani/" + item.git}
                  target="_blank"
                  className="github"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>              
              </div>
            </div>
          </div>         
        </div>
      ))}
    </div>
  );
}

export default MyWork;
