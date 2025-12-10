import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  language: string;
  code: string;
  title?: string;
}

declare global {
  interface Window {
    Prism: any;
  }
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  code,
  title,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-snippet rounded-lg border border-neutral-200 bg-white shadow-sm my-4 group w-full max-w-full">
      <div className="bg-neutral-50 border-b border-neutral-200 px-4 py-2 flex items-center justify-between h-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
          </div>
          {title && (
            <span className="text-xs font-medium text-neutral-500 ml-2 font-mono hidden sm:inline-block">
              {title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-neutral-200 rounded transition-colors text-neutral-500"
            aria-label="Copy code"
          >
            {copied ? (
              <Check size={12} className="text-green-600" />
            ) : (
              <Copy size={12} />
            )}
          </button>
        </div>
      </div>

      {/* 
        Mobile Overflow Fix: 
        1. max-w-[calc(100vw-3rem)] ensures it never exceeds the screen width minus padding (approx).
        2. overflow-x-auto enables scrolling.
      */}
      <div className="relative w-full overflow-hidden">
        <div className="overflow-x-auto max-w-[calc(100vw-3rem)] md:max-w-none">
          <pre
            className={`language-${language} text-sm font-mono leading-relaxed !bg-white p-4 m-0 min-w-min`}
          >
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
