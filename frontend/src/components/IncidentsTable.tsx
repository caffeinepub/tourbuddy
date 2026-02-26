import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Eye } from 'lucide-react';

export interface Incident {
  id: string;
  location: string;
  type: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Open' | 'In Progress' | 'Resolved';
  reportedTime: string;
}

const severityConfig = {
  Low: 'bg-safe/15 text-safe border-safe/30',
  Medium: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  High: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  Critical: 'bg-danger/15 text-red-400 border-danger/30',
};

const statusConfig = {
  Open: 'bg-red-500/15 text-red-400 border-red-500/30',
  'In Progress': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Resolved: 'bg-safe/15 text-safe border-safe/30',
};

interface IncidentsTableProps {
  incidents: Incident[];
  compact?: boolean;
}

export default function IncidentsTable({ incidents, compact = false }: IncidentsTableProps) {
  return (
    <ScrollArea className="w-full">
      <div className="min-w-[640px]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-navy-600">
              <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">ID</th>
              <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Location</th>
              <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Type</th>
              <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Severity</th>
              <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Reported</th>
              {!compact && (
                <th className="text-left py-3 px-4 text-navy-400 font-medium text-xs uppercase tracking-wider">Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident, idx) => (
              <tr
                key={incident.id}
                className={`border-b border-navy-700/50 hover:bg-navy-700/40 transition-colors ${
                  idx % 2 === 0 ? '' : 'bg-navy-800/30'
                }`}
              >
                <td className="py-3 px-4 font-mono text-amber-400 text-xs font-medium">{incident.id}</td>
                <td className="py-3 px-4 text-navy-100">{incident.location}</td>
                <td className="py-3 px-4 text-navy-200">{incident.type}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${severityConfig[incident.severity]}`}>
                    {incident.severity}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${statusConfig[incident.status]}`}>
                    {incident.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-navy-300 text-xs">{incident.reportedTime}</td>
                {!compact && (
                  <td className="py-3 px-4">
                    <button className="p-1.5 rounded-md text-navy-400 hover:text-amber-400 hover:bg-navy-600 transition-colors">
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollArea>
  );
}
