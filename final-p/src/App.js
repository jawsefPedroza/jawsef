import React from 'react';
import './App.css';
import FeedPostCard from './FeedPostCard'; 
function App() {
  const sampleUser = {
    username: 'JohnDoe',
    profilePicture: 'https://example.com/profile.jpg',
  };

  return (
    <div className="App">
      {/* Use the FeedPostCard component */}
      <FeedPostCard
        content="Come check out our next general meeting at Building 8 on Thursday (10/03)"
        user={sampleUser}
        date="November 27, 2023"
        likeCount={10}
        commentCount={5}
        shareCount={3}
        onLikeClick={() => console.log('Liked')}
        onShareClick={() => console.log('Shared')}
      />
    </div>
  );
}

export default App;
