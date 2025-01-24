import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import SWRProvider from './swr'
import { ThemeProvider } from './theme/ThemeProvider'

const Providers = () => {
  return (
    <ThemeProvider>
      <SWRProvider>
        <RouterProvider router={router} />
      </SWRProvider>
    </ThemeProvider>
  )
}
export default Providers
