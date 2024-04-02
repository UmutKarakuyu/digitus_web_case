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
  <div class="flex flex-row justify-center">
    <Header/>
    <div class="pt-24 space-x-24 flex flex-row w-full sm:w-full md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-8/12 justify-center ">
      <div class=" flex flex-col w-11/12 sm:w-11/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 space-y-12  ">
        <MessageBox/>
        <Cards/>
      </div>
      <div class="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex flex-col w-2/12 sm:w-3/12 md:w-3/12 lg:w-3/12 xl:w-2/12 2xl:w-2/12 space-y-28 ">
        <SidebarCards/>
        <MeetingCard/>
      </div>
    </div>
  </div>
</template>
