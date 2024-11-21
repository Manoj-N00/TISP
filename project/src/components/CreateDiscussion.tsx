import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CreateDiscussionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (discussion: {
    title: string;
    topic: string;
    content: string;
    status: string;
  }) => void;
}

export default function CreateDiscussionModal({ isOpen, onClose, onSubmit }: CreateDiscussionModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    content: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Set initial status to "Under Review"
    setStatus('Under Review');
    const discussion = { ...formData, status: 'Under Review' };

    // Call the onSubmit function with the discussion data
    onSubmit(discussion);

    // Reset form data
    setFormData({ title: '', topic: '', content: '' });

    // Automatically approve the discussion after 1 minute
    setTimeout(() => {
      const approvedDiscussion = { ...discussion, status: 'Approved' };
      onSubmit(approvedDiscussion); // Submit the approved discussion
      setStatus('Approved'); // Update the status to "Approved"
    }, 60000); // 60000 ms = 1 minute

    // Close the modal after submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Start New Discussion</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {status && (
          <div className="mb-4 text-sm text-gray-500">
            <p>Status: <strong>{status}</strong></p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Topic
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Create Discussion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
