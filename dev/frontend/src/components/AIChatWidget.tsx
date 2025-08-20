import { useEffect, useRef, useState } from 'react';
import api from '../api/axios';

export default function AIChatWidget() {
  const [messages, setMessages] = useState<
    { role: 'user' | 'assistant'; content: string }[]
  >([]);
  const [input, setInput] = useState('');
  const bottom = useRef<HTMLDivElement>(null);

  const send = async () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: 'user', content: input }];
    setMessages(newMsgs);
    setInput('');
    const { data } = await api.post('/ai/chat', { messages: newMsgs });
    setMessages([...newMsgs, data]);
  };

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white shadow rounded flex flex-col">
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              m.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100 mr-auto'
            }`}
          >
            {m.content}
          </div>
        ))}
        <div ref={bottom} />
      </div>
      <div className="p-2 border-t">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-full border rounded p-1"
          placeholder="Ask me anything…"
          onKeyDown={e => e.key === 'Enter' && send()}
        />
      </div>
    </div>
  );
}


