import { Button } from '@renderer/components/ui/button'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <Button className="bg-[green]">
          <Link to={'/'}>Login with Spotify</Link>
        </Button>
      </div>
    </>
  )
}

export default SignIn
