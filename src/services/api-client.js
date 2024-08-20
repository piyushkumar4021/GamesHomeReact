import axios from "axios";

export default axios.create({
  baseUrl: "https://api.rawg.io/api", // NOT WORKING
  params: {
    key: "eee8888e7dbd44c89734ff79f3c92f0f",
  },
});
