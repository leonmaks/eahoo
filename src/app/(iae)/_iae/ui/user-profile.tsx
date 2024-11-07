"use client"
import Link from "next/link"
import { LogOutIcon, UserIcon } from "lucide-react"

import { Button } from "@/shared/shadcn-ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/shadcn-ui/dropdown-menu"
import { Skeleton } from "@/shared/shadcn-ui/skeleton"

// import { ProfileAvatar, getProfileDisplayName } from "@/entities/user/profile"

import { SignInButton, useAppSession, useSignOut } from "@/features/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/shadcn-ui/avatar"

export function UserProfile() {
  const session = useAppSession()
  const { signOut, isPending: isLoadingSignOut } = useSignOut()

  if (session.status === "loading") {
    return <Skeleton className="w-8 h-8 rounded-full" />
  }

  if (session.status === "unauthenticated") {
    return <SignInButton />
  }

  const user = session?.data?.user

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="self-center w-8 h-8 p-px rounded-full"
        >
          {/* <ProfileAvatar profile={user} className="w-8 h-8" /> */}
          <Avatar className="w-10 h-10">
            <AvatarImage />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-2 ">
        <DropdownMenuLabel>
          <p>My Account</p>
          <p className="overflow-hidden text-xs text-muted-foreground text-ellipsis">
            {user ?
              // getProfileDisplayName(user) :
              "Username" :
              undefined}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href={`/profile/1`}
            // href={`/profile/${user?.id}`}
            >
              <UserIcon className="w-4 h-4 mr-2" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            disabled={isLoadingSignOut}
            onClick={() => signOut()}
          >
            <LogOutIcon className="w-4 h-4 mr-2" />
            <span>Log Out</span>
          </DropdownMenuItem>

        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
