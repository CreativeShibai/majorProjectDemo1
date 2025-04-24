import { User } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Peter Kajba',
  username: 'thepeterkaj',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
  location: 'Croatia',
  bio: 'UI/UX Designer and Web Developer from Croatia',
  followers: 491,
  following: 45,
  tweets: 9
};

export const users: User[] = [
  {
    id: '2',
    name: 'Elon Musk',
    username: 'elonmusk',
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: true,
    followers: 126000000,
    following: 123,
    tweets: 8524
  },
  {
    id: '3',
    name: 'Entrepreneur',
    username: 'Entrepreneur',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: true,
    followers: 3700000,
    following: 982,
    tweets: 42158
  },
  {
    id: '4',
    name: 'SpaceX',
    username: 'SpaceX',
    avatar: 'https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    verified: true,
    followers: 7200000,
    following: 95,
    tweets: 3841
  },
  {
    id: '5',
    name: 'Netflix Co.',
    username: 'Netflix',
    avatar: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: true,
    followers: 9500000,
    following: 124,
    tweets: 42500
  },
  {
    id: '6',
    name: 'Google',
    username: 'Google',
    avatar: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: true,
    followers: 11300000,
    following: 521,
    tweets: 14851
  }
];

export const suggestedUsers = users.slice(3);