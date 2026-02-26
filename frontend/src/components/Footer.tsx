export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'tourbuddy-dashboard'
  );

  return (
    <footer className="border-t border-navy-600 bg-navy-900 px-6 py-3 flex items-center justify-between text-navy-400 text-xs">
      <span>© {year} TourBuddy Safety Command</span>
      <span className="flex items-center gap-1">
        Built with{' '}
        <span className="text-amber-500 mx-0.5">♥</span>
        {' '}using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 transition-colors"
        >
          caffeine.ai
        </a>
      </span>
    </footer>
  );
}
