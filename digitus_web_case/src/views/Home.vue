<script>
import Header from '../components/Header.vue'
import MessageBox from '../components/MessageBox.vue'
import Cards from '../components/Cards.vue'
import Suggestions from '../components/Suggestions.vue'


export default {
  components: {
    Header,
    MessageBox,
    Cards,
    Suggestions
  }
}
</script>

<template>
  <div class="h-full w-full">
    <Header/>
    <div class="pt-24 flex flex-row">
      <div class="w-1/6"></div>
      <div class=" w-2/6 sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3  space-y-12">
        <MessageBox/>
        <Cards/>
      </div>
      <div class="w-3/12">
      </div>
    </div>
  </div>
</template>
