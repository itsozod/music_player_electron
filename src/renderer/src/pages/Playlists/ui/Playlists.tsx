import useSWR from 'swr'
import PlaylistCard from './PlaylistCard'
import Loader from '@renderer/shared/ui/Loader'
import * as I from '@renderer/shared/types'

const Playlists = () => {
  const { data } = useSWR('me')
  const { data: playlists, isLoading } = useSWR<I.Playlist>(
    data?.id ? `users/${data.id}/playlists` : null
  )

  if (isLoading) return <Loader />
  return (
    <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]">
      {playlists?.items?.map((item) => {
        return <PlaylistCard key={item.id} playlist={item} />
      })}
    </div>
  )
}

export default Playlists
