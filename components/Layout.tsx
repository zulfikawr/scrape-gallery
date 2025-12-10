import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Terminal,
  Box,
  FileText,
  Code,
  Database,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Overview", icon: <Terminal size={16} /> },
    { path: "/articles", label: "Articles", icon: <FileText size={16} /> },
    { path: "/products", label: "Products", icon: <Box size={16} /> },
    { path: "/code", label: "Code", icon: <Code size={16} /> },
    { path: "/tables", label: "Data", icon: <Database size={16} /> },
    { path: "/messy", label: "Messy", icon: <AlertTriangle size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans flex flex-col selection:bg-neutral-900 selection:text-white">
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-70 transition-opacity"
          >
            <img
              src="/android-chrome-192x192.png"
              alt="Logo"
              className="w-6 h-6 rounded-sm"
            />
            <span>Scrape Gallery</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2
                    ${
                      isActive
                        ? "bg-neutral-100 text-neutral-900 shadow-sm border border-neutral-200/50"
                        : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                    }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="md:hidden">
            {/* Mobile simplified indicator */}
            <span className="text-xs font-mono bg-neutral-100 px-2 py-1 rounded text-neutral-500">
              v1.0
            </span>
          </div>
        </div>

        {/* Mobile Nav Scroller */}
        <div className="md:hidden overflow-x-auto flex gap-2 px-4 py-3 border-t border-neutral-100 bg-white scrollbar-hide">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors flex items-center gap-1.5
                    ${
                      isActive
                        ? "bg-neutral-900 text-white border-neutral-900"
                        : "bg-white text-neutral-600 border-neutral-200"
                    }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Breadcrumb-ish area for deep navigation context could go here */}
      {location.pathname !== "/" && (
        <div className="bg-white border-b border-neutral-200 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs text-neutral-500 font-mono">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-neutral-900">
              {location.pathname.split("/")[1] || "Page"}
            </span>
            {location.pathname.split("/").length > 2 && (
              <>
                <ChevronRight size={12} />
                <span className="truncate max-w-[150px]">Detail</span>
              </>
            )}
          </div>
        </div>
      )}

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        {children}
      </main>

      <footer className="border-t border-neutral-200 py-12 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-neutral-500">
          <div>
            <div className="font-bold text-neutral-900 mb-1">
              Scrape Gallery
            </div>
            <p className="text-neutral-400 text-xs">
              Sandbox Environment for Web Scraping & Data Extraction
            </p>
          </div>
          <div className="flex gap-6 text-xs font-mono">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              System Normal
            </span>
            <span>NO RATE LIMITS</span>
            <span>STATIC DATA</span>
            <a
              href="https://github.com/zulfikawr/scrape-gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
