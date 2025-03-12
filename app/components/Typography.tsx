import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "next-view-transitions";

export function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h1 className={cn("text-xl ", className)}>{children}</h1>;
}

export function SubHeading({
  children,
  className,
  underline = false,
}: {
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
}) {
  return (
    <h1
      className={cn(
        `text-base ${underline ? "underline underline-offset-4" : ""}  decoration-wavy decoration-gray-200`,
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-[15px]/6 text-gray-700", className)}>{children}</p>
  );
}
export function LinkTag({
  children,
  className,
  href,
  underline = false,
  icon = true,
  external = false,
}: {
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  underline?: boolean;
  icon?: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : "_self"}
      className={cn(
        `relative text-sm ${underline ? "underline" : "hover:underline "} text-gray-600 hover:opacity-60 underline-offset-4 group `,
        className,
      )}
    >
      {children}
      {external && icon && (
        <span className="absolute -top-1 -right-3 text-xs">
          <ArrowUpRightIcon
            className={`inline-block text-gray-400 " group-hover:opacity-60 w-3 h-3`}
          />
        </span>
      )}
    </Link>
  );
}

export function Legend({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn(`text-[13px] text-gray-400 min-w-[150px] `, className)}>
      {children}
    </p>
  );
}
