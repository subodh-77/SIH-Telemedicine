import React from 'react'
import InfoCard from './InfoCard'
import { PiBrainLight } from "react-icons/pi";
import { MdOutlineVideocam } from "react-icons/md";
import { LuBookMinus } from "react-icons/lu";
import { FaCapsules } from "react-icons/fa";
function Info() {
  return (
     <div className="bg-white  ">
      <div className="flex items-center justify-center pt-10">
        <div className="flex flex-col items-center w-[100%] justify-center">
            <h2 className="font-semibold text-4xl heading  pb-2">Comprehensive Healthcare Services</h2>
            <p className="subheading text-center">Bridging the healthcare gap in rural communities with technology-driven solutions
           that make health care accessible to everyone.</p>
           <div className='flex  gap-10 mt-6 '>
             <InfoCard
            icon={<PiBrainLight/>}
            title="AI Symptom Checker"
            description="Get preliminary health insights using our AI-powered tool."
            features={[
              "Quick Assessment",
              "Reliable Insights",
              "Emergency Detection",
            ]}
            buttonText="Check Symptoms"
          />
             <InfoCard
             icon={<MdOutlineVideocam/>}
            title="Video Consultations"
            description="Connect with qualified doctors through secure video calls. Available 24/7 for urgent consultations."
            features={["HD Video Quality", "Secure & Private", "Multi-language Support"]}
            buttonText="Start Consultation"
          />

            <InfoCard
            icon={<LuBookMinus/>}
            title="Digital Health Records"
            description="Store and access your medical history, prescriptions, and test results anytime, anywhere."
            features={["Offline Access", "Secure Storage", "Easy Sharing"]}
            buttonText="View Records"
          />
            <InfoCard
            icon={<FaCapsules/>}
           title="Medicine Availability"
            description="Check real-time availability of medicines in nearby pharmacies across rural areas."
            features={["Real-time Updates", "Nearby Pharmacies", "Price Comparison"]}
            buttonText="Find Medicine"
          />
          </div>
            </div>
        </div>
      </div>
    
     
  )
}

export default Info