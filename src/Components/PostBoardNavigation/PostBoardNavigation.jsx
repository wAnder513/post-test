import React from "react";
import post from "../../store/postList";
import { observer } from "mobx-react-lite";
import PostBoardNavigationFolder from "./PostBoardNavigationCustomFolder";
import PostBoardNavigationItem from "./PostBoardNavigationItem";
import PostBoardNavigationCustomFolderItem from "./PostBoardNavigationCustomFolderItem";

import classes from "./PostBoardNavigation.module.scss";

const PostBoardNavigation = observer(() => {
  const hasCustomFolder = post.customFolders && post.customFolders.length > 0;
  const postCategories = [
    {
      categori: "Inbox",
      type: "inboxLetters",
      urlAddres: "/",
      postRequest: post.fetchInboxLetters(),
    },
    {
      categori: "Sent",
      type: "sentLetters",
      urlAddres: "/sent",
      postRequest: post.fetchSentLetters(),
    },
    {
      categori: "Drafts",
      type: "draftsLetters",
      urlAddres: "/drafts",
      postRequest: post.fetchDraftLetters(),
    },
    {
      categori: "Remote",
      type: "remoteLetters",
      urlAddres: "/remote",
      postRequest: post.fetchRemoteLetters(),
    },
    {
      categori: "Spam",
      type: "spamLetters",
      urlAddres: "/spam",
      postRequest: post.fetchSpamLetters(),
    },
  ];

  return (
    <aside className={classes.nav}>
      <div className={classes.nav_items}>
        {postCategories.map((item) => (
          <PostBoardNavigationItem
            key={item.categori}
            item={item}
          ></PostBoardNavigationItem>
        ))}
      </div>

      {hasCustomFolder
        ? post.customFolders.map((folder) => (
            <PostBoardNavigationCustomFolderItem
              key={folder.id}
              folder={folder}
            ></PostBoardNavigationCustomFolderItem>
          ))
        : null}

      <PostBoardNavigationFolder></PostBoardNavigationFolder>
    </aside>
  );
});

export default PostBoardNavigation;
