import React, { useState } from "react";
import post from "../../store/postList";

import classes from "./PostBoardNavigationCustomFolder.module.scss";

const PostBoardNavigationFolder = () => {
  const [nameFolder, setNameFolder] = useState("");

  const setCustomFolders = () => {
    post.getCustomFolders(nameFolder);
    setNameFolder("");
  };

  return (
    <div className={classes.custom}>
      <input
        className={classes.custom_input}
        placeholder="Name folder..."
        value={nameFolder}
        onChange={(e) => setNameFolder(e.target.value)}
      />
      <button
        className={classes.custom_button}
        disabled={!nameFolder}
        onClick={() => setCustomFolders()}
      >
        Create folder +
      </button>
    </div>
  );
};

export default PostBoardNavigationFolder;
