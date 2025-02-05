import { Music } from 'lucide-react'

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
} from '@renderer/shared/components/ui/sidebar'

import { DropdownMenu, DropdownMenuTrigger } from '@renderer/shared/components/ui/dropdown-menu'
import useSWR from 'swr'
import { Link, useLocation } from 'react-router-dom'
import { ProfileImg, ProfileInfo } from '@renderer/features'
import { items } from '@renderer/shared/constants/sidebar.items'

export function AppSidebar() {
  const { data: profile, isLoading } = useSWR('me')
  const location = useLocation()

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:text-[hsl(var(--primary))]">
              <Link to={'/'}>
                <Music />
                <span className="text-[1.1rem]">Music Player</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[1rem]">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`hover:text-[hsl(var(--primary))] ${item.url === location.pathname ? 'text-[hsl(var(--primary))]' : 'text-black dark:text-white'}`}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span className="text-[1.1rem]">{item.title}</span>
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
