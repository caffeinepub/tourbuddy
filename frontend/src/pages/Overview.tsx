import { AlertTriangle, MapPin, Users, Map, TrendingUp } from 'lucide-react';
import KPICard from '../components/KPICard';
import IncidentsTable from '../components/IncidentsTable';
import GeoFenceAlerts from '../components/GeoFenceAlerts';
import { mockIncidents, mockGeoAlerts } from '../lib/mockData';

export default function Overview() {
  const recentIncidents = mockIncidents.slice(0, 6);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-50">Command Overview</h1>
        <p className="text-navy-400 text-sm mt-1">Real-time situational awareness · Feb 25, 2026</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Active Incidents"
          value={12}
          trend={8}
          icon={<AlertTriangle className="h-5 w-5" />}
          accentColor="danger"
          subtitle="3 critical"
        />
        <KPICard
          label="Geo-fence Alerts"
          value={5}
          trend={-2}
          icon={<MapPin className="h-5 w-5" />}
          accentColor="amber"
          subtitle="2 critical"
        />
        <KPICard
          label="Volunteers On Duty"
          value={34}
          trend={12}
          icon={<Users className="h-5 w-5" />}
          accentColor="safe"
          subtitle="5 on break"
        />
        <KPICard
          label="Areas Monitored"
          value={18}
          trend={0}
          icon={<Map className="h-5 w-5" />}
          accentColor="blue"
          subtitle="All zones active"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Incidents Table */}
        <div className="xl:col-span-2 bg-navy-700 border border-navy-600 rounded-xl shadow-card">
          <div className="flex items-center justify-between px-5 py-4 border-b border-navy-600">
            <div>
              <h2 className="font-display font-semibold text-navy-100 text-base">Recent Incidents</h2>
              <p className="text-navy-400 text-xs mt-0.5">Last 24 hours · {recentIncidents.length} shown</p>
            </div>
            <a
              href="/incidents"
              className="text-amber-400 hover:text-amber-300 text-xs font-medium flex items-center gap-1 transition-colors"
            >
              View all
              <TrendingUp className="h-3 w-3" />
            </a>
          </div>
          <div className="p-2">
            <IncidentsTable incidents={recentIncidents} compact />
          </div>
        </div>

        {/* Geo-fence Alerts Panel */}
        <div className="bg-navy-700 border border-navy-600 rounded-xl shadow-card">
          <div className="flex items-center justify-between px-5 py-4 border-b border-navy-600">
            <div>
              <h2 className="font-display font-semibold text-navy-100 text-base">Geo-fence Alerts</h2>
              <p className="text-navy-400 text-xs mt-0.5">{mockGeoAlerts.length} active alerts</p>
            </div>
            <span className="h-2 w-2 rounded-full bg-danger animate-pulse-slow" />
          </div>
          <div className="p-4">
            <GeoFenceAlerts initialAlerts={mockGeoAlerts.slice(0, 3)} />
          </div>
        </div>
      </div>
    </div>
  );
}
