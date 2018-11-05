import axios from "axios";

export default {
    getUserNews: (sources, limit) =>
        axios.get(
            `https://newsallo-api.herokuapp.com/api/${sources}${limit > 0 &&
                "/" + limit}`
        )
};
