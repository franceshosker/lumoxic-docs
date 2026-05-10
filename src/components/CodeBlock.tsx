"use client";

import { useState, useCallback } from "react";

function highlightSyntax(code: string, language: string): string {
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Comments (single-line)
  const singleLineComment = new RegExp("(\\/\\/.*$|#.*$)", "gm");
  html = html.replace(singleLineComment, '<span class="token-comment">$1</span>');

  // Multi-line comments
  const multiLineComment = new RegExp("(\\/\\*[\\s\\S]*?\\*\\/)", "g");
  html = html.replace(multiLineComment, '<span class="token-comment">$1</span>');

  // Strings
  html = html.replace(
    /("(?:[^"\\]|\\.)*")/g,
    '<span class="token-string">$1</span>'
  );

  // Decorators
  html = html.replace(
    /(@\w+)/g,
    '<span class="token-decorator">$1</span>'
  );

  if (language === "python" || language === "py") {
    html = html.replace(
      /\b(def|class|import|from|return|if|elif|else|for|while|try|except|finally|with|as|yield|async|await|True|False|None|and|or|not|in|is|lambda|raise|pass|break|continue)\b/g,
      '<span class="token-keyword">$1</span>'
    );
    html = html.replace(
      /\b(print|len|range|str|int|float|list|dict|set|tuple|type|isinstance|super|self|cls)\b/g,
      '<span class="token-builtin">$1</span>'
    );
  } else if (language === "typescript" || language === "ts" || language === "javascript" || language === "js" || language === "tsx" || language === "jsx") {
    html = html.replace(
      /\b(const|let|var|function|return|if|else|for|while|class|extends|implements|import|export|from|default|new|this|typeof|instanceof|interface|type|enum|async|await|try|catch|finally|throw|switch|case|break|continue|do|yield|of|in|as|void|null|undefined|true|false)\b/g,
      '<span class="token-keyword">$1</span>'
    );
    html = html.replace(
      /\b(console|Promise|Array|Object|Map|Set|Error|JSON|Math|Date|RegExp|Symbol|Number|String|Boolean)\b/g,
      '<span class="token-builtin">$1</span>'
    );
  } else if (language === "bash" || language === "shell" || language === "sh") {
    html = html.replace(
      /\b(npm|npx|pip|curl|cd|mkdir|export|sudo|chmod|echo|git|yarn|pnpm|bun)\b/g,
      '<span class="token-keyword">$1</span>'
    );
  } else if (language === "json") {
    html = html.replace(
      /\b(true|false|null)\b/g,
      '<span class="token-keyword">$1</span>'
    );
  }

  // Numbers
  html = html.replace(
    /\b(\d+\.?\d*)\b/g,
    '<span class="token-number">$1</span>'
  );

  return html;
}

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "typescript",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const highlighted = highlightSyntax(code, language);
  const highlightedLines = highlighted.split("\n");

  return (
    <div className="code-block group relative my-4">
      {filename && (
        <div className="flex items-center justify-between border-b border-border-dim bg-deep-space-lighter px-4 py-2">
          <span className="text-xs text-text-muted font-mono">{filename}</span>
          <span className="text-xs text-text-muted uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 z-10 rounded-md border border-border-dim bg-deep-space-lighter px-2.5 py-1.5 text-xs text-text-muted opacity-0 transition-all hover:border-neon-cyan/30 hover:text-neon-cyan group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </span>
          )}
        </button>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code>
            {highlightedLines.map((line, i) => (
              <div key={i} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell select-none pr-4 text-right text-text-muted/50 text-xs w-8">
                    {i + 1}
                  </span>
                )}
                <span
                  className="table-cell"
                  dangerouslySetInnerHTML={{ __html: line || " " }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
