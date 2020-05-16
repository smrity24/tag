import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div>
          <input
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name ? e.preventDefault() : null)}
          to={`/chat?name=${name}`}
        >
          <button className={"button mt-20"} type="submit">
            Add
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
