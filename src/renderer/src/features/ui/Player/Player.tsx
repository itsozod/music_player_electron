import { Button } from '@renderer/shared/components/ui/button'
import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'
import { parseTime } from '@renderer/shared/utils'
import { Pause, Play } from 'lucide-react'
import { useRef } from 'react'

const Player = ({ song }: { song: string }) => {
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

  const handleChange = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(percentageRef.current?.value)
    }
  }

  return (
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
        src={song}
      />
      <Button onClick={handlePlayPause}>{isPlaying ? <Pause /> : <Play />}</Button>
    </div>
  )
}

export default Player
