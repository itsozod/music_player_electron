import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'
import Loader from '@renderer/shared/ui/Loader'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import PlaylistSongCard from './PlaylistSongCard'
import * as I from '@renderer/shared/types'
import { useState } from 'react'
import AddToPlaylist from '@renderer/features/ui/AddToPlaylist/AddToPlaylist'
import { Button } from '@renderer/shared/components/ui/button'
import { useAudioStore } from '@renderer/shared/store'

const PlaylistSongs = () => {
  const { id } = useParams()
  const { data, isLoading } = useSWR<I.PlaylistSongsById>(id ? `playlists/${id}` : null)
  const { handleTrack, isPlaying, selectedId } = useAudioHandle()
  const { setSongUri } = useAudioStore()
  const [open, setOpen] = useState(false)

  if (isLoading) return <Loader />

  return (
    <>
      <div className="flex flex-col gap-2">
        {data?.tracks?.items?.map((item) => {
          return (
            <div className=" w-full flex justify-between items-center gap-2">
              <PlaylistSongCard
                key={item.track.id}
                item={item}
                currentPlaying={selectedId}
                isPlaying={isPlaying}
                handleTrack={handleTrack}
              />
              <Button
                onClick={() => {
                  setOpen(true)
                  setSongUri(item.track.uri)
                }}
                size={'icon'}
              >
                Add
              </Button>
            </div>
          )
        })}
      </div>
      <AddToPlaylist open={open} setOpen={setOpen} />
    </>
  )
}

export default PlaylistSongs
