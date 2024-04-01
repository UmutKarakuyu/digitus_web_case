import axios from 'axios';

const baseURL = 'base_url';

const token = 'token';// could implement a token based authentication


const meetingCardServices = {
    getMeetingCards() {
        /*
        return axios.get(`${baseURL}/meetingCards`);
        */
        
        return [
            {
                id: 1,
                name: "Momsista",
                type: 'Family Meeting',
                date: 'July’19',
                picture:'/assets/images/picture7.png',
            },
            {
                id: 2,
                name: "Momsista",
                type: 'Family Meeting',
                date: 'August’19',
                picture:'/assets/images/picture7.png',
            },
            {
                id: 3,
                name: "Momsista",
                type: 'Family Meeting',
                date: 'September’19',
                picture:'/assets/images/picture7.png',
            },
            {
                id: 4,
                name: "Momsista",
                type: 'Family Meeting',
                date: 'October’19',
                picture:'/assets/images/picture7.png',
            },
        ];
    },
};

export default meetingCardServices;
