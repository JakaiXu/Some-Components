import React from "react";

const UserProfile = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1"></figure>
        <img
          src={props.img}
          alt="/"
          style={{
            width: "100%",
            borderBottom: "1px dashed lightGrey",
            marginTop: "-200px",
          }}
        />
      </div>
      <div className="card-content">
        <div className="media-content">
          <h3 className="title is-4">{props.h3}</h3>
          <h5 className="subtitle is-6">{props.h5}</h5>
          <p>{props.p}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
