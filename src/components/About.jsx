import React, { Component } from "react";
import $ from "jquery";
import Progress from "./Progress";
import {programming, web, tools, database} from "../model/Skills";
class About extends Component {
 
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
      <section id="about" className="about">
        <div className="about-me container">
          <div className="section-title">
            <h2>Learn more about me</h2>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
              src={require(`../images/about-me-new.jpg`)}
              className="img-fluid aboutimg"
            />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Graduate Student at Northeastern University</h3>
              <p>
                I strongly believe "Growth is the underlying passion that drives my technical acumen
                and development spirit".
              </p>
              <p>
                I am an experienced Software Developer with demonstrated history
                of working in the Information Technology and Services Industry.
                Passion and diligence are my two personal traits that describe as an individual 
                Being a proactive Software engineer at Accenture and Front end developer at Prometheum 
                I have adept the nub of businesses and the processes involved in the development of the product
              </p>
            </div>
          </div>
        </div>
  
        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <h3>Programming Languages</h3>          
            <Progress skills = {programming}/>                                                                         
            </div>
            <div className="col-lg-6">
              <h3>Web Technologies</h3>
              <Progress skills = {web}/>                                                                
            </div>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <h3>Databases and IDEs</h3>  
              <Progress skills = {database}/>                                                                  
            </div>
            <div className="col-lg-6">
              <h3>Tools and Version Controls</h3> 
              <Progress skills = {tools} />                                                    
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
