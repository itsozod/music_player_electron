import { Card, CardContent, CardFooter } from '@renderer/shared/components/ui/card'
import useSWR from 'swr'

const Playlists = () => {
  const { data } = useSWR('me')
  const { data: playlists } = useSWR(data?.id ? `users/${data.id}/playlists` : null)
  return (
    <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
      {playlists?.items?.map((item) => {
        return (
          <Card className="flex flex-col cursor-pointer shadow-none hover:bg-indigo-50 dark:hover:bg-indigo-950">
            <CardContent className="p-3">
              <img
                width={300}
                height={300}
                src={item?.images?.[0]?.url}
                className="aspect-square rounded-[24px] h-[250px]"
                alt="Playlist img"
              />
            </CardContent>
            <CardFooter className='mt-auto'>
              <p className="text-[1rem]">{item?.name}</p>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default Playlists
