import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
}

const Skeleton = ({
  className,
  variant = "rectangular",
  width,
  height,
  ...props
}: SkeletonProps) => {
  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-muted",
        variantClasses[variant],
        className
      )}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    />
  );
};

// Pre-built skeleton patterns for common use cases
const SkeletonCard = () => (
  <div className="p-6 space-y-4">
    <Skeleton height={24} width="60%" />
    <Skeleton height={16} width="100%" />
    <Skeleton height={16} width="80%" />
    <Skeleton height={16} width="90%" />
  </div>
);

const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        height={16}
        width={i === lines - 1 ? "60%" : "100%"}
      />
    ))}
  </div>
);

const SkeletonAvatar = ({ size = 40 }: { size?: number }) => (
  <Skeleton variant="circular" width={size} height={size} />
);

export { Skeleton, SkeletonCard, SkeletonText, SkeletonAvatar };
