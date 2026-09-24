import Contact from '@/components/Contact';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import DevelopmentJourney from '@/components/DevelopmentJourney';
import ExperienceEducation from '@/components/ExperienceEducation';
import GithubActivity from '@/components/GithubActivity';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import { Button } from '@heroui/react';

export default function Home() {
  return (
  <div>
     <Hero></Hero>
  {/* <Skills></Skills> */}
  {/* <Services></Services> */}
  {/* <Projects></Projects> */}
  {/* <GithubActivity></GithubActivity> */}
  <ExperienceEducation></ExperienceEducation>
  {/* <Contact></Contact> */}
  <DevelopmentJourney></DevelopmentJourney>
  <CurrentlyLearning></CurrentlyLearning>
  </div>
  );
}
