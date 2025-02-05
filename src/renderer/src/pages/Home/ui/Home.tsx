import useSWR from 'swr'
import * as I from '@renderer/shared/types'
import TrackCard from './TrackCard'
import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'
import { useEffect, useState } from 'react'
import Loader from '@renderer/shared/ui/Loader'

const Home = () => {
  const { data } = useSWR<I.TopTracks>('me/top/tracks?time_range=long_term&limit=5')
  const { data: me, isLoading } = useSWR('me')
  const { selectedId, isPlaying, handleTrack } = useAudioHandle()
  const [now, setNow] = useState('')
  const time = new Date()
  let isMorning = time.getHours() > 5 && time.getHours() <= 12
  let isAfternoon = time.getHours() > 12 && time.getHours() <= 18
  let isEvening = time.getHours() > 18 && time.getHours() <= 22
  let isNight = time.getHours() > 22 || time.getHours() <= 5

  useEffect(() => {
    if (isMorning) {
      setNow('Good morning')
    } else if (isAfternoon) {
      setNow('Good afternoon')
    } else if (isEvening) {
      setNow('Good evening')
    } else if (isNight) {
      setNow('Good might')
    }
  }, [])

  if (isLoading) return <Loader />

  return (
    <div className="flex flex-col gap-1 p-2">
      <h1 className="text-[1.7rem]">{`${now}, ${me?.display_name ?? ''}`}</h1>
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
