interface LogoProps {
  url?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Logo({ url = "/", children, className = "" }: LogoProps) {
  return (
    <a href={url} className={`flex items-center gap-2 ${className}`}>
      {children}
    </a>
  );
}

export function LogoImage(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  return <img {...props} />;
}

export function LogoText({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span className={`font-semibold text-xl ${className}`}>
      {children}
    </span>
  );
}
