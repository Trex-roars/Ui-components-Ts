export function BackgroundPattern() {
  return (
    <>
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 pointer-events-none" />
    </>
  );
}