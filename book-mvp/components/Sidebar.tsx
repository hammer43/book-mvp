'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

interface Prompt {
  id: string
  title: string
  content: string
  llm_model?: string
  last_used?: string
  tags?: string[]
}

export default function Sidebar({ onSelect }: { onSelect: (prompt: Prompt) => void }) {
  const [prompts, setPrompts] = useState<Prompt[]>([])

  useEffect(() => {
    async function fetchPrompts() {
      const { data, error } = await supabase
        .from('prompts')
        .select('*')
        .order('last_used', { ascending: false })

      if (error) console.error('Error fetching prompts:', error)
      else setPrompts(data)
    }

    fetchPrompts()
  }, [])

  return (
    <aside className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Suggest Prompts</h2>
      <ul className="space-y-2">
        {prompts.map(prompt => (
          <li
            key={prompt.id}
            onClick={() => onSelect(prompt)}
            className="cursor-pointer hover:bg-gray-200 p-2 rounded"
          >
            {prompt.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}
