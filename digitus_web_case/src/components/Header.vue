<script >
  export default {
    data() {
      return {
        inboxCount: 4,
        notificationCount: 12,
      };
    },
    methods: {
      showAlert() {
        this.$store.dispatch('showAlert', { message: 'Not Implemented' });
      },
    },
  };
</script>

<template>
  <div class=" fixed z-50 w-full items-center justify-between flex flex-row bg-white px-2">
      <div class="w-2/12 flex justify-between items-center">
        <img @click="showAlert" src="/assets/images/logo.png" alt="logo" class="cursor-pointer h-full sm:h-full md:h-16 lg:h-16 xl:h-16 2xl:h-16"/>
      </div>
      <div class=" w-6/12 items-center justify-around
      hidden flex-row sm:flex md:flex lg:flex xl:flex 2xl:flex">
        <img @click="showAlert" src="/assets/images/plus.png" alt="logo" class="cursor-pointer h-full sm:h-16 md:h-16 lg:h-16 xl:h-16 2xl:h-16"/>
          <h1 class="cursor-pointer"  @click="showAlert" >Moms</h1>
          <h1 class="cursor-pointer"  @click="showAlert" >Experts</h1>
          <h1 class="cursor-pointer"  @click="showAlert" >Explore</h1>
          <h1 class="cursor-pointer"  @click="showAlert" >Forum</h1>
          <h1 class="cursor-pointer"  @click="showAlert" >MomTalk</h1>
      </div>
      <div class="w-fit items-center justify-end flex flex-row ">
        <div class="hidden  items-center justify-end flex-row sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
          <img @click="showAlert" src="/assets/icons/search.svg" alt="logo" class="cursor-pointer h-12"/>
          <img @click="showAlert" src="/assets/icons/line.svg" alt="logo" class="h-8"/>
          <div @click="showAlert" class="relative w-full p-1 cursor-pointer">
            <img src="/assets/icons/inbox.svg" alt="logo" class="h-8 "/>
              <div class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 h-5 w-5 rounded-full flex items-center justify-center">
                <span class="text-white text-xs font-semibold">{{ inboxCount }}</span>
            </div>
          </div>
          <div @click="showAlert"  class="relative w-full p-1 cursor-pointer ">
            <img src="/assets/icons/bell.svg" alt="logo" class="h-8 "/>
              <div class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 h-5 w-5 rounded-full flex items-center justify-center ">
                <span class="text-white  text-xs font-semibold">{{ notificationCount }}</span>
            </div>
          </div>
          <img @click="showAlert" src="/assets/icons/line.svg" alt="logo" class="h-8 cursor-pointer"/>
        </div>
        <div class=" justify-end items-center flex flex-row">
          <img @click="showAlert" src="/assets/images/profile_picture.png" alt="logo" class="cursor-pointer h-12 w-12 object-cover rounded-full border-4 border-purple-100"/>
          <img @click="showAlert" src="/assets/icons/arrow.svg" alt="logo" class="cursor-pointer flex items-center justify-center h-8"/>
        </div>
      </div>
  </div>
</template>

