import { useState } from 'react';

interface Zone {
  id: string;
  name: string;
  risk: 'safe' | 'caution' | 'danger';
  incidents: number;
  visitors: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rx?: number;
}

const zones: Zone[] = [
  { id: 'z1', name: 'Downtown Core', risk: 'danger', incidents: 8, visitors: '12,400', x: 180, y: 80, width: 140, height: 100, rx: 8 },
  { id: 'z2', name: 'Harbor District', risk: 'caution', incidents: 3, visitors: '8,200', x: 340, y: 60, width: 120, height: 90, rx: 8 },
  { id: 'z3', name: 'Old Town', risk: 'safe', incidents: 1, visitors: '5,600', x: 60, y: 180, width: 110, height: 90, rx: 8 },
  { id: 'z4', name: 'Beach Area', risk: 'caution', incidents: 4, visitors: '15,800', x: 340, y: 170, width: 130, height: 80, rx: 8 },
  { id: 'z5', name: 'Market Square', risk: 'danger', incidents: 6, visitors: '9,100', x: 180, y: 200, width: 140, height: 80, rx: 8 },
  { id: 'z6', name: 'Historic Quarter', risk: 'safe', incidents: 0, visitors: '3,200', x: 60, y: 80, width: 100, height: 80, rx: 8 },
  { id: 'z7', name: 'Waterfront', risk: 'caution', incidents: 2, visitors: '6,700', x: 480, y: 120, width: 100, height: 100, rx: 8 },
  { id: 'z8', name: 'Cultural District', risk: 'safe', incidents: 1, visitors: '4,300', x: 480, y: 240, width: 100, height: 80, rx: 8 },
];

const riskColors = {
  safe: { fill: 'rgba(100,200,120,0.18)', stroke: 'rgba(100,200,120,0.6)', text: '#6dc87a', label: 'Safe' },
  caution: { fill: 'rgba(200,160,50,0.18)', stroke: 'rgba(200,160,50,0.6)', text: '#c8a032', label: 'Caution' },
  danger: { fill: 'rgba(200,60,50,0.18)', stroke: 'rgba(200,60,50,0.6)', text: '#c83c32', label: 'High Risk' },
};

export default function RiskHeatmap() {
  const [hoveredZone, setHoveredZone] = useState<Zone | null>(null);

  return (
    <div className="relative">
      {/* Legend */}
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        {Object.entries(riskColors).map(([key, val]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-sm border"
              style={{ backgroundColor: val.fill, borderColor: val.stroke }}
            />
            <span className="text-navy-300 text-xs">{val.label}</span>
          </div>
        ))}
        <div className="ml-auto text-navy-400 text-xs">Hover zones for details</div>
      </div>

      {/* SVG Map */}
      <div className="relative bg-navy-900 rounded-xl border border-navy-600 overflow-hidden">
        <svg
          viewBox="0 0 620 340"
          className="w-full"
          style={{ minHeight: '260px' }}
        >
          {/* Grid lines */}
          {[80, 160, 240, 320].map((y) => (
            <line key={`h${y}`} x1="20" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}
          {[100, 200, 300, 400, 500].map((x) => (
            <line key={`v${x}`} x1={x} y1="20" x2={x} y2="320" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}

          {/* Compass rose */}
          <text x="580" y="35" fill="rgba(255,255,255,0.2)" fontSize="10" textAnchor="middle" fontFamily="Inter">N</text>
          <line x1="580" y1="40" x2="580" y2="55" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* Zones */}
          {zones.map((zone) => {
            const colors = riskColors[zone.risk];
            const isHovered = hoveredZone?.id === zone.id;
            return (
              <g
                key={zone.id}
                onMouseEnter={() => setHoveredZone(zone)}
                onMouseLeave={() => setHoveredZone(null)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x={zone.x}
                  y={zone.y}
                  width={zone.width}
                  height={zone.height}
                  rx={zone.rx || 6}
                  fill={isHovered ? colors.fill.replace('0.18', '0.32') : colors.fill}
                  stroke={colors.stroke}
                  strokeWidth={isHovered ? 2 : 1.5}
                  style={{ transition: 'all 0.15s ease' }}
                />
                <text
                  x={zone.x + zone.width / 2}
                  y={zone.y + zone.height / 2 - 6}
                  fill={colors.text}
                  fontSize="10"
                  fontWeight="600"
                  textAnchor="middle"
                  fontFamily="Space Grotesk, sans-serif"
                >
                  {zone.name.split(' ')[0]}
                </text>
                <text
                  x={zone.x + zone.width / 2}
                  y={zone.y + zone.height / 2 + 8}
                  fill={colors.text}
                  fontSize="9"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  opacity="0.8"
                >
                  {zone.name.split(' ').slice(1).join(' ')}
                </text>
                {zone.incidents > 0 && (
                  <g>
                    <circle
                      cx={zone.x + zone.width - 12}
                      cy={zone.y + 12}
                      r="9"
                      fill={zone.risk === 'danger' ? 'rgba(200,60,50,0.8)' : 'rgba(200,160,50,0.8)'}
                    />
                    <text
                      x={zone.x + zone.width - 12}
                      y={zone.y + 16}
                      fill="white"
                      fontSize="8"
                      fontWeight="700"
                      textAnchor="middle"
                      fontFamily="Inter, sans-serif"
                    >
                      {zone.incidents}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredZone && (
          <div className="absolute top-4 left-4 bg-navy-800 border border-navy-500 rounded-lg p-3 shadow-lg pointer-events-none z-10 min-w-[160px]">
            <div className="font-display font-semibold text-navy-100 text-sm mb-2">{hoveredZone.name}</div>
            <div className="space-y-1">
              <div className="flex justify-between gap-4 text-xs">
                <span className="text-navy-400">Risk Level</span>
                <span
                  className="font-medium capitalize"
                  style={{ color: riskColors[hoveredZone.risk].text }}
                >
                  {riskColors[hoveredZone.risk].label}
                </span>
              </div>
              <div className="flex justify-between gap-4 text-xs">
                <span className="text-navy-400">Incidents</span>
                <span className="text-navy-100 font-medium">{hoveredZone.incidents}</span>
              </div>
              <div className="flex justify-between gap-4 text-xs">
                <span className="text-navy-400">Visitors</span>
                <span className="text-navy-100 font-medium">{hoveredZone.visitors}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
