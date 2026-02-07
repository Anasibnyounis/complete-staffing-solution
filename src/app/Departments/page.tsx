import React from 'react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import DepartmentsHero from '@/components/Departments/Departmentshero';
import IndustryTabs from '@/components/Departments/Industrytabs';
import JobRequestSection from '@/components/JobRequestSection';
export default function Departments() {
  return (
    <main>
      <DepartmentsHero />
      <IndustryTabs />
      <JobRequestSection />
    </main>
  );
}