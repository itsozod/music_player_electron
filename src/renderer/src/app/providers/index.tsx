import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import SWRProvider from './swr'
import { ThemeProvider } from './theme'
import { Toaster } from 'react-hot-toast'

const Providers = () => {
  return (
    <ThemeProvider>
      <Toaster />
      <SWRProvider>
        <RouterProvider router={router} />
      </SWRProvider>
    </ThemeProvider>
  )
}
export default Providers
