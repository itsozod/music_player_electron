import { tokenInstance } from '@renderer/shared/utils'

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const { getToken } = tokenInstance
  const headers = {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json'
  }
  const response = await fetch(url, { ...options, headers })
  if (!response.ok) {
    const errorResp = await response.json()
    throw new Error(`${errorResp?.message || response.statusText}`)
  }
  return await response.json()
}
