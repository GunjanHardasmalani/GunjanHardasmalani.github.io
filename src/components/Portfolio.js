import React, { Component } from "react";
import $ from "jquery";
import Isotope from "isotope-layout/js/isotope";
import MyWork from "../components/MyWork";
import Projects from "../model/Projects";
class Portfolio extends Component {
  componentDidMount() {
    $(window).on("load", function () {

    new Isotope( '.portfolio-container', {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

    
    });
  }

  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
            <p>My Works</p>
          </div>      
          <div className="row portfolio-container">
               <MyWork projects = {Projects}></MyWork>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
