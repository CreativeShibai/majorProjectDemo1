import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import ProfileCard from '../components/profile/ProfileCard';
import Feed from '../components/feed/Feed';
import SuggestedUsers from '../components/suggestions/SuggestedUsers';
import { currentUser } from '../data/users';
import { tweets as initialTweets } from '../data/tweets';
import { suggestedUsers } from '../data/users';
import { Tweet } from '../types';
import { formatDistanceToNow } from 'date-fns';

const HomePage: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>(initialTweets);

  const handleNewTweet = (content: string) => {
    const newTweet: Tweet = {
      id: Date.now().toString(),
      content,
      author: currentUser,
      createdAt: formatDistanceToNow(new Date(), { addSuffix: true }),
      likes: 0,
      retweets: 0,
      replies: 0,
      views: 0,
      isLiked: false,
      isRetweeted: false
    };
    
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto pt-20 pb-16 md:pb-0 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20">
              <ProfileCard user={currentUser} />
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <Feed tweets={tweets} onTweet={handleNewTweet} />
          </div>
          
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20 space-y-4">
              <SuggestedUsers users={suggestedUsers} />
              
              <div className="text-xs text-gray-500 mt-4">
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="hover:underline">Terms of Service</a>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                  <a href="#" className="hover:underline">Cookie Policy</a>
                  <a href="#" className="hover:underline">Accessibility</a>
                  <a href="#" className="hover:underline">Ads Info</a>
                  <a href="#" className="hover:underline">More</a>
                </div>
                <div className="mt-2">
                  © 2025 SocietyX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;