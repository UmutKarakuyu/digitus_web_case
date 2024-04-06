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
  <div class=" fixed z-50 w-full items-center justify-between grid grid-cols-12 bg-white px-2">
      <div class="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-3 2xl:col-span-3 flex justify-between  items-center h-16">
        <img @click="showAlert" src="/assets/images/logo.png" alt="logo" class="cursor-pointer h-full sm:h-full md:h-16 lg:h-16 xl:h-16 2xl:h-16"/>
      </div>
      <div class=" w-full  col-span-1 sm:col-span-5 md:col-span-7 lg:col-span-6 xl:col-span-5 2xl:col-span-5
      items-center justify-between hidden flex-row sm:hidden md:flex lg:flex xl:flex 2xl:flex">
        <img @click="showAlert" src="/assets/images/plus.png" alt="logo" class="cursor-pointer h-full sm:h-12 md:h-16 lg:h-16 xl:h-16 2xl:h-16"/>
          <h1 class="cursor-pointer"  @click="showAlert" >Moms</h1>
          <h1 class="cursor-pointer"  @click="showAlert" >Experts</h1>
          <h1 class="cursor-pointer"  @click="showAlert" >Explore</h1>
          <h1 class="cursor-pointer"  @click="showAlert" >Forum</h1>
          <h1 class="cursor-pointer"  @click="showAlert" >MomTalk</h1>
      </div>
      <div class="w-full col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-4 xl:col-span-4 2xl:col-span-4 
      items-center justify-end flex flex-row ">
        <div class="hidden  items-center justify-end flex-row sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
          <img @click="showAlert" src="/assets/icons/search.svg" alt="logo" class="cursor-pointer h-12"/>
          <img @click="showAlert" src="/assets/icons/line.svg" alt="logo" class="h-8"/>
          <div @click="showAlert" class="relative w-full p-1 cursor-pointer flex items-center h-12 ">
            <img src="/assets/icons/inbox.svg" alt="logo" class="min-h-8 min-w-8"/>
              <div class="absolute top-2 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 h-6 w-6 rounded-full flex items-center justify-center">
                <span class="text-white text-xs font-semibold">{{ inboxCount }}</span>
            </div>
          </div>
          <div @click="showAlert"  class="relative w-full p-1 cursor-pointer flex items-center h-12">
            <img src="/assets/icons/bell.svg" alt="logo" class="min-h-8 min-w-8"/>
              <div class="absolute top-2 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 h-6 w-6 rounded-full flex items-center justify-center ">
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

