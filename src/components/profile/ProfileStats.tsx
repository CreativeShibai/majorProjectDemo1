import React from 'react';
import { formatNumber, cn } from '../../utils/formatters';

interface ProfileStatsProps {
  tweets: number;
  followers: number;
  following: number;
  className?: string;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ 
  tweets, 
  followers, 
  following,
  className 
}) => {
  const stats = [
    { label: 'Tweets', value: tweets },
    { label: 'Followers', value: followers },
    { label: 'Following', value: following }
  ];

  return (
    <div className={cn('grid grid-cols-3 gap-4 w-full', className)}>
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="font-bold">{formatNumber(stat.value)}</span>
          <span className="text-xs text-gray-500">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProfileStats;