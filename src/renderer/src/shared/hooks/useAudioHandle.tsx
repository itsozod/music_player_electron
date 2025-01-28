import { useEffect, useRef, useState } from 'react'
import { useAudioStore } from '../store'

const useAudioHandle = () => {
  const { track } = useAudioStore()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const handlePlay = () => {
    audioRef.current?.play()
    setIsPlaying(true)
  }
  const handlePause = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      handlePlay()
    }
  }, [track])

  return {
    audioRef,
    isPlaying,
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
    setIsPlaying,
    handlePlay,
    handlePause
  }
}

export default useAudioHandle
