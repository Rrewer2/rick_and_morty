export const magnifyingGlass = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        display="block"
    >
        <circle
            cx="9"
            cy="9"
            r="6"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
        />
        <line
            x1="7"
            y1="12"
            x2="16"
            y2="12"
            stroke="black"
            strokeWidth="1.5"
            transform="rotate(45 9 20)"
        />
    </svg>
);
export const x = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        display="block"
    >
        <line x1="0" y1="32" x2="32" y2="0" stroke="red" strokeWidth="3" />
        <line x1="0" y1="0" x2="32" y2="32" stroke="red" strokeWidth="3" />
    </svg>
);
export const heart = (color) => (
    <svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        transition="all 1s"
    >
        <circle cx="6.4" cy="8" r="2.88" fill={color} />
        <circle cx="9.6" cy="8" r="2.88" fill={color} />
        <path d="M3.94,9.6 L12,9.6 8.06,13.6 Z" fill={color} />
    </svg>
);
