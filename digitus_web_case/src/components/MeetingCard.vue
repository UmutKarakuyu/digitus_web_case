<script >
import { Carousel, Pagination, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'

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
            card:[
                {
                    id: 1,
                    name: "Momsista",
                    type: 'Family Meeting',
                    date: 'July’19',
                    picture:'/assets/images/picture7.png',
                },
                {
                    id: 2,
                    name: "Momsista",
                    type: 'Family Meeting',
                    date: 'August’19',
                    picture:'/assets/images/picture7.png',
                },
                {
                    id: 3,
                    name: "Momsista",
                    type: 'Family Meeting',
                    date: 'September’19',
                    picture:'/assets/images/picture7.png',
                },
                {
                    id: 4,
                    name: "Momsista",
                    type: 'Family Meeting',
                    date: 'October’19',
                    picture:'/assets/images/picture7.png',
                },
            ],
        }
    },
    methods: {
        customDotClass(dotIndex) {
            // Define custom styles for pagination dots
            return {
                'bg-purple-500': true, // Background color purple
                'rounded-full': true, // Circular shape
                'w-4': true, // Width
                'h-4': true, // Height
                'mx-2': true, // Margin
            };
        },
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
                :dot-class="customDotClass"
                class="mt-8 flex justify-center space-x-1"/>
            
                    
            </template>

        </Carousel> 
        
    </div>
</template>
