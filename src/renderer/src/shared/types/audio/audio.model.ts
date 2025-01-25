export interface AudioInfo {
  name: string
  img: string
  preview: string
  artist: string
}

export interface TrackResp {
  tracks: Track[]
}
export interface Track {
  id: string
  name: string
  preview_url: string
  album: {
    images: Image[]
  }
  artists: Artist[]
}
interface Image {
  url: string
}
interface Artist {
  id: string
  name: string
}
