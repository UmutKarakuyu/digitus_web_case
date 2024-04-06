import axios from 'axios';

const baseURL = 'base_url';

const token = 'token';// could implement a token based authentication

const headers = { // assuming that the token is a bearer token
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

const cardServices = {
    async postCard(body) {
        try {
          const response = await axios.post(`${baseURL}/Card`, body, { headers });
    
          return response.data;
        } catch (error) {
          throw error;
        }
      },

    getCards() {
        /*
        return axios.get(`${baseURL}/cards`);
        */
        
        return [
                {
                    id: 1,
                    name: "Ahmet Yıldız Kenter",
                    avatar:
                        '/assets/images/avatar1.png',
                    role: 'Medical Doctor',
                    
                    pictures:[
                        '/assets/images/picture1.png', '/assets/images/picture2.png', '/assets/images/picture3.png',
                    ],
                    videos: null,
                    likeCount: 3,
                    shareCount: 1,
                    isLiked:false,
                    isBookmarked: false,
                    viewCount: 4,
                    minCount: 2,
                    commentCount: 5,
                    description: 'Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well...',
                    tags: [
                        'child',
                        'doctor',
                        'hospital',
                        'fever'
                    ],
                },
                {
                    id: 2,
                    name: "Derya Deniz",
                    avatar:
                        '/assets/images/avatar5.png',
                    role: null,
                    pictures: null,
                    video: 'https://www.youtube.com/embed/BD3TaRvJa-o?controls=0' ,
                    likeCount: 24,
                    shareCount: 0,
                    isLiked:true,
                    isBookmarked: true,
                    viewCount: 4,
                    minCount: 2,
                    commentCount: 5,
                    description: 'The mom said she struggled with fertility issues and had an ectopic pregnancy after giving birth to her daughter.',
                    tags: [
                        'child',
                        'doctor',
                        'hospital',
                        'fever'
                    ],
                },
                {
                    id: 3,
                    name: "Dr. Ahmet Yıldız Kenter",
                    avatar:
                        '/assets/images/avatar1.png',
                    role: 'Medical Doctor',
                    pictures: null,
                    videos: null,
                    likeCount: 1,
                    shareCount: 0,
                    isLiked:false,
                    isBookmarked: false,
                    viewCount: 4,
                    minCount: 2,
                    commentCount: 5,
                    description: 'The mom said she struggled with fertility issues and had an ectopic pregnancy after giving birth to her daughter.',
                    tags: [
                        'child',
                        'doctor',
                        'hospital',
                        'fever'
                    ],
                },
                {
                    id: 4,
                    name: "Dr. Ahmet Yıldız Kenter",
                    avatar:
                        '/assets/images/avatar1.png',
                    role: 'Medical Doctor',
                    pictures: ['/assets/images/picture3.png'],
                    videos: null,
                    likeCount: 3,
                    shareCount: 1,
                    isLiked:false,
                    isBookmarked: false,
                    viewCount: 4,
                    minCount: 2,
                    commentCount: 5,
                    description: 'Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well...',
                    tags: [
                        'child',
                        'doctor',
                        'hospital',
                        'fever'
                    ],
                },
                {
                    id: 5,
                    name: "Milupa",
                    avatar:
                        '/assets/images/avatar6.png',
                    role: 'SPONSORED',
                    pictures: ['/assets/images/picture4.png'],
                    videos: null,
                    likeCount: 3,
                    shareCount: 1,
                    isLiked:false,
                    isBookmarked: false,
                    viewCount: 4,
                    minCount: 2,
                    commentCount: 5,
                    description: 'Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well...',
                    tags: [
                        'child',
                        'doctor',
                        'hospital',
                        'fever'
                    ],
                },  
                {
                    id: 6,
                    name: "Dr. Ahmet Yıldız Kenter",
                    avatar:
                        '/assets/images/avatar1.png',
                    role: 'Medical Doctor',
                    pictures: ['/assets/images/picture3.png'],
                    videos: null,
                    likeCount: 3,
                    shareCount: 1,
                    isLiked:false,
                    isBookmarked: false,
                    viewCount: 4,
                    minCount: 2,
                    commentCount: 5,
                    description: 'Maecenas pulvinar nulla eu nibh imperdiet, et ullamcorper metus interdum. Duis vehicula quam non tempor viverra. Quisque sit amet commodo sem. Quisque eu cursus libero. Suspendisse cursus magna dui, id condimentum mi rutrum ac. Sed eget orci at tortor iaculis pretium. Duis in feugiat odio, a faucibus nisi. Maecenas et sollicitudin ipsum, porta accumsan dui. Maecenas malesuada suscipit ligula vitae dignissim. Curabitur eu lacinia enim. Fusce lectus lorem, ultrices ut arcu sed, gravida elementum lectus. Ut lobortis ullamcorper neque, et faucibus sem pellentesque ac.',
                    tags: [
                        'child',
                        'doctor',
                        'hospital',
                       'fever'
                    ],
                },                 
        ];
    },
};

export default cardServices;
