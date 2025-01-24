export const getTrack = async (id: string) => {
  const url = `${import.meta.env.VITE_BASE_URL_DEVELOPMENT_RAPID_API}tracks/?ids=${id}`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'cc34b8b11amsh308e357e7fd7e7bp1b226fjsn941b7b0ae69c',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    const preview = result?.tracks?.map((track) => track?.preview_url)
    return preview
  } catch (error) {
    console.error(error)
  }
}
