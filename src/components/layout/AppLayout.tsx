import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Compass, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
type AppLayoutProps = {
  children: React.ReactNode;
};
export function AppLayout({ children }: AppLayoutProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navLinks = [
    { name: "Expeditions", href: "/" },
    { name: "Archive", href: "/blog" },
    { name: "The Compass", href: "/about" },
  ];
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A2421] selection:bg-amber-100 selection:text-amber-900 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-[#1A2421]/5 bg-[#F9F7F2]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#1A2421] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                  <Compass className="w-5 h-5 text-[#F9F7F2]" />
                </div>
                <span className="text-xl font-bold tracking-tight uppercase">WildPath</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-amber-600",
                      location.pathname === link.href ? "text-amber-700" : "text-[#1A2421]/70"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle className="static top-0 right-0" />
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#F9F7F2] pt-20 px-6">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <main className="relative">{children}</main>
      <footer className="border-t border-[#1A2421]/5 py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-lg font-bold uppercase tracking-widest">WildPath</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Documenting the edge of the world with minimal footprint and maximum wonder.
              </p>
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <Link to="/about" className="hover:text-amber-600">Ethics</Link>
              <Link to="/rss" className="hover:text-amber-600">RSS</Link>
              <Link to="/privacy" className="hover:text-amber-600">Privacy</Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#1A2421]/5 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} WildPath Adventurer's Log. Leave No Trace.
          </div>
        </div>
      </footer>
    </div>
  );
}