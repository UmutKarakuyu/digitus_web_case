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
            loading: true,
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
            setTimeout(() => { // fake fetch data delay
                this.loading = false;
            }, 1000);
        },
        showAlert() {
            this.$store.dispatch('showAlert', { message: 'Not Implemented' });
        },
    },
}
</script>
<template>
    <div class=" flex flex-col space-y-12 max-w-xs  ">
        <div v-if="!loading">
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
                    <button @click="showAlert" class="rounded-2xl border-2 border-black-400 text-black-400 px-8 m-2">Join</button>
                </div>
            </Slide>

            <template #addons >
                <Pagination 
                class="mt-8 flex justify-center space-x-1">
                </Pagination>

            </template>

        </Carousel> 
        </div>
        <div v-else class="w-full h-32 flex justify-center items-center">
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" class="h-8"/>
        </div>
    </div>
</template>

<style >
.carousel__pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    line-height: 0;
    margin: 10px 0 0;
    padding: 0;
}

.carousel__pagination-button {
    display: flex;
    border: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    padding: var(--vc-pgn-margin);
    background: t;
}

.carousel__pagination-button::after {
    display: flex;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: '#818181';
}

.carousel__pagination-button--active::after {
    display: block;
    width: 10px;
    height: 10px;
    background-color: #A29BFE;
}

@media(hover: hover) {
  .carousel__pagination-button:hover::after {
    padding: var(--vc-pgn-margin);
    background-color: #A29BFE;
  }
}
</style>