'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient.js';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();

    // Écoute en temps réel pour nouveaux messages
    const channel = supabase
      .channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          setMessages((current) => [...current, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function fetchMessages() {
    const { data } = await supabase.from('messages').select('*');
    setMessages(data || []);
  }

  async function sendMessage() {
    if (newMessage.trim() === '') return;
    await supabase.from('messages').insert([{ content: newMessage }]);
    setNewMessage('');
  }

  return (
    <main style={{ textAlign: 'center', padding: 30 }}>
      <h1>MonBus CI 🚍</h1>
      <p>L’application du peuple pour suivre les bus en temps réel.</p>

      <div style={{ marginTop: 30 }}>
        <input
          style={{ padding: 10, width: '70%' }}
          placeholder="Écris ton message ici..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button style={{ padding: 10, marginLeft: 10 }} onClick={sendMessage}>
          Envoyer
        </button>
      </div>

      <div style={{ marginTop: 40, textAlign: 'left' }}>
        <h3>Messages :</h3>
        {messages.map((msg) => (
          <p key={msg.id}>🚏 {msg.content}</p>
        ))}
      </div>
    </main>
  );
}
