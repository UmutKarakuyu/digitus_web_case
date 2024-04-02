<script >
import cardServices from '../services/CardService.js';
import profileServices from '../services/ProfileServices.js';

export default {
    name: 'MessageBox',
    data() {
        return {
            user:{
                id: 1,
                name: "",
                avatar: "",
                role: "",
            },
            card:{}
        }
    },
    methods: {
        getProfileData() {
            const response = profileServices.getProfile();
            this.user = response.map(user => ({
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                role: user.role,
            }));
        },
        postMessage() {
            let body = {
                id: this.user.id,
                name: this.user.name,
                avatar: this.user.avatar,
                role: this.user.role,
                pictures: null,
                likeCount: 0,
                shareCount: 0,
                isLiked: false,
                isBookmarked: false,
                viewCount: 0,
                minCount: 0,
                commentCount: 0,
                description: this.card.description,
                tags: null,
            }
            cardServices.postCard(body).catch((error) => {
                console.log("Alert");
            });

        }
    }
}
</script>

<template>
    <div class="bg-white flex flex-col p-4 rounded-xl space-y-4">
        <div class="flex flex-row space-x-4">
            <img src="/assets/images/profile_picture.png" alt="logo" class="h-16 object-cover rounded-full border-4 border-purple-100"/>
            <input v-model="this.card.description" placeholder="Write something, Merve" class="w-full bg-gray-100 pl-8 text-xl"/>
        </div>
        <div class="flex flex-row justify-end space-x-4">
            <img src="/assets/icons/smile_emoji.svg" alt="logo" class="h-8"/>
            <img src="/assets/icons/plus.svg" alt="logo" class="h-8" @click="postMessage()"/>
        </div>
    </div>
</template>

