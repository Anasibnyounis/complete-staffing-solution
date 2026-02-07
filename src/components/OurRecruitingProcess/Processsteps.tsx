import React from 'react';
import styles from './Processsteps.module.css';
import { title } from 'process';

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      title: 'HOW OUR PROCESS WORKS',
      subtitle: 'We identify the best candidates using direct recruitment methods others don’t access.',
      description: `Our data-based recruiting methodology will narrow our search to the ideal candidate for your opening. We actively try to get the best candidates through our extensive professional networks, advertising, cold calling, research, our extensive database, and employee recommendations. Through our complete candidate testing, screening, and interview process, we do a thorough initial, technical skills, and background reference examinations to ensure the pool of candidates you meet are top quality.`
    },
    {
      title: '',
      subtitle: 'Once we make recommendations, we help you shortlist candidates for interviews or assignments.',
      description: `Once we have recommended a few candidates for you, we give support in helping conduct the interview and extend the invitation to do so to this candidate, including how to create the position. We aim to continue following that person even after he/she has been hired, if necessary, to make the right on-going recommendations for us to be able to recognize they are able to enjoy a long term success at the company.`
    },
    {
      title: '',
      subtitle: 'Onsite Solutions',
      description: `If the ideal on site outsourced approach is actually required, the place is actually in your office, or perhaps in a variety of locations, we can help you set up that up the way you want it and run it as well-for a cost. You supply the resources we source, screen and supply the talent and management. We work with other organizations on planning and supply chains, in order to keep cost down while delivering quality.`
    },
    {
      title: '',
      subtitle: '',
      smalltitle:'Referrals',
      description: `Should you be pleased with what we do for you, please tell other people. We believe that the satisfied client is definitely the greatest advertisement. We continue to strive for quality and value for our customers.`
    },
    {
      title: '',
      subtitle: '',
      smalltitle:'Team Recruitment Approach',
      description: 'Complete Staffing’s recruiting approach allows all of our team members to participate in finding you the best possible match for your open position.'
    }
  ];

  return (
  <section className={styles.section}>
      <div className={styles.container}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={styles.step}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.stepContent}>
              {step.title && (
                <h2 className={styles.stepTitle}>{step.title}</h2>
              )}

              {step.smalltitle && (
                <h4 className={styles.stepSmallTitle}>{step.smalltitle}</h4>
              )}

              {step.subtitle && (
                <h3 className={styles.stepSubtitle}>{step.subtitle}</h3>
              )}

              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;