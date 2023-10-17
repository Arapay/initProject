import { defineStore } from 'pinia'
import { getToken } from '@/utils/auth'

export const useUserStore = defineStore('userInfo', {
  state: () => ({
    token: getToken(),
    name: '',
    unitId: '',
    userInfo: {},
    roleList: [],
    allowRouters: [],
    bottomNav: [],
    userMenu: []
  }),
  getters: {
    allowRouters(state) {
      return state.allowRouters
    },
    bottomNav(state) {
      return state.bottomNav
    }
  },
  actions: {

  }
})
