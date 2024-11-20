import React from "react";

const Card = (props) => {
  return (
    <>
      {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 container-xl mx-auto"> */}
      <div className="col">
        <div className="card h-100" style={{ width: "100%" }}>
          <img src={props.img} className="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;
