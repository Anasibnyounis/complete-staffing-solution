import React from 'react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import ContactHero from '@/components/ContactUs/Contacthero';

import OfficeLocations from '@/components/ContactUs/Officelocations';
export default function ContactUs() {
  return (
    <main>
      <ContactHero />
      <OfficeLocations />
    </main>
  );
}