import { ReactNode } from 'react'

const Content = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col min-h-[100vh]">{children}</div>
}

export default Content
