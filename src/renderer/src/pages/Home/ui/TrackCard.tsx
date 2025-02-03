import { Button } from '@renderer/shared/components/ui/button'
import { Card, CardContent, CardFooter } from '@renderer/shared/components/ui/card'
import { Pause, PlayIcon } from 'lucide-react'
import * as I from '@renderer/shared/types'
import { useAudioStore } from '@renderer/shared/store'

const TrackCard = ({
  track,
  selectedId,
  handleTrack
}: {
  track: I.Track
  selectedId: string
  handleTrack: (id: string) => void
}) => {
  const { isPlaying } = useAudioStore()

  return (
    <Card className="group flex flex-col cursor-pointer shadow-none hover:bg-indigo-50 dark:hover:bg-indigo-950">
      <CardContent className="p-3">
        <img
          width={300}
          height={300}
          className="aspect-square rounded-[24px]"
          src={track?.album?.images?.[1]?.url}
        />
      </CardContent>
      <CardFooter className="flex justify-between gap-2 mt-auto">
        <p> {track?.name}</p>
        <Button
          size={'icon'}
          className="hidden p-2 rounded-[50%] group-hover:flex"
          onClick={() => handleTrack(track.id)}
        >
          {isPlaying && selectedId === track.id ? <Pause /> : <PlayIcon />}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default TrackCard
