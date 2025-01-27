import { getTrack } from '@renderer/shared/api/getTrack/getTrack'
import { useAudioStore } from '@renderer/shared/store'
import useSWR from 'swr'
import * as I from '@renderer/shared/types'

const Home = () => {
  const { data } = useSWR('me/top/tracks?time_range=long_term&limit=5')
  const { setTrack } = useAudioStore()

  return (
    <>
      <div className=" flex flex-col gap-1 p-2 bg-red">
        <h1 className="text-[28px]">Top Tracks</h1>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
          {data?.items?.map((item: I.Track) => {
            return (
              <div
                onClick={() => {
                  getTrack(item.id).then((preview: I.TrackResp) => {
                    setTrack(preview.tracks)
                  })
                }}
              >
                <img
                  width={300}
                  height={300}
                  className="object-cover rounded-sm"
                  src={item?.album?.images?.[1]?.url}
                />
                <p> {item?.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
