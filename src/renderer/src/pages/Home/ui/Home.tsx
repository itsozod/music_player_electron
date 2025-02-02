import { useAudioStore } from '@renderer/shared/store'
import useSWR from 'swr'
import * as I from '@renderer/shared/types'
import { Card, CardContent, CardFooter } from '@renderer/shared/components/ui/card'
import { Button } from '@renderer/shared/components/ui/button'
import { Pause, PlayIcon } from 'lucide-react'
import useAudioHandle from '@renderer/shared/hooks/useAudioHandle'

const Home = () => {
  const { data } = useSWR('me/top/tracks?time_range=long_term&limit=5')
  const { isPlaying } = useAudioStore()
  const { selectedId, handleTrack } = useAudioHandle()

  return (
    <>
      <div className=" flex flex-col gap-1 p-2 bg-red">
        <h1 className="text-[28px]">Top Tracks</h1>
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
          {data?.items?.map((item: I.Track) => {
            return (
              <Card className="group flex flex-col cursor-pointer shadow-none hover:bg-indigo-50 dark:hover:bg-indigo-950">
                <CardContent className="p-3">
                  <img
                    width={300}
                    height={300}
                    className="aspect-square rounded-[24px]"
                    src={item?.album?.images?.[1]?.url}
                  />
                </CardContent>
                <CardFooter className="flex justify-between gap-2 mt-auto">
                  <p> {item?.name}</p>
                  <Button
                    size={'icon'}
                    className="hidden p-2 rounded-[50%] group-hover:flex"
                    onClick={() => handleTrack(item.id)}
                  >
                    {isPlaying && selectedId === item.id ? <Pause /> : <PlayIcon />}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
