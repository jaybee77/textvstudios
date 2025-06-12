import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Studios", path: "/studios" },
    { label: "Gallery", path: "/gallery" },
    { label: "Booking", path: "/booking" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold text-black cursor-pointer">TEXtv Studios</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      isActive(item.path)
                        ? "text-black"
                        : "text-gray-600 hover:text-texas-red"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-texas-red"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`block px-3 py-2 text-base font-medium cursor-pointer ${
                    isActive(item.path) ? "text-black" : "text-gray-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
