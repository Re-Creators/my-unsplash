<template>
  <div id="app">
    <div class="py-2 md:py-8 px-5 md:px-10 w-full">
      <TopBar v-on:search-images="searchImages" :addPhoto="addPhoto"/>
      <!-- Photos View -->
      <div v-lazy-container="{ selector: 'img'}" ref="grid" class="w-full md:w-3/4" :class="[containerClass]">
        <div class="grid-sizer w-9/20 md:w-8/25"></div>
        <div class="gutter-sizer w-5/20 md:w-1/50"></div>
        <div v-for="(item, index) in images" :key="index" class="grid-item w-9/20 md:w-8/25 mb-3 cursor-pointer" @mouseenter="setOverlay(index)" @mouseleave="currentHover = null">
          <img :data-src="item.url" class="rounded-xl w-full">
          <div class="absolute bg-overlay z-10 inset-0 rounded-xl p-5 flex flex-col justify-between" v-if="currentHover === index">
            <button class="self-end inline border border-red-600 px-5 text-red-600 rounded-full hover:bg-red-600 hover:text-white active:bg-red-700" @click="deletePhoto(item.id)">delete</button>
            <h1 class="text-white">{{ item.label }}</h1>
          </div>
        </div>
      </div>
      <div class="w-1/6 absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4" v-if="images === null">
        <img src="./assets/spinner.gif" alt="" class="w-full">
      </div>
    </div>
  </div>
</template>

<script>
// helper
import axios from 'axios'
import Masonry from 'masonry-layout'

// Component
import TopBar from './components/TopBar.vue'


export default {
  name: 'App',
  components: {
    TopBar,
  },
  data() {
    return {
      images : null,
      firstLoadoed : false,
      overlay : false,
      currentHover : null,
      containerClass : "mx-0 md:mx-auto"
    }
  },
  mounted() {
    this.getImages()
  },
  watch: {
    images() {
      setTimeout(()=> {
        this.masonryLayout()
      }, 1000)

      if(this.images.length < 3) {
        this.containerClass = "mx-0"
      }
    }
  },
  methods : {
     getImages() {
      axios.get('https://my-unsplash-io.herokuapp.com/api/images')
      .then((response) => {
          this.images = response.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    masonryLayout() {
      var grid = this.$refs.grid

      var msnr = new Masonry(grid, {
        itemSelector : '.grid-item',
        columnWidth: '.grid-sizer',
        gutter : '.gutter-sizer',
        percentPosition: true
      })

      this.$Lazyload.$on('loaded', () => {
        this.firstLoadoed = true
        msnr.layout()
      })

    },
    setOverlay(index) {

      if(this.firstLoadoed) {
        this.currentHover = index
      }
    },
    addPhoto(data) {
      if(data.url !== "" || data.label !== "") {
        this.images = null
        axios.post('https://my-unsplash-io.herokuapp.com/api/images', 
        {
          image : data
        })
        .then(() => {
          // Reset
          console.log("done")
          this.label = ""
          this.url = ""
          this.getImages()
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    deletePhoto(id) {
      axios.delete('https://my-unsplash-io.herokuapp.com/api/images/' + id)
      .then((response) => {
        if(response.status === 200) {
          this.getImages()
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    searchImages(keyword) {
      this.images = null
      axios.get('https://my-unsplash-io.herokuapp.com/api/images?label=' + keyword)
      .then((response) => {
          if(response.status === 200) {
            this.images = response.data
          }else {
            this.images = null
          } 
          
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>