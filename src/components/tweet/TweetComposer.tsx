import React, { useState } from 'react';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import { currentUser } from '../../data/users';
import { Image, Smile, Link2, Hash } from 'lucide-react';
import Card from '../ui/Card';

interface TweetComposerProps {
  onTweet?: (content: string) => void;
}

const TweetComposer: React.FC<TweetComposerProps> = ({ onTweet }) => {
  const [content, setContent] = useState('');
  const maxLength = 280;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && content.length <= maxLength) {
      onTweet?.(content);
      setContent('');
    }
  };

  const actions = [
    { icon: <Image size={20} className="text-primary-600" />, label: 'Add Image' },
    { icon: <Link2 size={20} className="text-primary-600" />, label: 'Add Link' },
    { icon: <Hash size={20} className="text-primary-600" />, label: 'Add Topic' },
    { icon: <Smile size={20} className="text-primary-600" />, label: 'Add Emoji' }
  ];

  return (
    <Card className="p-4 bg-white shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <Avatar src={currentUser.avatar} alt={currentUser.name} />
          
          <div className="flex-1">
            <textarea
              placeholder="Share your thoughts or ask a question..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full text-gray-900 placeholder-gray-500 resize-none border-none focus:ring-0 bg-transparent outline-none text-lg"
              rows={3}
              maxLength={maxLength}
            />
            
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <div className="flex space-x-2">
                {actions.map((action, index) => (
                  <button
                    key={index}
                    type="button"
                    className="p-2 rounded-full hover:bg-primary-50 transition-colors"
                    title={action.label}
                  >
                    {action.icon}
                    <span className="sr-only">{action.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                {content.length > 0 && (
                  <span className={`text-sm ${
                    content.length > maxLength * 0.8 
                      ? 'text-amber-500' 
                      : 'text-gray-500'
                  }`}>
                    {content.length}/{maxLength}
                  </span>
                )}
                
                <Button 
                  type="submit"
                  disabled={!content.trim() || content.length > maxLength}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default TweetComposer;