import axios from "axios";

export default {
    getUserNews: (sources, limit) =>
        axios.get(
            `http://api.newsallo.com/api/${sources}${limit > 0 && "/" + limit}`
        )
};
