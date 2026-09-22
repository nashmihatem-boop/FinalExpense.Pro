type HorizonMarkProps = {
  className?: string;
};

/** The site's signature mark: a shield with a check — coverage that's been reviewed and vetted. */
export function HorizonMark({ className }: HorizonMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 6.5 L38.5 12 V23.5 C38.5 32.8 32.5 39.2 24 41.5 C15.5 39.2 9.5 32.8 9.5 23.5 V12 Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
        className="text-harbor"
      />
      <path
        d="M24 6.5 L38.5 12 V23.5 C38.5 32.8 32.5 39.2 24 41.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="text-mist"
        opacity="0.55"
      />
      <path
        d="M16.8 24 L21.5 28.9 L31.2 17.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brass"
      />
    </svg>
  );
}
