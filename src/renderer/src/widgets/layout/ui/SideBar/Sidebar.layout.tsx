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
import { Link, useLocation, useParams } from 'react-router-dom'
import { ProfileImg } from '@renderer/features'
import { pathData } from '@renderer/shared/constants/sidebar.items'
import ProfileInfo from '@renderer/pages/Profile/ui/ProfileInfo/ProfileInfo'
const { home, playlists } = pathData

export function AppSidebar() {
  const { data: profile, isLoading } = useSWR('me')
  const location = useLocation()
  const { id } = useParams()

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
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
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`${home.path === location.pathname ? 'text-[hsl(var(--primary))]' : 'text-black dark:text-white'} hover:text-[hsl(var(--primary))]`}
                >
                  <Link to={home.path}>
                    <home.icon />
                    <span className="text-[1.1rem]">{home.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`${playlists.path === location.pathname || location.pathname.includes(id as string) ? 'text-[hsl(var(--primary))]' : 'text-black dark:text-white'} hover:text-[hsl(var(--primary))]`}
                >
                  <Link to={playlists.path}>
                    <playlists.icon />
                    <span className="text-[1.1rem]">{playlists.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
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
