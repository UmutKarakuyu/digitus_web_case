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
            card:{},
            isAlertVisible: false,
        }
    },
    watch: {
        isAlertVisible(newVal) {
        if (newVal) {
            setTimeout(() => {
            this.isAlertVisible = false;
            }, 3000); 
        }
        },
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
                this.$store.dispatch('showAlert', { message: 'Not Implemented' })
            });
            this.card.description = "";
        },
        showAlert() {
        this.$store.dispatch('showAlert', { message: 'Not Implemented' });
        },
    }
}
</script>

<template>
    <div class="bg-white flex flex-col p-4 rounded-xl space-y-4">
        <div class="flex flex-row space-x-4">
            <img src="/assets/images/profile_picture.png" alt="logo" class="h-16 object-cover rounded-full border-2 border-opacity-50 border-[#A29BFE]"/>
            <input v-model="this.card.description" placeholder="Write something, Merve" class="w-full bg-gray-100 pl-8 text-base focus:outline-none"/>
        </div>
        <div class="flex flex-row justify-end space-x-4">
            <img @click="showAlert" src="/assets/icons/smile_emoji.svg" alt="logo" class="h-8 cursor-pointer"/>
            <img src="/assets/icons/plus.svg" alt="logo" class="h-8 cursor-pointer" @click="showAlert"/>
            <img @click="postMessage()" src="/assets/icons/send.svg" alt="logo" class="h-8 cursor-pointer"/>
        </div>
    </div>
</template>

