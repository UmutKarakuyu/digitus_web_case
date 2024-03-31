<script >

export default {
    name: 'Card',
    props: {
        item: Object
    },


    data() {
        return {
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
    <div>
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
</template>
