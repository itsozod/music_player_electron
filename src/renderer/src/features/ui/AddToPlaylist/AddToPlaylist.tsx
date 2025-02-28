import { Button } from '@renderer/shared/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@renderer/shared/components/ui/drawer'
import { Dispatch, SetStateAction } from 'react'
import useSWR from 'swr'
import * as I from '@renderer/shared/types'
import Loader from '@renderer/shared/ui/Loader'
import PlaylistCard from '@renderer/pages/Playlists/ui/PlaylistCard'
import { addTrack } from '@renderer/shared/api/addTrack/addTrack'
import { useAudioStore } from '@renderer/shared/store'

const AddToPlaylist = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const { songUri } = useAudioStore()
  const { data } = useSWR('me')
  const {
    data: playlists,
    isLoading,
    mutate
  } = useSWR<I.Playlist>(data?.id ? `users/${data.id}/playlists` : null)

  const handleAddTrack = async (playlist_id: string, position: number, uris: string) => {
    await addTrack(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?uris=${uris}`, {
      uris: [uris],
      position: position
    }).then(() => {
      setOpen(false)
    })
    await mutate()
  }

  if (isLoading) return <Loader />

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="flex flex-col h-full">
        <DrawerHeader>
          <DrawerTitle>Add track to playlist</DrawerTitle>
        </DrawerHeader>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] max-h-[600px] overflow-auto">
          {playlists?.items?.map((item) => {
            return (
              <PlaylistCard
                key={item.id}
                playlist={item}
                onClick={() => handleAddTrack(item.id, 0, songUri)}
              />
            )
          })}
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="destructive">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default AddToPlaylist
