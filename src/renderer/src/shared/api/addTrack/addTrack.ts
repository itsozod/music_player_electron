import { tokenInstance } from '@renderer/shared/utils'

export const addTrack = async (url: string, args = {}) => {
  const { getToken } = tokenInstance
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${getToken()}`
    },
    body: JSON.stringify(args)
  })

  if (!response.ok) {
    throw new Error('Failed to fetch token')
  }

  const data = await response.json()
  return data
}
