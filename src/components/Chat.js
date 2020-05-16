import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="back">
      <a href="/add"> Back</a>
      <div className="tags">
        Tags People
        <div>
          <div>
            <input className="searchbox" type="text" value="search" />
          </div>

          <div className="select">
            Select People
            <div className="peolebox">
              <div className="person"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
