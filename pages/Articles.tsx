import React from "react";
import { Link } from "react-router-dom";
import { ARTICLES } from "../constants";
import { User, Eye } from "lucide-react";

export const Articles: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-200 pb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Articles
          </h2>
          <p className="text-neutral-500 text-sm mt-1">
            Structured content with metadata headers.
          </p>
        </div>
      </div>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        id="article-list"
      >
        {ARTICLES.map((article) => (
          <Link
            to={`/articles/${article.id}`}
            key={article.id}
            className="group flex flex-col bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md hover:border-neutral-300 transition-all h-full"
          >
            <div className="bg-neutral-100 border-neutral-100 overflow-hidden shrink-0 h-48 w-full border-b">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    {article.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
                  {article.content}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <User size={12} />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye size={12} />
                    <span>{article.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center pt-8 border-t border-neutral-200">
        <nav className="flex gap-1" aria-label="Pagination">
          <button
            className="px-3 py-2 border border-neutral-200 rounded hover:bg-neutral-50 text-sm disabled:opacity-50"
            disabled
          >
            Previous
          </button>
          <button className="px-3 py-2 bg-neutral-900 text-white rounded text-sm font-medium">
            1
          </button>
          <button className="px-3 py-2 border border-neutral-200 rounded hover:bg-neutral-50 text-sm">
            2
          </button>
          <button className="px-3 py-2 border border-neutral-200 rounded hover:bg-neutral-50 text-sm">
            3
          </button>
          <span className="px-3 py-2 text-neutral-400">...</span>
          <button className="px-3 py-2 border border-neutral-200 rounded hover:bg-neutral-50 text-sm">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};
