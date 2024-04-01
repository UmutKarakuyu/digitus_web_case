import axios from 'axios';

const baseURL = 'base_url';

const token = 'token';// could implement a token based authentication


const sidebarCardServices = {
    getSidebarCards() {
        /*
        return axios.get(`${baseURL}/sidebarCards`);
        */
        
        return [
            {
                id: 1,
                name: "Ayşe Palandöken",
                avatar:
                    '/assets/images/avatar7.png',
                role: null,
                pictures:'/assets/images/picture5.png',
                likeCount: 2,
                commentCount: 324,
                description: 'Hiking in mountains with my little baby :)',
            },
            {
                id: 2,
                name: "Merve Yılmaz",
                avatar:
                    '/assets/images/avatar1.png',
                role: 'Medical Doctor',
                pictures:'/assets/images/picture6.png',
                likeCount: 2,
                commentCount: 324,
                description: 'Yoga programs for early pregnants',
            },        
        ];
    },
};

export default sidebarCardServices;
