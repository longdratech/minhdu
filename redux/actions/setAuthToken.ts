// UTILS for AUTH actions
import axios from "axios";

const setAuthToken = token => {
    if (token) {
        // apply authorization token to every request from axios if logged in
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // delete token from header
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;