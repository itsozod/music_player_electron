import { Home, Inbox, LogIn, Music, Settings } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@renderer/components/ui/sidebar'
import useSWR from 'swr'
import { Link } from 'react-router-dom'
import { Skeleton } from '@renderer/components/ui/skeleton'

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: Inbox
  },
  {
    title: 'SignIn',
    url: '/signin',
    icon: LogIn
  }
]

export function AppSidebar() {
  // const { data: profile, isLoading } = useSWR('https://api.spotify.com/v1/me')

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to={'/'}>
                <Music />
                <span className="text-[1rem]">Music Player</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full h-full">
              {/* {isLoading ? ( */}
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              {/* // ) : (
              //   <>
              //     <img
              //       width={35}
              //       height={35}
              //       src={profile?.images[1]?.url}
              //       alt="ProfileImg"
              //       className="w-[35px] rounded-[50%]"
              //     />
              //     <div className="flex flex-col">
              //       <span>{profile?.display_name}</span>
              //       <span>{profile?.email}</span>
              //     </div>
              //   </>
              // )} */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
