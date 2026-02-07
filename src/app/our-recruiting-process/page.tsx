import React from 'react';
import { Header } from '@/components/Header';
import {Footer} from '@/components/Footer';
import JobRequestSection from '@/components/JobRequestSection';
import HeroSection from '@/components/OurRecruitingProcess/Herosection ';
import ProcessSteps from '@/components/OurRecruitingProcess/Processsteps';
export default function OurRecruitingProcess() {
  return (
    <main>
      <HeroSection />
      <ProcessSteps />
      <JobRequestSection />
    </main>
  );
}