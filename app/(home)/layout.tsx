import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell, HelpCircle, LogOut } from "lucide-react";

const DashoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen">
        <header className=" flex items-center h-16 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Wednesday, February 11, 2026
                </span>
                <div className="relative">
                  {" "}
                  <Bell className="h-6 w-6 text-gray-700" />{" "}
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />{" "}
                </div>
                <HelpCircle className="h-6 w-6 text-gray-700" />
                <div className="flex flex-col text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {" "}
                    User Name{" "}
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {" "}
                    Admin{" "}
                  </div>
                </div>

                <Link href="/">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white w-full"
                  >
                    {/* <LogOut className="w-5 h-5" /> */}
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-700 text-white font-semibold">
                      UN
                    </div>
                  </Button>
                </Link>
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
