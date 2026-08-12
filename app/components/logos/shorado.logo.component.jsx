export function ShoradoLogoComponent({
    width = "36",
    height = "36"
}) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9.5"></circle>
            <ellipse cx="12" cy="12" rx="4.2" ry="9.5"></ellipse>
            <line x1="2.5" y1="12" x2="21.5" y2="12"></line>
            <path d="M4 7.5c2 1 14 1 16 0"></path>
            <path d="M4 16.5c2-1 14-1 16 0"></path>
        </svg>
    )
}