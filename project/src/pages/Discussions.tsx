import React, { useState } from 'react';
import { Plus, MessageCircle, Users, Clock } from 'lucide-react';
import { format } from 'date-fns';
import CreateDiscussionModal from '../components/CreateDiscussion';
import Footer from '../components/Footer';

interface Discussion {
  id: number;
  title: string;
  topic: string;
  content: string;
  participants: number;
  replies: number;
  timestamp: Date;
  status: 'under review' | 'approved'; // Type narrowed to 'under review' or 'approved'
}

export default function Discussions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discussions, setDiscussions] = useState<Discussion[]>([
    {
      id: 1,
      title: 'Best practices for threat mitigation',
      topic: 'Security',
      content: 'Lets discuss the most effective approaches to threat mitigation...',
      participants: 8,
      replies: 12,
      timestamp: new Date('2024-03-15T10:00:00'),
      status: 'approved' // Correctly assigned a valid status value
    },
    {
      id: 2,
      title: 'New vulnerability discovered in popular framework',
      topic: 'Vulnerabilities',
      content: 'A critical vulnerability has been found...',
      participants: 15,
      replies: 23,
      timestamp: new Date('2024-03-14T15:30:00'),
      status: 'approved' // Correctly assigned a valid status value
    }
  ]);

  const handleCreateDiscussion = (discussionData: {
    title: string;
    topic: string;
    content: string;
  }) => {
    const newDiscussion: Discussion = {
      id: discussions.length + 1,
      ...discussionData,
      participants: 1,
      replies: 0,
      timestamp: new Date(),
      status: 'under review' // Set status as 'under review' initially
    };

    // Add the new discussion to the list
    setDiscussions([newDiscussion, ...discussions]);

    // Set a timeout to change the status to 'approved' after 1 minute
    setTimeout(() => {
      setDiscussions((prevDiscussions) =>
        prevDiscussions.map((discussion) =>
          discussion.id === newDiscussion.id
            ? { ...discussion, status: 'approved' }
            : discussion
        )
      );
    }, 60000); // 60000ms = 1 minute
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Discussions</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Discussion</span>
        </button>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {discussion.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {discussion.topic}
                </span>
              </div>
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  discussion.status === 'under review'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {discussion.status}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4 line-clamp-2">{discussion.content}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{discussion.participants} participants</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{discussion.replies} replies</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{format(discussion.timestamp, 'MMM d, yyyy HH:mm')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateDiscussionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateDiscussion}
      />
      <Footer />
    </div>
  );
}
