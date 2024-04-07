<script >
import Suggestions from './Suggestions.vue';
import { Carousel, Navigation, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
import cardServices from '../services/CardService.js';
import Alert from './Alert.vue';


export default {
    name: 'Cards',
    components: {
        Suggestions,
        Carousel,
        Navigation,
        Slide,
        Alert,
    },
    data() {
        return {
            currentSlide: 0,
            loading: true,
            carouselSettings: {
                itemsToScroll: 1,  
                itemsToShow: 1,
                snapAlign: 'center',
            },
            cards: [],
        }
    },
    mounted() {
        this.getCardData();
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
        getCardData() {
            const response = cardServices.getCards();
            this.cards = response.map(card => ({
                id: card.id,
                name: card.name,
                avatar: card.avatar,
                role: card.role,
                pictures: card.pictures,
                video: card.video,
                likeCount: card.likeCount,
                shareCount: card.shareCount,
                isLiked: card.isLiked,
                isBookmarked: card.isBookmarked,
                viewCount: card.viewCount,
                minCount: card.minCount,
                commentCount: card.commentCount,
                description: card.description,
                tags: card.tags,
            }));
            setTimeout(() => { // fake fetch data delay
                this.loading = false;
            }, 1000);
        },
        showAlert() {
            this.$store.dispatch('showAlert', { message: 'Not Implemented' });
        },
    }
}
</script>
<template>
    <div class=" flex flex-col pt-4 space-y-12 z-1">
        
        <div v-for="item in cards" :key="item.id" >
            <div v-if="item.id === 2 " class="pb-12"> <Suggestions/></div>
            <div class="bg-white flex flex-col mt-2 mb-2 rounded-xl space-y-1">
                <div :class="{'bg-gradient-to-r from-[#A29BFE] to-blue-300 border-transparent ': item.role === 'SPONSORED', 'bg-white': item.role !== 'SPONSORED'}" class="flex flex-row items-center rounded-xl justify-between p-2">
                    <div class="flex items-center space-x-4 ">
                        <div v-if="item.role === 'Medical Doctor'" class="items-center justify-center flex h-12 w-12 rounded-full border-transparent  border-t-blue-500 border-b-yellow-500 bg-gradient-to-t from-yellow-500 via-green-500 to-blue-500">
                            <img @click="showAlert" :src="item.avatar" alt="logo" class=" h-11 w-11 border-white border-2 rounded-full">
                        </div>
                        <div v-else-if="item.role === 'SPONSORED'" class="items-center justify-center flex h-12 w-12 rounded-full border-red-300 border-2">
                            <img @click="showAlert" :src="item.avatar" alt="logo" class=" h-11 w-11 border-white border-2 rounded-full">
                        </div>
                        <div v-else class="items-center justify-center flex h-12 w-12 rounded-full border-[#A29BFE] border-2">
                            <img @click="showAlert" :src="item.avatar" alt="logo" class=" h-11 w-11 border-white border-2 rounded-full">
                        </div>
                        <div class="flex flex-col justify-center">
                            <h1 class="text-xl">{{item.name}}</h1>
                            <h1 v-if="item.role === 'Medical Doctor'" class="text-xl text-yellow-300">{{item.role}}</h1>
                            <h1 v-else-if="item.role === 'SPONSORED'" class="text-xl text-red-300">{{item.role}}</h1>
                        </div>
                    </div>
                    <div class="flex items-center">
                        
                        <img @click="showAlert" src="/assets/icons/threedots.svg" alt="logo" class="h-8 cursor-pointer"/>
                    </div>
                </div>
                
                <div class="flex flex-col space-y-4">
                    <div class="flex flex-col">
                        <div v-if="!loading">
                            <div v-if="item.role !== 'SPONSORED'" class="h-1 w-full bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 border-transparent "></div>
                            <div v-if="item?.pictures && item.pictures.length > 1" class="w-fit h-fit object-cover relative">
                                <div class=" absolute z-10 top-8 right-4 transform translate-x-1/4 -translate-y-1/4 items-center">
                                    <img src="/assets/icons/pages.svg" alt="logo" class="h-8"/>
                                </div>
                                <div class="absolute z-10 top-9 right-5 transform translate-x-1/4 -translate-y-1/4 items-center ">
                                    <h1 class="text-white ">{{ item.pictures.length }}</h1>
                                </div>
                                <Carousel
                                        :itemsToShow="carouselSettings.itemsToShow"
                                        :itemsToScroll="carouselSettings.itemsToScroll"
                                        :snapAlign="carouselSettings.snapAlign"
                                        :wrapAround="true"
                                        :mouseDrag="true"
                                        :touchDrag="true"
                                        ref="carousel"
                                        v-model="currentSlide"
                                        style="z-index: 0;"
                                >
                                    <Slide v-for="(photo, index) in item.pictures" :key="index">
                                        <div class=" justify-center items-center">
                                            <img
                                            :src="photo"
                                            alt="carousel image"
                                            class="object-cover w-full"
                                            />
                                        </div>
                                    </Slide>

                                    <template #addons >
                                        <Navigation />
                                    </template>
                                </Carousel> 
                            </div> 
                            <img v-else-if="item?.pictures" :src="item.pictures" alt="logo" class="w-full object-cover"/>
                            <iframe v-else-if="item?.video" :src="item.video" frameborder="0" allowfullscreen class=" object-cover w-full aspect-video" />
                        </div>
                        <div v-else class="w-full h-64 flex justify-center items-center">
                            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" class="h-16"/>
                        </div>
                       
                    </div>
                    <div v-if="!item.pictures && !item.video" class="flex flex-row px-4 text-justify">
                            <p class="font-bold">{{item.description}}</p>
                    </div>
                    <div class="flex flex-row justify-between px-4">
                        <div class="flex flex-row space-x-4">
                            <div v-if="!item.isLiked" class="flex flex-col items-center cursor-pointer">
                                <img src="/assets/icons/emptyheart.svg" alt="empty heart" class=" h-8" @click="toggleLike(item)" />
                                <h1 class="text-lg">{{ item.likeCount }}</h1>
                            </div>
                            <div v-else class="flex flex-col items-center cursor-pointer">
                                <img src="/assets/icons/redheart.svg" alt="filled heart" class=" h-8" @click="toggleLike(item)" />
                                <h1 class="text-lg">{{ item.likeCount }}</h1>
                            </div>
                            <div class="flex flex-col items-center">
                                <img @click="showAlert" src="/assets/icons/share.svg" alt="share" class="cursor-pointer h-8"/>
                                <h1 v-if="item.shareCount !== 0" class="text-lg">{{ item.shareCount }}</h1>
                            </div>
                        </div>
                        <div v-if="!item.isBookmarked" class="flex flex-col items-center">
                            <img src="/assets/icons/emptybookmark.svg" alt="empty bookmark" class="cursor-pointer h-8" @click="toggleBookmark(item)"/>
                        </div>
                        <div v-else class="flex flex-col items-center">
                            <img src="/assets/icons/bluebookmark.svg" alt="filled bookmark" class="cursor-pointer h-8" @click="toggleBookmark(item)"/>
                        </div>
                    </div>
                    <div class="flex flex-col px-4 ">
                        <div class="flex flex-row space-x-1">
                            <div class=" flex flex-row space-x-1">
                                <p class="text-xs">{{item.minCount}}</p>
                                <p class="text-xs text-gray-400"> Min •</p>
                            </div>
                            
                            <div class=" flex flex-row space-x-1">
                                <p class="text-xs">{{item.viewCount}}</p>
                                <p class="text-xs text-gray-400"> Views •</p>
                            </div>
                            <div class=" flex flex-row space-x-1">
                                <p class="text-xs">{{item.commentCount}}</p>
                                <p class="text-xs text-gray-400"> Comments</p>
                            </div>
                        </div>
                        <div v-if="item.pictures || item.video" class="flex flex-row space-x-4 text-justify">
                            <p class="font-bold">{{item.description}}</p>
                        </div>
                        <div class="flex flex-row space-x-4">
                            <h1 v-for="tag in item.tags" :key="tag" class="text-sm text-gray-400">#{{tag}}</h1>
                        </div>
                    </div>
                </div>
                <div class="h-px bg-gray-500 bg-opacity-40 w-full "></div>
                <div class="flex flex-row justify-between items-center ">
                    <input type="text" placeholder="Comment This" class="w-full p-4 text-xl focus:outline-none rounded-xl "/>
                    <button @click="showAlert" class=" rounded-2xl border-2 text-gray-400 px-4 m-2">Post</button>
                </div>
            </div>
        </div>
        <Alert />
    </div>
</template>
