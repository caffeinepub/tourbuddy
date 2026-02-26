import { useState } from 'react';
import { MapPin, Clock, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

export interface GeoAlert {
  id: string;
  zone: string;
  type: string;
  severity: 'warning' | 'critical';
  triggeredTime: string;
  description: string;
}

interface GeoFenceAlertsProps {
  initialAlerts: GeoAlert[];
}

const typeIcons: Record<string, React.ReactNode> = {
  Overcrowding: <AlertTriangle className="h-4 w-4" />,
  'Unauthorized Entry': <Zap className="h-4 w-4" />,
  'Suspicious Activity': <AlertTriangle className="h-4 w-4" />,
  'Perimeter Breach': <Zap className="h-4 w-4" />,
  'Crowd Surge': <AlertTriangle className="h-4 w-4" />,
};

export default function GeoFenceAlerts({ initialAlerts }: GeoFenceAlertsProps) {
  const [alerts, setAlerts] = useState<GeoAlert[]>(initialAlerts);

  const acknowledge = (id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  if (alerts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle className="h-10 w-10 text-safe mb-3" />
        <p className="text-navy-200 font-medium">All Clear</p>
        <p className="text-navy-400 text-sm mt-1">No active geo-fence alerts</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`rounded-lg border p-4 transition-all ${
            alert.severity === 'critical'
              ? 'bg-danger/8 border-danger/30'
              : 'bg-amber-500/8 border-amber-500/25'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              <div
                className={`mt-0.5 flex-shrink-0 p-1.5 rounded-md ${
                  alert.severity === 'critical'
                    ? 'bg-danger/15 text-red-400'
                    : 'bg-amber-500/15 text-amber-400'
                }`}
              >
                {typeIcons[alert.type] || <AlertTriangle className="h-4 w-4" />}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-navy-100 font-medium text-sm">{alert.zone}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                      alert.severity === 'critical'
                        ? 'bg-danger/20 text-red-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}
                  >
                    {alert.type}
                  </span>
                </div>
                <p className="text-navy-300 text-xs mt-0.5">{alert.description}</p>
                <div className="flex items-center gap-1 mt-1.5 text-navy-400 text-xs">
                  <Clock className="h-3 w-3" />
                  <span>{alert.triggeredTime}</span>
                  <MapPin className="h-3 w-3 ml-2" />
                  <span>{alert.zone}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => acknowledge(alert.id)}
              className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                alert.severity === 'critical'
                  ? 'bg-danger/20 text-red-300 hover:bg-danger/30 border border-danger/30'
                  : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30'
              }`}
            >
              Acknowledge
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
