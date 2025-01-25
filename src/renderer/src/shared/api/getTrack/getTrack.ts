export const getTrack = async (id: string) => {
  const url = `${import.meta.env.VITE_BASE_URL_DEVELOPMENT_RAPID_API}tracks/?ids=${id}`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${import.meta.env.VITE_BASE_URL_DEVELOPMENT_RAPID_API_KEY}`,
      'x-rapidapi-host': `${import.meta.env.VITE_BASE_URL_DEVELOPMENT_RAPID_API_HOST}`
    }
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}
