import { ChatMessageProps } from './chat';

export default function ChatMessage({ message }: ChatMessageProps): JSX.Element {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          isUser
            ? 'bg-blue-500 text-white'
            : message.error
            ? 'bg-red-100 text-red-700'
            : 'bg-white text-gray-800'
        } shadow`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}