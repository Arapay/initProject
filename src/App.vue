<template>
  <router-view/>
</template>

<script setup>
import { debounce } from '@/utils'
import { useAppStore } from '@/store/appStore'
import { onMounted, onUnmounted } from 'vue'
const APP_STORE = useAppStore()

document.body.className = 'spring'

function getScale() {
  const { width = 1920, height = 1080 } = APP_STORE.statedScreenSize
  const ww = window.innerWidth / width
  const wh = window.innerHeight / height
  const obj = {
    scale: ww < wh ? ww : wh,
    screenSize: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  if (window.innerWidth / window.innerHeight < width / height) {
    obj.scale = ww > wh ? ww : wh
  }
  return obj
}
function setScale() {
  const { scale, screenSize } = getScale()
  APP_STORE.setScale(scale)
  APP_STORE.setScreenSize(screenSize)
}
onMounted(() => {
  setScale()
  window.addEventListener('resize', debounce(setScale, 100))
})

onUnmounted(() => {
  window.removeEventListener('resize', debounce(setScale, 100))
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
