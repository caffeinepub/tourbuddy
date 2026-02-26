import { MapPin, Shield } from 'lucide-react';
import GeoFenceAlerts from '../components/GeoFenceAlerts';
import { mockGeoAlerts } from '../lib/mockData';

export default function GeoFenceAlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-50 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-amber-400" />
          Geo-fence Alerts
        </h1>
        <p className="text-navy-400 text-sm mt-1">Monitor and acknowledge active perimeter and zone alerts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-navy-700 border border-danger/30 rounded-xl p-4 shadow-card">
          <div className="text-3xl font-display font-bold text-red-400">
            {mockGeoAlerts.filter(a => a.severity === 'critical').length}
          </div>
          <div className="text-navy-200 text-sm font-medium mt-1">Critical Alerts</div>
          <div className="text-navy-400 text-xs mt-0.5">Immediate action required</div>
        </div>
        <div className="bg-navy-700 border border-amber-500/30 rounded-xl p-4 shadow-card">
          <div className="text-3xl font-display font-bold text-amber-400">
            {mockGeoAlerts.filter(a => a.severity === 'warning').length}
          </div>
          <div className="text-navy-200 text-sm font-medium mt-1">Warning Alerts</div>
          <div className="text-navy-400 text-xs mt-0.5">Monitor closely</div>
        </div>
        <div className="bg-navy-700 border border-navy-600 rounded-xl p-4 shadow-card col-span-2 sm:col-span-1">
          <div className="text-3xl font-display font-bold text-navy-100">
            {mockGeoAlerts.length}
          </div>
          <div className="text-navy-200 text-sm font-medium mt-1">Total Active</div>
          <div className="text-navy-400 text-xs mt-0.5">Across all zones</div>
        </div>
      </div>

      {/* Alerts Panel */}
      <div className="bg-navy-700 border border-navy-600 rounded-xl shadow-card">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-navy-600">
          <Shield className="h-4 w-4 text-amber-400" />
          <h2 className="font-display font-semibold text-navy-100 text-base">Active Alerts</h2>
          <span className="ml-auto text-navy-400 text-xs">Click Acknowledge to dismiss</span>
        </div>
        <div className="p-4">
          <GeoFenceAlerts initialAlerts={mockGeoAlerts} />
        </div>
      </div>
    </div>
  );
}
