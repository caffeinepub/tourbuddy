import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import DashboardLayout from './components/DashboardLayout';
import Overview from './pages/Overview';
import IncidentsPage from './pages/IncidentsPage';
import GeoFenceAlertsPage from './pages/GeoFenceAlertsPage';
import RiskHeatmapPage from './pages/RiskHeatmapPage';
import VolunteerManagement from './pages/VolunteerManagement';

const rootRoute = createRootRoute({
  component: () => (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ),
});

const overviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Overview,
});

const incidentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/incidents',
  component: IncidentsPage,
});

const geofenceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/geofence-alerts',
  component: GeoFenceAlertsPage,
});

const heatmapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/risk-heatmap',
  component: RiskHeatmapPage,
});

const volunteersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/volunteers',
  component: VolunteerManagement,
});

const routeTree = rootRoute.addChildren([
  overviewRoute,
  incidentsRoute,
  geofenceRoute,
  heatmapRoute,
  volunteersRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
