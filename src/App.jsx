import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import IndoxMessages from "./Components/InboxMessages/IndoxMessages";
import PostBoardTitle from "./Components/PostBoardTitle/PostBoardTitle";
import PostBoardNavigation from "./Components/PostBoardNavigation/PostBoardNavigation";
import SentMessages from "./Components/SentMessages/SentMessages";
import DraftMessages from "./Components/DraftsMessages/DraftMessages";
import RemoteMessages from "./Components/RemoteMessages/RemoteMessages";
import SpamMessages from "./Components/SpamMessages/SpamMessages";
import FindMessages from "./Components/FindMessages/FindMessages";
import CurrentMessage from "./Components/CurrentMessage/CurrentMessage";
import SearchMessage from "./Components/SearchMessage/SearchMessage";
import CustomFolder from "./Components/CustomFolder/CustomFolder";
import post from "./store/postList";

import classes from "./App.module.scss";

const App = observer(() => {
  useEffect(() => {
    post.fetchInboxLetters();
  }, []);

  return (
    <div>
      <PostBoardTitle></PostBoardTitle>
      <div className={classes.app}>
        <PostBoardNavigation></PostBoardNavigation>
        <div className={classes.app_wrapper}>
          <SearchMessage></SearchMessage>
          <Routes>
            <Route path="/" element={<IndoxMessages />}></Route>
            <Route path="/sent" element={<SentMessages />}></Route>
            <Route path="/drafts" element={<DraftMessages />}></Route>
            <Route path="/remote" element={<RemoteMessages />}></Route>
            <Route path="/spam" element={<SpamMessages />}></Route>
            <Route path="/search" element={<FindMessages />}></Route>
            <Route path="/currentMessage" element={<CurrentMessage />}></Route>
            {post.routeLinkCustomFolder.map((link, index) => (
              <Route
                path={link}
                element={<CustomFolder />}
                key={`${link}-${index}`}
              ></Route>
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
});

export default App;
