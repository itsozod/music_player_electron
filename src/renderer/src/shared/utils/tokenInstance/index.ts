import { USER_TOKEN_KEY_LOCALSTORAGE } from '@renderer/shared/constants'

export const tokenInstance = {
  setToken: (token: string) => {
    localStorage.setItem(USER_TOKEN_KEY_LOCALSTORAGE, JSON.stringify(token))
  },
  getToken: () => {
    try {
      const token = JSON.parse(localStorage.getItem(USER_TOKEN_KEY_LOCALSTORAGE) as any)
      return token
    } catch (error) {
      console.error('Failed to parse token:', error)
      return null
    }
  },
  clearToken: () => {
    localStorage.removeItem(USER_TOKEN_KEY_LOCALSTORAGE)
  }
}
