import axios from "axios";

class Post {
    create(formData) {
        const url = "http://localhost:8000/user/signin";
        const config = {
            'content-type': 'application/json'
        };
        return axios.post(url, formData, config);
    }
    getPosts() {
        const url = "http://localhost:8000/user/signin";
        return axios.get(url)
    }
}

export default new Post();