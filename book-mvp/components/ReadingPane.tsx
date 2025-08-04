'use client'

import { Prompt } from '../types';

interface ReadingPaneProps {
  prompt: Prompt | null;
}

export default function ReadingPane({ prompt }: ReadingPaneProps) {
  if (!prompt) {
    return (
      <div className="p-6 text-gray-400 italic">
        Select a prompt on the left to view its content here.
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{prompt.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {prompt.llm_model ? `LLM: ${prompt.llm_model}` : 'LLM: Unknown'} • Last used: {prompt.last_used || 'N/A'}
      </p>
      <pre className="whitespace-pre-wrap text-gray-800">{prompt.content}</pre>
    </div>
  );
}