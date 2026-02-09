import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TimelineSection } from '@/components/TimelineSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CursorGlow } from '@/components/CursorGlow';
import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';

const Background3D = lazy(() => import('@/components/Background3D').then(module => ({ default: module.Background3D })));

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{profile.name}</title>
        <meta name="description" content={`${profile.name} - ${profile.taglines[0]}. ${profile.bio}`} />
        <meta name="keywords" content={`${profile.name}, developer, portfolio, ${profile.skills.map(s => s.name).join(', ')}`} />
        <meta property="og:title" content={`${profile.name} | Developer Portfolio`} />
        <meta property="og:description" content={profile.bio} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.amanshu.in/" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* 3D Background */}
        <Suspense fallback={<div className="fixed inset-0 bg-background -z-10" />}>
          <Background3D />
        </Suspense>

        {/* Cursor Glow Effect */}
        <CursorGlow />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
