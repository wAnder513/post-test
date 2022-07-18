import React from "react";
import { observer } from "mobx-react-lite";
import MessageItem from "../MessageItem/MessageItem";
import post from "../../store/postList";

const InboxMessages = observer(() => {
  const hasInboxLetters = post.inboxLetters && post.inboxLetters.length > 0;

  return (
    <div>
      {hasInboxLetters ? (
        post.inboxLetters.map((letter) => (
          <MessageItem key={letter.id} letter={letter}></MessageItem>
        ))
      ) : (
        <div>You dont have any letters</div>
      )}
    </div>
  );
});

export default InboxMessages;
