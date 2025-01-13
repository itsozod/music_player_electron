import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import SWRProvider from './swr'

const Providers = () => {
  return (
    <SWRProvider>
      <RouterProvider router={router} />
    </SWRProvider>
  )
}
export default Providers
