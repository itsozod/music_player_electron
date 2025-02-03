import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'
import Loader from '@renderer/shared/ui/Loader'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import PlaylistSongCard from './PlaylistSongCard'
import * as I from '@renderer/shared/types'

const PlaylistSongs = () => {
  const { id } = useParams()
  const { data, isLoading } = useSWR<I.PlaylistSongsById>(id ? `playlists/${id}` : null)
  const { handleTrack, isPlaying, selectedId } = useAudioHandle()

  if (isLoading) return <Loader />

  return (
    <div className="flex flex-col gap-2">
      {data?.tracks?.items?.map((item) => {
        return (
          <PlaylistSongCard
            key={item.track.id}
            item={item}
            currentPlaying={selectedId}
            isPlaying={isPlaying}
            handleTrack={() => {
              handleTrack(item.track.id)
            }}
          />
        )
      })}
    </div>
  )
}

export default PlaylistSongs
