import React, { Component } from "react";
import $ from "jquery";

class Education extends Component {
    render() {
        return (
            <section id="education" className="resume">
                <div className="container">
                    <div className="section-title">
                        <h2>Education</h2>
                    </div>
                    <div className="row">
                        <div className="resume-item">
                            <h4>Master of Science, Information Systems</h4>
                            <h5>2019 - 2021</h5>
                            <p>
                                <em>Northeastern University, Boston, MA</em>
                            </p>
                            <p>
                                <i>Relevant Courses:</i> Program Structures and Algorithms,
                        Web tools Development, Application Engineering Development,
                        Web Design and User Experience, User Experience and Design, Network Structure and Cloud Computing
                        </p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Science, Computer Engineering</h4>
                            <h5>2013 - 2017</h5>
                            <p>
                                <em>University of Mumbai, India</em>
                            </p>
                            <p>
                                <i>Relevant Courses:</i> Data Structures and Algorithms, Web
                        Tools and Designing, Data Mining, Object Oriented Programming,
                        Operating Systems, Database Management Systems, Software
                        Engineering
                        </p>
                        </div>
                        <div className="section-title">
                            <h2>Publication</h2>
                        </div>

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
                </div>
            </section>
        )
    }
}

export default Education;