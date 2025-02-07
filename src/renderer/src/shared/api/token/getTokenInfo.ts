const client_id = 'd14b3fd42bc24d9eb288ee6b17848d83'
const client_secret = 'b726bbc353bb4e2bb96cbd2df017347d'

export const getTokenInfo = async (url: string, { arg = {} }) => {
  const authString = btoa(`${client_id}:${client_secret}`) // Base64 encoding for browser
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${authString}`
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      ...arg,
      redirect_uri: 'http://localhost:3000/signin'
    })
  })

  if (!response.ok) {
    throw new Error('Failed to fetch token')
  }

  const data = await response.json()
  return data
}
