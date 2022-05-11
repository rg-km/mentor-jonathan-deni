import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // TODO: answer here
  return (
    <RandomEmoji />
  )
}

function RandomEmoji() {
  const [emoji, setEmoji] = useState('');
  useEffect(() => {
    setEmoji(randomEmoji())
  }, []);
  // TODO: answer here
  return (
    <div className="wrapper">
      <h1 className='emoji' data-testid="emoji">{emoji}</h1>
      <button 
        onClick={() => setEmoji(randomEmoji())}
        className="button"
        >Acak emoji</button>
    </div>
  );
}

export function randomEmoji() {
  const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚',  '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🥳', '🥴', '🥺', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
];
  // TODO: answer here
  return emojis[Math.floor(Math.random() * emojis.length)]
};

export default App;