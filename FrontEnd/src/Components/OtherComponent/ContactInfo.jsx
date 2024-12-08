import React from "react";
import { Clock, Phone, MapPin, Mail } from "lucide-react";

const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <div className="flex flex-col items-center text-center p-6">
    <Icon className="w-14 h-14 mb-4 text-gray-400" />
    <h3 className="text-2xl font-montserrat font-bold mb-2">{title}</h3>
    {children}
  </div>
);

const ContactInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ContactInfoItem icon={Clock} title="TIMINGS">
          <p className="font-bold mt-4 font-montserrat">Monday to Saturday</p>
          <p className="mt-3 font-montserrat">9:00 AM - 7:00 PM</p>
        </ContactInfoItem>

        <ContactInfoItem icon={Phone} title="CALL US NOW">
          <p className="font-montserrat mt-4">+971 55 734 9696</p>
          <p className="font-montserrat mt-1">+971 55 734 9696</p>
          <p className="font-bold mt-2 font-montserrat">Office</p>
          <p className="font-montserrat mt-2">043373446</p>
        </ContactInfoItem>

        <ContactInfoItem icon={MapPin} title="ADDRESS">
          <div className="w-[500px] mt-4 font-montserrat">
            <p>Abdul Razzaq Mohiddin Abdulla Warehouse</p>
            <p className="mt-1">Shed No-1 Opp. Pedal Art Al Quoz Industrial</p>
            <p className="mt-1">Area - 1</p>
            <p className="mt-3">Dubai</p>
          </div>
        </ContactInfoItem>

        <ContactInfoItem icon={Mail} title="EMAIL US">
          <p className="font-montserrat mt-4">info@designcraft.ae</p>
          <p className="font-montserrat mt-2">sales@designcraft.ae</p>
        </ContactInfoItem>
      </div>
    </div>
  );
};

export default ContactInfo;
