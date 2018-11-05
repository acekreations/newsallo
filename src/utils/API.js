import axios from "axios";

export default {
    getUserNews: sources =>
        axios.get("https://newsallo-api.herokuapp.com/api/" + sources)
};
