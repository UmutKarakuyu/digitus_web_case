<script >
import Suggestions from './Suggestions.vue';

export default {
    name: 'Cards',
    components: {
        Suggestions,
    },
    data() {
        return {
            card:[
                {
                    id: 1,
                    name: "Ahmet Yıldız Kenter",
                    avatar:
                        '/assets/images/avatar1.png',
                    role: 'Medical Doctor',
                    pictures:'/assets/images/picture1.png',
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
                    pictures:'/assets/images/picture2.png',
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
                    pictures: '/assets/images/picture3.png',
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
                    pictures: '/assets/images/picture4.png',
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
                    pictures: '/assets/images/picture3.png',
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
            ],
        }
    },
    methods: {
        toggleLike(item) {
            item.isLiked = !item.isLiked;
                if (item.isLiked) {
                    item.likeCount++;
                } else {
                    item.likeCount--;
                }
        },
        toggleBookmark(item) {
            item.isBookmarked = !item.isBookmarked;
        },
  }
}
</script>
<template>
    <div class=" flex flex-col pt-4 space-y-12">
        <div v-for="item in card" :key="item.id" class=" bg-white flex flex-col mt-2 mb-2 rounded-xl space-y-1">
            <div :class="{'bg-gradient-to-r from-purple-200 to-blue-300 border-transparent ': item.role === 'SPONSORED', 'bg-white': item.role !== 'SPONSORED'}" class="flex flex-row justify-between px-4">
                <div class="flex space-x-4">
                    <div v-if="item.role === 'Medical Doctor'" class="items-center justify-center flex h-16 w-16 rounded-full border-transparent border-t-blue-500 border-b-yellow-500 bg-gradient-to-t from-yellow-500 via-green-500 to-blue-500">
                        <img :src="item.avatar" alt="logo" class=" h-14 w-14 border-white border-4 rounded-full">
                    </div>
                    <div v-else-if="item.role === 'SPONSORED'" class="items-center justify-center flex h-16 w-16 rounded-full border-red-300 border-2">
                        <img :src="item.avatar" alt="logo" class=" h-14 w-14 border-white border-4 rounded-full">
                    </div>
                    <div v-else class="items-center justify-center flex h-16 w-16 rounded-full border-purple-300 border-2">
                        <img :src="item.avatar" alt="logo" class=" h-14 w-14 border-white border-4 rounded-full">
                    </div>
                    <div class="flex flex-col justify-center">
                        <h1 class="text-xl">{{item.name}}</h1>
                        <h1 v-if="item.role === 'Medical Doctor'" class="text-xl text-yellow-300">{{item.role}}</h1>
                        <h1 v-else-if="item.role === 'SPONSORED'" class="text-xl text-red-300">{{item.role}}</h1>
                    </div>
                </div>
                <div class="flex items-center">
                    <img src="/assets/icons/threedots.svg" alt="logo" class="h-8"/>
                </div>
            </div>
            
            <div class="flex flex-col space-y-4">
                <div class="flex flex-col">
                    <div v-if="item.role !== 'SPONSORED'" class="h-1 w-full bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 border-transparent "></div>
                    <img v-if="item.pictures !== null" :src="item.pictures" alt="logo" class="w-full object-cover"/>
                </div>
                <div class="flex flex-row justify-between">
                    <div class="flex flex-row space-x-4">
                        <div v-if="!item.isLiked" class="flex flex-col items-center">
                            <img src="/assets/icons/emptyheart.svg" alt="empty heart" class="h-8" @click="toggleLike(item)" />
                            <h1 class="text-lg">{{ item.likeCount }}</h1>
                        </div>
                        <div v-else class="flex flex-col items-center">
                            <img src="/assets/icons/redheart.svg" alt="filled heart" class="h-8" @click="toggleLike(item)" />
                            <h1 class="text-lg">{{ item.likeCount }}</h1>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="/assets/icons/share.svg" alt="share" class="h-8"/>
                            <h1 v-if="item.shareCount !== 0" class="text-lg">{{ item.shareCount }}</h1>
                        </div>
                    </div>
                    <div v-if="!item.isBookmarked" class="flex flex-col items-center">
                        <img src="/assets/icons/emptybookmark.svg" alt="empty bookmark" class="h-8" @click="toggleBookmark(item)"/>
                    </div>
                    <div v-else class="flex flex-col items-center">
                        <img src="/assets/icons/bluebookmark.svg" alt="filled bookmark" class="h-8" @click="toggleBookmark(item)"/>
                    </div>
                </div>
                <div class="flex flex-col px-4 ">
                    <div class="flex flex-row space-x-4">
                        <p>{{item.minCount}} Min</p>
                        <p>{{item.viewCount}} Views</p>
                        <p>{{item.commentCount}} Comments</p>
                    </div>
                    <div class="flex flex-row space-x-4">
                        <p class="font-bold">{{item.description}}</p>
                    </div>
                    <div class="flex flex-row space-x-4">
                        <h1 v-for="tag in item.tags" :key="tag" class="text-sm text-gray-400">#{{tag}}</h1>
                    </div>
                </div>
            </div>
            <div class="h-px bg-gray-500 bg-opacity-40 w-full"></div>
            <div class="flex flex-row justify-between items-center ">
                <input type="text" placeholder="Comment This" class="w-full p-4 text-xl"/>
                <button class=" rounded-2xl border-2 text-gray-400 px-4 m-2">Post</button>
            </div>
        </div>
    </div>
</template>
