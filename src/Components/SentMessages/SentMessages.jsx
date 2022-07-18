import React, { useEffect } from "react";
import MessageItem from "../MessageItem/MessageItem";
import post from "../../store/postList";

const SentMessages = () => {
  const hasSentLetters = post.sentLetters && post.sentLetters.length > 0;

  useEffect(() => {
    post.fetchSentLetters();
  }, []);

  return (
    <div>
      {hasSentLetters ? (
        post.sentLetters.map((letter) => (
          <MessageItem key={letter.id} letter={letter}></MessageItem>
        ))
      ) : (
        <div>You dont have any letters</div>
      )}
    </div>
  );
};

export default SentMessages;
