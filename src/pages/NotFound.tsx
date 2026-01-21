export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="glass-card rounded-2xl p-10 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold font-heading mb-2">404</h1>
        <p className="text-muted-foreground mb-6">Page not found</p>
        <a
          href="/"
          className="text-primary font-medium underline underline-offset-4"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
