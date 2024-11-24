import React, { createContext, useState } from 'react';

export const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState('😊'); // Default emoji

  return (
    <EmojiContext.Provider value={{ emoji, setEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};
