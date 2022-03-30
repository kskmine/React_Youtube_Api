import axios from "axios";
const KEY = "AIzaSyAe7SXfu4UxPClg7bdwYAB0ld7XK507qgk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});
