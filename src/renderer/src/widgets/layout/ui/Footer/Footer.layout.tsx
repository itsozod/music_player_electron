import { Button } from '@renderer/components/ui/button'
import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'
import { useAudioStore } from '@renderer/shared/store'
import { Pause, Play } from 'lucide-react'

const Footer = () => {
  const { track } = useAudioStore()
  const { audioRef, isPlaying, handlePause, handlePlay } = useAudioHandle()

  if (!track.length) return

  return (
    <footer className="sticky w-[100%] left-0 bottom-2 mb-2 p-4 backdrop-blur-[15px] bg-[rgba(0,0,0,0.1)]">
      {track?.map((item) => {
        return (
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2">
              <img src={item?.img} alt="Song image" className="rounded-[50%]" />
              <div className="flex flex-col gap-1">
                <h1>{item?.name}</h1>
                <p>{item.artist}</p>
              </div>
            </div>
            <audio ref={audioRef} src={item.preview} />
            <Button onClick={isPlaying ? handlePause : handlePlay}>
              {isPlaying ? <Pause /> : <Play />}
            </Button>
          </div>
        )
      })}
    </footer>
  )
}

export default Footer
