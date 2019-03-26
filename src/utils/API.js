import axios from "axios";

// const apiURL = "https://api.newsallo.com/api";
const apiURL = "http://localhost:5000/api";

export default {
    //get news articles. Takes news sources and a number of articles to return
    getUserNews: (sources, limit) =>
        axios.get(`${apiURL}/articles/${sources}${limit > 0 && "/" + limit}`),
    //Takes email address from landing page to create account or login existing account
    submitEmail: email =>
        axios.post(`${apiURL}/auth`, {
            email: email
        }),
    //check authToken that user gets from login email
    login: authToken => axios.get(`${apiURL}/auth/${authToken}`),
    //verify that a user's session is valid
    checkSession: sessionToken =>
        axios.get(`${apiURL}/auth/session/${sessionToken}`)
};
