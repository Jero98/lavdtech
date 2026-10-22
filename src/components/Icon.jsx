const icons = {
  shield: (
    <path d="M12 3 5 6.2v5.1c0 4.2 2.8 8.1 7 9.2 4.2-1.1 7-5 7-9.2V6.2L12 3Zm0 3.1 5 2.2v3c0 3.2-2 6.2-5 7.2-3-1-5-4-5-7.2v-3l5-2.2Z" />
  ),
  map: (
    <>
      <path d="M4.5 7.2 9 5.4l6 2.4 4.5-1.8v12.8L15 20.6l-6-2.4-4.5 1.8V7.2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 5.6v12.6M15 7.8v12.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6.1 6.1l1.6 1.6M16.3 16.3l1.6 1.6M17.9 6.1l-1.6 1.6M7.7 16.3l-1.6 1.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  vision: (
    <>
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 12h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  imu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  gps: (
    <>
      <path d="M12 21s6.5-6.1 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.9 6.5 11 6.5 11Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  install: (
    <>
      <path d="M7 20h10M8 16h8M9 12h6M10 8h4M12 4v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  telemetry: (
    <>
      <path d="M4 16.5 8.5 12l3.2 3.2L20 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  log: (
    <>
      <path d="M7 4h8l4 4v12H7V4Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15 4v4h4M9.5 12h7M9.5 15.5h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  arrow: (
    <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  ),
}

export default function Icon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      {icons[name] || icons.chip}
    </svg>
  )
}
