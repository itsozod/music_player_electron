import { useEffect, useRef, useState } from 'react'
import { useAudioStore } from '../store'

const useAudioHandle = () => {
  const { track } = useAudioStore()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    audioRef.current?.play()
    setIsPlaying(true)
  }
  const handlePause = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }

  useEffect(() => {
    if (track.length) {
      handlePlay()
    }
  }, [track])

  return { audioRef, isPlaying, handlePlay, handlePause }
}

export default useAudioHandle
