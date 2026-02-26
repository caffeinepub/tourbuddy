# Specification

## Summary
**Goal:** Build the TourBuddy front-end dashboard interface — a safety command center for monitoring tourist areas, incidents, geo-fence alerts, and volunteers using static mock data.

**Planned changes:**
- Add a top navigation bar with the TourBuddy logo/brand name, a global alert status badge (color-coded), and a user profile area
- Add a collapsible left sidebar with five navigation links: Overview, Incidents, Geo-fence Alerts, Risk Heatmap, and Volunteer Management — with active-state highlighting
- Build an Overview page with four KPI summary cards (Total Active Incidents, Active Geo-fence Alerts, Volunteers On Duty, Tourist Areas Monitored) each showing a mocked count and trend indicator
- Add a Recent Incidents table on the Overview page with columns for Incident ID, Location, Type, Severity (color-coded badge), Status, and Reported Time — populated with at least 6 mock rows
- Add an Active Geo-fence Alerts panel on the Overview page listing at least 3 mock alerts (zone name, alert type, triggered time) with a client-side acknowledge/dismiss button
- Add a Risk Heatmap section with an SVG-based zone map showing at least 6 labeled zones color-coded by risk level (green/yellow/red) and a legend
- Add a Volunteer Management page (sidebar link) showing a table of at least 8 mock volunteers with Name, Badge ID, Area Assigned, Status (color-coded badge), and Last Check-in — filterable by status
- Apply a cohesive dark navy/slate background with amber/gold accents theme, card-based layout, consistent typography, shadows, and borders throughout all pages
- Display the TourBuddy logo image from `frontend/public/assets/generated` in the navigation/sidebar branding area

**User-visible outcome:** Users can navigate a fully styled safety command center dashboard with mocked incident data, geo-fence alerts, a risk heatmap, and volunteer management — all client-side with no backend required.
