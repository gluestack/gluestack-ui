'use client';
import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Link } from '@/components/ui/link';
import { LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import BadgeComponent from '@/components/page-components/landing-page/BadgeComponent';
import Footer from '@/components/page-components/landing-page/Footer';
import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';

const CookiePolicy = () => {
  return (
    <WebsiteLayout applyBgImage={true}>
      <Box className="justify-center max-w-[1440px] w-[85%] self-center pt-40 md:pt-[140px]">
        <Box className="w-full">
          <Text className="mb-4">Effective Date: 12/23/2022</Text>
          <Heading
            className="text-4xl lg:text-5xl mt-0"
          >
            COOKIE POLICY
          </Heading>
          <Text className="text-xl lg:text-2xl font-bold mb-4 mt-9">
            1.&nbsp; Introduction
          </Text>
          <Box className="ml-4 lg:ml-7">
            <Text className="my-3 font-normal">Welcome to GeekyAnts Inc.</Text>
            <Text className="my-3 font-normal">
              GeekyAnts Inc. (<span className="font-bold">&quot;us&quot;</span>
              ,&nbsp;
              <span className="font-bold">&quot;we&quot;</span>, or&nbsp;
              <span className="font-bold">&quot;our&quot;</span>) understands
              that your privacy is important to you and are committed to being
              transparent about the technology it uses. This Cookie Policy
              explains how and why cookies and other technologies may be stored
              on and accessed from your device when you use our Services and
              your related choices.
            </Text>
            <Text className="my-3 font-normal">
              The terms used in this Cookie Policy but not defined here will
              have the meanings given to them in our&nbsp;
              <Link className="no-underline" href="/privacy-policy">
                Privacy Policy
              </Link>
              . Therefore, this Cookie Policy must be read with our Privacy
              Policy.
            </Text>
            <Text className="my-3 font-bold">
              By continuing to use our Services, you agree that we can store,
              and access Cookies and Other Tracking Technologies as described in
              this Cookie Policy.
            </Text>
          </Box>
          <Text className="text-xl lg:text-2xl font-bold mb-4 mt-9">
            2. What are Cookies, Pixels and Local Storage?
          </Text>
          <Box className="ml-4 lg:ml-7">
            <Text className="my-3 font-normal">
              Cookies are small files that websites place on your computer as
              you browse the web. Like many commercial websites, we use cookies.
              Cookies — and similar technologies — do lots of different jobs,
              like letting you navigate between pages efficiently, remembering
              your preferences, and generally improving the user experience.
              Cookies and other technologies may also be used to measure the
              effectiveness of marketing and otherwise assist us in making your
              use of the Services and its features more relevant and useful to
              you.
            </Text>
            <Text className="my-3 font-normal">
              Pixel tags (also known as&nbsp;
              <span className="font-bold">&quot;web beacons&quot;</span>{' '}
              or&nbsp;
              <span className="font-bold">&quot;pixels&quot;</span>) are small
              blocks of code on a web page or in an email notification. Pixels
              allow companies to collect information such as an
              individual&apos;s IP address, when the individual viewed the pixel
              and the type of browser used. We use pixel tags to understand
              whether you&apos;ve interacted with content on our Platform, which
              helps us measure and improve our Platform and personalize your
              experience.
            </Text>
            <Text className="my-3 font-normal">
              Local storage allows a website to store information locally on
              your computer or mobile device. Local storage is mainly used to
              store and retrieve data in HTML pages from the same domain. We use
              local storage to customize what we show you based on your past
              interactions with our Platform. It is important to understand that
              cookies (and the technologies listed above) collect personal
              information as well as non-identifiable information.
            </Text>
          </Box>
          <Text className="text-xl lg:text-2xl font-bold mb-4 mt-9">
            3. How and Why Do We Use Your Cookies?
          </Text>
          <Box className="ml-4 lg:ml-7">
            <Text className="my-3 font-normal">
              We use both 1st party cookies (which are set by us) and 3rd party
              cookies (which are set by a server located outside the domain of
              our Site). Some of the cookies or similar technologies that we use
              are&nbsp;
              <span className="font-bold">&quot;strictly necessary&quot;</span>,
              meaning they are essential to the Site. Without them, the Site
              will not work. Other cookies or similar technologies, while not
              essential, help us improve our Platform or measure audiences.
            </Text>
            <Text className="my-3 font-bold">
              Why we use cookies is described below in more detail:
            </Text>
            <Box className="lg:ml-7">
              <Text className="my-3 font-normal">
                a. &nbsp;
                <span className="font-bold">
                  Strictly Necessary or Essential Cookies:
                </span>
                &nbsp;These cookies are necessary for the Site to function and
                cannot be switched off in our systems. For example, we use
                cookies to authenticate you. When you log on to our websites,
                authentication cookies are set which let us know who you are
                during a browsing session. We have to load essential cookies for
                legitimate interests pursued by us in delivering our Site&apos;s
                essential functionality to you.
              </Text>
              <Text className="my-3 font-normal">
                b. &nbsp;
                <span className="font-bold">
                  Performance and Analytics Cookies:
                </span>
                &nbsp;These cookies allow us to count visits and traffic sources
                so we can measure and improve the performance of our Site. They
                help us to know which pages are the most and least popular and
                see how visitors navigate the Site. Performance cookies are used
                to help us with our analytics, including to compile statistics
                and analytics about your use of and interaction with the Site,
                including details about how and where our Site are accessed, how
                often you visit or use the Site, the date and time of your
                visits, your actions on the Site, and other similar traffic,
                usage, and trend data.
              </Text>
              <Text className="my-3 font-normal">
                c. &nbsp;
                <span className="font-bold">
                  Advertisement and Targeting Cookies:
                </span>
                &nbsp;These cookies are used to provide visitors with relevant
                ads and marketing campaigns. These cookies track visitors across
                websites and collect information to provide customized ads.
              </Text>
            </Box>
            <Text className="text-xl lg:text-2xl font-bold mb-4 mt-9">
              4. Your Choices
            </Text>
            <Box className="lg:ml-7">
              <Text className="my-3 font-normal">
                You can learn more about cookies by visiting
                https://www.allaboutcookies.org/, which includes additional
                useful information on cookies and how to block cookies using
                different types of browsers.
              </Text>
              <Text className="my-3 font-normal">
                If you&apos;d like to remove or disable cookies via your
                browser, please refer to your browser&apos;s configuration
                documentation. Please note, however, that by blocking or
                deleting all cookies used on the Site, you may not be able to
                take full advantage of the Site and you may not be able to
                properly log on to the Site. For analytics, we use Google
                Analytics. To opt out from Google Analytics, you can download a
                plug-in by visiting https://tools.google.com/dlpage/gaoptout.
              </Text>
            </Box>
            <Text className="text-xl lg:text-2xl font-bold mb-4 mt-9">
              5. Our Customers
            </Text>
            <Box className="lg:ml-7">
              <Text className="my-3 font-normal">
                Customers who separately use cookies or similar technologies on
                their website hosted by us are independently and solely
                responsible for management of the data collected through those
                cookies, compliance with all laws related to usage of these
                technologies and notifying End Users as required by applicable
                laws.
              </Text>
            </Box>
            <Text className="text-xl lg:text-2xl font-bold mb-4 mt-9">
              6. Changes to this Cookie Policy
            </Text>
            <Box className="lg:ml-7">
              <Text className="my-3 font-normal">
                We may update our Cookie Policy from time to time without prior
                notice, at our sole discretion. We will notify you of any
                changes by posting the new Cookie Policy on this page. You are
                advised to review this Cookie Policy periodically for any
                changes. Changes to this Cookie Policy are effective when they
                are posted on this page. Your continued use of the Services
                after any changes or revisions to this Cookie Policy shall
                indicate your agreement with the terms of such revised Cookie
                Policy.
              </Text>
            </Box>
            <Text className="text-xl lg:text-2xl font-bold mb-4 mt-9">
              7. Contact Us
            </Text>
            <Box className="lg:ml-7">
              <Text className="my-3 font-normal">
                If you have any questions about this Cookie Policy, please
                contact us:
              </Text>
              <Text className="my-3 font-normal">
                By email:&nbsp;
                <Link
                  href="mailto:support@gluestack.io"
                  className="no-underline"
                >
                  <LinkText className="text-[#38BDF8] no-underline">
                    support@gluestack.io
                  </LinkText>
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <BadgeComponent />
      <Footer />
    </WebsiteLayout>
  );
};

export default CookiePolicy;
