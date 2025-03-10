import useSWR from 'swr'
import PlaylistCard from './PlaylistCard'
import Loader from '@renderer/shared/ui/Loader'
import * as I from '@renderer/shared/types'
import { useNavigate } from 'react-router-dom'

const Playlists = () => {
  const navigate = useNavigate()
  const { data } = useSWR('me')
  const { data: playlists, isLoading } = useSWR<I.Playlist>(
    data?.id ? `users/${data.id}/playlists` : null
  )

  if (isLoading) return <Loader />
  return (
    <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]">
      {playlists?.items?.map((item) => {
        return (
          <PlaylistCard
            key={item.id}
            playlist={item}
            onClick={() => navigate(`/playlists/${item.id}`)}
          />
        )
      })}
    </div>
  )
}

export default Playlists
