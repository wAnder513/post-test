import axios from "axios";
import { makeAutoObservable } from "mobx";

class Post {
  totalLetters = 0;
  sortLetters = [];
  inboxLetters = [];
  sentLetters = [];
  draftLetters = [];
  remouteLetters = [];
  spamLetters = [];
  customFolders = [];
  routeLinkCustomFolder = [];
  currentMessage = "";

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentMessage(message) {
    this.currentMessage = message;
  }

  deleteFolder(folder) {
    this.customFolders = this.customFolders.filter((item) => folder !== item);
  }

  changeNameFolder(folder, newName) {
    this.customFolders.forEach((item) => {
      if (folder.id === item.id) {
        folder.name = newName;
      }
    });
  }

  removeLetter(id, type) {
    axios.delete(`http://localhost:3000/${type}/${id}`);
    this[type] = this[type].filter((item) => item.id !== id);
  }

  fetchInboxLetters() {
    axios.get("http://localhost:3000/inboxLetters/").then((res) => {
      this.getInboxLetters(res.data);
    });
  }

  fetchSentLetters() {
    axios.get("http://localhost:3000/sentLetters/").then((res) => {
      this.getSentLetters(res.data);
    });
  }

  fetchDraftLetters() {
    axios.get("http://localhost:3000/draftLetters/").then((res) => {
      this.getDraftLetters(res.data);
    });
  }

  fetchRemoteLetters() {
    axios.get("http://localhost:3000/remoteLetters/").then((res) => {
      this.getRemoteLetters(res.data);
    });
  }

  fetchSpamLetters() {
    axios.get("http://localhost:3000/spamLetters/").then((res) => {
      this.getSpamLetters(res.data);
    });
  }

  // getTotalCountLetters(count) {
  //   this.totalLetters = count;
  // }

  getInboxLetters(letters) {
    this.inboxLetters = letters;
  }

  getSentLetters(letters) {
    this.sentLetters = letters;
  }

  getDraftLetters(letters) {
    this.draftLetters = letters;
  }

  getRemoteLetters(letters) {
    this.remouteLetters = letters;
  }

  getSpamLetters(letters) {
    this.spamLetters = letters;
  }

  getSortedLetters(letters) {
    this.sortLetters = letters.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      } else if (a.id > b.id) {
        return -1;
      }
      return 0;
    });
  }

  getCustomFolders(folder) {
    this.customFolders.push({ id: Date.now(), name: folder });
  }

  getRouteLinkCutomFolder(id) {
    this.routeLinkCustomFolder.push(`/${id}`);
  }
}

export default new Post();
