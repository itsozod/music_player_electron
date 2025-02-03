import useSWR from 'swr'
import PlaylistCard from './PlaylistCard'

const Playlists = () => {
  const { data } = useSWR('me')
  const { data: playlists } = useSWR(data?.id ? `users/${data.id}/playlists` : null)
  return (
    <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))]">
      {playlists?.items?.map((item) => {
        return <PlaylistCard key={item.id} playlist={item} />
      })}
    </div>
  )
}

export default Playlists
