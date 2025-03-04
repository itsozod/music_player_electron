import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from '@renderer/shared/components/ui/dropdown-menu'
import { useTheme } from '@renderer/app/providers/theme'
import { DropdownMenuShortcut } from '@renderer/shared/components/ui/dropdown-menu'
import { tokenInstance } from '@renderer/shared/utils'
import { LogOut, User2Icon, UserPlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ProfileInfo = () => {
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()
  return (
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuSub>
          <DropdownMenuItem onClick={() => navigate('/profile')}>
            <User2Icon />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSubTrigger>
            <UserPlus />
            <span>Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        onClick={() => {
          tokenInstance.clearToken()
          navigate('/signin')
        }}
      >
        <LogOut />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

export default ProfileInfo
