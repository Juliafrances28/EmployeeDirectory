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
      <h3>Name(s): {props.listE.name.firstname}</h3>
      <h3>Name(s): {props.listE.name.lastname}</h3>
      <h3>email: {props.listE.email}</h3>
      <h3>phone: {props.listE.phone}</h3>
    </div>
  );
}

export default Detail;
