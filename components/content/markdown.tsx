import * as React from 'react';

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  const blocks = React.useMemo(() => parseMarkdown(content), [content]);
  return (
    <div className="prose prose-invert max-w-none">
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}

type Block =
  | { type: 'h1' | 'h2' | 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'code'; lang: string; code: string }
  | { type: 'quote'; text: string };

function parseMarkdown(md: string): Block[] {
  const lines = md.split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.slice(4).trim() });
      i++;
    } else if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      i++;
    } else if (line.startsWith('# ')) {
      blocks.push({ type: 'h1', text: line.slice(2).trim() });
      i++;
    } else if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: 'code', lang, code: codeLines.join('\n') });
    } else if (line.startsWith('> ')) {
      blocks.push({ type: 'quote', text: line.slice(2).trim() });
      i++;
    } else if (line.match(/^\d+\.\s/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        items.push(lines[i].replace(/^\d+\.\s/, '').trim());
        i++;
      }
      blocks.push({ type: 'ol', items });
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].startsWith('- ') || lines[i].startsWith('* '))
      ) {
        items.push(lines[i].slice(2).trim());
        i++;
      }
      blocks.push({ type: 'ul', items });
    } else {
      blocks.push({ type: 'p', text: line.trim() });
      i++;
    }
  }

  return blocks;
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*([^*]+)\*\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(
        <strong key={key++} className="font-semibold text-foreground">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      parts.push(
        <code
          key={key++}
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-primary"
        >
          {match[3]}
        </code>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function renderBlock(block: Block, key: number): React.ReactNode {
  switch (block.type) {
    case 'h1':
      return (
        <h1 key={key} className="mt-8 mb-4 font-heading text-3xl font-bold tracking-tight">
          {block.text}
        </h1>
      );
    case 'h2':
      return (
        <h2 key={key} className="mt-8 mb-3 font-heading text-2xl font-semibold tracking-tight">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={key} className="mt-6 mb-2 font-heading text-xl font-semibold tracking-tight">
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p key={key} className="mb-4 leading-relaxed text-muted-foreground">
          {renderInline(block.text)}
        </p>
      );
    case 'ul':
      return (
        <ul key={key} className="mb-4 space-y-2 pl-6">
          {block.items.map((item, i) => (
            <li key={i} className="text-muted-foreground list-disc">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={key} className="mb-4 space-y-2 pl-6">
          {block.items.map((item, i) => (
            <li key={i} className="text-muted-foreground list-decimal">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
    case 'code':
      return (
        <div key={key} className="my-4 overflow-hidden rounded-lg border border-border bg-surface">
          {block.lang && (
            <div className="border-b border-border bg-surface-elevated px-4 py-2">
              <span className="font-mono text-xs text-muted-foreground">{block.lang}</span>
            </div>
          )}
          <pre className="overflow-x-auto p-4">
            <code className="font-mono text-sm text-foreground">{block.code}</code>
          </pre>
        </div>
      );
    case 'quote':
      return (
        <blockquote key={key} className="my-4 border-l-2 border-primary/40 pl-4 italic text-muted-foreground">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}
