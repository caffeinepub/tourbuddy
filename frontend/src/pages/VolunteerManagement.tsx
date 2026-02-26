import { Users, UserCheck, UserX, Coffee } from 'lucide-react';
import VolunteerTable from '../components/VolunteerTable';
import { mockVolunteers } from '../lib/mockData';

export default function VolunteerManagement() {
  const activeCount = mockVolunteers.filter((v) => v.status === 'Active').length;
  const offDutyCount = mockVolunteers.filter((v) => v.status === 'Off Duty').length;
  const onBreakCount = mockVolunteers.filter((v) => v.status === 'On Break').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-50 flex items-center gap-2">
          <Users className="h-6 w-6 text-amber-400" />
          Volunteer Management
        </h1>
        <p className="text-navy-400 text-sm mt-1">Monitor volunteer deployment, status, and area assignments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-navy-700 border border-navy-600 rounded-xl p-4 shadow-card">
          <div className="text-3xl font-display font-bold text-navy-100">{mockVolunteers.length}</div>
          <div className="flex items-center gap-1.5 mt-1">
            <Users className="h-3.5 w-3.5 text-navy-400" />
            <span className="text-navy-300 text-sm">Total Volunteers</span>
          </div>
        </div>
        <div className="bg-navy-700 border border-safe/25 rounded-xl p-4 shadow-card">
          <div className="text-3xl font-display font-bold text-safe">{activeCount}</div>
          <div className="flex items-center gap-1.5 mt-1">
            <UserCheck className="h-3.5 w-3.5 text-safe" />
            <span className="text-navy-300 text-sm">On Duty</span>
          </div>
        </div>
        <div className="bg-navy-700 border border-amber-500/25 rounded-xl p-4 shadow-card">
          <div className="text-3xl font-display font-bold text-amber-400">{onBreakCount}</div>
          <div className="flex items-center gap-1.5 mt-1">
            <Coffee className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-navy-300 text-sm">On Break</span>
          </div>
        </div>
        <div className="bg-navy-700 border border-navy-600 rounded-xl p-4 shadow-card">
          <div className="text-3xl font-display font-bold text-navy-400">{offDutyCount}</div>
          <div className="flex items-center gap-1.5 mt-1">
            <UserX className="h-3.5 w-3.5 text-navy-500" />
            <span className="text-navy-300 text-sm">Off Duty</span>
          </div>
        </div>
      </div>

      {/* Volunteer Table */}
      <div className="bg-navy-700 border border-navy-600 rounded-xl shadow-card">
        <div className="px-5 py-4 border-b border-navy-600">
          <h2 className="font-display font-semibold text-navy-100 text-base">Volunteer Roster</h2>
          <p className="text-navy-400 text-xs mt-0.5">Filter by status using the tabs below</p>
        </div>
        <div className="p-4">
          <VolunteerTable volunteers={mockVolunteers} />
        </div>
      </div>
    </div>
  );
}
