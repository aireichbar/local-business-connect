import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "card" | "phone";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "shimmer" | "none";
}

const SkeletonLoader = ({
  className,
  variant = "rectangular",
  width,
  height,
  animation = "shimmer",
}: SkeletonLoaderProps) => {
  const baseStyles = "bg-muted/60 relative overflow-hidden";
  
  const variantStyles = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    card: "rounded-xl",
    phone: "rounded-[2.5rem] aspect-[9/19]",
  };

  const animationStyles = {
    pulse: "animate-pulse",
    shimmer: "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
    none: "",
  };

  const style: React.CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        animationStyles[animation],
        className
      )}
      style={style}
      aria-hidden="true"
    />
  );
};

// Demo Skeleton for phone mockup
const PhoneDemoSkeleton = () => (
  <div className="w-full h-full bg-muted/40 flex flex-col p-4 gap-3">
    <div className="flex items-center gap-3">
      <SkeletonLoader variant="circular" width={40} height={40} />
      <div className="flex-1 space-y-2">
        <SkeletonLoader variant="text" width="60%" height={14} />
        <SkeletonLoader variant="text" width="40%" height={10} />
      </div>
    </div>
    <div className="flex-1 space-y-3 mt-4">
      <SkeletonLoader variant="rectangular" width="70%" height={40} className="rounded-xl ml-auto" />
      <SkeletonLoader variant="rectangular" width="80%" height={50} className="rounded-xl" />
      <SkeletonLoader variant="rectangular" width="60%" height={35} className="rounded-xl ml-auto" />
    </div>
  </div>
);

// Card Skeleton
const CardSkeleton = () => (
  <div className="bg-card rounded-xl p-5 border border-border/50 space-y-4">
    <SkeletonLoader variant="rectangular" height={120} className="w-full" />
    <SkeletonLoader variant="text" width="80%" height={20} />
    <SkeletonLoader variant="text" width="60%" height={14} />
    <div className="flex gap-2">
      <SkeletonLoader variant="rectangular" width={80} height={32} className="rounded-full" />
      <SkeletonLoader variant="rectangular" width={80} height={32} className="rounded-full" />
    </div>
  </div>
);

export { SkeletonLoader, PhoneDemoSkeleton, CardSkeleton };

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
