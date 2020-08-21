import React from "react";
import $ from "jquery";


$(window).on("scroll", function () {
    $(".progress .progress-bar").each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
  });


function Progress(props) {      
  return (
      <div>
         {props.skills.map(item=> 
        <div className="progress">
            <span className="skill">
                {item.name}<i className="val">{item.percentage}%</i>
            </span>
            <div className="progress-bar-wrap">
                <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={item.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                ></div>
            </div>
        </div>
         )}
      </div>
     
  );
}

export default Progress;