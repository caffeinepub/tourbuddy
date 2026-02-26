import { ReactNode } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from './AppSidebar';
import TopNavigation from './TopNavigation';
import Footer from './Footer';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-navy-800">
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 min-w-0 bg-navy-800">
          <TopNavigation activeIncidents={12} />
          <main className="flex-1 overflow-auto p-4 lg:p-6 scrollbar-thin">
            {children}
          </main>
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
