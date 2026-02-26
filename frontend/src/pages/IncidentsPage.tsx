import { useState } from 'react';
import { AlertTriangle, Filter } from 'lucide-react';
import IncidentsTable from '../components/IncidentsTable';
import { mockIncidents } from '../lib/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function IncidentsPage() {
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filtered = mockIncidents.filter((inc) => {
    const matchSeverity = severityFilter === 'all' || inc.severity === severityFilter;
    const matchStatus = statusFilter === 'all' || inc.status === statusFilter;
    return matchSeverity && matchStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-navy-50 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-amber-400" />
            Incident Management
          </h1>
          <p className="text-navy-400 text-sm mt-1">Track and manage all reported incidents across tourist zones</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-navy-400" />
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-36 bg-navy-700 border-navy-600 text-navy-200 text-sm h-9">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent className="bg-navy-800 border-navy-600 text-navy-200">
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="Critical">Critical</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-36 bg-navy-700 border-navy-600 text-navy-200 text-sm h-9">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-navy-800 border-navy-600 text-navy-200">
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Total', value: mockIncidents.length, color: 'text-navy-100' },
          { label: 'Open', value: mockIncidents.filter(i => i.status === 'Open').length, color: 'text-red-400' },
          { label: 'In Progress', value: mockIncidents.filter(i => i.status === 'In Progress').length, color: 'text-amber-400' },
          { label: 'Resolved', value: mockIncidents.filter(i => i.status === 'Resolved').length, color: 'text-safe' },
        ].map((stat) => (
          <div key={stat.label} className="bg-navy-700 border border-navy-600 rounded-lg px-4 py-3 text-center">
            <div className={`text-2xl font-display font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-navy-400 text-xs mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-navy-700 border border-navy-600 rounded-xl shadow-card">
        <div className="px-5 py-4 border-b border-navy-600">
          <h2 className="font-display font-semibold text-navy-100 text-base">
            All Incidents
            <span className="ml-2 text-navy-400 text-sm font-normal">({filtered.length} results)</span>
          </h2>
        </div>
        <div className="p-2">
          <IncidentsTable incidents={filtered} />
        </div>
      </div>
    </div>
  );
}
