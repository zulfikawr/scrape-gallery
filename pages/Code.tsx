import React, { useEffect } from "react";
import { SNIPPETS, QUOTES } from "../constants";
import { CodeBlock } from "../components/CodeBlock";
import { Quote, Hash } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-json";

export const Code: React.FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-12">
        <div className="border-b border-neutral-200 pb-6">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Code Repository
          </h2>
          <p className="text-neutral-500 text-sm mt-1">
            Common scraping patterns with syntax highlighting.
          </p>
        </div>

        <div className="space-y-12">
          {SNIPPETS.map((snippet) => (
            <div
              key={snippet.id}
              id={`snippet-${snippet.id}`}
              className="scroll-mt-24 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <Hash size={16} className="text-neutral-300" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {snippet.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                {snippet.description}
              </p>
              <CodeBlock
                language={snippet.language}
                code={snippet.code}
                title={`src/examples/${snippet.language}_demo.${snippet.language === "python" ? "py" : snippet.language === "javascript" ? "js" : snippet.language === "rust" ? "rs" : "txt"}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 sticky top-24">
          <h3 className="text-sm font-bold text-neutral-900 mb-4 border-b border-neutral-200 pb-2 uppercase tracking-wider">
            Quotes & Thoughts
          </h3>
          <div className="space-y-8">
            {QUOTES.map((quote) => (
              <blockquote
                key={quote.id}
                className="relative pl-4 border-l-2 border-neutral-300 group hover:border-neutral-900 transition-colors"
              >
                <Quote
                  className="absolute -top-1 -left-2 text-neutral-100 fill-current -z-10 transform -translate-x-full"
                  size={24}
                />
                <p className="text-neutral-700 text-sm mb-2 italic">
                  "{quote.text}"
                </p>
                <footer className="text-xs text-neutral-900 font-bold">
                  — {quote.author}
                </footer>
                <div className="mt-2 flex gap-1 flex-wrap">
                  {quote.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider text-neutral-400 bg-white px-1.5 py-0.5 border border-neutral-200 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
