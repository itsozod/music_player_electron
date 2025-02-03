import { Button } from '@renderer/shared/components/ui/button'
import { Pause, PlayIcon } from 'lucide-react'
import * as I from '@renderer/shared/types'

const PlaylistSongCard = ({
  item,
  isPlaying,
  currentPlaying,
  handleTrack
}: {
  item: I.PlaylistSongItem
  isPlaying: boolean
  currentPlaying: string
  handleTrack: (id: string) => void
}) => {
  return (
    <div className="flex items-center gap-2 group relative">
      <img
        width={80}
        height={80}
        loading="lazy"
        className="aspect-square object-cover"
        src={item?.track?.album?.images?.[1]?.url}
        alt="Playlist img"
      />
      <div
        style={{
          color: currentPlaying === item.track.id ? 'green' : 'white'
        }}
      >
        {item?.track?.name}
      </div>
      <Button
        size={'icon'}
        className="absolute left-6 hidden p-2 rounded-[50%] group-hover:flex items-center justify-center"
        onClick={() => {
          handleTrack(item.track.id)
        }}
      >
        {isPlaying && currentPlaying === item.track.id ? <Pause /> : <PlayIcon />}
      </Button>
    </div>
  )
}

export default PlaylistSongCard
