import * as I from '@renderer/shared/types'
import { create } from 'zustand'
type Audio = {
  songUri: string
  track: I.AudioInfo[]
  isPlaying: boolean
  audioRef: HTMLAudioElement | null
  setIsPlaying: (value: boolean) => void
  setTrack: (track: I.Track[]) => void
  setAudioRef: (ref: HTMLAudioElement | null) => void
  setSongUri: (song: string) => void
}

export const useAudioStore = create<Audio>()((set) => ({
  songUri: '',
  track: [],
  isPlaying: false,
  audioRef: null,
  setIsPlaying: (value) => {
    set({
      isPlaying: value
    })
  },
  setTrack: (track) =>
    set(() => {
      const result = track?.map((item) => {
        return {
          name: item.name,
          preview: item.preview_url,
          img: item.album?.images?.[2].url,
          artist: item.artists?.[0].name
        }
      })
      return { track: result }
    }),
  setAudioRef: (ref) => set({ audioRef: ref }),
  setSongUri: (song) => {
    set({
      songUri: song
    })
  }
}))
