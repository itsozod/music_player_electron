import useSWR from 'swr'
import * as I from '@renderer/shared/types'
import TrackCard from './TrackCard'
import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'

const Home = () => {
  const { data } = useSWR<I.TopTracks>('me/top/tracks?time_range=long_term&limit=5')
  const { selectedId, handleTrack } = useAudioHandle()

  return (
    <>
      <div className=" flex flex-col gap-1 p-2 bg-red">
        <h1 className="text-[28px]">Top Tracks</h1>
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
          {data?.items?.map((item) => {
            return (
              <TrackCard
                key={item.id}
                track={item}
                selectedId={selectedId}
                handleTrack={handleTrack}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
