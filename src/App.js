import React, { useState, useRef } from "react";
import { convartStringToPascalCase } from "./utility/ConvartPascalCase";

const App = () => {
  const [userInput, setUserInput] = useState('');
  const pascalCaseStr = convartStringToPascalCase(userInput?.trim());

  const stringifyInput = JSON.stringify(userInput);
  const stringifyValue = JSON.stringify(pascalCaseStr);
  const stringify = `${stringifyValue}: ${stringifyInput}`;

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
      <div className="space-y-4 min-w-[30rem] max-w-[42rem]">

        <div className="space-y-1">
          <label htmlFor="input" className="block">Input</label>
          <input
            id="input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border rounded-md py-2 px-3 shadow-sm focus:outline-none w-full"
          />
        </div>


        <div>
          <p>Expected Value: { }</p>
          <div className="bg-gray-200 p-2 rounded-lg shadow-sm border border-gray-300">

            <textarea
              readOnly
              ref={textRef}
              value={userInput ? stringify : ''}
              className="break-all min-h-[10rem] w-full bg-gray-300 px-1 rounded focus:outline-green-200"
            />

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
