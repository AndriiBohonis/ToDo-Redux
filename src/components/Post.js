import React from "react";
import Delet from "./Delet";

export default ({ post }) => {
  console.log(post);
  return (
    <div className="card">
      <div className="card-body  d-flex justify-content-between">
        <h5 className="card-title">{post.title}</h5>
        {!post.userId && <Delet className="pointer" id={post.id} />}
      </div>
    </div>
  );
};
