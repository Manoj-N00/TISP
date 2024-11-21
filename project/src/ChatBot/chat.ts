import {  } from '@google/generative-ai';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  error?: boolean;
}

export interface ChatMessageProps {
  message: Message;
}