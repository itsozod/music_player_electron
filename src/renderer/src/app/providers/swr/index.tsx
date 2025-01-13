import { ReactNode } from 'react'
// import toast from 'react-hot-toast'
import { SWRConfig } from 'swr'
import { fetcher } from './fetcher'

const SWRProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
        // onError(err) {
        //   toast.error(`Error while fetching, ${err}`, {
        //     position: 'top-right'
        //   })
        // },
        // onSuccess(data) {
        //   if (!data) return

        //   toast.success(data?.message, { position: 'top-right' })
        // },
        revalidateOnReconnect: false,
        revalidateOnFocus: false,
        dedupingInterval: 1000000,
        shouldRetryOnError: false,
        keepPreviousData: true
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SWRProvider
