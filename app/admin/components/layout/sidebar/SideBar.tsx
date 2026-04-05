"use client"

import * as React from "react"
import {
  Car,
  LayoutDashboard,
  BarChart,
  Receipt,
  Inbox,
  Calendar,
  Settings,
  HelpCircle,
  Moon,
  LogOut,
} from "lucide-react"
import { signOut } from "next-auth/react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const mainMenuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Car Rent", url: "/admin/car-rent", icon: Car },
  { title: "Insight", url: "/admin/insight", icon: BarChart },
  { title: "Reimburse", url: "/admin/reimburse", icon: Receipt },
  { title: "Inbox", url: "/admin/inbox", icon: Inbox },
  { title: "Calendar", url: "/admin/calendar", icon: Calendar },
]

const preferencesItems = [
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Help & Center", url: "/admin/help", icon: HelpCircle },
]

export function AppSidebar() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold tracking-tight text-muted-foreground pt-4 pb-2">
            MAIN MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-muted-foreground hover:text-primary transition-colors">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold tracking-tight text-muted-foreground pt-4 pb-2">
            PREFERENCES
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {preferencesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-muted-foreground hover:text-primary transition-colors">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Moon />
                  <span>Dark Mode</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => signOut()} className="text-muted-foreground hover:text-primary transition-colors">
              <LogOut />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full flex-1 overflow-hidden flex flex-col bg-background text-foreground">
        <div className="p-4 flex items-center mb-4">
          <SidebarTrigger />
        </div>
        <div className="flex-1 w-full p-4 p-md-8">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
