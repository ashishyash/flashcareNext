"use client"

import { Home, Search, GitBranch, FileCheck, FileText, BarChart3, LogOut} from "lucide-react"
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
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Nurse Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Deployment Pipeline",
    url: "/deployment",
    icon: GitBranch,
  },
  {
    title: "Credentialing Queue",
    url: "/credentialing",
    icon: FileCheck,
  },
  {
    title: "Contract Generation",
    url: "/contracts",
    icon: FileText,
  },
  {
    title: "Analytics/Reporting",
    url: "/analytics",
    icon: BarChart3,
  },
]

export function AppSidebar() {
  
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="gap-0">
        <div className="flex items-center justify-between gap-2  py-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="group-data-[collapsible=icon]:text-xs">
                <Image
                  width={24}
                  height={24}
                  alt="sidebar icon"
                  src={"/assets/icon/sidebar-header-icon.svg"}
                />
              </span>
            </div>
            <h3 className=" text-2xl text-white group-data-[collapsible=icon]:hidden">
              FlashCare AI
            </h3>
          </div>
        </div>
        <p className="text-sm group-data-[collapsible=icon]:hidden text-brand-green1">
          Crisis Management Platform
        </p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="py-6">
                      <item.icon className="w-5 h-5" />
                      <span className="text-base">{item.title}</span>
                    </a>
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
            <SidebarMenuButton>
              <LogOut />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}