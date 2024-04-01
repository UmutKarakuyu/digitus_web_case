<script >
  export default {
    data() {
      return {
        inboxCount: 4,
        notificationCount: 12,
      };
    },
  };
</script>

<template>
  <div class=" absolute w-full items-center justify-between flex flex-row bg-white">

      <div class="w-1/6 flex justify-between items-center">
        <img src="/assets/images/logo.png" alt="logo" class="h-full sm:h-full md:h-16 lg:h-16 xl:h-16 2xl:h-16"/>
      </div>
      <div class=" w-1/2 items-center justify-evenly
      hidden flex-row sm:flex md:flex lg:flex xl:flex 2xl:flex">
        <img src="/assets/images/plus.png" alt="logo" class="h-full sm:h-16 md:h-16 lg:h-16 xl:h-16 2xl:h-16"/>
          <h1>Moms</h1>
          <h1>Experts</h1>
          <h1>Explore</h1>
          <h1>Forum</h1>
          <h1>MomTalk</h1>
      </div>
      <div class="w-1/4 items-center justify-end flex flex-row ">
        <div class="hidden flex-row sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
          <img src="/assets/icons/search.svg" alt="logo" class="h-12"/>
          <img src="/assets/icons/line.svg" alt="logo" class="h-12"/>
          <div class="relative">
            <img src="/assets/icons/inbox.svg" alt="logo" class="h-16"/>
              <div class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 h-6 w-6 rounded-full flex items-center justify-center">
                <span class="text-white font-semibold">{{ inboxCount }}</span>
            </div>
          </div>
          <div class="relative">
            <img src="/assets/icons/bell.svg" alt="logo" class="h-16"/>
              <div class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 h-6 w-6 rounded-full flex items-center justify-center">
                <span class="text-white font-semibold">{{ notificationCount }}</span>
            </div>
          </div>
          <img src="/assets/icons/line.svg" alt="logo" class="h-12"/>
        </div>
        <div class=" justify-end flex flex-row">
          <img src="/assets/images/profile_picture.png" alt="logo" class="h-16 w-16 object-cover rounded-full border-4 border-purple-100"/>
          <img src="/assets/icons/arrow.svg" alt="logo" class="h-12"/>
        </div>
      </div>
  </div>
</template>

