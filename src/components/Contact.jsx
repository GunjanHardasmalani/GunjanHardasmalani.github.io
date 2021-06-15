import React, { Component } from "react";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faShareAlt,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  
  
  render() {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>

          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-map">
                  {" "}
                  <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                </i>
                <h3>My Address</h3>
                <p>Mission Main, Boston, MA, 02120</p>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt">
                  {" "}
                  <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon>
                </i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a
                    href="https://github.com/GunjanHardasmalani"
                    target="_blank"
                    className="github"
                  >
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.facebook.com/gunjan.hardasmalani"
                    target="_blank"
                    className="facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.instagram.com/gunjanh10/"
                    target="_blank"
                    className="instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gunjan-hardasmalani/"
                    target="_blank"
                    className="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </i>
                <h3>Email Me</h3>
                <p>hardasmalani.g@northeastern.edu</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-phone-call">
                  <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                </i>
                <h3>Call Me</h3>
                <p>+1 (508)-310-8038</p>
              </div>
            </div>
          </div>

          <form           
            role="form"
            className="php-email-form mt-4"            
          >
            <div className="form-row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validate"></div>
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
              ></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
