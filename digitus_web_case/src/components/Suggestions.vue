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
    <div class="bg-orange-200 flex flex-col p-4 text-center justify-center items-center rounded-xl space-y-4 ">
        <div class="flex flex-row w-full">
            <div class="flex w-full justify-center">
                <h1>Members You May Know</h1>
            </div>
            <h1 class="whitespace-nowrap">SEE ALL</h1>

        </div>
        <div class="flex flex-row  space-x-12 items-center justify-center text-center">
            <div v-for="item in people" :key="item.id" class="bg-white rounded-xl text-center justify-center items-center m-6 p-4 shadow-md">
               <div class="flex items-center justify-center text-center">
                    <div v-if="item.role === 'Medical Doctor'" class="items-center justify-center text-center flex  h-16 w-16 rounded-full border-transparent border-t-blue-500 border-b-yellow-500 bg-gradient-to-t from-yellow-500 via-green-500 to-blue-500">
                        <img :src="item.avatar" alt="logo" class=" h-14 w-14 border-white border-4 rounded-full">
                    </div>
                    <div v-else-if="item.role === 'SPONSORED'" class="items-center justify-center flex h-16 w-16 rounded-full border-red-300 border-4">
                        <img :src="item.avatar" alt="logo" class=" h-14 w-14 border-white border-4 rounded-full">
                    </div>
                    <div v-else class="items-center justify-center flex h-16 w-16 rounded-full border-purple-300 border-4">
                        <img :src="item.avatar" alt="logo" class=" h-14 w-14 border-white border-4 rounded-full">
                    </div>
               </div>
                <div class="whitespace-nowrap space-y-2">
                    <div class="space-y-0">
                        <h1>{{item.name}}</h1>
                        <h1 class="text-orange-400">{{item.role}}</h1>
                    </div>
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
</template>

