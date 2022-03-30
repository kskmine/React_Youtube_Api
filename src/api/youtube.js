import axios from "axios";
const KEY = "AIzaSyCNk9uyRMwZwRhH9qIbFChxMDl3S4da4pg";

const youtubeAPI = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});
export default youtubeAPI;