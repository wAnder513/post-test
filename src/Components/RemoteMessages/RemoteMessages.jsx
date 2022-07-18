import React from "react";
import MessageItem from "../MessageItem/MessageItem";
import post from "../../store/postList";

const RemoteMessages = () => {
  const hasRemouteLetters =
    post.remouteLetters && post.remouteLetters.length > 0;

  return (
    <div>
      {hasRemouteLetters ? (
        post.remouteLetters.map((letter) => (
          <MessageItem key={letter.id} letter={letter}></MessageItem>
        ))
      ) : (
        <div>You dont have any letters</div>
      )}
    </div>
  );
};

export default RemoteMessages;
