import React from "react";
export const Cards = ({ img, title, description, button }) => {
  return (
    <div className="container" style={{width: "280px"}}>
      <div className="col">
        <img src={img} className="card-img-top" alt="random image" />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">{title}</h5>
          <p className="card-text text-center">
            {description}
          </p>
          <a href="#" className="btn btn-primary d-flex justify-content-center">
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};
