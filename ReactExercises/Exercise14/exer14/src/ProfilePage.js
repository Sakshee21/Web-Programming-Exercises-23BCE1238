import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import './App.css';


const ProfilePage = () => {
  const user = {
    name: 'Sakshee Ujjwal Kumat',
    email: 'saksheeujjwal.kumat2023@vitstudent.ac.in',
    bio: 'Software Engineer with a passion for building scalable web applications.',
    imageUrl: '/Images/image.jpg',
    posts: [
      'Post 1: This is my first post!',
      'Post 2: Another day, another blog post.',
      'Post 3: React is awesome!',
    ],
  };


  return (
    <div className="profile-page">
      <ProfileImage imageUrl="/Images/image.jpg" />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};


export default ProfilePage;