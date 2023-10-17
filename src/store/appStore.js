import { defineStore } from 'pinia'

export const useAppStore = defineStore('appSetting', {
  state: () => ({
    screenSize: {
      width: 1080,
      height: 1552
    },
    statedScreenSize: {
      // 按照设计图尺寸设置
      width: 2160,
      height: 3739
    },
    scale: 1
  }),
  getters: {
    getScreenSize(state) {
      return state.screenSize
    },
    getScale(state) {
      return state.scale
    }
  },
  actions: {
    setScreenSize(size) {
      this.screenSize = size
    },
    setScale(num) {
      this.scale = num
    }
  }
})
