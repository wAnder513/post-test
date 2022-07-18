import React from "react";
import MessageItem from "../MessageItem/MessageItem";
import post from "../../store/postList";

const SpamMessages = () => {
  const hasSpamLetters = post.spamLetters && post.spamLetters.length > 0;

  return (
    <div>
      {hasSpamLetters ? (
        post.spamLetters.map((letter) => (
          <MessageItem key={letter.id} letter={letter}></MessageItem>
        ))
      ) : (
        <div>You dont have any letters</div>
      )}
    </div>
  );
};

export default SpamMessages;
