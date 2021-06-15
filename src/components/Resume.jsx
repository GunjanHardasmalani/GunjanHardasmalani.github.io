import React, { Component } from "react";
import $ from "jquery";

class Resume extends Component {
  componentDidMount() {
    $(document).on("click", ".nav-menu a, .mobile-nav a", function (e) {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var hash = this.hash;
        var target = $(hash);
        if (target.length) {
          e.preventDefault();

          if ($(this).parents(".nav-menu, .mobile-nav").length) {
            $(".nav-menu .active, .mobile-nav .active").removeClass("active");
            $(this).closest("li").addClass("active");
          }

          if (hash === "#header") {
            $("#header").removeClass("header-top");
            $("section").removeClass("section-show");
            return;
          }

          if (!$("#header").hasClass("header-top")) {
            $("#header").addClass("header-top");
            setTimeout(function () {
              $("section").removeClass("section-show");
              $(hash).addClass("section-show");
            }, 350);
          } else {
            $("section").removeClass("section-show");
            $(hash).addClass("section-show");
          }

          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").fadeOut();
          }

          return false;
        }
      }
    });
  }

  render() {
    return (
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>My Experience</h2>
          </div>
          <div className="row">
            {/* <div className="col-lg-6"> */}
              {/* <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Gunjan Hardasmalani</h4>
                <p>
                  <em>
                    Passion and diligence are my two personal traits that
                    describe as an individual Being a proactive Software
                    engineer at Accenture and Front end developer at Prometheum I have adept the nub of businesses and
                    the processes involved in the development of the product
                  </em>
                </p>

                <ul>
                  <li>Boston, MA, 02120</li>
                  <li>(508)-310-8038</li>
                  <li>hardasmalani.g@northeastern.edu</li>
                </ul>
              </div> */}
           
            {/* <div className="col-lg-6"> */}
              <div className="resume-item">
                <h4>Front End Engineer Co-op</h4>
                <h5>Sept 2020 - Jan 2021</h5>
                <p>
                  <em>
                    {" "}
                    Prometheum, NY, Manhattan
                  </em>
                </p>
                <ul>
                  <li>
                    Pioneered Decentralized App with React, Next.js, GraphQL to interact with Ethereum Blockchain by availing web3.js API and MetaMask
                  </li>
                  <li>
                  Formulated reusable UI components using React, React-hooks &amp; React-Router to serve up dynamic single page application
and managed complex application state with nested components using React-Redux
                  </li>
                  <li>
                  Formalized mock-ups using Figma and devised SendGrid email templates to improve user experience for desktop and mobile
                  </li>
                  <li>Implemented Jest for mocking functions and writing unit tests along with Next.js setup for testing components</li>
<li>Participated in peer code reviews, daily scrum meetings and weekly QA sessions to deliver high-quality work in a timely manner</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Application Developer and Pro Customer Service Experience (Part-Time)</h4>
                <h5>Oct 2019 - July 2021</h5>
                <p>
                  <em>
                    {" "}
                    Northeastern University Information Services Technologies
                  </em>
                </p>
                <ul>
                  <li>
                    Analyzed, diagnosed, documented, and resolved 1000+ issues
                    concerning hardware and software of computers, phones, and
                    printers; learning management systems; websites, networks,
                    and emails
                  </li>
                  <li>
                    Knowledge of ServiceNow applications for Incidents,
                    Facilities, Knowledge, CMDB and metrics Performance
                    Analytics
                  </li>
                </ul>
                <h6>Project Teams</h6>
                <ol>
                  <li>
                    Design and Communication Team
                    <ul>
                      <li>
                        Worked on graphic and visual communication design to
                        provide strategic direction for development of
                        innovation concepts
                      </li>
                      <li>
                        Create images, charts, and infographics that effectively
                        communicate key messages on-campus using Photoshop
                      </li>
                    </ul>
                  </li>
                  <li>
                    App Development Team
                    <ul>
                      <li>
                        Employee Management System  to program model
                        for Northeastern ITS employed React as front end,
                        GraphQL on server side, Spring Boot as Backend and
                        Postgres to manage database
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div className="resume-item">
                <h4>Software Engineer</h4>
                <h5>Oct 2017 - May 2019</h5>
                <p>
                  <em>Accenture India Pvt. Ltd.</em>
                </p>
                <ul>
                  <li>
                    Inducted into the ‘Accenture Life Insurance and Annuity
                    platform’ project which streamlines and manages the full
                    end-to-end policy life cycle with integrated components for
                    new business and case management and underwriting
                  </li>
                  <li>
                    Excelled in rapid application development and management of
                    technical issues using JAVA (Spring), JavaScript, Groovy,
                    thereby improving overall performance by 30%
                  </li>
                  <li>
                    Integrated, evaluated, maintained REST and SOAP web services
                    used to manage JSON requests from external Vendor
                  </li>
                  <li>
                    Orchestrated training sessions on Spring Integration
                    framework and standard coding techniques for new recruits in
                    the team
                  </li>
                  <li>
                    Managed development of products through the software
                    lifecycle, from requirements definition to successful Cloud
                    deployment
                  </li>
                  <li>
                    Coordinated closely with cross functional teams to analyze,
                    establish, and design specifications using Agile methodology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* </div> */}
      </section>
    );
  }
}

export default Resume;
