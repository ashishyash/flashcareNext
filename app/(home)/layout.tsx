import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell, HelpCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen">
        <header className=" flex items-center h-16 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="hover:bg-transparent hover:text-current" />
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-brand-black2">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <div className="relative">
                  {" "}
                  <Bell className="h-6 w-6 text-brand-black2 cursor-pointer" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />{" "}
                </div>
                <HelpCircle className="h-6 w-6 text-brand-black2 cursor-pointer" />
                <div className="flex flex-col text-right">
                  <div className="text-sm font-medium text-brand-black1">
                    {" "}
                    Laura Gardner{" "}
                  </div>
                  <div className="text-xs font-normal text-brand-black3">
                    {" "}
                    Admin{" "}
                  </div>
                </div>

                {/* <Link href="/">
                <Button variant="ghost" size="icon" className="hover:bg-white ">
                  <LogOut className="w-5 h-5" />
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-black2 text-white font-semibold">
                    UN
                  </div>
                </Button>
                </Link> */}
               
                 
                  <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-white w-10 h-10"
                      >
                        <div className="flex items-center justify-center size-10 rounded-full bg-brand-black2 text-white font-semibold">
                          LG
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuItem 
                       className="data-[highlighted]:bg-brand-cyan1 data-[highlighted]:text-white"
                        >Profile</DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                      className="data-[highlighted]:bg-brand-cyan1 data-[highlighted]:text-white"
                      >
                         <Link href="/" className="w-full cursor-pointer">
                        Sign Out
                         </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto ">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashoardLayout;
