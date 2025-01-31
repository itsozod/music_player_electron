import useSWR from 'swr'

const Playlists = () => {
  const { data } = useSWR('me')
  const { data: playlists } = useSWR(data?.id ? `users/${data.id}/playlists` : null)
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
      {playlists?.items?.map((item) => {
        return (
          <div>
            <img src={item?.images?.[0]?.url} alt="Playlist img" />
            <p>{item?.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Playlists
