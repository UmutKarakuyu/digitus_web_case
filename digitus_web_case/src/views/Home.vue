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
      <div class="w-full space-y-12">
        <MessageBox/>
        <Cards/>
      </div>
      <div class="w-1/2">
        
      </div>
    </div>
  </div>
</template>
