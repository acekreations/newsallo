import axios from "axios";

export default {
    getHello: function() {
        return axios.get("/api/");
    }
};
