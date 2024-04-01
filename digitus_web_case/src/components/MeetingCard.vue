<script >
import { Carousel, Pagination, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
import meetingCardServices from '../services/MeetingCardService.js';

export default {
    name: 'MeetingCard',
    components: {
        Carousel,
        Pagination,
        Slide,
    },
    data() {
        return {
            currentSlide: 0,
            carouselSettings: {
                itemsToScroll: 1,  
                itemsToShow: 1,
                snapAlign: 'start',
            },
            card:[],
        }
    },
    mounted() {
        this.getMeetingCardData();
    },
    methods: {
        getMeetingCardData() {
            const response = meetingCardServices.getMeetingCards();
            this.card = response.map(card => ({
                id: card.id,
                name: card.name,
                type: card.type,
                date: card.date,
                picture: card.picture,
            }));
        }
    },
}
</script>
<template>
    <div class=" flex flex-col space-y-12  ">
        <Carousel
            :itemsToShow="carouselSettings.itemsToShow"
            :itemsToScroll="carouselSettings.itemsToScroll"
            :snapAlign="carouselSettings.snapAlign"
            :wrapAround="true"
            :mouseDrag="true"
            :touchDrag="true"
            ref="carousel"
            v-model="currentSlide"
        >
            <Slide v-for="(item, index) in card" :key="index" class="bg-white rounded-md">
                <div class="justify-center items-center">
                    <h1 class="text-xl">{{ item.name }}</h1>
                    <h1 class="font-bold text-xl">{{ item.type }}</h1>
                    <h1 class="text-xl">{{ item.date }}</h1>
                    <img
                    :src="item.picture"
                    alt="carousel image"
                    class="object-cover w-full"
                    />
                    <button class="rounded-2xl border-2 border-black-400 text-black-400 px-8 m-2">Join</button>
                </div>
            </Slide>

            <template #addons >
                <Pagination 
                class="mt-8 flex justify-center space-x-1"/>
            </template>

        </Carousel> 
        
    </div>
</template>
