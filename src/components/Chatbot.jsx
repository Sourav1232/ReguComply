import React, { useState } from "react";
import "./Chatbot.css";

const Chat = () => {
  const [win, setWin] = useState(true);

  const control = () => {
    setWin(!win);
  };

  return (
    <div className="chat-container">
      <div className={`chat-window ${win ? "expanded" : "collapsed"}`}>
        <div className="title">
          <p className="nameTag">Rula - "Your Assistant"</p>
          <button id="cnt" type="button" onClick={control}>
            {win ? "-" : "+"}
          </button>
        </div>
        {win && 
          <div className="conversation-window">
            <iframe 
              src="http://192.168.53.93:8501/?embed=true"
              height="400"
              width="500"
              // style="width:auto;"
            />
          </div>
        }
      </div>
    </div>
  );
};

export default Chat;
