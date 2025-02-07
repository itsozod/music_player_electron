import * as I from '@renderer/shared/types'

export interface Playlist {
  items: PlaylistItem[]
}
export interface PlaylistItem {
  id: string
  name: string
  images: I.Image[]
}
export interface PlaylistSongsById {
  tracks: {
    items: PlaylistSongItem[]
  }
}
export interface PlaylistSongItem {
  track: {
    id: string
    name: string
    uri: string
    album: {
      images: I.Image[]
    }
  }
}
