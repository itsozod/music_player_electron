import { useEffect, useRef, useState } from 'react'
import { useAudioStore } from '../store'
import { getTrack } from '../api/getTrack/getTrack'

const useAudioHandle = () => {
  const [cache, setCache] = useState(new Map())
  const { audioRef: audioEl, isPlaying, setTrack, setIsPlaying, setAudioRef } = useAudioStore()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [duration, setDuration] = useState('00')
  const [currentTime, setCurrentTime] = useState('00')
  const [selectedId, setSelectedId] = useState('')

  async function fetchTrack(id: string) {
    if (cache.has(id)) {
      return cache.get(id)
    }
    const response = await getTrack(id)
    setCache(cache.set(id, response.tracks))
    return response.tracks
  }
  
  const handlePlay = () => {
    audioRef.current?.play()
    audioEl?.play()
    setIsPlaying(true)
  }
  const handlePause = () => {
    audioRef.current?.pause()
    audioEl?.pause()
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  const handleTrack = async (id: string) => {
    if (isPlaying && selectedId === id) {
      handlePause()
    } else {
      handlePlay()
    }
    const res = await fetchTrack(id)
    setTrack(res)
    setSelectedId(id)
  }

  useEffect(() => {
    if (audioRef.current) {
      setAudioRef(audioRef.current)
    }
  }, [audioRef.current])

  return {
    audioRef,
    isPlaying,
    selectedId,
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
    handlePlayPause,
    handleTrack,
    setIsPlaying
  }
}

export default useAudioHandle
