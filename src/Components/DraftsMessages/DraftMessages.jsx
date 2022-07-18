import React from "react";
import post from "../../store/postList";
import MessageItem from "../MessageItem/MessageItem";

const DraftMessages = () => {
  const hasDraftLetters = post.draftLetters && post.draftLetters.length > 0;

  return (
    <div>
      {hasDraftLetters ? (
        post.draftLetters.map((letter) => (
          <MessageItem key={letter.id} letter={letter}></MessageItem>
        ))
      ) : (
        <div>You dont have any letters</div>
      )}
    </div>
  );
};

export default DraftMessages;
