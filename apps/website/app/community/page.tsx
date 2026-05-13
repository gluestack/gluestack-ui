'use client';
import React, { useState, useEffect } from 'react';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import BadgeComponent from '@/components/page-components/landing-page/BadgeComponent';
import Footer from '@/components/page-components/landing-page/Footer';
import InternshipForm from './InternshipForm';
import CFPForm from './CFPForm';
import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';

type Tab = 'interns' | 'cfp';

const Community = () => {
  const [activeTab, setActiveTab] = useState<Tab>('interns');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'cfp') setActiveTab('cfp');
  }, []);

  return (
    <WebsiteLayout applyBgImage={true}>
      <Box className="justify-center max-w-[1440px] w-[85%] my-0 mx-auto relative pt-20 mt-56 xl:mt-24">
        {/* Hero */}
        <VStack className="justify-center mb-8 max-w-[1000px]">
          <Heading className="font-bold leading-[48px] max-w-[750px] my-0 text-4xl md:text-6xl md:leading-[72px] lg:mx-0 text-typography-900">
            Join the gluestack Community
          </Heading>
          <Text className="text-typography-700 leading-8 mt-2 text-2xl max-w-[750px]">
            Whether you're looking to learn as an intern or share your expertise
            through talks and contributions — we'd love to hear from you.
          </Text>
        </VStack>

        {/* Tab bar */}
        <HStack className="gap-0 mb-8 border-b border-outline-200">
          <button
            onClick={() => {
              setActiveTab('interns');
              window.history.replaceState(null, '', '/community');
            }}
            className={`px-6 py-3 text-base font-medium transition-colors ${
              activeTab === 'interns'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-typography-500 hover:text-typography-700'
            }`}
          >
            Internship Program
          </button>
          <button
            onClick={() => {
              setActiveTab('cfp');
              window.history.replaceState(null, '', '/community#cfp');
            }}
            className={`px-6 py-3 text-base font-medium transition-colors ${
              activeTab === 'cfp'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-typography-500 hover:text-typography-700'
            }`}
          >
            Call for Proposals
          </button>
        </HStack>

        {/* Tab content */}
        {activeTab === 'interns' ? (
          <Box className="items-center lg:flex-row">
            {/* Left: Program description */}
            <VStack className="justify-center mb-16 sm:mx-auto lg:w-[60%] lg:pr-2 lg:mb-0 max-w-[1000px]">
              <Text className="text-typography-700 leading-7 text-lg max-w-[600px]">
                The gluestack internship program is designed for students and
                early-career developers who want to contribute to open-source
                React and React Native tooling.
              </Text>
              <Box className="mt-6 gap-4">
                <Text className="text-typography-900 text-lg font-semibold">
                  What you'll work on
                </Text>
                <ul className="list-disc list-inside text-typography-700 space-y-2 text-base">
                  <li>
                    Building and improving UI components used by thousands of
                    developers
                  </li>
                  <li>
                    Writing documentation, guides, and blog posts for the
                    community
                  </li>
                  <li>
                    Contributing to gluestack's core libraries and design system
                  </li>
                  <li>
                    Collaborating with the team on real-world React/React Native
                    projects
                  </li>
                </ul>
              </Box>
              <Box className="mt-6 gap-4">
                <Text className="text-typography-900 text-lg font-semibold">
                  What we offer
                </Text>
                <ul className="list-disc list-inside text-typography-700 space-y-2 text-base">
                  <li>Mentorship from experienced React/React Native engineers</li>
                  <li>Flexible remote schedule</li>
                  <li>Direct impact on a widely-used open-source project</li>
                  <li>Community recognition and networking opportunities</li>
                </ul>
              </Box>
            </VStack>

            {/* Right: Form */}
            <InternshipForm />
          </Box>
        ) : (
          <Box className="items-center lg:flex-row">
            {/* Left: CFP description */}
            <VStack className="justify-center mb-16 sm:mx-auto lg:w-[60%] lg:pr-2 lg:mb-0 max-w-[1000px]">
              <Text className="text-typography-700 leading-7 text-lg max-w-[600px]">
                We're always looking for community members to share their
                knowledge and contribute to the gluestack ecosystem. Submit a
                proposal for a talk, workshop, or project contribution.
              </Text>
              <Box className="mt-6 gap-4">
                <Text className="text-typography-900 text-lg font-semibold">
                  What we're looking for
                </Text>
                <ul className="list-disc list-inside text-typography-700 space-y-2 text-base">
                  <li>
                    <strong>Talks</strong> — Share your experience with
                    gluestack, React Native, or design systems at events or on
                    our channels
                  </li>
                  <li>
                    <strong>Workshops</strong> — Lead hands-on sessions teaching
                    others how to build with gluestack
                  </li>
                  <li>
                    <strong>Project Contributions</strong> — Propose new
                    features, components, or improvements to the gluestack
                    ecosystem
                  </li>
                </ul>
              </Box>
              <Box className="mt-6 gap-4">
                <Text className="text-typography-900 text-lg font-semibold">
                  Why submit?
                </Text>
                <ul className="list-disc list-inside text-typography-700 space-y-2 text-base">
                  <li>Get visibility in the gluestack community</li>
                  <li>Receive mentorship and support from the core team</li>
                  <li>Build your portfolio of real-world contributions</li>
                  <li>Join a network of React/React Native practitioners</li>
                </ul>
              </Box>
            </VStack>

            {/* Right: Form */}
            <CFPForm />
          </Box>
        )}
      </Box>
      <BadgeComponent />
      <Footer />
    </WebsiteLayout>
  );
};

export default Community;
