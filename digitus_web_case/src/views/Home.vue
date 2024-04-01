<script>
import Header from '../components/Header.vue'
import MessageBox from '../components/MessageBox.vue'
import Cards from '../components/Cards.vue'
import Suggestions from '../components/Suggestions.vue'
import SidebarCards from '../components/SidebarCards.vue'


export default {
  components: {
    Header,
    MessageBox,
    Cards,
    Suggestions,
    SidebarCards
  }
}
</script>

<template>
  <div class="h-full w-full flex justify-center">
    <Header/>
    <div class="pt-24 flex space-x-24 flex-row w-4/5 sm:w-4/5 md:w-3/4 lg:w-3/4 xl:w-1/2 2xl:w-1/2">
      <div class=" w-8/12 space-y-12">
        <MessageBox/>
        <Cards/>
      </div>
      <div class="w-4/12">
        <SidebarCards/>
      </div>
    </div>
  </div>
</template>
