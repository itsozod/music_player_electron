import { tokenInstance } from '@renderer/shared/utils'

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const { getToken } = tokenInstance
  const headers = {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json'
  }
  const response = await fetch(import.meta.env.VITE_BASE_URL_DEVELOPMENT + url, {
    ...options,
    headers
  })

  if (response.status === 401) {
    window.location.href = '/signin'
  }
  if (!response.ok) {
    const errorResp = await response.json()
    throw new Error(`${errorResp?.error.message || response.statusText}`)
  }

  console.log('fetcher opt', headers)
  console.log('fetcher opt', url)

  return await response.json()
}
