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
import { useEffect } from 'react'

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

  useEffect(() => {
    const getTrack = async () => {
      const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=7EiZI6JVHllARrX9PUvAdX'
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'cc34b8b11amsh308e357e7fd7e7bp1b226fjsn941b7b0ae69c',
          'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
      }

      try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    }
    getTrack()
  }, [])

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
