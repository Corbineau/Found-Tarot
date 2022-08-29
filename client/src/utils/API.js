import axios from "axios";

export default {
  // Gets all whatevers
  getAll: function() {
    return axios.get("/api/routename");
  },
  // Gets the coffee shop with the given name
  getItemById: function(Id) {
    return axios.get("/api/routename/" + id);
  },

  getroutenameByName: function(name) {
    return axios.get(`/api/routename/${name}`);
  },

};
