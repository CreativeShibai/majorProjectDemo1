import React from 'react';
import { User } from '../../types';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import { BadgeCheck } from 'lucide-react';
import Card from '../ui/Card';

interface SuggestedUsersProps {
  users: User[];
}

const SuggestedUsers: React.FC<SuggestedUsersProps> = ({ users }) => {
  return (
    <Card className="p-4">
      <h2 className="font-bold text-xl mb-4">Who to follow</h2>
      
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar src={user.avatar} alt={user.name} size="sm" />
              
              <div>
                <div className="flex items-center">
                  <span className="font-semibold text-sm">{user.name}</span>
                  {user.verified && (
                    <BadgeCheck size={14} className="ml-1 text-blue-500" />
                  )}
                </div>
                <span className="text-gray-500 text-xs">@{user.username}</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
            >
              + Follow
            </Button>
          </div>
        ))}
      </div>
      
      <button className="mt-4 text-blue-500 text-sm hover:text-blue-600 transition-colors">
        See more
      </button>
    </Card>
  );
};

export default SuggestedUsers;