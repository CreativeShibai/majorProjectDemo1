import { Tweet } from '../types';
import { users } from './users';
import { formatDistanceToNow } from 'date-fns';

export const tweets: Tweet[] = [
  {
    id: '1',
    content: 'Whatever sins this platform may have, being boring is not one of them',
    author: users[0],
    createdAt: formatDistanceToNow(new Date(Date.now() - 15 * 60 * 1000), { addSuffix: true }),
    likes: 35400,
    retweets: 5934,
    replies: 3045,
    views: 3167000,
    isLiked: false,
    isRetweeted: false
  },
  {
    id: '2',
    content: '"Embrace your inner warrior, rise above the negativity and stay focused on your goals." #QOTD',
    author: users[1],
    createdAt: formatDistanceToNow(new Date(Date.now() - 2 * 60 * 60 * 1000), { addSuffix: true }),
    likes: 14200,
    retweets: 2348,
    replies: 834,
    views: 987000,
    isLiked: false,
    isRetweeted: false,
    media: ['https://images.pexels.com/photos/3787752/pexels-photo-3787752.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: '3',
    content: 'Just launched our new product! Check it out and let me know what you think.',
    author: users[2],
    createdAt: formatDistanceToNow(new Date(Date.now() - 8 * 60 * 60 * 1000), { addSuffix: true }),
    likes: 4321,
    retweets: 987,
    replies: 432,
    views: 156000,
    isLiked: true,
    isRetweeted: false
  }
];