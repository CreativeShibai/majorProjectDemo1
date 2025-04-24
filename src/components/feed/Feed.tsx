import React from 'react';
import TweetCard from '../tweet/TweetCard';
import TweetComposer from '../tweet/TweetComposer';
import { Tweet } from '../../types';

interface FeedProps {
  tweets: Tweet[];
  onTweet?: (content: string) => void;
}

const Feed: React.FC<FeedProps> = ({ tweets, onTweet }) => {
  return (
    <div className="space-y-4">
      <TweetComposer onTweet={onTweet} />
      
      {tweets.length > 0 ? (
        <div className="space-y-2">
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-gray-500">
          No tweets to display. Start following people or post your first tweet!
        </div>
      )}
    </div>
  );
};

export default Feed;