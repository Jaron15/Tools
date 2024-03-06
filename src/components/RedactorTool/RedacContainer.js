import React from 'react'
import EmailRedactor from "./EmailRedactor";
import SNSRedactor from "./SNSRedactor";
import PhoneRedactor from "./PhoneRedactor";
import Modal from '../Modal';
import { useState, useRef } from 'react';

function RedacContainer() {
 const [modalOpen, setModalOpen] = useState(false);
 const [bindingAlert, setBindingAlert] = useState('');
 const timeoutRef = useRef(null);

 const handleModal = (binding) => {
    setBindingAlert(binding)
    setModalOpen(true);
    
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
  
      timeoutRef.current = setTimeout(() => {
        setBindingAlert('');
        setModalOpen(false);
      }, 1000);
    };
  

  return (
    <div>
        
        <div className="relative">
        <div className='flex flex-wrap'>
        <EmailRedactor onCopy={handleModal} />
        <SNSRedactor onCopy={handleModal} />
        <PhoneRedactor onCopy={handleModal} />
        {modalOpen && <Modal binding={bindingAlert}/>}
        </div>
        </div>
    </div>
  )
}

export default RedacContainer