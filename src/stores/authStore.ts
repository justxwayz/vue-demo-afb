import { defineStore } from 'pinia'

interface AuthState {
  token: string | null
  userId: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId')
  }),
  actions: {
    login(token: string, userId: string) {
      this.token = token
      this.userId = userId
      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)
    },
    logout() {
      this.token = null
      this.userId = null
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  }
})
