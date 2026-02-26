import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ReactNode } from 'react';

interface KPICardProps {
  label: string;
  value: number | string;
  trend?: number; // percentage, positive = up, negative = down, 0 = stable
  icon: ReactNode;
  accentColor?: 'amber' | 'safe' | 'danger' | 'blue';
  subtitle?: string;
}

const accentMap = {
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    icon: 'text-amber-400',
    value: 'text-amber-400',
    glow: 'shadow-glow',
  },
  safe: {
    bg: 'bg-safe/10',
    border: 'border-safe/20',
    icon: 'text-safe',
    value: 'text-safe',
    glow: '',
  },
  danger: {
    bg: 'bg-danger/10',
    border: 'border-danger/20',
    icon: 'text-red-400',
    value: 'text-red-400',
    glow: 'shadow-glow-danger',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    icon: 'text-blue-400',
    value: 'text-blue-400',
    glow: '',
  },
};

export default function KPICard({ label, value, trend, icon, accentColor = 'amber', subtitle }: KPICardProps) {
  const accent = accentMap[accentColor];

  const TrendIcon = trend === undefined || trend === 0 ? Minus : trend > 0 ? TrendingUp : TrendingDown;
  const trendColor =
    trend === undefined || trend === 0
      ? 'text-navy-400'
      : trend > 0
      ? 'text-safe'
      : 'text-red-400';

  return (
    <div className={`bg-navy-700 border ${accent.border} rounded-xl p-5 shadow-card hover:shadow-lg transition-shadow duration-200`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2.5 rounded-lg ${accent.bg} border ${accent.border}`}>
          <div className={accent.icon}>{icon}</div>
        </div>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trendColor}`}>
            <TrendIcon className="h-3.5 w-3.5" />
            <span>{trend === 0 ? 'Stable' : `${Math.abs(trend)}%`}</span>
          </div>
        )}
      </div>
      <div className={`text-3xl font-display font-bold ${accent.value} mb-1`}>{value}</div>
      <div className="text-navy-200 text-sm font-medium">{label}</div>
      {subtitle && <div className="text-navy-400 text-xs mt-0.5">{subtitle}</div>}
    </div>
  );
}
