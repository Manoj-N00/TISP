import ChatInterface from '../components/ChatInterface';

export default function Chat(): JSX.Element {
  return (
    <div className="h-full">
      <header className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-semibold text-center text-gray-800">TISP Chatbot</h1>
      </header>
      <div className="h-[calc(100%-4rem)]">
        <ChatInterface />
      </div>
    </div>
  );
}