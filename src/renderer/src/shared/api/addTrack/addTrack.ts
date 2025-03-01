import { fetcher } from '@renderer/app/providers/swr/fetcher'

export const addTrack = async (url: string, { arg = {} }) => {
  return fetcher(url, {
    method: 'POST',
    body: JSON.stringify(arg)
  })
}
