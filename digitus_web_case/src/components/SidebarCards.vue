<script >
import sidebarCardServices from '../services/SidebarCardService.js'


export default {
    name: 'SidebarCards',
    data() {
        return {
            cards:[],
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
                likeCount: card.likeCount,
                commentCount: card.commentCount,
                description: card.description,
            }));
        }
    }
}
</script>
<template>
    <div class=" flex flex-col space-y-12 ">
        <div v-for="item in cards" :key="item.id" class="bg-white" >
            <div class=" flex flex-row space-x-4">
                <div v-if="item.role === 'Medical Doctor'" class="items-center justify-center flex h-10 w-10 rounded-full border-transparent border-t-blue-500 border-b-yellow-500 bg-gradient-to-t from-yellow-500 via-green-500 to-blue-500">
                    <img :src="item.avatar" alt="logo" class=" h-8 w-8 border-white border-4 rounded-full">
                </div>
                <div v-else-if="item.role === 'SPONSORED'" class="items-center justify-center flex h-10 w-10 rounded-full border-red-300 border-2">
                    <img :src="item.avatar" alt="logo" class=" h-8 w-8 border-white border-4 rounded-full">
                </div>
                <div v-else class="items-center justify-center flex h-10 w-10 rounded-full border-purple-300 border-2">
                    <img :src="item.avatar" alt="logo" class=" h-8 w-8 border-white border-4 rounded-full">
                </div>
                <div class="flex flex-col justify-center">
                    <h1 class="text-xl">{{item.name}}</h1>
                </div>
            </div>
            <div class="flex flex-col w-full">
                <div class="flex flex-col">
                    <div v-if="item.role !== 'SPONSORED'" class="h-1 w-full bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 border-transparent "></div>
                    <img v-if="item.pictures !== null" :src="item.pictures" alt="logo" class="w-full"/>
                </div>
                <div class="flex flex-col justify-between">
                    <p class="font-bold text-xl p-4">{{item.description}}</p>
                    <div class="flex flex-row justify-around">
                        <h1 class="text-lg">{{ item.likeCount }} Likes</h1>
                        
                        <p>{{item.commentCount}} Comments</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
