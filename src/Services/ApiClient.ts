import axios from "axios";

export default axios.create({
  params: {
    key: "5717cba5f2d9416a90b7e8a40812a0f3",
  },

  baseURL: "https://api.rawg.io/api/",
});
