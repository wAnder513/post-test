import React from "react";
import post from "../../store/postList";

import classes from "./CurrentMessage.module.scss";

const setLetterDelete = () => {
  post.removeLetter(post.currentMessage.id, post.currentMessage.type);
};

const CurrentMessage = () => {
  return (
    <div className={classes.message}>
      <div className={classes.message_info}>
        <div>autor: {post.currentMessage.autor}</div>
        <div className={classes.message_date}>{post.currentMessage.date}</div>
      </div>

      <div className={classes.message_letter}>{post.currentMessage.letter}</div>
      <button className={classes.message_remote} onClick={() => setLetterDelete()}>remote</button>
    </div>
  );
};

export default CurrentMessage;
