import { Bell, Shield, ChevronDown, User, LogOut, Settings } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface TopNavigationProps {
  activeIncidents: number;
}

export default function TopNavigation({ activeIncidents }: TopNavigationProps) {
  const [notifOpen, setNotifOpen] = useState(false);

  const alertStatus = activeIncidents === 0 ? 'clear' : activeIncidents <= 3 ? 'warning' : 'critical';

  return (
    <header className="h-16 bg-navy-900 border-b border-navy-600 flex items-center justify-between px-4 lg:px-6 z-30 sticky top-0">
      {/* Left: Sidebar trigger + Logo */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-navy-200 hover:text-amber-500 hover:bg-navy-700 transition-colors" />
        <div className="flex items-center gap-2.5">
          <img
            src="/assets/generated/tourbuddy-logo.dim_256x256.png"
            alt="TourBuddy Logo"
            className="h-8 w-8 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-amber-500 text-lg tracking-tight">TourBuddy</span>
            <span className="text-navy-300 text-[10px] uppercase tracking-widest font-medium">Safety Command</span>
          </div>
        </div>
      </div>

      {/* Center: Global Alert Status */}
      <div className="hidden md:flex items-center gap-2">
        {alertStatus === 'clear' && (
          <div className="flex items-center gap-2 bg-safe/10 border border-safe/30 rounded-full px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-safe animate-pulse-slow" />
            <span className="text-safe text-sm font-medium">All Clear</span>
          </div>
        )}
        {alertStatus === 'warning' && (
          <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse-slow" />
            <span className="text-amber-400 text-sm font-medium">{activeIncidents} Active Incidents</span>
          </div>
        )}
        {alertStatus === 'critical' && (
          <div className="flex items-center gap-2 bg-danger/10 border border-danger/30 rounded-full px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-danger animate-pulse-slow" />
            <span className="text-red-400 text-sm font-medium">{activeIncidents} Critical Incidents</span>
          </div>
        )}
      </div>

      {/* Right: Notifications + User */}
      <div className="flex items-center gap-2">
        {/* Notification Bell */}
        <button
          onClick={() => setNotifOpen(!notifOpen)}
          className="relative p-2 rounded-lg text-navy-300 hover:text-amber-400 hover:bg-navy-700 transition-colors"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500" />
        </button>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg hover:bg-navy-700 transition-colors group">
              <div className="h-8 w-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Shield className="h-4 w-4 text-amber-400" />
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-navy-100 text-sm font-medium">Cmdr. Rivera</span>
                <span className="text-navy-400 text-xs">Tourism Authority</span>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-navy-400 group-hover:text-navy-200 transition-colors" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-navy-800 border-navy-600 text-navy-100">
            <DropdownMenuItem className="hover:bg-navy-700 cursor-pointer gap-2">
              <User className="h-4 w-4 text-navy-400" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-navy-700 cursor-pointer gap-2">
              <Settings className="h-4 w-4 text-navy-400" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-navy-600" />
            <DropdownMenuItem className="hover:bg-navy-700 cursor-pointer gap-2 text-red-400">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
