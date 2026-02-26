import { Link, useRouterState } from '@tanstack/react-router';
import {
  LayoutDashboard,
  AlertTriangle,
  MapPin,
  Map,
  Users,
  Shield,
} from 'lucide-react';
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
} from '@/components/ui/sidebar';

const navItems = [
  { label: 'Overview', path: '/', icon: LayoutDashboard },
  { label: 'Incidents', path: '/incidents', icon: AlertTriangle },
  { label: 'Geo-fence Alerts', path: '/geofence-alerts', icon: MapPin },
  { label: 'Risk Heatmap', path: '/risk-heatmap', icon: Map },
  { label: 'Volunteers', path: '/volunteers', icon: Users },
];

export default function AppSidebar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <Sidebar className="border-r border-navy-600 bg-navy-950">
      <SidebarHeader className="px-4 py-5 border-b border-navy-700">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-amber-500" />
          <span className="font-display font-semibold text-navy-100 text-sm uppercase tracking-wider">
            Navigation
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-navy-400 text-xs uppercase tracking-widest px-4 mb-1">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive =
                  item.path === '/'
                    ? currentPath === '/'
                    : currentPath.startsWith(item.path);
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`
                        mx-2 rounded-lg transition-all duration-150
                        ${isActive
                          ? 'bg-amber-500/15 text-amber-400 border border-amber-500/25 font-medium'
                          : 'text-navy-300 hover:bg-navy-700 hover:text-navy-100'
                        }
                      `}
                    >
                      <Link to={item.path} className="flex items-center gap-3 px-3 py-2.5">
                        <Icon className={`h-4.5 w-4.5 flex-shrink-0 ${isActive ? 'text-amber-400' : 'text-navy-400'}`} />
                        <span className="text-sm">{item.label}</span>
                        {isActive && (
                          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-amber-400" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-navy-700 px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-safe animate-pulse-slow" />
          <span className="text-navy-400 text-xs">System Online</span>
        </div>
        <p className="text-navy-500 text-[10px] mt-1">v2.4.1 · ICP Network</p>
      </SidebarFooter>
    </Sidebar>
  );
}
