interface HighlightTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function HighlightTitle({ children, className = "" }: HighlightTitleProps) {
  return (
    <h2
      className={`relative inline-block text-4xl font-bold leading-tight ${className}`}
    >
      {children}

      {/* Highlight effect */}
      <span className="absolute left-0 bottom-1 h-3 w-full bg-primary/20 -z-10 rounded-md"></span>
    </h2>
  );
}
