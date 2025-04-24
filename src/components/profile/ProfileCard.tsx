import React from 'react';
import { User } from '../../types';
import Avatar from '../ui/Avatar';
import ProfileStats from './ProfileStats';
import { MapPin, BadgeCheck } from 'lucide-react';
import Card from '../ui/Card';

interface ProfileCardProps {
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center text-center">
        <Avatar src={user.avatar} alt={user.name} size="xl" />
        
        <div className="mt-4 space-y-1">
          <div className="flex items-center justify-center space-x-1">
            <h2 className="text-xl font-bold">{user.name}</h2>
            {user.verified && (
              <BadgeCheck size={16} className="text-blue-500" />
            )}
          </div>
          
          <p className="text-gray-500">@{user.username}</p>
          
          {user.location && (
            <div className="flex items-center justify-center text-gray-500 text-sm mt-1">
              <MapPin size={14} className="mr-1" />
              <span>{user.location}</span>
            </div>
          )}
        </div>
        
        {user.bio && (
          <p className="mt-4 text-gray-700 text-sm">{user.bio}</p>
        )}
        
        <ProfileStats 
          tweets={user.tweets} 
          followers={user.followers} 
          following={user.following} 
          className="mt-6"
        />
      </div>
    </Card>
  );
};

export default ProfileCard;