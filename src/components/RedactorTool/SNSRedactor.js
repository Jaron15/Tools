import React from 'react';
import { useState } from 'react';
import { IoIosRefresh } from 'react-icons/io';

function SNSRedactor({onCopy}) {
  const [snsHandle, setSnsHandle] = useState(`test accounts`);
  const [inputValue, setInputValue] = useState('');

  const redactAndCopyHandle = () => {
    const words = snsHandle.split(' ');
    const redactedWords = words.map((word) => {
      if (word.length > 1) {
        return `${word[0]}***${word[word.length - 1]}`;
      } else if (word.length === 1) {
        return `${word[0]}***`;
      }
      return word;
    });

    const redactedHandle = redactedWords.join(' ');

    navigator.clipboard
      .writeText(redactedHandle)
      .then(() => {
        console.log('SNS handle copied to clipboard:', redactedHandle);
      })
      .catch((err) => {
        console.error('Failed to copy SNS handle:', err);
      });
      onCopy("SNS");
  };

  const generateRandomHandle = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const wordCount = Math.floor(Math.random() * 3) + 1; 
    let handle = '';
  
    for (let i = 0; i < wordCount; i++) {
      let word = '';
      const wordLength = Math.floor(Math.random() * (10 - 2 + 1)) + 2; 
  
      for (let j = 0; j < wordLength; j++) {
        word += characters.charAt(Math.floor(Math.random() * characters.length));
      }
  
      handle += i === 0 ? word : ' ' + word; 
    }
  
    setSnsHandle(handle);
    setInputValue('');
  };
  

  return (
    <div className="max-w-lg mx-auto p-5 flex flex-col  gap-5">
      <div className="border border-gray-300 rounded-lg p-4 bg-slate-100">
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
          <h2 className="text-lg font-semibold m-0">SNS</h2>
          <IoIosRefresh className="cursor-pointer" onClick={generateRandomHandle} />
        </div>

        <p className="m-0 cursor-pointer" onClick={redactAndCopyHandle}>
          {snsHandle}
        </p>
      </div>

      <div className="border border-gray-300 rounded-lg ">
        <input
          className="w-full h-24 border-none outline-none rounded resize-none p-2"
          placeholder="Paste here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default SNSRedactor;
