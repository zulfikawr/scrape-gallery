import React from "react";
import { useParams, Link } from "react-router-dom";
import { ARTICLES } from "../constants";
import {
  Calendar,
  User,
  Eye,
  Tag,
  ChevronLeft,
  MessageSquare,
} from "lucide-react";

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="p-8 text-center text-neutral-500">Article not found</div>
    );
  }

  // Simulate longer content for the detail view
  const paragraphs = Array.from({ length: 5 }).map((_, i) => (
    <p key={i} className="mb-4 text-neutral-700 leading-relaxed">
      {i === 0
        ? article.content
        : `Additional paragraph ${i + 1} generated for content depth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
    </p>
  ));

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/articles"
        className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 mb-6 font-medium"
      >
        <ChevronLeft size={16} />
        Back to Articles
      </Link>

      <article className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
        <div className="h-64 md:h-80 bg-neutral-100 flex items-center justify-center border-b border-neutral-200 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-neutral-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-neutral-400 text-sm font-mono border-l border-neutral-200 pl-3">
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between border-y border-neutral-100 py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 overflow-hidden border border-neutral-200">
                <User size={20} className="text-neutral-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">
                  {article.author}
                </div>
                <div className="text-xs text-neutral-500">Senior Editor</div>
              </div>
            </div>
            <div className="flex gap-4 text-neutral-500 text-sm">
              <div className="flex items-center gap-1">
                <Eye size={16} /> {article.views}
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare size={16} /> 12
              </div>
            </div>
          </div>

          <div className="prose prose-neutral max-w-none mb-10">
            {paragraphs}
          </div>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-200">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full text-xs text-neutral-600 font-medium"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <div className="mt-8 border border-neutral-200 rounded-lg p-6 bg-white">
        <h3 className="font-bold text-neutral-900 mb-4">Comments (Static)</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded bg-neutral-100 flex-shrink-0"></div>
            <div>
              <div className="text-sm font-bold text-neutral-900">
                ScraperBot_01
              </div>
              <p className="text-sm text-neutral-600">
                Great article! The structure is very easy to parse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
