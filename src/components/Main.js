import { Link } from "react-router-dom";
import React from "react";
import image from "../Images/404.jpg";

function Main() {
  return (
    <div>
      <div className="profile">
        <a href="/">
          <img className="images" src={image} />
        </a>
        <div className="tag">John Smith</div>
      </div>
      <Link to={`/add?`}>
        <button className={"button mt-20"} type="submit">
          Tag
        </button>
      </Link>
    </div>
  );
}

export default Main;
