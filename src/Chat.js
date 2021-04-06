import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import React from "react";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
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
        <p className="chat__message">
          <span className="chat__name">Esther</span>
          This a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciver">
          <span className="chat__name">Esther</span>
          This a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
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
