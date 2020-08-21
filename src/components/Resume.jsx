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
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Gunjan Hardasmalani</h4>
                <p>
                  <em>
                    Passion and diligence are my two personal traits that
                    describe as an individual Being a proactive Software
                    engineer at Accenture I have adept the nub of businesses and
                    the processes involved in the development of the product
                  </em>
                </p>

                <ul>
                  <li>Boston, MA, 02120</li>
                  <li>(508)-310-8038</li>
                  <li>hardasmalani.g@northeastern.edu</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Master of Science, Information Systems</h4>
                <h5>2019 - 2021</h5>
                <p>
                  <em>Northeastern University, Boston, MA</em>
                </p>
                <p>CGPI : 3.37/4</p>
                <p>
                  <i>Relevant Courses:</i> Program Structures and Algorithms,
                  Web tools Development, Application Engineering Development,
                  Web Design and User Experience
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Science, Computer Engineering</h4>
                <h5>2013 - 2017</h5>
                <p>
                  <em>University of Mumbai, India</em>
                </p>
                <p>CGPI : 7.75/10</p>
                <p>
                  <i>Relevant Courses:</i> Data Structures and Algorithms, Web
                  Tools and Designing, Data Mining, Object Oriented Programming,
                  Operating Systems, Database Management Systems, Software
                  Engineering
                </p>
              </div>
              <h3 className="resume-title">Publication</h3>
              <div className="resume-item">
                <h4>Cyber Security Tools</h4>
                <h5>2016</h5>
                <p>
                  <em>                    
                    (IJCSIT) International Journal of Computer Science and
                    Information Technologies
                  </em>
                </p>
                <ul>
                  <li>
                    Co-authored and published a technical Paper on Cyber
                    Security under
                    <i>
                      International journal of Computer Science and Technology
                    </i>
                    (IJCSIT) <strong>ISSN: 0975-9646 </strong>
                  </li>
                  <li>
                    Proposed the effort is made to aware and exposes the idea
                    that it is not safe to navigate in cyber world without
                    security
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Customer Service Experience </h4>
                <h5>Oct 2019 - Present</h5>
                <p>
                  <em>
                    {" "}
                    Northeastern University Information Services Technologies
                  </em>
                </p>
                <ul>
                  <li>
                    Analyzed, diagnosed, documented, and resolved 300+ issues
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
                        Worked on graphic & visual communication design to
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
                        Lead App Development ERP Project team to program model
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
        </div>
      </section>
    );
  }
}

export default Resume;
