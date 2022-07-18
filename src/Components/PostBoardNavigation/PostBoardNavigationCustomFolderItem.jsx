import React, { useState } from "react";
import { Link } from "react-router-dom";
import post from "../../store/postList";

import classes from "./PostBoardNavigationCustomFolderItem.module.scss";

const PostBoardNavigationCustomFolder = ({ folder }) => {
  const [hasChangeInpute, setHasChangeinput] = useState(false);
  const [newName, setNewName] = useState("");

  const openInputFolderName = () => {
    setHasChangeinput(true);
  };

  const setNewNamefolder = () => {
    post.changeNameFolder(folder, newName);
    setNewName("");
    setHasChangeinput(false);
  };

  const setRouteLink = () => {
    post.getRouteLinkCutomFolder(folder.id);
  };

  return (
    <div className={classes.folder}>
      <div className={classes.folder_container}>
        <div>
          <Link
            className={classes.folder_link}
            to={`/${folder.id}`}
            onClick={() => setRouteLink()}
          >
            {folder.name}
          </Link>
        </div>
        <div className={classes.folder_button}>
          <button
            className={classes.folder_edit}
            onClick={() => openInputFolderName()}
          >
            edit
          </button>

          <button
            className={classes.folder_remote}
            onClick={() => post.deleteFolder(folder)}
          >
            remote
          </button>
        </div>
      </div>
      {hasChangeInpute ? (
        <div>
          <input
            className={classes.folder_input}
            placeholder="Change name..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button
            className={classes.folder_button}
            disabled={!newName}
            onClick={() => setNewNamefolder()}
          >
            change name
          </button>
          <button onClick={() => setHasChangeinput(false)}>cancel</button>
        </div>
      ) : null}
    </div>
  );
};

export default PostBoardNavigationCustomFolder;
