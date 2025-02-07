import { Button } from '@renderer/shared/components/ui/button'
import { Card, CardContent, CardFooter } from '@renderer/shared/components/ui/card'
import { Pause, PlayIcon } from 'lucide-react'
import * as I from '@renderer/shared/types'

const TrackCard = ({
  track,
  selectedId,
  isPlaying,
  handleTrack
}: {
  track: I.Track
  selectedId: string
  isPlaying: boolean
  handleTrack: (id: string) => void
}) => {
  return (
    <Card className="w-full relative group flex flex-col justify-center items-center cursor-pointer shadow-none hover:bg-indigo-50 dark:hover:bg-indigo-950">
      <CardContent className="p-3">
        <img
          width={300}
          height={300}
          className="rounded-[24px]"
          src={track?.album?.images?.[1]?.url}
        />
      </CardContent>
      <CardFooter className="flex justify-between gap-2 mt-auto">
        <p> {track?.name}</p>
        <Button
          size={'icon'}
          className="absolute right-1 hidden p-2 rounded-[50%] group-hover:flex items-center"
          onClick={() => handleTrack(track.id)}
        >
          {isPlaying && selectedId === track.id ? <Pause /> : <PlayIcon />}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default TrackCard
