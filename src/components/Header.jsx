import React, { Component } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

class Header extends Component {
 componentDidMount(){
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('#header').append($mobile_nav);
    $('#header').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('#header').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('#header').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('#header').hasClass('mobile-nav-active')) {
          $('#header').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
 }




  render() {
    return (    
        <header id="header" className="header-tops">
          <div className="container">
            <h1>
              <a href="../index.js">Gunjan Hardasmalani</a>
            </h1>
            <h2>
              I'm a passionate <span>Front End Developer</span> from Boston
            </h2>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="#header">Home</a>
                </li>
                <li>
                 <a href="#about">About</a>
                </li>
                <li>
                  <a href="#resume">Resume</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>

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
        </header>
    );
  }
}

export default Header;
