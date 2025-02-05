import { Player } from '@renderer/features'
import { useAudioStore } from '@renderer/shared/store'

const Footer = () => {
  const { track } = useAudioStore()

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
            <Player song={item?.preview} />
          </div>
        )
      })}
    </footer>
  )
}

export default Footer
