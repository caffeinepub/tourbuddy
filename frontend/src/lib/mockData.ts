import { Incident } from '../components/IncidentsTable';
import { GeoAlert } from '../components/GeoFenceAlerts';
import { Volunteer } from '../components/VolunteerTable';

export const mockIncidents: Incident[] = [
  { id: 'INC-2401', location: 'Downtown Core', type: 'Pickpocketing', severity: 'High', status: 'In Progress', reportedTime: '14:32 · Feb 25' },
  { id: 'INC-2402', location: 'Harbor District', type: 'Crowd Surge', severity: 'Critical', status: 'Open', reportedTime: '14:18 · Feb 25' },
  { id: 'INC-2403', location: 'Market Square', type: 'Suspicious Package', severity: 'Critical', status: 'In Progress', reportedTime: '13:55 · Feb 25' },
  { id: 'INC-2404', location: 'Beach Area', type: 'Medical Emergency', severity: 'High', status: 'Resolved', reportedTime: '13:40 · Feb 25' },
  { id: 'INC-2405', location: 'Old Town', type: 'Vandalism', severity: 'Low', status: 'Open', reportedTime: '12:15 · Feb 25' },
  { id: 'INC-2406', location: 'Historic Quarter', type: 'Lost Tourist', severity: 'Low', status: 'Resolved', reportedTime: '11:50 · Feb 25' },
  { id: 'INC-2407', location: 'Waterfront', type: 'Unauthorized Vendor', severity: 'Medium', status: 'Open', reportedTime: '11:22 · Feb 25' },
  { id: 'INC-2408', location: 'Cultural District', type: 'Noise Complaint', severity: 'Low', status: 'Resolved', reportedTime: '10:45 · Feb 25' },
  { id: 'INC-2409', location: 'Downtown Core', type: 'Traffic Obstruction', severity: 'Medium', status: 'In Progress', reportedTime: '10:10 · Feb 25' },
  { id: 'INC-2410', location: 'Market Square', type: 'Scam Report', severity: 'Medium', status: 'Open', reportedTime: '09:30 · Feb 25' },
];

export const mockGeoAlerts: GeoAlert[] = [
  {
    id: 'GA-001',
    zone: 'Downtown Core',
    type: 'Overcrowding',
    severity: 'critical',
    triggeredTime: '14:45 today',
    description: 'Crowd density exceeds safe threshold — 3,200 people in 0.4km² zone.',
  },
  {
    id: 'GA-002',
    zone: 'Harbor District',
    type: 'Unauthorized Entry',
    severity: 'critical',
    triggeredTime: '14:20 today',
    description: 'Perimeter breach detected at restricted pier access point.',
  },
  {
    id: 'GA-003',
    zone: 'Market Square',
    type: 'Suspicious Activity',
    severity: 'warning',
    triggeredTime: '13:58 today',
    description: 'Multiple reports of coordinated distraction tactics near vendor stalls.',
  },
  {
    id: 'GA-004',
    zone: 'Beach Area',
    type: 'Crowd Surge',
    severity: 'warning',
    triggeredTime: '13:30 today',
    description: 'Rapid crowd movement detected near main beach entrance.',
  },
  {
    id: 'GA-005',
    zone: 'Waterfront',
    type: 'Perimeter Breach',
    severity: 'warning',
    triggeredTime: '12:55 today',
    description: 'Unauthorized vessel approaching restricted waterfront zone.',
  },
];

export const mockVolunteers: Volunteer[] = [
  { id: 'V001', name: 'Maria Santos', badgeId: 'TB-4421', area: 'Downtown Core', status: 'Active', lastCheckIn: '14:30 today', phone: '+1 555-0101' },
  { id: 'V002', name: 'James Okafor', badgeId: 'TB-4422', area: 'Harbor District', status: 'Active', lastCheckIn: '14:25 today', phone: '+1 555-0102' },
  { id: 'V003', name: 'Priya Nair', badgeId: 'TB-4423', area: 'Old Town', status: 'On Break', lastCheckIn: '13:50 today', phone: '+1 555-0103' },
  { id: 'V004', name: 'Carlos Mendez', badgeId: 'TB-4424', area: 'Beach Area', status: 'Active', lastCheckIn: '14:15 today', phone: '+1 555-0104' },
  { id: 'V005', name: 'Aisha Kamara', badgeId: 'TB-4425', area: 'Market Square', status: 'Active', lastCheckIn: '14:28 today', phone: '+1 555-0105' },
  { id: 'V006', name: 'Luca Ferretti', badgeId: 'TB-4426', area: 'Historic Quarter', status: 'Off Duty', lastCheckIn: '08:00 today', phone: '+1 555-0106' },
  { id: 'V007', name: 'Yuki Tanaka', badgeId: 'TB-4427', area: 'Waterfront', status: 'Active', lastCheckIn: '14:10 today', phone: '+1 555-0107' },
  { id: 'V008', name: 'Fatima Al-Hassan', badgeId: 'TB-4428', area: 'Cultural District', status: 'On Break', lastCheckIn: '13:45 today', phone: '+1 555-0108' },
  { id: 'V009', name: 'David Kim', badgeId: 'TB-4429', area: 'Downtown Core', status: 'Active', lastCheckIn: '14:35 today', phone: '+1 555-0109' },
  { id: 'V010', name: 'Sofia Petrov', badgeId: 'TB-4430', area: 'Harbor District', status: 'Off Duty', lastCheckIn: '07:30 today', phone: '+1 555-0110' },
];
