import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import post from "../../store/postList";

import classes from "./SearchMessage.module.scss";

const SearchMessage = () => {
  const [allLetters, setAllLeters] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");

  const fetchAllLetters = () => {
    axios.get("http://localhost:3000/allLetters/").then((res) => {
      setAllLeters(res.data);
    });
  };

  const getLetters = () => {
    const sortLetters = [];

    allLetters.forEach((letter) => {
      if (letter.letter.toLowerCase().includes(searchMessage.toLowerCase())) {
        sortLetters.push(letter);
      }
    });

    post.getSortedLetters(sortLetters);
    setSearchMessage("");
  };

  return (
    <div className={classes.search}>
      <input
        className={classes.search_input}
        placeholder="Search..."
        value={searchMessage}
        onFocus={() => fetchAllLetters()}
        onChange={(e) => setSearchMessage(e.target.value)}
      />
      <button
        className={classes.search_button}
        disabled={!searchMessage}
        onClick={() => getLetters()}
      >
        {searchMessage ? (
          <Link className={classes.search_link} to={"/search"}>
            search
          </Link>
        ) : (
          <Link className={classes.search_link} to={"/"}>
            search
          </Link>
        )}
      </button>
    </div>
  );
};

export default SearchMessage;
