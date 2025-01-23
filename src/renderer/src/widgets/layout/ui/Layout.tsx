import { SidebarProvider, SidebarTrigger } from '@renderer/components/ui/sidebar'
import { AppSidebar } from './SideBar/Sidebar.layout'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <div className="flex flex-col min-h-[100vh]">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}

export default Layout
