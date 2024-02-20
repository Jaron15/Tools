import React from 'react'
import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";

function EmailRedactor() {
    const [email, setEmail] = useState("test@example.com");
  const [inputValue, setInputValue] = useState('');


  const redactAndCopyEmail = () => {
    const [localPart, domain] = email.split("@");

    const redactedEmail = `${localPart[0]}***${
    localPart[localPart.length - 1]
    }@${domain}`;

    navigator.clipboard
      .writeText(redactedEmail)
      .then(() => {
        console.log("Email copied to clipboard:", redactedEmail);
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
      });
  };
  const generateRandomEmail = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const domains = ['example.com', 'gmail.com', 'yahoo.com', 'icloud.com'];
    let localPart = '';
    const localPartLength = Math.floor(Math.random() * (10 - 2 + 1)) + 2; 

    for (let i = 0; i < localPartLength; i++) {
      localPart += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const domain = domains[Math.floor(Math.random() * domains.length)]; 
    setEmail(`${localPart}@${domain}`);

    setInputValue('');
  };

  return (
    <div className="max-w-lg mx-auto p-5 flex flex-col  gap-5">
    <div className="border border-gray-300 rounded-lg p-4 bg-slate-100">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
        <h2 className="text-lg font-semibold m-0">Email</h2>
        <IoIosRefresh className="cursor-pointer" onClick={generateRandomEmail} />{" "}
      </div>

      <p className="m-0 cursor-pointer" onClick={redactAndCopyEmail}>
        {email}
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
  )
}

export default EmailRedactor
