import React from "react";

export default function PostCard() {
  return (
    <div className="postcardcontainer">
      <div className="cardheading">
        <span>Seller</span>
      </div>
      <div className="cardcontents">
        {/* <div>insert image here</div> */}
        <h3>Title</h3>
        <p>discription</p>
        <p>distance</p>
        <p>price</p>
      </div>
    </div>
  );
}
