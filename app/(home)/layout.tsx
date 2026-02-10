import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity, LogOut } from "lucide-react";

const DashoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen">
        <header className=" flex items-center h-16 bg-primary border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Activity className="w-8 h-8 text-cyan-600 mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">
                  FlashCare<span className="text-cyan-600">AI</span>
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Memorial Hospital Admin
                </span>
                <Link href="/">
                  <Button variant="ghost" size="icon">
                    <LogOut className="w-5 h-5" />
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
