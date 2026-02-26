import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin } from 'lucide-react';

export interface Volunteer {
  id: string;
  name: string;
  badgeId: string;
  area: string;
  status: 'Active' | 'Off Duty' | 'On Break';
  lastCheckIn: string;
  phone: string;
}

const statusConfig = {
  Active: 'bg-safe/15 text-safe border-safe/30',
  'Off Duty': 'bg-navy-600/50 text-navy-400 border-navy-500/30',
  'On Break': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
};

const statusDot = {
  Active: 'bg-safe',
  'Off Duty': 'bg-navy-500',
  'On Break': 'bg-amber-500',
};

interface VolunteerTableProps {
  volunteers: Volunteer[];
}

type FilterStatus = 'All' | 'Active' | 'Off Duty' | 'On Break';

export default function VolunteerTable({ volunteers }: VolunteerTableProps) {
  const [filter, setFilter] = useState<FilterStatus>('All');

  const filtered = filter === 'All' ? volunteers : volunteers.filter((v) => v.status === filter);

  const counts = {
    All: volunteers.length,
    Active: volunteers.filter((v) => v.status === 'Active').length,
    'Off Duty': volunteers.filter((v) => v.status === 'Off Duty').length,
    'On Break': volunteers.filter((v) => v.status === 'On Break').length,
  };

  return (
    <div>
      <Tabs value={filter} onValueChange={(v) => setFilter(v as FilterStatus)} className="mb-4">
        <TabsList className="bg-navy-900 border border-navy-600 p-1 h-auto gap-1">
          {(['All', 'Active', 'Off Duty', 'On Break'] as FilterStatus[]).map((s) => (
            <TabsTrigger
              key={s}
              value={s}
              className="text-xs px-3 py-1.5 data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400 data-[state=active]:border data-[state=active]:border-amber-500/30 text-navy-400 rounded-md"
            >
              {s}
              <span className="ml-1.5 text-[10px] opacity-70">({counts[s]})</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <ScrollArea className="w-full">
        <div className="min-w-[600px]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-600">
                <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Volunteer</th>
                <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Badge ID</th>
                <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Area Assigned</th>
                <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Last Check-in</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((vol, idx) => (
                <tr
                  key={vol.id}
                  className={`border-b border-navy-700/50 hover:bg-navy-700/40 transition-colors ${
                    idx % 2 === 0 ? '' : 'bg-navy-800/30'
                  }`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="h-8 w-8 rounded-full bg-navy-600 border border-navy-500 flex items-center justify-center text-navy-200 text-xs font-semibold">
                          {vol.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <span className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-navy-700 ${statusDot[vol.status]}`} />
                      </div>
                      <div>
                        <div className="text-navy-100 font-medium text-sm">{vol.name}</div>
                        <div className="text-navy-400 text-xs">{vol.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono text-amber-400 text-xs">{vol.badgeId}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1 text-navy-200 text-sm">
                      <MapPin className="h-3 w-3 text-navy-400 flex-shrink-0" />
                      {vol.area}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium border ${statusConfig[vol.status]}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${statusDot[vol.status]}`} />
                      {vol.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1 text-navy-300 text-xs">
                      <Clock className="h-3 w-3 text-navy-400" />
                      {vol.lastCheckIn}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollArea>
    </div>
  );
}
