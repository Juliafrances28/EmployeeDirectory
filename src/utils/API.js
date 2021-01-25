import axios from "axios";

// const BASEURL = "https://randomuser.me/api/?results=20";
// const APIKEY = "&apikey=trilogy";

// export default {
//   search: function () {
//     return axios.get(BASEURL + APIKEY);
//   },


// "https://www.omdbapi.com/?t=

export default {
  getRandomUser: function () {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};


