import React from "react";
import { Link } from "react-router-dom";

import classes from "./PostBoardNavigationItem.module.scss";

const PostBoardNavigationItem = ({ item }) => {
  return (
    <div className={classes.nav_wrapper}>
      <Link className={classes.nav_link} to={item.urlAddres} onClick={() => item.postRequest}>
        {item.categori}
      </Link>
    </div>
  );
};

export default PostBoardNavigationItem;
