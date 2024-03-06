import React, { useState, useEffect } from 'react';

function FormValidation() {
  const [text, setText] = useState('This is some filler text with a [highlighted] word. To show how some [regex validation] can improve quality');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const containsBrackets = /\[|\]/.test(text);
    const isEmpty = text.trim().length === 0;
    setIsButtonDisabled(containsBrackets || isEmpty);
  }, [text]);
  
  

  const handleSubmit = () => {
    setText(''); 
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg text-black">
      <textarea
        className="w-full h-32 p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className={`mt-2 p-2 rounded-lg ${isButtonDisabled ? 'bg-gray-400' : 'bg-green-500'}`}
        disabled={isButtonDisabled}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default FormValidation;
