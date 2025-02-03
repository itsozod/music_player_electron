import { Card, CardContent, CardFooter } from '@renderer/shared/components/ui/card'

const PlaylistCard = ({ playlist }: { playlist: any }) => {
  return (
    <Card className="flex flex-col cursor-pointer shadow-none hover:bg-indigo-50 dark:hover:bg-indigo-950">
      <CardContent className="p-3">
        <img
          width={300}
          height={300}
          src={playlist?.images?.[0]?.url}
          className="aspect-square rounded-[24px] h-[250px]"
          alt="Playlist img"
        />
      </CardContent>
      <CardFooter className="mt-auto">
        <p className="text-[1rem]">{playlist?.name}</p>
      </CardFooter>
    </Card>
  )
}

export default PlaylistCard
