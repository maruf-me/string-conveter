import React, { useState, useRef } from "react";
import { convartStringToPascalCase } from "./utility/ConvartPascalCase";

const App = () => {
  const [userInput, setUserInput] = useState('');
  const pascalCaseStr = convartStringToPascalCase(userInput);

  const textRef = useRef(null);

  const handleCopy = () => {
    console.dir(textRef.current);
    if (textRef.current) {
      textRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="space-y-4">

        <div className="space-y-1">
          <label htmlFor="input" className="block">Input</label>
          <input
            id="input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border rounded-md py-2 px-3 shadow-sm focus:outline-none"
          />
        </div>


        <div>
          <p>Expected Value: { }</p>
          <div className="bg-gray-200 p-2 rounded-lg shadow-sm border border-gray-300">

            <textarea ref={textRef} className="break-all min-h-[10rem] w-[30rem] bg-gray-300 px-1 rounded focus:outline-green-200" value={pascalCaseStr} readOnly />
            <div className={`${pascalCaseStr ? 'h-auto opacity-100 visible duration-500' : 'h-0 opacity-0 invisible'} w-full flex justify-end gap-4`}>

              <button onClick={() => setUserInput('')} className="bg-red-300 px-3 py-1 rounded">Clear</button>
              <button onClick={handleCopy} className="bg-green-300 px-3 py-1 rounded">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
