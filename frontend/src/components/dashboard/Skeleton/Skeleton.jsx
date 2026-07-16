function Skeleton({ className = "", variant = "card" }) {
  const base = "animate-pulse rounded-2xl bg-slate-200";

  if (variant === "row") {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-12 rounded-2xl bg-slate-200" />
        ))}
      </div>
    );
  }

  return <div className={`${base} ${className}`} />;
}

export default Skeleton;
