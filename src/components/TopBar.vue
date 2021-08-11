<template>
    <div class="flex flex-row justify-between mb-10">
        <div class="flex w-11/12 md:w-1/2">
            <img src="./../assets/icon.svg" alt="" class="w-2/6 md:w-1/4 ">
            <!-- Search Bar -->
            <div class="mx-2  md:ml-10 relative w-4/6 md:w-1/2 h-10 text-sm md:text-base">
                <input  type="text" v-model="keyword" class="w-full h-full border-gray-400 border-2 rounded-md pl-10" placeholder="Search by label" @keyup.enter="$emit('search-images', keyword)">
                <span class="material-icons text-gray-400 absolute top-0 left-0 p-2">search</span>
            </div>
        </div>
        <Button class="bg-green-600 p-3 text-white font-semibold rounded-md hover:bg-green-700 active:bg-green-800 hidden md:block" @click="modal">Add a photo</Button>
        <Button class="bg-green-600 py-2 px-3 text-white font-semibold rounded-md hover:bg-green-700 active:bg-green-800 block md:hidden" @click="modal">+</Button>
        <!-- Modal -->
        <Modal v-if="showModal" v-on:show-modal="modal" v-on:add-photo="addPhoto"/>
    </div>
</template>
<script>
import Modal from './Modal.vue'

export default {
    props : {
        addPhoto : Function
    },
    components : {
        Modal,
    },
    data() {
        return {
            keyword : "",
            showModal : false
        }
    },
    methods: {
        modal() {
            this.showModal = !this.showModal
        },
    }
}
</script>
<style scoped>
.scale-enter-active, .scale-leave-active {
  transition: all .2s ease;
}
.scale-enter, .scale-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(.5);
}
</style>
