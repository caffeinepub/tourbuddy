import { Map, Info } from 'lucide-react';
import RiskHeatmap from '../components/RiskHeatmap';

export default function RiskHeatmapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-50 flex items-center gap-2">
          <Map className="h-6 w-6 text-amber-400" />
          Risk Heatmap
        </h1>
        <p className="text-navy-400 text-sm mt-1">Visual overview of tourist zone safety levels and incident density</p>
      </div>

      {/* Info Banner */}
      <div className="flex items-start gap-3 bg-amber-500/8 border border-amber-500/20 rounded-lg px-4 py-3">
        <Info className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <p className="text-navy-200 text-sm">
          Zone colors reflect current risk assessment based on incident reports, crowd density, and historical data.
          Hover over zones to view detailed statistics. Badge numbers indicate active incidents.
        </p>
      </div>

      {/* Heatmap */}
      <div className="bg-navy-700 border border-navy-600 rounded-xl shadow-card">
        <div className="px-5 py-4 border-b border-navy-600">
          <h2 className="font-display font-semibold text-navy-100 text-base">Tourist Zone Risk Map</h2>
          <p className="text-navy-400 text-xs mt-0.5">8 monitored zones · Updated 14:45 today</p>
        </div>
        <div className="p-5">
          <RiskHeatmap />
        </div>
      </div>

      {/* Zone Summary Table */}
      <div className="bg-navy-700 border border-navy-600 rounded-xl shadow-card">
        <div className="px-5 py-4 border-b border-navy-600">
          <h2 className="font-display font-semibold text-navy-100 text-base">Zone Summary</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: 'Downtown Core', risk: 'danger', incidents: 8, visitors: '12,400' },
              { name: 'Harbor District', risk: 'caution', incidents: 3, visitors: '8,200' },
              { name: 'Old Town', risk: 'safe', incidents: 1, visitors: '5,600' },
              { name: 'Beach Area', risk: 'caution', incidents: 4, visitors: '15,800' },
              { name: 'Market Square', risk: 'danger', incidents: 6, visitors: '9,100' },
              { name: 'Historic Quarter', risk: 'safe', incidents: 0, visitors: '3,200' },
              { name: 'Waterfront', risk: 'caution', incidents: 2, visitors: '6,700' },
              { name: 'Cultural District', risk: 'safe', incidents: 1, visitors: '4,300' },
            ].map((zone) => (
              <div
                key={zone.name}
                className={`rounded-lg border p-3 ${
                  zone.risk === 'danger'
                    ? 'bg-danger/8 border-danger/25'
                    : zone.risk === 'caution'
                    ? 'bg-amber-500/8 border-amber-500/20'
                    : 'bg-safe/8 border-safe/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-navy-100 text-sm font-medium">{zone.name}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded font-medium capitalize ${
                      zone.risk === 'danger'
                        ? 'bg-danger/20 text-red-400'
                        : zone.risk === 'caution'
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-safe/20 text-safe'
                    }`}
                  >
                    {zone.risk === 'danger' ? 'High Risk' : zone.risk === 'caution' ? 'Caution' : 'Safe'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-navy-400">
                  <span>{zone.incidents} incident{zone.incidents !== 1 ? 's' : ''}</span>
                  <span>{zone.visitors} visitors</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
