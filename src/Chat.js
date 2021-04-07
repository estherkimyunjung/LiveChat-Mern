import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import React from "react";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat({ messages }) {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__reciever"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            placeholder="Type a messsage"
            type="text"
          />
          <button
            // onChange={sendMessage}
            type="submit"
          >
            Send a Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
