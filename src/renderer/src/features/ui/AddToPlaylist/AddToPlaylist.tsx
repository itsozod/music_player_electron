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
import useSWR, { useSWRConfig } from 'swr'
import * as I from '@renderer/shared/types'
import Loader from '@renderer/shared/ui/Loader'
import PlaylistCard from '@renderer/pages/Playlists/ui/PlaylistCard'
import { addTrack } from '@renderer/shared/api/addTrack/addTrack'
import { X } from 'lucide-react'
import useSWRMutation from 'swr/mutation'

const AddToPlaylist = ({
  open,
  setOpen,
  playlist_id,
  uri
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  playlist_id: string
  uri: string
}) => {
  const { mutate } = useSWRConfig()
  const { data } = useSWR('me')
  const { data: playlists, isLoading } = useSWR<I.Playlist>(
    data?.id ? `users/${data.id}/playlists` : null
  )
  const { trigger: handleAddTrack } = useSWRMutation(
    `playlists/${playlist_id}/tracks?uris=${uri}`,
    addTrack
  )

  if (isLoading) return <Loader />

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="flex flex-col items-center h-full">
        <DrawerHeader>
          <DrawerTitle>Add track to playlist</DrawerTitle>
        </DrawerHeader>
        <div className="no-scrollbar w-full grid gap-3 grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] overflow-auto">
          {playlists?.items?.map((item) => {
            return (
              <PlaylistCard
                key={item.id}
                playlist={item}
                onClick={async () => {
                  await handleAddTrack({
                    uris: [uri],
                    position: 0
                  }).then(() => {
                    setOpen(false)
                  })
                  await mutate(`users/${data.id}/playlists`)
                }}
              />
            )
          })}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <div className="flex justify-center items-center">
              <Button className="rounded-[24px]" size={'lg'} variant="destructive">
                <X />
                Cancel
              </Button>
            </div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default AddToPlaylist
