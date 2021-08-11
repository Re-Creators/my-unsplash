<template>
    <!-- Modals -->
    <div class="fixed bg-overlay z-30 inset-0" @click="emitModal(false)">
      <!-- modal dialog -->
      <transition name="scale">
        <div class="absolute top-1/2 left-1/2 w-11/12 md:w-1/3  bg-white transform -translate-y-2/4 -translate-x-2/4 p-5 rounded-lg shadow-lg z-30" @mouseenter="isInArea = true" @mouseleave="isInArea = false" v-if="shouldShow">
          <h1 class="mb-5 font-bold">Add new photo</h1>
          <div class="flex flex-col mb-3">
            <label for="" class="text-sm">Label</label>
            <input type="text" class="border-2 border-gray-400 p-2" v-model="label">
          </div>
          <div class="flex flex-col mb-3">
            <label for="" class="text-sm">Photo URL</label>
            <input type="text" class="border-2 border-gray-400 p-2" v-model="url">
          </div>
          <div class="w-full flex justify-end">
            <button class="text-gray-400" @click="emitModal(true)">Cancel</button>
            <button class="ml-3 py-2 px-5 bg-green-400 text-white rounded-md hover:bg-green-500 active:bg-green-600" @click="emitPhoto">Submit</button>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            label : "",
            url : "",
            isInArea : false,
            shouldShow : false
        }
    },

    mounted() {
      setTimeout(() => {
        this.shouldShow = true
      }, 100)
    },
    methods : {
      emitPhoto() {
        let data = {
          label : this.label,
          url : this.url
        }
        this.$emit('add-photo', data)
        // Hide modal
        this.transitionLeave()

      },
      emitModal(fromCancel) {
        if(!this.isInArea || fromCancel) {
          this.transitionLeave()
        }
      },
      transitionLeave() {
          this.shouldShow = false
          setTimeout(()=> {
            this.$emit('show-modal')
          }, 100)
      }
    }
}
</script>
<style scoped>
.scale-enter-active, .scale-leave-active {
  transition: all .2s ease;
}
.scale-enter, .scale-leave {
  opacity: 0;
  transform: scale(0);
  transform: translate(-50%, -100%);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(0);
  transform: translate(-50%, 100%);
}
</style>
