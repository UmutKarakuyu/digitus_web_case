import axios from 'axios';

const baseURL = 'base_url';

const token = 'token';// could implement a token based authentication


const suggestionServices = {
    getSuggestions() {
        /*
        return axios.get(`${baseURL}/suggestions`);
        */
        
        return [
            {
                id: 1,
                name: "Ahmet Yılmaz",
                avatar:'/assets/images/avatar2.png',
                role: 'Medical Doctor',
                location:'İzmir',
            }, 
            {
                id: 2,
                name: "Melike Kadıoğlu",
                avatar:'/assets/images/avatar3.png',
                role: null,
                location:'İzmir',
            }, 
            {
                id: 3,
                name: "Ayşe Yıldırım",
                avatar:'/assets/images/avatar4.png',
                role: null,
                location:'İzmir',
            }, 
            {
                id: 4,
                name: "Ahmet Yılmaz",
                avatar:'/assets/images/avatar2.png',
                role: 'Medical Doctor',
                location:'İzmir',
            }, 
            {
                id: 5,
                name: "Melike Kadıoğlu",
                avatar:'/assets/images/avatar3.png',
                role: null,
                location:'İzmir',
            }, 
            {
                id: 6,
                name: "Ayşe Yıldırım",
                avatar:'/assets/images/avatar4.png',
                role: null,
                location:'İzmir',
            }, 
        ];
    },
};

export default suggestionServices;
