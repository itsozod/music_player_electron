import { useParams } from 'react-router-dom'
import useSWR from 'swr'

const PlaylistSongs = () => {
  const { id } = useParams()
  const { data } = useSWR(id ? `playlists/${id}` : null)
  return (
    <div className="flex flex-col gap-2">
      {data?.tracks?.items?.map((item) => {
        return (
          <div className="flex gap-2">
            <img src={item?.track?.album?.images?.[2]?.url} alt="Playlist img" />
            <div>{item?.track?.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default PlaylistSongs
