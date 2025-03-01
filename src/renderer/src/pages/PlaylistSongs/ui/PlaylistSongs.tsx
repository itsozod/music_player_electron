import * as I from '@renderer/shared/types'
import { useState } from 'react'
import { Button } from '@renderer/shared/components/ui/button'
import { useAudioStore } from '@renderer/shared/store'
import { EllipsisVertical, Music } from 'lucide-react'
import { AddToPlaylist } from '@renderer/features'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'
import Loader from '@renderer/shared/ui/Loader'
import PlaylistSongCard from './PlaylistSongCard'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@renderer/shared/components/ui/dropdown-menu'

const PlaylistSongs = () => {
  const { id } = useParams()
  const { data, isLoading } = useSWR<I.PlaylistSongsById>(id ? `playlists/${id}` : null)
  const { handleTrack, isPlaying, selectedId } = useAudioHandle()
  const { songUri, setSongUri } = useAudioStore()
  const [open, setOpen] = useState(false)

  if (isLoading) return <Loader />

  return (
    <>
      <div className="flex flex-col gap-2">
        {data?.tracks?.items?.map((item) => {
          return (
            <div className="w-full flex justify-between items-center gap-2">
              <PlaylistSongCard
                key={item.track.id}
                item={item}
                currentPlaying={selectedId}
                isPlaying={isPlaying}
                handleTrack={handleTrack}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size={'icon'} variant={'secondary'}>
                    <EllipsisVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56"
                  onClick={() => {
                    setOpen(true)
                    setSongUri(item.track.uri)
                  }}
                >
                  <DropdownMenuItem>
                    <Music />
                    <span>Add to playlist</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )
        })}
      </div>
      <AddToPlaylist open={open} setOpen={setOpen} uri={songUri} />
    </>
  )
}

export default PlaylistSongs
