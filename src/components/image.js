import React from "react";

const image = ({ imageDetails }) => {
  return (
    <li key={imageDetails.id}>
      <img src={imageDetails.urls.small} width="400" key={imageDetails.id} />
    </li>
  );
};

export default image;
