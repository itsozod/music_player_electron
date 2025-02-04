import { Button } from '@renderer/shared/components/ui/button'
import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'
import { useAudioStore } from '@renderer/shared/store'
import { Pause, Play } from 'lucide-react'
import { useRef } from 'react'

const Footer = () => {
  const { track } = useAudioStore()
  const percentageRef = useRef<HTMLInputElement>(null)
  const {
    audioRef,
    isPlaying,
    handlePlayPause,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    setIsPlaying
  } = useAudioHandle()

  const parseTime = (time: number) => {
    time %= 3600
    let minutes = Math.floor(time / 60)
    let secs = Math.floor(time % 60)
    return [minutes, secs]
      .map((v) => (v < 10 ? '0' + v : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':')
  }

  const handleChange = () => {
    audioRef.current.currentTime = percentageRef.current.value
  }

  if (!track?.length) return

  return (
    <footer className="sticky w-[100%] left-0 bottom-2 mb-2 p-4 backdrop-blur-[15px] bg-[rgba(0,0,0,0.1)]">
      {track?.map((item) => {
        return (
          <div className="flex items-center justify-between gap-5 w-full">
            <div className="flex items-center gap-2">
              <img src={item?.img} alt="Song image" className="rounded-[50%]" />
              <div className="flex flex-col gap-1">
                <h1>{item?.name}</h1>
                <p>{item?.artist}</p>
              </div>
            </div>
            <div className="flex flex-col flex-2">
              <div className="flex justify-between gap-7 w-full">
                <p>{currentTime}</p>
                <p>{duration}</p>
              </div>
              <input
                min="0"
                ref={percentageRef}
                max={duration}
                value={currentTime}
                type="range"
                onChange={handleChange}
              />
              <audio
                autoPlay
                ref={audioRef}
                onLoadedData={(e) => {
                  const parsed = parseTime(e.currentTarget.duration)
                  setDuration(parsed)
                }}
                onTimeUpdate={(e) => {
                  const parsed = parseTime(e.currentTarget.currentTime)
                  setCurrentTime(parsed)
                }}
                onEnded={() => {
                  setIsPlaying(false)
                }}
                src={item.preview}
              />
              <Button onClick={handlePlayPause}>{isPlaying ? <Pause /> : <Play />}</Button>
            </div>
          </div>
        )
      })}
    </footer>
  )
}

export default Footer
