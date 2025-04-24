import React, { useState } from 'react';
import { Tweet } from '../../types';
import Avatar from '../ui/Avatar';
import { formatNumber } from '../../utils/formatters';
import { MessageCircle, ArrowBigUp, ArrowBigDown, Share2, BookOpen, BadgeCheck, Bookmark } from 'lucide-react';
import Card from '../ui/Card';

interface TweetCardProps {
  tweet: Tweet;
}

const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  const { author, content, createdAt, likes, retweets, replies, views, media, isLiked, isRetweeted } = tweet;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const [showActions, setShowActions] = useState(false);

  const handleUpvote = () => {
    if (!isLikedState) {
      setCurrentLikes(prev => prev + 1);
      setIsLikedState(true);
    } else {
      setCurrentLikes(prev => prev - 1);
      setIsLikedState(false);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Add animation class temporarily
    const button = document.getElementById(`bookmark-${tweet.id}`);
    button?.classList.add('animate-bounce');
    setTimeout(() => button?.classList.remove('animate-bounce'), 1000);
  };

  return (
    <Card 
      className="p-4 hover:bg-gray-50 transition-all duration-200 group"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex gap-4">
        <div className="flex flex-col items-center space-y-2">
          <button 
            onClick={handleUpvote}
            className={`p-2 rounded-xl transition-all duration-200 transform hover:scale-110 ${
              isLikedState 
                ? 'text-primary-600 bg-primary-50' 
                : 'text-gray-500 hover:text-primary-600 hover:bg-primary-50'
            }`}
          >
            <ArrowBigUp size={24} />
          </button>
          <span className={`font-semibold text-sm transition-colors ${
            isLikedState ? 'text-primary-600' : 'text-gray-700'
          }`}>
            {formatNumber(currentLikes)}
          </span>
          <button className="p-2 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all duration-200 transform hover:scale-110">
            <ArrowBigDown size={24} />
          </button>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar src={author.avatar} alt={author.name} size="sm" className="ring-2 ring-white" />
              <div className="flex items-center">
                <span className="font-bold text-gray-900 hover:text-primary-600 cursor-pointer transition-colors">
                  {author.name}
                </span>
                {author.verified && (
                  <BadgeCheck size={16} className="ml-1 text-primary-600" />
                )}
                <span className="ml-1 text-gray-500">@{author.username}</span>
                <span className="mx-1 text-gray-500">·</span>
                <span className="text-gray-500 text-sm hover:text-primary-600 cursor-pointer">
                  {createdAt}
                </span>
              </div>
            </div>
            
            <button
              id={`bookmark-${tweet.id}`}
              onClick={handleBookmark}
              className={`p-2 rounded-xl transition-all duration-200 ${
                showActions ? 'opacity-100' : 'opacity-0'
              } ${
                isBookmarked 
                  ? 'text-secondary-600 bg-secondary-50' 
                  : 'text-gray-400 hover:text-secondary-600 hover:bg-secondary-50'
              }`}
            >
              <Bookmark size={20} />
            </button>
          </div>
          
          <div className="mt-2">
            <p className="text-gray-900 text-base leading-relaxed">{content}</p>
            
            {media && media.length > 0 && (
              <div className="mt-3 rounded-xl overflow-hidden">
                <img 
                  src={media[0]} 
                  alt="Post media" 
                  className="w-full h-auto max-h-96 object-cover transition-transform duration-200 group-hover:scale-[1.01]"
                />
              </div>
            )}
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-all duration-200 group">
                <div className="p-2 rounded-xl group-hover:bg-primary-50 transition-colors">
                  <MessageCircle size={18} />
                </div>
                <span className="text-sm">{formatNumber(replies)} replies</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-all duration-200 group">
                <div className="p-2 rounded-xl group-hover:bg-green-50 transition-colors">
                  <Share2 size={18} />
                </div>
                <span className="text-sm">{formatNumber(retweets)} shares</span>
              </button>
              <div className="flex items-center space-x-2 text-gray-500 group">
                <div className="p-2 rounded-xl group-hover:bg-gray-100 transition-colors">
                  <BookOpen size={18} />
                </div>
                <span className="text-sm">{formatNumber(views)} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TweetCard;