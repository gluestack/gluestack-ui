'use client';
import { Box, Heading, Link, LinkText, Text } from '@/components/ui';
import BadgeComponent from '@/components/page-components/landing-page/BadgeComponent';
import Footer from '@/components/page-components/landing-page/Footer';
import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <WebsiteLayout applyBgImage={true}>
      <Box className="justify-center max-w-[1440px] w-[85%] self-center pt-40 md:pt-[140px]">
        <Text className="mb-4">Effective Date: 12/23/2022</Text>
        <Heading
          className="text-4xl lg:text-5xl mt-0"
          color="$textDark50"
          lineHeight="$5xl"
        >
          PRIVACY POLICY
        </Heading>
        <Text className="text-2xl font-bold mb-4 mt-9">
          1.&nbsp; Introduction
        </Text>

        <Text className="my-3 font-normal">
          Welcome to <Text className="font-bold">GeekyAnts Inc.</Text>
        </Text>
        <Text className="my-3 font-normal">
          GeekyAnts Inc. (<Text className="font-bold">&quot;us&quot;</Text>
          ,&nbsp;
          <Text className="font-bold">&quot;we&quot;</Text>, or&nbsp;
          <Text className="font-bold">&quot;our&quot;</Text>) operates&nbsp;
          <Link className="no-underline" href="https://gluestack.io/">
            <LinkText className="text-[#38BDF8] no-underline">
              https://gluestack.io/
            </LinkText>
          </Link>
          ,&nbsp;
          <Link className="no-underline" href=" https://seal.gluestack.io/">
            <LinkText className="text-[#38BDF8] no-underline">
              https://seal.gluestack.io/
            </LinkText>
          </Link>
          &nbsp;and/or&nbsp;
          <Link href="https://my.gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://my.gluestack.io/
            </LinkText>
          </Link>
          &nbsp;(hereinafter referred to as each a&nbsp;
          <Text className="font-bold">&quot;Site&quot;</Text>).
        </Text>
        <Text className="my-3 font-normal">
          Our Privacy Policy (
          <Text className="font-bold">&quot;Policy&quot;</Text>) governs your
          visit to&nbsp;
          <Link href="https://gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://gluestack.io/
            </LinkText>
          </Link>
          ,&nbsp;
          <Link href="https://seal.gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://seal.gluestack.io/
            </LinkText>
          </Link>
          , and/or&nbsp;
          <Link href="https://my.gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://my.gluestack.io/
            </LinkText>
          </Link>
          &nbsp; and the use of our Service as defined hereunder, and explains
          how we collect, safeguard, use and disclose information that results
          from your use of our Service.
        </Text>
        <Text className="my-3 font-normal">
          We use and/or collect your personal data and other information to
          provide and improve our Service. By using our Sites and Services, you
          agree to the collection, use and disclosure of information in
          accordance with this Policy. Therefore, we recommend that you read
          this Privacy Policy carefully as it provides important information
          about your personal data and your rights under the law. Unless
          otherwise defined in this Privacy Policy, the terms used in this
          Privacy Policy have the same meanings as in our Terms of Service.
        </Text>
        <Text className="my-3 font-normal">
          Our Terms of Service (
          <Text className="font-bold">&quot;Terms&quot;</Text>) govern all use
          of our Service and together with the Privacy Policy constitute your
          agreement with us (
          <Text className="font-bold">&quot;Agreement&quot;</Text>).
        </Text>
        <Text className="my-3 font-normal">
          During the Preview phase, the primary targeted users for our Services
          are Customers located in the geographic locations of the United
          States.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          2.&nbsp; Definitions
        </Text>
        <Text className="my-3 font-normal">
          &nbsp;<Text className="font-bold">SERVICE</Text> means&nbsp;
          <Link href="https://gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://gluestack.io/
            </LinkText>
          </Link>
          ,&nbsp;
          <Link href="https://seal.gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://seal.gluestack.io/
            </LinkText>
          </Link>
          &nbsp; and/or&nbsp;
          <Link href="https://my.gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://my.gluestack.io/
            </LinkText>
          </Link>
          &nbsp; website operated by GeekyAnts Inc.&nbsp;
          <Link href="https://gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://gluestack.io/
            </LinkText>
          </Link>
          &nbsp; is a open source full-stack framework for web, mobile and
          backend&nbsp;
          <Link href="https://seal.gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://seal.gluestack.io/
            </LinkText>
          </Link>
          &nbsp; provides a cloud platform for deployment, hosting, sharing
          services and related analytics tools and&nbsp;
          <Link href="https://my.gluestack.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://my.gluestack.io/
            </LinkText>
          </Link>
          &nbsp; provides support services to other gluestack platforms.
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">
            PERSONAL DATA OR PERSONAL INFORMATION
          </Text>
          &nbsp; means data that is unique to a living individual who can be
          identified from those data (or from those and other information either
          in our possession or likely to come into our possession).
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">USAGE DATA</Text> is data collected
          automatically either generated by the use of the Service or from the
          Service infrastructure itself (for example, the duration of a page
          visit).
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">COOKIES</Text> are small files stored on
          your device (computer or mobile device) that are used to collect
          information, enhance your experience on our Site and serve other
          related purposes.
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">DATA CONTROLLER</Text> means a natural or
          legal person who (either alone or jointly or in common with other
          persons) determines the purposes for which and the manner in which any
          personal data are, or are to be, processed. For the purpose of this
          Privacy Policy, we are a Data Controller when we process your data.
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">
            DATA PROCESSORS OR SERVICE PROVIDERS
          </Text>
          &nbsp; means any natural or legal person who processes the data on
          behalf of the Data Controller. We may use the services of various
          Service Providers in order to process your data more effectively.
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">DATA SUBJECT</Text> is any living
          individual who is the subject of Personal Data.
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">THE USER</Text> is any living individual
          is a natural or legal person using our Service.
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">CUSTOMERS</Text> includes any individual
          who uses our Service individually or on behalf of an entity or
          organization.
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">END USER:</Text> As part of our Services,
          we also provide hosting solutions to our Customers through our global
          servers. Our Customers may collect Personal Data from the Customer’s
          End Users in connection with the products or services that they offer.
          For the purpose of this Privacy Policy, such Customer’s End Users’ are
          hereinafter termed as End User.
        </Text>
        <Text className="my-3 font-normal">
          <Text className="font-bold">PREVIEW</Text> means Services, releases,
          features, or functionality provided for preview, pre-release,
          evaluation, demonstration, or similar purposes.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          3.&nbsp; Information Collection and Use
        </Text>
        <Text className="my-3 font-normal">
          When you use our Services, we collect several different types of
          information as defined below for various purposes to provide and
          improve our Service to you.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          4.&nbsp; Types of Data Collected
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold">A. Personal Data</Text>
        </Text>
        <Text className="my-3 font-normal">
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you (
          <Text className="font-bold">&quot;Personal Data&quot;</Text>).
          Personally identifiable information may include, but is not limited
          to:
        </Text>
        <Box className="ml-7">
          <Text className="my-3 font-normal">(a) Email address</Text>
          <Text className="my-3 font-normal">(b) First name and last name</Text>
          <Text className="my-3 font-normal">(c) Phone number</Text>
          <Text className="my-3 font-normal">
            (d) Address, State, Province, ZIP/Postal code, City
          </Text>
          <Text className="my-3 font-normal">(e) Cookies and Usage Data</Text>
          <Text className="my-3 font-normal">(f) Anonymous analytics</Text>
        </Box>
        <Text className="my-3 font-normal">
          We may use your Personal Data to contact you with newsletters,
          marketing or promotional materials and other information that may be
          of interest to you. You may opt-out of receiving any, or all, of these
          communications from us by emailing at&nbsp;
          <Link href="mailto:support@gluestack.io" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              support@gluestack.io
            </LinkText>
          </Link>
          .
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold">B. Usage Data</Text>
        </Text>
        <Text className="my-3 font-normal">
          We may also collect information that your browser sends whenever you
          visit our Service or when you access the Service by or through a
          mobile device .
        </Text>
        <Text className="my-3 font-normal">
          This Usage Data may include information such as your computer&apos;s
          Internet Protocol address (e.g. IP address), browser type, browser
          version, the pages of our Service that you visit, the time and date of
          your visit, the time spent on those pages, unique device identifiers
          and other diagnostic data.
        </Text>
        <Text className="my-3 font-normal">
          When you access Service with a mobile device, this Usage Data may
          include information such as the type of mobile device you use, your
          mobile device unique ID, the IP address of your mobile device, your
          mobile operating system, the type of mobile Internet browser you use,
          unique device identifiers and other diagnostic data.
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold">C. Location Data</Text>
        </Text>
        <Text className="my-3 font-normal">
          We may use and store information about your location if you give us
          permission to do so (
          <Text className="font-bold">&quot;Location Data&quot;</Text>). We use
          this data to provide features of our Service, to improve and customize
          our Service.
        </Text>
        <Text className="my-3 font-normal">
          You can enable or disable location services when you use our Service
          at any time by way of your device settings.
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold">D. Tracking Cookies Data</Text>
        </Text>
        <Text className="mt-3 font-normal">
          We use Cookies and similar tracking technologies to track the activity
          on our Service and we hold certain information.Through our use of
          cookies (and similar technologies), we or authorized third parties
          collect some Device and Usage Information. Some cookies are necessary
          to make the Site and our content available to you, while others are
          meant to improve the Site and enable us to analyze and measure
          audience and traffic. For more information on our use of cookies and
          the data that they collect, see our&nbsp;
          <Link href="/cookie-policy" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              Cookie Policy
            </LinkText>
          </Link>
          .
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold">E. Other Data</Text>
        </Text>
        <Text className="mt-3 font-normal">
          While using our Service, we may also collect the following
          information: sex, age, date of birth, place of birth, passport
          details, citizenship, registration at the place of residence and
          actual address, telephone number (work, mobile), details of documents
          on education, qualification, professional training, non-disclosure
          agreements, information on marital status, family members, social
          security (or other taxpayer identification) number, office location,
          and other related data.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          5.&nbsp; Use of Data
        </Text>
        <Text className="mt-3 font-normal">
          We use your Data for for a number of different reasons, as further
          explained below.
        </Text>
        <Text className="mt-3 font-normal">
          (a) to provide and maintain our Service.
        </Text>
        <Text className="mt-3 font-normal">
          (b) to notify you about changes to our Service.
        </Text>
        <Text className="mt-3 font-normal">
          (c) to allow you to participate in interactive features of our Service
          when you choose to do so.
        </Text>
        <Text className="mt-3 font-normal">
          (d) to provide customer support.
        </Text>
        <Text className="mt-3 font-normal">
          (e) to gather analysis or valuable information so that we can improve
          our Service.
        </Text>
        <Text className="mt-3 font-normal">
          (f) to monitor the usage of our Service.
        </Text>
        <Text className="mt-3 font-normal">
          (g) to detect, prevent and address technical issues, fraud, illegal
          activities or security breaches.
        </Text>
        <Text className="mt-3 font-normal">
          (h) to fulfill any other purpose for which you provide it.
        </Text>
        <Text className="mt-3 font-normal">
          (i) to carry out our obligations and enforce our rights arising from
          any contracts entered into between you and us, including for billing
          and collection.
        </Text>
        <Text className="mt-3 font-normal">
          (j) to provide you with notices about your account and/or
          subscription, including expiration and renewal notices,
          email-instructions, etc.
        </Text>
        <Text className="mt-3 font-normal">
          (k) to provide you with news, special offers and general information
          about other goods, services and events which we offer that are similar
          to those that you have already purchased or enquired about unless you
          have opted not to receive such information.
        </Text>
        <Text className="mt-3 font-normal">
          (l) in any other way we may describe when you provide the information.
        </Text>
        <Text className="mt-3 font-normal">
          (m) for any other purpose with your consent.
        </Text>
        <Text className="mt-3 font-normal">
          In addition, for users located in the EU, we must provide a valid
          legal basis in order to process your personal data. The main legal
          basis under the European Union&apos;s General Data Protection
          Regulation (GDPR) that justify our collection and use of your personal
          data are:
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold">Performance of a contract</Text> — When
          your personal data is necessary to enter into or perform our contract
          with you.
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold">Consent</Text> — When you have consented
          to our use of your personal data (online or offline).
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold"> Legitimate interests</Text> — When we use
          your personal data to achieve a legitimate interest and our reasons
          for using it outweigh any prejudice to your data protection rights.
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold"> Legal obligation</Text> — When we must
          use your personal data to comply with our legal obligations.
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold">Vital interests</Text> — When your
          personal data is necessary to protect the vital interests.
        </Text>
        <Text className="mt-3 font-normal">
          <Text className="font-bold">Public task</Text> — When processing is
          necessary for the performance of a task carried out in the public
          interest.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          6.&nbsp; Information we Process on Behalf of Customers
        </Text>
        <Text className="mt-3 font-normal">
          We also use and/or collect the personal data and other information of
          Customer&apos;s End Users&apos; (
          <Text className="font-bold">&quot;End Users&quot;</Text>) when the End
          User uses our Services through our Customer or when Customer uses our
          Services. Even though we store End Users&apos; personal data, it does
          not cover how or why our Customers may collect, handle and disclose
          their End Users&apos; personal data when the End Users&apos; visit or
          use their websites or platforms. Each Customer is responsible for
          posting its own terms, conditions, and privacy policies, and ensuring
          compliance with all applicable laws and regulations.
        </Text>
        <Text className="mt-3 font-normal">
          As noted above, our Customers may collect personal data from their End
          Users in connection with the products or services that they offer to
          End Users. Because we host our Customers&apos; websites and provide
          other analytics tools, we process End Users&apos; personal data when
          they use our Customers&apos; websites, web applications, and APIs.
          This information may also include, but is not limited to, IP
          addresses, system configuration information, and other information
          about traffic to and from Customers&apos; websites, as well as
          Location Information derived from IP addresses. All of this
          information is stored as part of our Services, but Customers are
          responsible for the content transmitted across our network (e.g.,
          images, written content, graphics, etc.), as well as any personal data
          they collect. Customers are also solely responsible for notifying
          their End Users of their personal information collection, use, and
          disclosure. With respect to such data, we collect and use it to
          operate, maintain, and improve our Services in performance of our
          obligations.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          7.&nbsp; Retention of Data
        </Text>
        <Text className="mt-3 font-normal">
          We will retain your Personal Data only for as long as is necessary for
          the purposes set out in this Privacy Policy. We will retain and use
          your Personal Data to the extent necessary to comply with our legal
          obligations (for example, if we are required to retain your data to
          comply with applicable laws), resolve disputes, and enforce our legal
          agreements and policies.
        </Text>
        <Text className="mt-3 font-normal">
          We will also retain Usage Data for internal analysis purposes. Usage
          Data is generally retained for a shorter period, except when this data
          is used to strengthen the security or to improve the functionality of
          our Service, or we are legally obligated to retain this data for
          longer time periods.
        </Text>
        <Text className="mt-3 font-normal">
          In some instances, we may choose to anonymize your personal data
          instead of deleting it, for statistical use, for instance. When we
          choose to anonymize, we make sure that there is no way that the
          personal data can be linked back to you or any specific user.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          8.&nbsp; Transfer of Data
        </Text>
        <Text className="mt-3 font-normal">
          Your information, including Personal Data, may be transferred to India
          and maintained on Indian computers located outside of your state,
          province, country, or other governmental jurisdiction where the data
          protection laws may differ from those of your jurisdiction.
        </Text>
        <Text className="mt-3 font-normal">
          If you are located in the United States or outside, and choose to
          provide information to us, please note that we transfer the data,
          including Personal Data, to India and process it there.
        </Text>
        <Text className="mt-3 font-normal">
          Your consent to this Privacy Policy followed by your submission of
          such information represents your agreement to that transfer.
        </Text>
        <Text className="mt-3 font-normal">
          GeekyAnts Inc. will take all the steps reasonably necessary to ensure
          that your data is treated securely and in accordance with this Privacy
          Policy and no transfer of your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of your data and other personal information.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          9.&nbsp; Disclosure of Data
        </Text>
        <Text className="mt-3 font-normal">
          We may disclose personal data that we collect, or you provide
        </Text>
        <Box className="ml-7">
          <Text className="mt-3 font-normal">
            (a)&nbsp;
            <Text className="font-bold">Disclosure for Law Enforcement.</Text>
          </Text>
          <Text className="mt-3 font-normal">
            Under certain circumstances, we may be required to disclose your
            Personal Data if required to do so by law or in response to valid
            requests by public authorities.
          </Text>
          <Text className="mt-3 font-normal">
            (b)&nbsp;
            <Text className="font-bold">Business Transaction.</Text>
          </Text>
          <Text className="mt-3 font-normal">
            If we or our subsidiaries are involved in a merger, acquisition, or
            asset sale, your Personal Data may be transferred.
          </Text>
          <Text className="mt-3 font-normal">
            (c)&nbsp;
            <Text className="font-bold">Our Customers.</Text>
          </Text>
          <Text className="mt-3 font-normal">
            When we act on behalf of our Customers (as a Data Processor or
            Service Provider), we may provide End Users&apos; personal data to
            our Customers in order to comply with their requests, End
            Users&apos; requests and/or regulator requests, among others.
          </Text>
          <Text className="mt-3 font-normal">
            (d)&nbsp;
            <Text className="font-bold">
              Other cases. We may disclose your information also:
            </Text>
          </Text>
          <Text className="mt-3 font-normal">
            (i) to our subsidiaries and affiliates.
          </Text>
          <Text className="mt-3 font-normal">
            (ii) to contractors, Service Providers, and other third parties we
            use to support our business.
          </Text>
          <Text className="mt-3 font-normal">
            (iii) to fulfill the purpose for which you provide it.
          </Text>
          <Text className="mt-3 font-normal">
            (iv) for the purpose of including your company&apos;s logo on our
            website.
          </Text>
          <Text className="mt-3 font-normal">
            (v) for any other purpose disclosed by us when you provide the
            information.
          </Text>
          <Text className="mt-3 font-normal">
            (vi) with your consent in any other cases.
          </Text>
          <Text className="mt-3 font-normal">
            (vii) if we believe disclosure is necessary or appropriate to
            protect the rights, property, or safety of our Company, our
            Customers, or others.
          </Text>
          <Text className="mt-3 font-normal">
            (e)&nbsp;
            <Text className="font-bold">Anonymized Information.</Text>
          </Text>
          <Text className="mt-3 font-normal">
            We also share aggregated, automatically-collected or otherwise
            non-personal information with third parties for various purposes,
            including (i) compliance with reporting obligations. (ii) for
            business or marketing purposes. (iii) to assist us and other parties
            in understanding our users&apos; interests, habits and usage
            patterns for certain programs, content, services, marketing and/or
            functionality available through the use of our Services. We do not
            share personal data about you in this case.
          </Text>
        </Box>
        <Text className="text-2xl font-bold mb-4 mt-9">
          10.&nbsp; Account Protection:
        </Text>
        <Text className="mt-3 font-normal">
          If you register with us, your password is the key to your account. You
          shall be solely responsible for all the activities happening under
          your username and you shall be solely responsible for keeping your
          password secure. Do not disclose your password to anyone. If you share
          your password or your personal information with others, you shall be
          solely responsible for all actions taken under your username and you
          may lose control over your personal information.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          11.&nbsp; Security of Data
        </Text>
        <Text className="mt-3 font-normal">
          The security of your data is important to us but remember that no
          method of transmission over the Internet or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          12.&nbsp; Your Data Protection Rights Under General Data Protection
          Regulation (GDPR)
        </Text>
        <Text className="mt-3 font-normal">
          If you are a resident of the European Union (EU) and European Economic
          Area (EEA), you have certain data protection rights, covered by GDPR.
          - See more at&nbsp;
          <Link
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
            className="no-underline"
          >
            <LinkText className="text-[#38BDF8] no-underline">
              https://eur-lex.europa.eu/eli/reg/2016/679/oj
            </LinkText>
          </Link>
          .
        </Text>
        <Text className="mt-3 font-normal">
          We aim to take reasonable steps to allow you to correct, amend,
          delete, or limit the use of your Personal Data.
        </Text>
        <Text className="mt-3 font-normal">
          If you wish to be informed what Personal Data we hold about you and if
          you want it to be removed from our systems, please email us at &nbsp;
          <Link href="mailto:support@gluestack.io" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              support@gluestack.io
            </LinkText>
          </Link>
          .
        </Text>
        <Text className="mt-3 font-normal">
          In certain circumstances, you have the following data protection
          rights:
        </Text>
        <Box className="ml-7">
          <Text className="mt-3 font-normal">
            (a) the right to access, update, or to delete the information we
            have on you.
          </Text>
          <Text className="mt-3 font-normal">
            (b) the right of rectification. You have the right to have your
            information rectified if that information is inaccurate or
            incomplete.
          </Text>
          <Text className="mt-3 font-normal">
            (c) the right to object. You have the right to object to our
            processing of your Personal Data.
          </Text>
          <Text className="mt-3 font-normal">
            (d) the right of restriction. You have the right to request that we
            restrict the processing of your personal information.
          </Text>
          <Text className="mt-3 font-normal">
            (e) the right to data portability. You have the right to be provided
            with a copy of your Personal Data in a structured, machine-readable
            and commonly used format.
          </Text>
          <Text className="mt-3 font-normal">
            (f) the right to withdraw consent. You also have the right to
            withdraw your consent at any time where we rely on your consent to
            process your personal information.
          </Text>
        </Box>
        <Text className="mt-3 font-normal">
          Please note that we may ask you to verify your identity before
          responding to such requests. Please note, we may not be able to
          provide our Service without some necessary data.
        </Text>
        <Text className="mt-3 font-normal">
          You have the right to complain to a Data Protection Authority about
          our collection and use of your Personal Data. For more information,
          please contact your local data protection authority in the European
          Economic Area (EEA).
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          13.&nbsp; Your Data Protection Rights under the California Online
          Privacy Protection Act (CalOPPA)
        </Text>
        <Text className="mt-3 font-normal">
          CalOPPA is the first state law in the nation to require commercial
          websites and online services to post a privacy policy. The law&apos;s
          reach stretches well beyond California to require a person or company
          in the United States (and conceivable the world) that operates
          websites collecting personally identifiable information from
          California consumers to post a conspicuous privacy policy on its
          website stating exactly the information being collected and those
          individuals with whom it is being shared, and to comply with this
          policy. - See more at: &nbsp;
          <Link
            href="https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/"
            className="no-underline"
          >
            <LinkText className="text-[#38BDF8] no-underline">
              https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/
            </LinkText>
          </Link>
        </Text>
        <Text className="mt-3 font-normal">
          According to CalOPPA we agree to the following:
        </Text>
        <Box className="ml-7">
          <Text className="mt-3 font-normal">
            (a) users can visit our site anonymously.
          </Text>
          <Text className="mt-3 font-normal">
            (b) our Privacy Policy link includes the word “Privacy”, and can
            easily be found on the home page of our Sites specified above.
          </Text>
          <Text className="mt-3 font-normal">
            (c) users will be notified of any Privacy Policy changes on our
            Privacy Policy Page.
          </Text>
          <Text className="mt-3 font-normal">
            (d) users are able to change their personal information by emailing
            us at&nbsp;
            <Link href="mailto:support@gluestack.io" className="no-underline">
              <LinkText className="text-[#38BDF8] no-underline">
                support@gluestack.io
              </LinkText>
            </Link>
            .
          </Text>
        </Box>
        <Text className="text-2xl font-bold mb-4 mt-9">
          14.&nbsp; Our Policy on “Do Not Track” Signals
        </Text>
        <Text className="mt-3 font-normal">
          We do not respond to Do Not Track (&quot;DNT&quot;) browser signals.
          For more information on DNT settings generally, please visit
          https://allaboutdnt.com.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          15.&nbsp; Your Data Protection Rights under the California Consumer
          Privacy Act (CCPA)
        </Text>
        <Text className="mt-3 font-normal">
          If you are a California resident, you are entitled to learn what data
          we collect about you, ask to delete your data and not to sell (share)
          it. To exercise your data protection rights, you can make certain
          requests and ask us:
        </Text>
        <Box className="ml-7">
          <Text className="mt-3 font-normal">
            (a)&nbsp;
            <Text className="font-bold">
              What personal information we have about you.
            </Text>
            &nbsp; If you make this request, we will share with you:
          </Text>
          <Box className="ml-7">
            <Text className="mt-3 font-normal">
              (i) The categories of personal information we have collected about
              you.
            </Text>
            <Text className="mt-3 font-normal">
              (ii) The categories of sources from which we collect your personal
              information.
            </Text>
            <Text className="mt-3 font-normal">
              (iii) The business or commercial purpose for collecting or selling
              your personal information.
            </Text>
            <Text className="mt-3 font-normal">
              (iv) The categories of third parties with whom we share personal
              information.
            </Text>
            <Text className="mt-3 font-normal">
              (v) The specific pieces of personal information we have collected
              about you.
            </Text>
            <Text className="mt-3 font-normal">
              (vi) A list of categories of personal information that we have
              sold, along with the category of any other company we sold it to.
              If we have not sold your personal information, we will inform you
              of that fact.
            </Text>
            <Text className="mt-3 font-normal">
              (vii) A list of categories of personal information that we have
              disclosed for a business purpose, along with the category of any
              other company we shared it with.
            </Text>
          </Box>
        </Box>
        <Text className="mt-3 font-normal">
          Please note, you are entitled to ask us to provide you with this
          information up to two times in a rolling twelve-month period. When you
          make this request, the information provided may be limited to the
          personal information we collected about you in the previous 12 months.
        </Text>
        <Box className="ml-7">
          <Text className="mt-3 font-normal">
            (b)&nbsp;
            <Text className="font-bold">
              To delete your personal information.
            </Text>
            &nbsp; If you make this request, we will delete the personal
            information we hold about you as of the date of your request from
            our records and direct any Service Providers to do the same. In some
            cases, deletion may be accomplished through de-identification of the
            information. If you choose to delete your personal information, you
            may not be able to use certain functions that require your personal
            information to operate.
          </Text>
          <Text className="mt-3 font-normal">
            (c)&nbsp;
            <Text className="font-bold">
              &nbsp; To stop selling your personal information.
            </Text>
            &nbsp; We do not sell your personal information for monetary
            consideration. However, under some circumstances, a transfer of
            personal information to a third party, or within our family of
            companies, without monetary consideration may be considered a “sale”
            under California law.
          </Text>
        </Box>
        <Text className="mt-3 font-normal">
          If you submit a request to stop selling your personal information, we
          will stop making such transfers. If you are a California resident, to
          opt-out of the sale of your personal information, please reach out us
          via email at&nbsp;
          <Link href="mailto:support@gluestack.io" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              support@gluestack.io
            </LinkText>
          </Link>
        </Text>
        <Text className="mt-3 font-normal">
          Please note, if you ask us to delete or stop selling your data, it may
          impact your experience with us, and you may not be able to participate
          in certain programs or membership services which require the usage of
          your personal information to function. But in no circumstances, we
          will discriminate against you for exercising your rights.
        </Text>
        <Text className="mt-3 font-normal">
          To exercise your California data protection rights described above,
          please send your request(s):
        </Text>
        <Text className="mt-3 font-normal">
          By email:&nbsp;
          <Link href="mailto:support@gluestack.io" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              support@gluestack.io
            </LinkText>
          </Link>
        </Text>
        <Text className="mt-3 font-normal">
          Your data protection rights, described above, are covered by the CCPA,
          short for the California Consumer Privacy Act. To find out more, visit
          the official&nbsp;
          <Link
            href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375"
            className="no-underline"
          >
            <LinkText className="text-[#38BDF8] no-underline">
              {' '}
              California Legislative Information website
            </LinkText>
          </Link>
          . The CCPA took effect on 01/01/2020.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          16.&nbsp; Service Providers
        </Text>
        <Text className="mt-3 font-normal">
          We may employ third party companies and individuals to facilitate our
          Service (
          <Text className="font-bold">&quot;Service Providers&quot;</Text>
          ), provide Service on our behalf, perform Service-related services or
          assist us in analysing how our Service is used.
        </Text>
        <Text className="mt-3 font-normal">
          These third parties have access to your Personal Data only to perform
          these tasks on our behalf and are obligated not to disclose or use it
          for any other purpose.
        </Text>
        <Text className="mt-3 font-normal">
          The following are the list of Service Providers:
        </Text>
        <Text className="mt-3 font-bold">DataBase:</Text>
        <Text className="mt-3 font-normal">
          <Link href="http://digitalocean.com/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              http://digitalocean.com/
            </LinkText>
          </Link>
          &nbsp; : Cloud computing and data hosting services.
        </Text>
        <Text className="mt-3 font-normal">
          <Link href="https://www.hetzner.com/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://www.hetzner.com/
            </LinkText>
          </Link>
          &nbsp; : Cloud computing and data hosting services.
        </Text>
        <Text className="mt-3 font-normal">
          <Link href="https://geekyants.com/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://geekyants.com/ (GeekyAnts India Pvt. Ltd.)
            </LinkText>
          </Link>
          &nbsp; : Cloud computing, data hosting services, marketing, sales and
          support services.
        </Text>
        <Text className="mt-3 font-bold">CI/CD:</Text>
        <Text className="mt-3 font-normal">
          <Link href="https://www.jenkins.io/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://www.jenkins.io/
            </LinkText>
          </Link>
          &nbsp; : Delivery and deployment (CI/CD) automation software DevOps
          tool.
        </Text>
        <Text className="mt-3 font-bold">Analytics:</Text>
        <Text className="mt-3 font-normal">
          <Link href="https://analytics.google.com/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://analytics.google.com/
            </LinkText>
          </Link>
          &nbsp; : Data analytics and business insights.
        </Text>
        <Text className="mt-3 font-bold">Data Collection/Marketing:</Text>
        <Text className="mt-3 font-normal">
          <Link href="https://www.typeform.com/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://www.typeform.com/
            </LinkText>
          </Link>
          &nbsp; : Data collection and reporting.
        </Text>
        <Text className="mt-3 font-normal">
          <Link href="https://www.sendinblue.com/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://www.sendinblue.com/
            </LinkText>
          </Link>
          &nbsp; : Marketing, sales and customer management tool.
        </Text>
        <Text className="mt-3 font-normal">
          <Link href=" https://ads.google.com/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://ads.google.com/
            </LinkText>
          </Link>
          &nbsp; : Digital marketing and remarketing.
        </Text>
        <Text className="mt-3 font-normal">
          <Link href="https://www.hubspot.com/" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              https://www.hubspot.com/
            </LinkText>
          </Link>
          &nbsp; : Marketing, sales and customer management tool.
        </Text>
        <Text className="mt-3 font-normal">
          <Link
            href="https://www.google.com/drive/terms-of-service/"
            className="no-underline"
          >
            <LinkText className="text-[#38BDF8] no-underline">
              https://www.google.com/drive/terms-of-service/
            </LinkText>
          </Link>
          &nbsp; : Cloud based storage service and accessibility tool.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          17.&nbsp; Interactive and Public Spaces
        </Text>
        <Text className="mt-3 font-normal">
          The Service we provide may offer publicly accessible blogs, community
          forums, comments sections, discussion forums, or other interactive
          features etc. If you choose to participate in any of these Interactive
          and Public Spaces, please be aware that any information that you post
          may be read, collected, and used by others who access it and we are in
          no way liable for any risk associated with the information shared by
          you publicly. If you wish to remove your personal information from any
          of our Interactive and Public Spaces, please contact us at&nbsp;
          <Link href="mailto:support@gluestack.io" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              support@gluestack.io
            </LinkText>
          </Link>
          . We further reserve the right to remove any content posted by you on
          any of our Interactive and Public Spaces containing false, derogatory
          and disparaging remarks.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          18.&nbsp; Domain Registrations
        </Text>
        <Text className="mt-3 font-normal">
          Note that if you purchase a domain name from us, we may be required to
          collect registrant data for the purposes of domain registration and
          listing via the WHOIS protocol. We may also be required to share this
          with ICANN, the relevant registrars and other such providers with whom
          we contract in order to provide our domain name services, as well as
          when served with a legitimate request from third parties. Registration
          data may include the domain name, registrant name and contact
          information, and information on the domain name server. Such
          registration data may be made publicly available by ICANN.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">19.&nbsp; Payments</Text>
        <Text className="mt-3 font-normal">
          We may provide paid products and/or services within Service. In that
          case, we use third-party services for payment processing (e.g. payment
          processors).
        </Text>
        <Text className="mt-3 font-normal">
          We will not store or collect your payment card details. That
          information is provided directly to our third-party payment processors
          whose use of your personal information is governed by their Privacy
          Policy. These payment processors adhere to the standards set by
          PCI-DSS as managed by the PCI Security Standards Council, which is a
          joint effort of brands like Visa, Mastercard, American Express and
          Discover. PCI-DSS requirements help ensure the secure handling of
          payment information.
        </Text>
        <Text className="mt-3 font-normal">
          The payment processors we work with are:
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">Stripe:</Text>
        <Text className="mt-3 font-normal">
          Their Privacy Policy can be viewed at:&nbsp;
          <Link href="https://stripe.com/us/privacy" className="no-underline">
            <LinkText className="text=[#38BDF8] no-underline">
              https://stripe.com/us/privacy
            </LinkText>
          </Link>
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          20.&nbsp; Links to Other Sites
        </Text>
        <Text className="mt-3 font-normal">
          Our Service may contain links to other sites that are not operated by
          us. This policy and procedures we describe here do not apply to Third
          Party Sites, and links to such Third Party Sites on our Services and
          do not imply that we endorse or have reviewed the Third Party Sites.
          If you click a third party link, you will be directed to that third
          party&apos;s site. We strongly advise you to review the Privacy Policy
          of every site you visit.
        </Text>
        <Text className="mt-3 font-normal">
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          21.&nbsp; Children&apos;s Privacy
        </Text>
        <Text className="mt-3 font-normal">
          Our Services are not intended for use by children under the age of 18
          (<Text className="font-bold">&quot;Child&quot;</Text> or&nbsp;
          <Text className="font-bold">&quot;Children&quot;</Text>).
        </Text>
        <Text className="mt-3 font-normal">
          We do not knowingly collect personally identifiable information from
          Children under 18. We encourage parents and legal guardians to monitor
          their children&apos;s Internet usage and to help enforce our Privacy
          Policy by instructing their children never to provide personal
          details. If you become aware that a Child has provided us with
          Personal Data, please contact us. If we become aware that we have
          collected Personal Data from Children without verification of parental
          consent, we will take steps to remove that information from our
          servers.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          22.&nbsp; Changes to This Privacy Policy
        </Text>
        <Text className="mt-3 font-normal">
          We may update our Privacy Policy from time to time without prior
          notice, at our sole discretion. We will notify you of any changes by
          posting the new Privacy Policy on this page.
        </Text>
        <Text className="mt-3 font-normal">
          You are advised to review the Privacy Policy posted on our Sites
          periodically for any changes. Changes to this Privacy Policy are
          effective when they are posted on this page. Your continued use of the
          Services after any changes or revisions to this Privacy Policy shall
          indicate your agreement with the terms of such revised Privacy Policy.
        </Text>
        <Text className="text-2xl font-bold mb-4 mt-9">
          23.&nbsp; Contact Us
        </Text>
        <Text className="mt-3 font-normal">
          If you have any questions about this Privacy Policy, please contact
          us:
        </Text>
        <Text className="mt-3 font-normal">
          By email:&nbsp;
          <Link href="mailto:support@gluestack.io" className="no-underline">
            <LinkText className="text-[#38BDF8] no-underline">
              support@gluestack.io
            </LinkText>
          </Link>
          .
        </Text>
      </Box>
      <BadgeComponent />
      <Footer />
    </WebsiteLayout>
  );
};

export default PrivacyPolicy;
