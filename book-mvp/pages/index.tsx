import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ReadingPane from '../components/ReadingPane';
import { Prompt } from '../types'; // if you have this type defined

export default function Home() {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={setSelectedPrompt} />
      <ReadingPane prompt={selectedPrompt} />
    </div>
  );
}