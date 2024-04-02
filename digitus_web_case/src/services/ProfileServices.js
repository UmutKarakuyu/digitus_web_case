import axios from 'axios';

const baseURL = 'base_url';

const token = 'token';// could implement a token based authentication

const headers = { // assuming that the token is a bearer token
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

const profileServices = {
    getProfile() { // assuimg user is already logged in
        /*
        return axios.get(`${baseURL}/user-profile`, { headers });
        */
        
        return {
            id: 1,
            name: "Merve",
            avatar: "/assets/images/profile_picture.png",
            role: "",        
        };
    },
};

export default profileServices;
