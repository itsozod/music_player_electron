import { Button } from '@renderer/components/ui/button'
import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'
import { useAudioStore } from '@renderer/shared/store'
import { Pause, Play } from 'lucide-react'

const Footer = () => {
  const { track } = useAudioStore()
  const {
    audioRef,
    isPlaying,
    handlePause,
    handlePlay,
    currentTime,
    setCurrentTime,
    duration,
    setDuration
  } = useAudioHandle()

  if (!track.length) return

  return (
    <footer className="sticky w-[100%] left-0 bottom-2 mb-2 p-4 backdrop-blur-[15px] bg-[rgba(0,0,0,0.1)]">
      {track?.map((item) => {
        return (
          <div className="flex items-center justify-between gap-5 w-full">
            <div className="flex items-center gap-2">
              <img src={item?.img} alt="Song image" className="rounded-[50%]" />
              <div className="flex flex-col gap-1">
                <h1>{item?.name}</h1>
                <p>{item.artist}</p>
              </div>
            </div>
            <div className="flex flex-col flex-2">
              <div className="flex justify-between gap-7 w-full">
                <p>{currentTime}</p>
                <p>{duration}</p>
              </div>
              <input min="0" max={duration} value={currentTime} type="range" />
              <audio
                ref={audioRef}
                onLoadedData={(e) => {
                  setDuration(e.currentTarget.duration?.toFixed(2))
                }}
                onTimeUpdate={(e) => {
                  setCurrentTime(e.currentTarget.currentTime?.toFixed(2))
                }}
                src={item.preview}
              ></audio>
              <Button onClick={isPlaying ? handlePause : handlePlay}>
                {isPlaying ? <Pause /> : <Play />}
              </Button>
            </div>
          </div>
        )
      })}
    </footer>
  )
}

export default Footer
