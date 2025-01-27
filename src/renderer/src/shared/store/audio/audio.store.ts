import * as I from '@renderer/shared/types'
import { create } from 'zustand'
type Audio = {
  track: I.AudioInfo[]
  setTrack: (track: I.Track[]) => void
}

export const useAudioStore = create<Audio>()((set) => ({
  track: [],
  setTrack: (track) =>
    set((state) => {
      const result = track?.map((item) => {
        return {
          name: item.name,
          preview: item.preview_url,
          img: item.album?.images?.[2].url,
          artist: item.artists?.[0].name
        }
      })
      return { track: (state.track = result) }
    })
}))
