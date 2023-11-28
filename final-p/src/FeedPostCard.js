import React, { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Avatar, IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder, ChatBubbleOutline, SendOutlined, MoreHoriz } from '@material-ui/icons';

const FeedPostCard = ({ content, image, user, date, likeCount, commentCount, shareCount, onShareClick }) => {
  // State for tracking whether the post is liked and the number of likes
  const [liked, setLiked] = useState(false);
  const [likeCountState, setLikeCount] = useState(likeCount);
  const [following, setFollowing] = useState(false);

  // Handler for toggling the like state and updating the like count
  const handleLikeClick = () => {
    if (liked) {
      // If already liked, decrement the like count by 1
      setLikeCount((prevCount) => prevCount - 1);
    } else {
      // If not liked, increment the like count by 1
      setLikeCount((prevCount) => prevCount + 1);
    }
    // Toggle the liked state
    setLiked(!liked);
  };

  // Handler for toggling the follow state
  const handleFollowClick = () => {
    setFollowing(!following);
  };

  return (
    <Card style={{ maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', marginTop: '20px' }}>
      <CardActionArea>
        {image && <CardMedia component="img" alt="Post Image" height="140" image={image} />}
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
              <Avatar src={user.profilePicture} alt="User Avatar" />
              <div style={{ marginLeft: '8px' }}>
                <Typography variant="subtitle1">{user.username}</Typography>
                <Typography variant="body2" color="textSecondary" style={{ fontSize: '12px' }}>{date}</Typography>
              </div>
            </div>
            <Button
              variant="outlined"
              style={{ color: 'white', backgroundColor: 'green' }}
              onClick={handleFollowClick}
            >
              {following ? 'Following' : 'Follow'}
            </Button>
          </div>
          <Typography variant="body2" color="textSecondary" component="div" style={{ color: 'black', textAlign: 'left' }}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" onClick={handleLikeClick} style={{ color: liked ? 'red' : 'red' }}>
            {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
          </IconButton>
          <Typography variant="body2" color="textSecondary" style={{ color: liked ? 'red' : 'red' }}>{likeCountState}</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" style={{ color: 'green' }}>
            <ChatBubbleOutline />
          </IconButton>
          <Typography variant="body2" color="textSecondary" style={{ color: 'green' }}>{commentCount}</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" style={{ color: 'blue' }} onClick={onShareClick}>
            <SendOutlined />
          </IconButton>
          <Typography variant="body2" color="textSecondary" style={{ color: 'blue' }}>{shareCount}</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" style={{ color: 'black' }}>
            <MoreHoriz />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default FeedPostCard;
