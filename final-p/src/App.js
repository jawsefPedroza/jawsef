import React from 'react';
import './App.css';
import ProfilePage from './ProfilePage';

function App() {
  // Sample user data
  const sampleUser = {
    username: 'JohnDoe',
    profilePicture: 'https://example.com/profile.jpg',
  };

  return (
    <div className="App">
      {/* Display the ProfilePage component with the sample user data */}
      <ProfilePage user={sampleUser} />
    </div>
  );
}

export default App;
