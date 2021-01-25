import React from "react";

function Detail(props) {
  return (
    <div className="text-center">
      <img
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: "0 auto" }}
      />
      <h3>Name(s): {props.name}</h3>
      <h3>Job: {props.job}</h3>
      <h3>email: {props.email}</h3>
      <h3>phone: {props.phone}</h3>
    </div>
  );
}

export default Detail;
