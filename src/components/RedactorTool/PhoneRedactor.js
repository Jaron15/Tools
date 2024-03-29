import { React, useState } from "react";
import { IoIosRefresh } from "react-icons/io";

function PhoneRedactor({onCopy}) {
    const [phoneNumber, setPhoneNumber] = useState(`+16235556431`);
  const [inputValue, setInputValue] = useState('');

  const redactAndCopyPhoneNumber = () => {
    const redactedNumber = `${phoneNumber.slice(-2)}`;

    if (navigator.clipboard) {
      // Use the Clipboard API if available
      navigator.clipboard
        .writeText(redactedNumber)
        .then(() => {
          console.log("Email copied to clipboard:", redactedNumber);
        })
        .catch((err) => {
          console.error("Failed to copy email:", err);
        });
    } else {
      // Fallback to the older execCommand method
      const textArea = document.createElement("textarea");
      textArea.value = redactedNumber;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        console.log("Email copied to clipboard:", redactedNumber);
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
      document.body.removeChild(textArea);
    }
      onCopy("Phone");
  };

  const generateRandomPhoneNumber = () => {
    let number = '+1';
    for (let i = 0; i < 10; i++) {
      number += Math.floor(Math.random() * 10);
    }

    setPhoneNumber(number);
    setInputValue('');
  };


  return (
    <div className="max-w-lg mx-auto p-5 flex flex-col gap-5 text-black">
      <div className="border border-gray-300 rounded-lg p-4 bg-slate-100">
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
          <h2 className="text-lg font-semibold m-0">Phone Number</h2>
          <IoIosRefresh className="cursor-pointer" onClick={generateRandomPhoneNumber} />
        </div>

        <p className="m-0 cursor-pointer" onClick={redactAndCopyPhoneNumber}>
          {phoneNumber}
        </p>
      </div>

      <div className="border border-gray-300 rounded-lg">
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

export default PhoneRedactor