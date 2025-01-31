import { SidebarProvider, SidebarTrigger } from '@renderer/shared/components/ui/sidebar'
import { AppSidebar } from './SideBar/Sidebar.layout'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer.layout'

const Layout = () => {
  return (
    <>
      <SidebarProvider>
        <div className="w-full flex">
          <AppSidebar />
          <div className="w-full">
            <SidebarTrigger />
            <div className="flex flex-col min-h-[100vh]">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </>
  )
}

export default Layout
