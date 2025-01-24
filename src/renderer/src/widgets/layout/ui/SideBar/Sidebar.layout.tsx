import { Home, Inbox, Music } from 'lucide-react'

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

import { DropdownMenu, DropdownMenuTrigger } from '@renderer/components/ui/dropdown-menu'
import useSWR from 'swr'
import { Link } from 'react-router-dom'
import { ProfileImg, ProfileInfo } from '@renderer/features'

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
  }
]

export function AppSidebar() {
  const { data: profile, isLoading } = useSWR('me')
  const { data: topTracks } = useSWR('me/top/tracks?time_range=long_term&limit=5')

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full h-full">
                  <ProfileImg isLoading={isLoading} profile={profile} />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </DropdownMenuTrigger>
            <ProfileInfo />
          </DropdownMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
