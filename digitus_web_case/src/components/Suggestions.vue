<script >
export default {
    name: 'Cards',
    data() {
        return {
            people:[
                {
                    id: 1,
                    name: "Ahmet Yılmaz",
                    avatar:'/assets/images/avatar2.png',
                    role: 'Medical Doctor',
                    location:'İzmir',
                }, 
                {
                    id: 2,
                    name: "Melike Kadıoğlu",
                    avatar:'/assets/images/avatar3.png',
                    role: null,
                    location:'İzmir',
                }, 
                {
                    id: 3,
                    name: "Ayşe Yıldırım",
                    avatar:'/assets/images/avatar4.png',
                    role: null,
                    location:'İzmir',
                }, 

            ],
        }
    },
    methods: {
  }
}
</script>

<template>
    <div class="bg-gray-200 flex flex-col p-4 text-center justify-center items-center rounded-xl space-y-4">
        <div class="flex flex-row w-full">
            <div class="flex w-full justify-center">
                <h1>Members You May Know</h1>
            </div>
            <h1 class="whitespace-nowrap">SEE ALL</h1>
        </div>
        <div class="flex flex-row space-x-6 items-center justify-center text-center">
            <div v-for="item in people" :key="item.id">
                
                <div class="bg-white rounded-xl text-center items-center  w-16 sm:w-24 md:w-28 lg:w-36 xl:w-28 2xl:w-32 h-56 flex flex-col ">
                    <div class="flex justify-end items-end  w-full">
                        <img src="/assets/icons/cancel.svg" alt="logo" class="h-8 justify-center">
                    </div>
                    <div class="flex items-center justify-center text-center ">
                        <div v-if="item.role === 'Medical Doctor'" class="items-center justify-center text-center flex h-16 w-16 rounded-full border-transparent border-t-blue-500 border-b-yellow-500 bg-gradient-to-t from-yellow-500 via-green-500 to-blue-500">
                            <img :src="item.avatar" alt="logo" class="h-14 w-14 border-white border-4 rounded-full">
                        </div>
                        <div v-else-if="item.role === 'SPONSORED'" class="items-center justify-center flex h-16 w-16 rounded-full border-red-300 border-4">
                            <img :src="item.avatar" alt="logo" class="h-14 w-14 border-white border-4 rounded-full">
                        </div>
                        <div v-else class="items-center justify-center flex h-16 w-16 rounded-full border-purple-300 border-4">
                            <img :src="item.avatar" alt="logo" class="h-14 w-14 border-white border-4 rounded-full">
                        </div>
                    </div>
                    <div class="whitespace-nowrap space-y-2">
                        <div class="h-14 sm:h-14 pt-2">
                            <h1>{{item.name}}</h1>
                            <h1 class="text-yellow-400">{{item.role}}</h1>
                        </div>
                        <div class=" flex flex-col items-center justify-end space-y-2">
                            <p class="text-sm">{{item.location}}</p>
                            <button v-if="item.role ==='Medical Doctor'" class="bg-yellow-400 rounded-xl px-4">
                                Follow
                            </button>
                            <button v-else class="bg-purple-400 rounded-xl px-4">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

