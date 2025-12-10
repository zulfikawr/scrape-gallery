import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  FileText,
  ShoppingCart,
  Code,
  AlertOctagon,
  Database,
} from "lucide-react";

const DashboardCard: React.FC<{
  to: string;
  title: string;
  desc: string;
  count: string;
  icon: React.ReactNode;
}> = ({ to, title, desc, count, icon }) => (
  <Link
    to={to}
    className="group flex flex-col justify-between p-6 bg-white border border-neutral-200 rounded-lg hover:border-neutral-400 hover:shadow-sm transition-all h-full"
  >
    <div>
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-neutral-50 rounded-md text-neutral-900 border border-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
          {icon}
        </div>
        <ArrowUpRight
          className="text-neutral-300 group-hover:text-neutral-900 transition-colors"
          size={18}
        />
      </div>
      <h3 className="text-base font-bold text-neutral-900 mb-1">{title}</h3>
      <p className="text-xs text-neutral-500 leading-relaxed mb-4">{desc}</p>
    </div>
    <div className="flex items-center gap-2 pt-4 border-t border-neutral-100">
      <span className="text-xs font-mono font-medium text-neutral-400 bg-neutral-50 px-2 py-1 rounded">
        {count} Items
      </span>
      <span className="text-xs text-neutral-400">Static Data</span>
    </div>
  </Link>
);

export const Home: React.FC = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4 py-8 border-b border-neutral-200">
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src="/android-chrome-192x192.png"
            alt="Scrape Gallery Logo"
            className="w-10 h-10 md:w-14 md:h-14 rounded-lg"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Scrape Gallery
          </h1>
        </div>

        <p className="text-base md:text-lg text-neutral-500 max-w-3xl">
          A sandbox environment designed for testing web scrapers, crawlers, and
          data extraction parsers. Features semantic structures, trap elements,
          and diverse content types.
        </p>
      </section>
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-neutral-900">
            Data Categories
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardCard
            to="/articles"
            title="Articles"
            desc="Blog posts, news articles, and text-heavy content with author metadata, dates, and tagging systems."
            count="12"
            icon={<FileText size={20} />}
          />
          <DashboardCard
            to="/products"
            title="E-Commerce"
            desc="Product listings including pricing variations, stock status, ratings, and specification tables."
            count="16"
            icon={<ShoppingCart size={20} />}
          />
          <DashboardCard
            to="/code"
            title="Code Repository"
            desc="Syntax highlighted code blocks in various languages, testing text extraction from pre tags."
            count="5"
            icon={<Code size={20} />}
          />
          <DashboardCard
            to="/tables"
            title="Directories"
            desc="Dense tabular data, nested lists, and definition lists typically found in admin panels."
            count="20"
            icon={<Database size={20} />}
          />
          <DashboardCard
            to="/messy"
            title="Unstructured / Messy"
            desc="Broken HTML, missing classes, inline styles, and trap elements to test scraper robustness."
            count="~"
            icon={<AlertOctagon size={20} />}
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-neutral-900 text-white rounded-lg p-8 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2">Practice Targets</h2>
          <ul className="space-y-2 text-sm text-neutral-400 mb-6 font-mono">
            <li>• Pagination logic (Articles)</li>
            <li>• Infinite scroll patterns (simulated)</li>
            <li>• Detail page extraction</li>
            <li>• Handling 'display: none' traps</li>
            <li>• Extracting data-* attributes</li>
          </ul>
          <Link
            to="/messy"
            className="inline-flex items-center justify-center bg-white text-neutral-900 px-4 py-2 rounded text-sm font-bold hover:bg-neutral-200 transition-colors w-fit"
          >
            Try Messy Data
          </Link>
        </div>
        <div className="border border-neutral-200 rounded-lg p-8 bg-neutral-50">
          <h2 className="text-xl font-bold mb-2 text-neutral-900">
            Legal & Ethics
          </h2>
          <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
            This sandbox is provided for educational purposes. All data is
            fictional. When scraping real websites, always respect{" "}
            <code>robots.txt</code> and Terms of Service.
          </p>
          <div className="p-4 bg-white border border-neutral-200 rounded text-xs font-mono text-neutral-500">
            User-Agent: *<br />
            Disallow: /private/
            <br />
            Allow: /
          </div>
        </div>
      </section>
    </div>
  );
};
