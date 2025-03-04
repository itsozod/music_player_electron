import useSWR from 'swr'
import * as I from '@renderer/shared/types'
import TrackCard from './TrackCard'
import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'
import { useMemo } from 'react'
import Loader from '@renderer/shared/ui/Loader'
import { greetings } from '@renderer/shared/constants/greetings'

const Home = () => {
  const { data: me, isLoading } = useSWR('me')
  const { data } = useSWR<I.TopTracks>('me/top/tracks?time_range=long_term&limit=5')
  const { selectedId, isPlaying, handleTrack } = useAudioHandle()
  const greeting = useMemo(() => greetings.filter((greet) => greet.time), [greetings])

  if (isLoading) return <Loader />

  return (
    <div className="flex flex-col gap-1 p-2">
      <h1 className="text-[1.7rem]">{`${greeting?.[0]?.greeting}, ${me?.display_name}`}</h1>
      <h1 className="text-[1.5rem]">Your top tracks</h1>
      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {data?.items?.map((item) => {
          return (
            <TrackCard
              key={item.id}
              track={item}
              isPlaying={isPlaying}
              selectedId={selectedId}
              handleTrack={handleTrack}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
