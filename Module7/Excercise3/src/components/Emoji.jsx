import React, { useContext } from 'react';
import { EmojiContext } from './EmojiContext';

const Emoji = () => {
  const { emoji, setEmoji } = useContext(EmojiContext); 

  const handleChange = (e) => {
    setEmoji(e.target.value); 
  };

  return (
    <div>
      <h2>Current Emoji: {emoji}</h2>
      <label htmlFor="emoji">Choose an emoji: </label>
      <select id="emoji" value={emoji} onChange={handleChange}>
        <option value="😊">😊 Smiling</option>
        <option value="😢">😢 Sad</option>
        <option value="🚀">🚀 Rocket</option>
        <option value="💰">💰 Money</option>
      </select>
    </div>
  );
};

export default Emoji;
