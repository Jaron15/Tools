import Image from "next/image";
import { Inter } from "next/font/google";
import RedacContainer from "@/components/RedactorTool/RedacContainer";
import { FaArrowCircleRight, FaArrowCircleLeft  } from "react-icons/fa";
import { useState } from "react";
import FormValidation from "@/components/RedactorTool/FormValidation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showRedactor, setShowRedactor] = useState(true);

  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
      <div className="flex justify-center items-center w-3/4 sm:mb-10">
        <div className="flex-1 flex justify-start">
          {!showRedactor && (
            <FaArrowCircleLeft className="cursor-pointer" size={42} onClick={() => setShowRedactor(true)} />
          )}
        </div>
        <h1 className="font-semibold text-5xl mb-2">{showRedactor ? 'Redactor Tool' : 'Macro validation'}</h1>
        <div className="flex-1 flex justify-end">
          {showRedactor && (
            <FaArrowCircleRight className="cursor-pointer" size={40} onClick={() => setShowRedactor(false)} />
          )}
        </div>
      </div>
      {showRedactor ? <RedacContainer /> : <FormValidation />}
    </main>
  );
}

