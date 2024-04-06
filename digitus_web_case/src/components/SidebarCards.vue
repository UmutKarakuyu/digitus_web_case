<script >
import sidebarCardServices from '../services/SidebarCardService.js'


export default {
    name: 'SidebarCards',
    data() {
        return {
            cards:[],
            loading: true,
        }
    },
    mounted() {
        this.getSidebarCardData();
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
        getSidebarCardData() {
            const response = sidebarCardServices.getSidebarCards();
            this.cards = response.map(card => ({
                id: card.id,
                name: card.name,
                avatar: card.avatar,
                role: card.role,
                pictures: card.pictures,
                video: card.video,
                likeCount: card.likeCount,
                commentCount: card.commentCount,
                description: card.description,
            }));
            setTimeout(() => { // fake fetch data delay
                this.loading = false;
            }, 1000);
        }
    }
}
</script>
<template>
    <div class=" flex flex-col space-y-12 ">
        <div v-for="item in cards" :key="item.id" class="bg-white" >
            <div class=" flex flex-row space-x-2 p-1">
                <div v-if="item.role === 'Medical Doctor'" class="items-center justify-center flex h-9 w-9 rounded-full border-transparent border-t-blue-500 border-b-yellow-500 bg-gradient-to-t from-yellow-500 via-green-500 to-blue-500">
                    <img :src="item.avatar" alt="logo" class=" h-8 w-8 border-white border-2 rounded-full">
                </div>
                <div v-else-if="item.role === 'SPONSORED'" class="items-center justify-center flex h-9 w-9 rounded-full border-red-300 border-2">
                    <img :src="item.avatar" alt="logo" class=" h-8 w-8 border-white border-2 rounded-full">
                </div>
                <div v-else class="items-center justify-center flex h-9 w-9 rounded-full border-purple-300 border-2">
                    <img :src="item.avatar" alt="logo" class=" h-8 w-8 border-white border-2 rounded-full">
                </div>
                <div class="flex flex-col items-center justify-center">
                    <h1 class="text-sm">{{item.name}}</h1>
                </div>
            </div>
            <div class="flex flex-col w-full">
                <div v-if="!loading" class="flex flex-col">
                    <div v-if="item.role !== 'SPONSORED'" class="h-1 w-full bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 border-transparent "></div>
                    <img v-if="item.pictures !== null" :src="item.pictures" alt="logo" class="w-full"/>
                    <iframe v-else-if="item?.video" :src="item.video" frameborder="0" allowfullscreen class=" object-cover w-full h-[10vh]" />
                </div>
                <div v-else class="w-full h-32 flex justify-center items-center">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" class="h-8"/>
                </div>
                <div class="flex flex-col justify-start">
                    <p class="font-bold text-xs p-2">{{item.description}}</p>
                    <div class="flex flex-row justify-around ">
                        <div class=" flex flex-row space-x-1">
                            <p class="text-xs">{{ item.likeCount }}</p>
                            <p class="text-xs text-gray-400"> Likes</p>
                        </div>
                        <div class=" flex flex-row space-x-1">
                            <p class="text-xs">{{item.commentCount}}</p>
                            <p class="text-xs text-gray-400"> Comments</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
