import React from 'react';
import { EmojiProvider } from './components/EmojiContext'; 
import Emoji from './components/Emoji';
import BitcoinRates from './components/BitcoinRates'; 

function App() {
  return (
    <EmojiProvider>
      <div className="App">
        <Emoji /> {}
        <BitcoinRates /> {}
      </div>
    </EmojiProvider>
  );
}

export default App;
