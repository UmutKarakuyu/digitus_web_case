<script>
import Header from '../components/Header.vue'
import MessageBox from '../components/MessageBox.vue'
import Cards from '../components/Cards.vue'
import Suggestions from '../components/Suggestions.vue'
import SidebarCards from '../components/SidebarCards.vue'
import MeetingCard from '../components/MeetingCard.vue'


export default {
  components: {
    Header,
    MessageBox,
    Cards,
    Suggestions,
    SidebarCards,
    MeetingCard
  }
}
</script>

<template>
  <div class=" justify-center">
    <Header/>
    <div class="grid grid-cols-12 pt-24 gap-0 md:gap-16 xl:gap-24">
      <div class="col-span-1 xl:col-span-2 2xl:col-span-3"></div>
      <div class=" col-span-10 sm:col-span-10 md:col-span-7 lg:col-span-7 xl:col-span-6 2xl:col-span-4 space-y-12">
        <MessageBox/>
        <Cards/>
      </div>
      <div class=" col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-2 hidden sm:hidden md:flex lg:flex flex-col space-y-12">
        <SidebarCards/>
        <MeetingCard/>
      </div>


      <div class="col-span-1 xl:col-span-2 2xl:col-span-3"></div>
      
    </div>
  </div>
</template>
