import React from "react";

function Detail(props) {
  return (
    <div className="text-center">
      <img
        alt={props.title}
        className="img-fluid"
        src={props.listE.picture.medium}
        style={{ margin: "0 auto" }}
      />

      <h3>First name: {props.listE.name.first}</h3>
      <h3>Last name: {props.listE.name.last}</h3>
      <h3>email: {props.listE.email}</h3>
      <h3>phone: {props.listE.phone}</h3>
    </div>
  );
}

export default Detail;
