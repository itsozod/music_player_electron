import { fetcher } from '@renderer/app/providers/swr/fetcher'

export const addTrack = async (url: string, arg = {}) => {
  return await fetcher(url, {
    method: 'POST',
    body: JSON.stringify(arg)
  })
}

// import { tokenInstance } from '@renderer/shared/utils'

// export const addTrack = async (url: string, args = {}) => {
//   const { getToken } = tokenInstance
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${getToken()}`
//     },
//     body: JSON.stringify(args)
//   })

//   if (!response.ok) {
//     throw new Error('Failed to fetch token')
//   }

//   const data = await response.json()
//   return data
// }
