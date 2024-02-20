import React from 'react'
import EmailRedactor from "./EmailRedactor";
import SNSRedactor from "./SNSRedactor";
import PhoneRedactor from "./PhoneRedactor";

function RedacContainer() {
  return (
    <div>
        <div className='flex justify-center'>
            <h1 className='font-semibold text-5xl mb-2'>Redactor Tool</h1>
        </div>
        <div className='flex flex-wrap'>
        <EmailRedactor />
        <SNSRedactor />
        <PhoneRedactor />
        </div>
    </div>
  )
}

export default RedacContainer