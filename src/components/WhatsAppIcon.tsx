import React from "react";

interface WhatsAppIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: "colored" | "white" | "green";
  size?: number | string;
}

/**
 * 100% Authentic Official WhatsApp Brand Icon
 * - "colored": Solid green speech bubble (#25D366) + crisp white telephone handset (#FFFFFF)
 * - "white": Solid monochrome white icon (speech bubble outline + handset) for green CTA buttons
 * - "green": WhatsApp green (#25D366) outline and phone for light backgrounds & footer
 */
export default function WhatsAppIcon({
  className = "w-6 h-6",
  variant = "colored",
  size,
  ...props
}: WhatsAppIconProps) {
  if (variant === "white") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.2-1.31C8.61 21.49 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.52 0-2.97-.42-4.22-1.15l-.3-.18-3.08.78.82-2.99-.2-.31C4.26 15.08 3.8 13.58 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06a6.76 6.76 0 01-1.99-1.23 7.46 7.46 0 01-1.38-1.72c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.13.17 1.75 2.67 4.24 3.74 1.58.68 2.2.74 2.98.62.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z"
        />
      </svg>
    );
  }

  if (variant === "green") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="#25D366"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.2-1.31C8.61 21.49 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.52 0-2.97-.42-4.22-1.15l-.3-.18-3.08.78.82-2.99-.2-.31C4.26 15.08 3.8 13.58 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06a6.76 6.76 0 01-1.99-1.23 7.46 7.46 0 01-1.38-1.72c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.13.17 1.75 2.67 4.24 3.74 1.58.68 2.2.74 2.98.62.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z"
        />
      </svg>
    );
  }

  // Official Two-Tone Full Color WhatsApp Logo (Green Speech Bubble + White Phone Handset)
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fill="#25D366"
        d="M24 4C12.95 4 4 12.95 4 24c0 3.55.93 6.89 2.56 9.79L4 44l10.48-2.52C17.26 43.1 20.53 44 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4z"
      />
      <path
        fill="#FFFFFF"
        d="M34.78 29.5c-.44 1.25-2.58 2.3-3.55 2.4-.76.08-1.74.12-5.61-1.48-4.94-2.04-8.15-7.07-8.4-7.4-.25-.33-2-2.67-2-5.09 0-2.42 1.27-3.61 1.72-4.1.45-.49.98-.61 1.31-.61.33 0 .66.01.94.02.3.01.7-.12 1.1.85.4 1 1.37 3.36 1.49 3.61.12.25.2.54.04.87-.16.33-.25.53-.49.82-.24.29-.51.64-.73.86-.24.24-.5.51-.22 1 .28.49 1.27 2.1 2.72 3.4 1.87 1.67 3.45 2.18 3.94 2.43.49.25.78.21 1.06-.12.29-.33 1.23-1.43 1.55-1.92.33-.49.65-.41 1.1-.24.45.16 2.83 1.33 3.32 1.58.49.25.81.37.93.57.12.2.12 1.18-.32 2.45z"
      />
    </svg>
  );
}
