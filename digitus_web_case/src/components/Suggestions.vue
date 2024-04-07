<script >
import suggestionServices from '../services/SuggestionService.js';
import { Carousel, Navigation, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { NavArrowLeft, NavArrowRight } from '@iconoir/vue';

export default {
    name: 'Cards',
    components: {
        Carousel,
        Navigation,
        Slide,
        NavArrowLeft,
        NavArrowRight,
    },
    data() {
        return {
            currentSlide: 0,
            people:[],
            loading:true,
            breakpoints: {
                100: {
                    itemsToShow: 1,
                    itemsToScroll: 1,  
                    snapAlign: 'start',
                },
                400: {
                    itemsToShow: 2,
                    itemsToScroll: 2,  
                    snapAlign: 'start',
                },
                640: {
                    itemsToShow: 3,
                    itemsToScroll: 3, 
                    snapAlign: 'start',
                },
            },
        }
    },
    mounted() {
      this.getSuggestionData();  
    },
    methods: {
        getSuggestionData() {
            const response = suggestionServices.getSuggestions();
            this.people = response.map(person => ({
                id: person.id,
                name: person.name,
                avatar: person.avatar,
                role: person.role,
                location: person.location,
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
    <div class="bg-gray-200 flex flex-col text-center items-end rounded-xl">
        <div class="relative flex flex-row  p-4 items-center w-full ">
            <div class="flex-1 w-full justify-center text-gray-500 text-base font-bold ">
                <h1>Members You May Know</h1>
            </div>
            <h1 @click="showAlert" class=" cursor-pointer absolute top-0 right-0 p-4 whitespace-nowrap hidden sm:flex">SEE ALL</h1>
        </div>
        <div v-if="!loading" class="w-full flex flex-row items-center justify-center text-center p-4 ">
            <Carousel
                :breakpoints="breakpoints"
                :wrapAround="false"
                :mouseDrag="true"
                :touchDrag="true"
                ref="carousel"
                v-model="currentSlide"
                class=" w-full"
            >
                <Slide v-for="(person, index) in people" :key="index" style="">
                    <div class="bg-white rounded-xl text-center items-center w-full flex flex-col m-2">
                        <div class="flex justify-end items-end  w-full">
                            <img @click="showAlert" src="/assets/icons/cancel.svg" alt="logo" class="cursor-pointer h-8 justify-center">
                        </div>
                        <div class="flex items-center justify-center text-center space-x-12">
                            <div v-if="person.role === 'Medical Doctor'" class="items-center justify-center text-center flex h-16 w-16 rounded-full border-2 border-transparent border-t-blue-500 border-b-yellow-500 bg-gradient-to-t from-yellow-500 via-green-500 to-blue-500">
                                <img :src="person.avatar" alt="logo" class="h-14 w-14 border-white border-4 rounded-full">
                            </div>
                            <div v-else-if="person.role === 'SPONSORED'" class="items-center justify-center flex h-16 w-16 rounded-full border-red-300 border-2">
                                <img :src="person.avatar" alt="logo" class="h-14 w-14 border-white border-4 rounded-full">
                            </div>
                            <div v-else class="items-center justify-center flex h-16 w-16 rounded-full border-[#A29BFE] border-opacity-50 border-2">
                                <img :src="person.avatar" alt="logo" class="h-14 w-14 border-white border-4 rounded-full">
                            </div>
                        </div>
                        <div class="whitespace-nowrap space-y-2">
                            <div class="h-14 sm:h-14 pt-2">
                                <p>{{person.name}}</p>
                                <p class="text-yellow-400">{{person.role}}</p>
                            </div>
                            <div class="  flex flex-col items-center justify-end space-y-2 py-4 ">
                                <p class="text-sm">{{person.location}}</p>
                                <button v-if="person.role ==='Medical Doctor'" @click="showAlert" class="bg-yellow-400 text-white rounded-xl px-4">
                                    Follow
                                </button>
                                <button v-else @click="showAlert" class="bg-[#A29BFE] rounded-xl px-4 text-white">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                </Slide>

                <template #addons >
                    <Navigation>
                         <template #next>
                            <div class="absolute top-0 left-10 bottom-0 flex items-center bg-white rounded-full ">
                                <NavArrowRight class="h-6 w-6 cursor-pointer text-gray-500 " />
                            </div>
                        </template>
                        <template #prev>
                            <div class="absolute top-0 right-10 bottom-0 flex items-center bg-white rounded-full ">
                                <NavArrowLeft class="h-6 w-6 cursor-pointer text-gray-500" />
                            </div>
                        </template>
                    </Navigation>
                </template>
            </Carousel>
        </div>
        <div v-else class="w-full h-32 flex justify-center items-center">
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" class="h-8"/>
        </div>
    </div>
</template>

