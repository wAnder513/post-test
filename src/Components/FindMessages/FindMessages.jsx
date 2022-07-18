import React from "react";
import { observer } from "mobx-react-lite";
import MessageItem from "../MessageItem/MessageItem";
import post from "../../store/postList";

const FindMessages = observer(() => {
  const hasSortLetters = post.sortLetters && post.sortLetters.length > 0;

  return (
    <div>
      {hasSortLetters ? (
        post.sortLetters.map((letter) => (
          <MessageItem key={letter.id} letter={letter}></MessageItem>
        ))
      ) : (
        <div>You dont have any letters</div>
      )}
    </div>
  );
});

export default FindMessages;
