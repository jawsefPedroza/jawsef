import React, { useState } from 'react';
import ImageBanner from './components/ImageBanner';
import Avatar from './components/Avatar';
import InfoCard from './components/InfoCard';

const ProfilePage = () => {
  const username = "JohnDoe"; // Replace with the actual username
  const [infoCards, setInfoCards] = useState([]);

  const handleAddMore = (title, content) => {
    const newInfoCard = {
      title,
      content,
    };
    setInfoCards([...infoCards, newInfoCard]);
  };

  return (
    <div>
      <ImageBanner imageUrl="https://pbs.twimg.com/media/Ev-lsOYXYAkhxk6.jpg">
        <Avatar imageUrl="https://i.pinimg.com/1200x/44/18/5e/44185e2c03bd66a730d933e0cbb2065b.jpg" username={username} />
      </ImageBanner>

      {/* Add spacing between the username and the first InfoCard */}
      <div style={{ marginTop: '20px' }}>
        {/* Hardcoded InfoCards */}
        <InfoCard title="About me" content="Your about me content goes here" />
        <InfoCard title="Education" content="Your education content goes here" />
        <InfoCard title="Experience" content="Your experience content goes here" />
        <InfoCard title="Projects" content="Your projects content goes here" />

        {/* Dynamic InfoCards */}
        {infoCards.map((infoCard, index) => (
          <InfoCard key={index} title={infoCard.title} content={infoCard.content} onAddMore={handleAddMore} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
