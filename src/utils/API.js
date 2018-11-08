import axios from "axios";

export default {
    getUserNews: (sources, limit) =>
        axios.get(
            `https://api.newsallo.com/api/${sources}${limit > 0 && "/" + limit}`
        )
};
