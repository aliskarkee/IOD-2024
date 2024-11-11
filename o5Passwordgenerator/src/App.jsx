import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += "'./,;`][~!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [charAllowed, length, numberAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto shadow-sm rounded-lg px-8 my-8 text-sky-400 bg-gray-600">
      <h1 className="text-black text-center px-0 py-0 mx-0 mr-0">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 text-black">
        <input
          type="text"
          value={password}
          className="text-black px-3 py-4"
          placeholder="Generated password"
          readOnly
        />
        <button
          className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      
      <div className="flex text-sm gap-x-3">
        {/* Length slider */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={15}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        {/* Checkbox for Numbers */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Checkbox for Characters */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charCheck"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charCheck">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
