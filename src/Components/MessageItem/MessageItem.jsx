import React from "react";
import { Link } from "react-router-dom";
import post from "../../store/postList";

import classes from "./MessageItem.module.scss";

const MessageItem = ({ letter }) => {
  const addCurrentMessage = () => {
    post.setCurrentMessage(letter);
  };

  return (
    <div className={classes.message_wrapper}>
      <Link to="/currentMessage" onClick={() => addCurrentMessage()}>
        <div className={classes.message_items}>
          <div className={classes.message_container}>
            <div className={classes.message_autor}>{letter.autor}</div>
            <div className={classes.message_text}>{letter.letter}</div>
          </div>
          <div className={classes.message_date}>{letter.date}</div>
        </div>
      </Link>
      <hr className={classes.message_hr} />
    </div>
  );
};

export default MessageItem;
