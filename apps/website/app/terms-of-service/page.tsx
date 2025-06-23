'use client';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Link } from '@/components/ui/link';
import { LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import BadgeComponent from '@/components/page-components/landing-page/BadgeComponent';
import Footer from '@/components/page-components/landing-page/Footer';
import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';
import React from 'react';

const TermsOfService = () => {
  return (
    <WebsiteLayout applyBgImage={true}>
      <Box className="justify-center max-w-[1240px] w-[85%] self-center pt-40 md:pt-[140px]">
        <Box className="w-full">
          <Text className="mb-4">Effective Date: 12/23/2022</Text>
          <Heading
            className="text-4xl lg:text-5xl mt-0"
            color="$textDark50"
            lineHeight="$5xl"
          >
            Terms of Service
          </Heading>
          <Text className="text-4xl font-bold">Disclaimer:</Text>
          <Text className="mt-4 font-normal mb-9">
            THE SERVICES BEING PROVIDED ARE PART OF A PREVIEW OR TEST VERSION
            AND ARE NOT INTENDED FOR USE IN A PRODUCTION OR LIVE ENVIRONMENT.
            GEEKYANTS INC. IS NOT LIABLE FOR ANY ISSUES THAT MAY ARISE FROM
            USING THE PREVIEW VERSION, WHICH MAY CONTAIN BUGS OR ERRORS. THE
            USER IS RESPONSIBLE FOR EVALUATING THE PREVIEW.
          </Text>
          <Text className="text-2xl font-bold mb-4 mt-9">1. Introduction</Text>
          <Text>Welcome to GeekyAnts Inc.</Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp; GeekyAnts Inc., (
              <Text className="font-bold">&quot;we&quot;</Text>
              ,&nbsp;
              <Text className="font-bold">&quot;us&quot;</Text>
              &nbsp;and/or&nbsp;
              <Text className="font-bold">&quot;our&quot;</Text>) operates
              <Link
                href="https://seal.gluestack.io/"
                className="no-underline text-[#38BDF8]"
              >
                &nbsp;https://seal.gluestack.io/&nbsp;
              </Link>
              and
              <Link
                href="https://my.gluestack.io/"
                className="no-underline text-[#38BDF8]"
              >
                &nbsp;https://my.gluestack.io/&nbsp;
              </Link>
              . (Each a “Site”).
              <Link
                href="https://seal.gluestack.io/"
                className="no-underline text-[#38BDF8]"
              >
                &nbsp;https://seal.gluestack.io/&nbsp;
              </Link>
              provides a cloud platform for deployment, hosting, sharing
              services, and related analytics tools and https://my.gluestack.io/
              provides support services to other gluestack platforms
              (collectively, the &nbsp;
              <Text className="font-bold">&quot;Services&quot;</Text>
              &nbsp;)
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp; Your visit, access or use of the Services are governed
              by these Terms of Service (
              <Text className="font-bold">&quot;Terms&quot;</Text>), so please
              carefully read them before using the Services. These Terms applies
              to all visitors, users, and others who access the Services (
              <Text className="font-bold">&quot;Users&quot;</Text>,&nbsp;
              <Text className="font-bold">&quot;you&quot;</Text> and/or &nbsp;
              <Text className="font-bold">&quot;your&quot;</Text>).
            </Text>
            <Text className="my-3 font-normal">
              c. &nbsp; In order to use the Services, you must first agree to
              these Terms. If you use the Services on behalf of a company,
              business or other legal entity (each an&nbsp;
              <Text className="font-bold">&quot;Entity&quot;</Text>) , you are
              agreeing to these Terms for that Entity and promising that you
              have the authority to bind that Entity to these Terms. In that
              case, “you” and “your” will also refer to that Entity, wherever
              possible.
            </Text>
            <Text className="my-3 font-normal">
              d. &nbsp; Our Services are not intended for use by children under
              the age of 18 (
              <Text className="font-bold">&quot;Child&quot;</Text> or &nbsp;
              <Text className="font-bold">&quot;Children&quot;</Text>). By using
              our Services, you certify that you are a person of at least 18
              years of age.
            </Text>
            <Text className="my-3 font-normal">
              e. &nbsp; You agree your purchases and/or use of the Services are
              not contingent on the delivery of any future functionality or
              features or dependent on any oral or written public comments made
              by GeekyAnts Inc., its parent company, group companies or any of
              its affiliates regarding future functionality or features.
            </Text>
            <Text className="my-3 font-normal">
              f. &nbsp; <Text>IMPORTANT- ARBITRATION NOTICE:</Text> EXCEPT FOR
              CERTAIN TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION CLAUSE
              HEREUNDER, YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE
              RESOLVED BY MANDATORY BINDING ARBITRATION AND YOU WAIVE ANY RIGHT
              TO PARTICIPATE IN A CLASS-ACTION LAWSUIT OR CLASS-WIDE
              ARBITRATION.
            </Text>
            <Text className="my-3 font-normal">
              g. &nbsp; BY USING OR OTHERWISE ACCESSING THE SERVICES OR ANY
              MATERIALS INCLUDED IN OR WITH THE SERVICES, YOU HEREBY AGREE TO BE
              BOUND BY THESE TERMS. IF YOU DO NOT ACCEPT THESE TERMS, THEN YOU
              MAY NOT USE OR OTHERWISE ACCESS THE SERVICES.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">2. Your Account</Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;Your account on the Services (your&nbsp;
              <Text className="font-bold">&quot;User Account&quot;</Text>) gives
              you access to the Services and functionality that we may establish
              and maintain from time to time and at our sole discretion. We may
              maintain different types of User Accounts for different types of
              Users. By connecting to the Services with a third-party service,
              you give us permission to access and use your information from
              that service as permitted by that service, and to store your
              log-in credentials for that service.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;You may never use another User&apos;s User Account
              without permission. In the course of registering for a User
              Account or using the Services, you may be required to provide us
              with certain information, including your name, contact
              information, username and password (
              <Text className="font-bold">&quot;Credentials&quot;</Text>
              ). GeekyAnts Inc., handles such information with the utmost
              attention, care and security. Nonetheless, you, not GeekyAnts
              Inc., shall be responsible for maintaining and protecting your
              Credentials in connection with the Services. If your contact
              information or other information relating to your User Account
              changes, you must notify us promptly and keep such information
              current. You are solely responsible for any activity using your
              Credentials, whether or not you authorized that activity. You
              should immediately notify us of any unauthorized use of your
              Credentials or if your email or password has been hacked or
              stolen. If you discover that someone is using your Credentials
              without your consent, or you discover any other breach of
              security, you agree to notify us immediately.
            </Text>
            <Text className="my-3 font-normal">
              c. &nbsp;We reserve the right to access your account in order to
              respond to your requests for any Support Services as defined
              hereunder.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">3. Content</Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;A variety of information, reviews, recommendations,
              messages, comments, posts, text, graphics, algorithms, software,
              photographs, videos, data, and other materials (
              <Text className="font-bold">&nbsp;&quot;Content&quot;&nbsp;</Text>
              ) may be made available through the Services by us (
              <Text className="font-bold">&quot;Supplied Content&quot;</Text>).
              While we strive to keep the Content that we provide through our
              Services accurate, complete, and up-to-date, we cannot guarantee,
              and are not responsible for the accuracy, completeness, or
              timeliness of any Supplied Content.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;You acknowledge that you may also be able to upload,
              post, deliver, provide or otherwise transmit or store information
              (such as software, code, data, information, feedback, suggestions,
              text, content and other materials) through use of the Services.
              All such information shall be referred to as “User Content.”
            </Text>
            <Text className="my-3 font-normal">
              c. &nbsp; You agree that you are solely responsible for (and that
              we have no responsibility to you or to any third party for) any
              User Content, and for the consequences of your actions (including
              any loss or damage which we may suffer) in connection with such
              User Content. If you are registering for these Services on behalf
              of an Entity, you also agree that you are also responsible for the
              actions of associated Users and for any User Content that such
              associated Users might upload, record, publish, post, link to, or
              otherwise transmit or distribute through use of the Services.
              Furthermore, you acknowledge that we do not control or actively
              monitor Content uploaded by users and, as such, do not guarantee
              the accuracy, integrity or quality of such Content. You
              acknowledge that by using the Services, you may be exposed to
              materials that are offensive, indecent or objectionable. Under no
              circumstances will GeekyAnts Inc., its parent company, group
              companies and or affiliates are liable in any way for any such
              Content.
            </Text>
            <Text className="my-3 font-normal">
              d. &nbsp; We may refuse to store, provide, or otherwise maintain
              your User Content for any or no reason. We may remove your User
              Content from the Services at any time if you violate these Terms
              and/or&nbsp;
              <Link
                href="/privacy-policy"
                className="no-underline text-[#38BDF8]"
              >
                Privacy Policy
              </Link>
              &nbsp; and/or if the Services are canceled or suspended. If User
              Content is stored using the Services with an expiration date, we
              may also delete the User Content as of that date. User Content
              that is deleted may be irretrievable. You agree that we have no
              responsibility or liability for the deletion or failure to store
              any User Content or other communications maintained or transmitted
              through use of the Services.
            </Text>
            <Text className="my-3 font-normal">
              e. &nbsp;We reserve the right (but shall have no obligation) to
              monitor and remove User Content from the Services, at our
              discretion. You agree to immediately take down any User Content
              that violates these Terms, including pursuant to a takedown
              request from us. We also reserve the right to directly take down
              such User Content.
            </Text>
            <Text className="my-3 font-normal">
              f. &nbsp;You shall own and retain all right, title and interest in
              and to your User Content. By submitting, posting or otherwise
              uploading User Content on or through the Services you give
              GeekyAnts Inc. a worldwide, non-exclusive, perpetual, fully
              sub-licensable, royalty-free right and license to use, disclose or
              share the User Content to the extent necessary to provide the
              Services to you and to protect the Services and from third party
              fraud, illegal activities, malware, malicious files or content,
              viruses and the like. In addition to this, you also acknowledge
              and agree that our third party service providers may also use,
              disclose and share your User Content solely to the extent
              necessary to provide the Services to you. Otherwise, we will not
              sell, disclose, or share any of your User Content (or any part or
              product thereof) with anyone else. We will implement and maintain
              reasonable information security policies and processes (including
              technical, administrative and physical safeguards) that are
              designed to prevent unauthorized access to or use or disclosure of
              the Services or any of your User Content.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            4. Proprietary Rights
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;You acknowledge and agree that, we shall own and retain
              all legal right, title and interest in and to (i) the Services,
              any other Supplied Content provided by us, all improvements,
              enhancements or modifications thereto and (ii) all intellectual
              property rights related to any of the foregoing and other
              proprietary rights and laws (whether those rights happen to be
              registered or not, and wherever in the world those rights may
              exist).
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;Except as provided in Section 3, GeekyAnts Inc.
              acknowledges and agrees that it obtains no right, title or
              interest from you (or your licensors) under these Terms in or to
              any Content that you create, upload, submit, post, transmit, share
              or display on, or through, the Services, including any
              intellectual property rights which subsist in that User Content
              (whether those rights happen to be registered or not, and wherever
              in the world those rights may exist). Notwithstanding anything
              contained to the contrary in these Terms, you agree that you are
              responsible for protecting and enforcing those rights and that we
              have no obligation to do so on your behalf.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">5. Fair Use</Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;We will use commercially reasonable efforts to provide
              all plan levels with sufficient bandwidth, builds, and serverless
              function invocations that we determine are typical of projects at
              that plan level. We don&apos;t want you to worry about usage when
              hosting your projects.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;We will use commercially reasonable efforts to provide
              all plan levels with sufficient bandwidth, builds, and serverless
              function invocations that we determine are typical of projects at
              that plan level. We don&apos;t want you to worry about usage when
              hosting your projects.
            </Text>
          </Box>

          <Text className="text-2xl font-bold mb-4 mt-9">
            6. Acceptable Use
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;The following are the acceptable uses of our Services:
            </Text>
            <Box className="ml-6">
              <Text className="my-3 font-normal">
                i. &nbsp;The Services may only be used for lawful purposes.
              </Text>
              <Text className="my-3 font-normal">
                ii. &nbsp;You shall not attempt to undermine the security or
                integrity of computing systems or networks of GeekyAnts Inc.,
                its parent company, group companies, affiliates, partners, or
                any other person, and must not attempt to gain unauthorized
                access.
              </Text>
              <Text className="my-3 font-normal">
                iii. &nbsp;The network resources of GeekyAnts may not be used to
                impersonate another person or misrepresent authorization to act
                on behalf of others or us.
              </Text>
              <Text className="my-3 font-normal">
                iv. &nbsp;You must not introduce software or automated agents or
                scripts into our Services in order to produce multiple accounts,
                generate automated searches, requests or queries, or to strip or
                mine content or data.
              </Text>
              <Text className="my-3 font-normal">
                v. &nbsp;You must not access our Services through automated
                methods, including any use of robots or other computer code
                which calls our website.
              </Text>
              <Text className="my-3 font-normal">
                vi. &nbsp;You shall not send unsolicited messages or use the
                Services to send unsolicited messages (also known as junk mail
                or SPAM).
              </Text>
              <Text className="my-3 font-normal">
                vii. &nbsp;You shall not use the Services as a remote storage
                server or for the primary purpose of providing downloadable
                content.
              </Text>
              <Text className="my-3 font-normal">
                viii. &nbsp;You may not rent, lease, loan, or sell access to, or
                otherwise attempt to transfer any right in our Services (which
                includes its software and documentation) to a third-party,
                through framing or any other method.
              </Text>
              <Text className="my-3 font-normal">
                ix. &nbsp;You must not interfere with or disrupt the Services or
                create an undue burden on our Services or the networks or
                services connected to our website.
              </Text>
              <Text className="my-3 font-normal">
                x. &nbsp;You must not perform any benchmark tests or analyses
                relating to our Services without express permission of us.
              </Text>
              <Text className="my-3 font-normal">
                xi. &nbsp;You shall not use the Services to host any protected
                health information or information that is subject to the Health
                Insurance Portability and Accountability Act, unless you first
                obtain our prior written approval.
              </Text>
            </Box>
            <Text className="my-3 font-normal">
              b. &nbsp;The final decision of whether an account is in violation
              of any of these acceptable use terms is at the sole discretion of
              us. You agree that violations of these Terms by yourself or any
              person or Entity acting under your account will, in addition to
              any other remedies including criminal prosecution, result in
              termination of your access to our Services and removal (taking
              down) of all projects and deployments. In addition, violation of
              these terms or any of our policies may result in tracking
              information being stored to identify the offending person, and
              permanent restriction from holding an account via our Services.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            7. Restrictions on Use
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;You will not, directly or indirectly:
            </Text>
            <Box className="ml-7">
              <Text className="my-3 font-normal">
                i. &nbsp;sublicense, resell, rent, lease, transfer, assign, or
                otherwise commercially exploit or make the Services available to
                any third party;
              </Text>
              <Text className="my-3 font-normal">
                ii. &nbsp;reverse engineer, decompile, disassemble or otherwise
                attempt to discover the source code, object code or underlying
                structure, ideas, know-how or algorithms relevant to the
                Services or any software, documentation or data related to the
                Services (where reverse engineering is permitted by applicable
                law obtaining such information as is necessary to achieve
                interoperability with our Services, you must first request such
                information from us in writing);
              </Text>
              <Text className="my-3 font-normal">
                iii. &nbsp;modify, translate, or create derivative works based
                on the Services (except to the extent expressly permitted by us
                or authorized within the Services) or otherwise attempt to gain
                unauthorized access to the Services or its related systems or
                networks;
              </Text>
              <Text className="my-3 font-normal">
                iv. &nbsp;use the Services for time sharing or service bureau
                purposes or otherwise for the benefit of a third-party; or
                remove any proprietary notices or labels;
              </Text>
              <Text className="my-3 font-normal">
                v. &nbsp;remove, alter or obscure in any way any proprietary
                rights notices (including copyright notices) of us or our
                suppliers on or within the Services or documentation;
              </Text>
              <Text className="my-3 font-normal">
                vi. &nbsp;violate any applicable laws or regulations (including
                without limitation in violation of any data, privacy or export
                control laws) or infringe the rights of any third-party in
                connection with the use or access of the Services.
              </Text>
              <Text className="my-3 font-normal">
                vii. &nbsp;upload, record, publish, post, link to, transmit or
                distribute User Content, or otherwise utilize the Services in a
                manner that: (i) advocates, promotes, incites, instructs,
                informs, assists or otherwise encourages violence or any illegal
                activities; (ii) infringes or violates the copyright, patent,
                trademark, service mark, trade name, trade secret, or other
                intellectual property rights of any third party or GeekyAnts
                Inc. including its parent company, group companies and
                affiliates, or any rights of publicity or privacy of any party;
                (iii) attempts to mislead others about your identity or the
                origin of a message or other communication, or impersonates or
                otherwise misrepresents your affiliation with any other person
                or entity, or is otherwise materially false, misleading, or
                inaccurate; (iv) promotes, solicits or comprises inappropriate,
                harassing, abusive, profane, hateful, defamatory, libelous,
                threatening, obscene, indecent, vulgar, pornographic or
                otherwise objectionable or unlawful content or activity; (v) is
                harmful to minors; (vi) utilizes or contains any viruses,
                Phishing attacks, Trojan horses, worms, time bombs, or any other
                similar software, data, or programs that may damage,
                detrimentally interfere with, surreptitiously intercept, or
                expropriate any system, data, personal information, or property
                of another; or (vii) violates any law, statute, ordinance, or
                regulation (including without limitation the laws and
                regulations governing export control, unfair competition,
                anti-discrimination, or false advertising).
              </Text>
              <Text className="my-3 font-normal">
                viii. &nbsp;You may not use the Services if you are a person
                barred from receiving the Services under the laws of the United
                States or other countries, including the country in which you
                are resident or from which you use the Services.
              </Text>
            </Box>
            <Text className="my-3 font-normal">
              b. &nbsp;You shall comply with all codes of conduct, policies or
              other notices we provide you or publish in connection with the
              Services, and you shall promptly notify us if you learn of a
              security breach or issue related to the Services. Without limiting
              the foregoing, you acknowledge that we may establish general
              practices and limits concerning use of the Services, including
              without limitation the maximum period of time that data, code or
              other content will be retained by the Services, the maximum
              storage space that will be allotted on our servers on your behalf,
              and the maximum compute capacity provided for the execution of
              builds and functions and the maximum network data transferred by
              the Services. You further acknowledge that we reserve the right to
              change these general practices and limits at any time, in our sole
              discretion.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">8. Etiquette</Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;Without limiting any of these Terms, you shall not use
              the Services for, or in conjunction with, a website (including
              links from a website) that has any content that may be
              objectionable (as determined in our sole discretion), abusive,
              profane, contain hate speech or violates any applicable law. You
              hereby agree to indemnify and hold GeekyAnts Inc., its parent
              company, group companies and its affiliates harmless against any
              damages, losses, liabilities, settlements and expenses (including
              without limitation costs and attorneys&apos; fees) in connection
              with any third party claim or action that arises from an alleged
              violation of the foregoing or otherwise from your use of Services
              in a manner not authorized by these Terms. Although we have no
              obligation to monitor your use of the Services, we may do so and
              may prohibit any use of the Services it believes may be (or
              alleged to be) in violation of the foregoing. YOU ACKNOWLEDGE THAT
              WE MAY DISABLE OR TERMINATE THE SERVICES IF WE BELIEVE THERE IS
              ANY CONTENT THAT VIOLATES THESE TERMS, INCLUDING THE ACCEPTABLE
              USE TERMS AND THE RESTRICTIONS ON USE PROVIDED ABOVE IN THESE
              TERMS.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            9. Plans and Pricing Terms
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;The Services will be provided according to the plan level
              you select. There are both Free Plans as well as Paid Plans.
            </Text>
            <Box className="ml-7">
              <Text className="my-3 font-normal">
                i. &nbsp;<Text className="font-bold">Free Plan:</Text> We offer
                FREE PLANS at our sole discretion. We may change the terms and
                conditions applicable to the free plan or discontinue offering
                the free plan at any time. We reserve the right to disable or
                remove any project or website deployment on the free plan with
                or without notice at our sole discretion. We may shut down and
                terminate projects or deployments using the free plan without
                notice for any reason or no reason. We may shut down affected
                projects or deployments on the free plan in case of any delays
                or performance problems including, without limitation, those
                caused by a malicious attack on a project or deployment.
              </Text>
              <Text className="my-3 font-normal">
                ii. &nbsp;<Text className="font-bold">Paid Plans:</Text> All
                information relating the paid plans and pricing terms will be
                updated in the following versions of these Terms once the Paid
                Plans are launched by us.
              </Text>
            </Box>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            10. Confidentiality and Other Rights
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;<Text className="font-bold">Confidentiality:</Text> Each
              party (the{' '}
              <Text className="font-bold">&quot;Receiving Party&quot;</Text>)
              understands that the other party (the&nbsp;
              <Text className="font-bold">&quot;Disclosing Party&quot;</Text>)
              has disclosed or may disclose business, technical, product or
              financial information or data relating to the Disclosing
              Party&quot;s business (hereinafter referred to as&nbsp;
              <Text className="font-bold">
                &quot;Proprietary Information&quot;
              </Text>
              &nbsp; of the Disclosing Party). Proprietary Information of
              GeekyAnts Inc. means information including but not limited to
              non-public information regarding features, functionality,
              performance and other sensitive data related to the Services. Your
              Proprietary Information includes non-public personal data provided
              by you to us to enable the provision of the Services and that you
              upload to the Services (collectively,&nbsp;
              <Text className="font-bold">&quot;Your Data&quot;</Text>
              ). The Receiving Party agrees: (i) to take reasonable precautions
              to protect such Proprietary Information, and (ii) not to use or
              divulge to any third person any such Proprietary Information
              (except in performance of the Services or as otherwise permitted
              herein). The Disclosing Party agrees that the foregoing shall not
              apply with respect to any information that the Receiving Party can
              document (a) is or becomes generally available to the public, or
              (b) was rightfully in its possession or known by it prior to
              receipt from the Disclosing Party, or (c) was rightfully disclosed
              to it without confidentiality restrictions by a third party, or
              (d) is or was independently developed without use of any
              Proprietary Information of the Disclosing Party as evidenced by
              its internal files. If a Receiving Party is required by law or a
              governmental agency to disclose the Disclosing Party&apos;s
              Proprietary Information, the Receiving Party must provide
              reasonable notice to the Disclosing Party of such required
              disclosure so as to permit the Disclosing Party a reasonable
              period of time to seek a protective order or limit the amount of
              Proprietary Information to be disclosed.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;<Text className="font-bold">Temporary Use License:</Text>
              &nbsp; During the period for which you are authorized to use the
              Services, and subject to your compliance with these Terms, you are
              granted a personal, non-sublicensable, nonexclusive, non
              transferable, limited license, to use the Services for your
              internal business or personal purposes according to the service
              capacity of your account. Any rights not expressly granted herein
              are reserved and no license or right to use any
              trademark/intellectual property of GeekyAnts Inc., or any
              third-party is granted to you in connection with the Services.
            </Text>
            <Text className="my-3 font-normal">
              c. &nbsp;<Text className="font-bold"> Feedback:</Text> You may
              choose to or we may invite you to submit comments or ideas about
              the Services, including without limitation about how to improve
              the Services. By submitting any feedback, you agree that your
              disclosure is gratuitous, unsolicited and companies and/or its
              affiliates under any fiduciary or other obligation, and that we
              are free to use such feedback without any additional compensation
              to you, and/or to disclose such feedback on a non-confidential
              basis or otherwise to anyone. Further, you warrant without
              restriction and will not place GeekyAnts Inc., its parent company,
              group that your feedback is not subject to any license terms that
              would purport to require us to comply with any additional
              obligations with respect to any products or services that
              incorporate any of your feedback. You further acknowledge that, by
              acceptance of your submission, we do not waive any rights to use
              similar or related ideas previously known to us, or developed by
              its employees, or obtained from sources other than you.
            </Text>
            <Text className="my-3 font-normal">
              d. &nbsp;<Text className="font-bold"> Aggregate Data: </Text>
              We shall have the right to collect and analyze data and other
              information relating to the provision, use and performance of
              various aspects of the Services and related systems and
              technologies (excluding Your Data and data derived therefrom), and
              we will be free (during and after the term hereof) to (i) use such
              information and data to improve and enhance the Services and for
              other development, diagnostic and corrective purposes in
              connection with the Services and other offerings, and (ii)
              disclose such data solely in aggregate or other de-identified form
              in connection with its business.
            </Text>
            <Text className="my-3 font-normal">
              e. &nbsp;<Text className="font-bold"> Customer Name: </Text>
              During the term of this Agreement, you grant us a non-exclusive,
              royalty-free, fully-paid up license to use and reproduce your
              trademarks, trade names and logos (
              <Text className="font-bold">&quot;Customer Name&quot;</Text>) in
              our marketing materials and website(s) and to indicate that you
              are our customer. We will abide by any written trademark usage
              guidelines provided by you. All goodwill arising out of the use of
              your trademarks, trade names and logos shall insure to your
              benefit. To decline us this license you need to email&nbsp;
              <Link
                href="mailto:support@gluestack.io"
                className="no-underline text-[#38BDF8]"
              >
                support@gluestack.io
              </Link>
              stating that you do not wish to be used as a reference.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            11. Representations.
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;Each party represents and warrants to the other that it
              has full right and power to enter into and perform under this
              Agreement, without any third-party consents or conflicts with any
              other agreement.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;You represent and warrant that:
            </Text>
            <Box className="ml-7">
              <Text className="my-3 font-normal">
                i. &nbsp;you own all the User Content or have obtained all
                permissions, releases, rights or licenses required to engage in
                posting and other activities (and allow us to perform its
                obligations) in connection with the Services without obtaining
                any further releases or consents;
              </Text>
              <Text className="my-3 font-normal">
                ii. &nbsp;the User Content and other activities in connection
                with the Services, and our exercise of all rights and license
                granted by you herein, do not and will not violate, infringe, or
                misappropriate any third party&apos;s copyright, trademark,
                right of privacy, or publicity, or other personal or proprietary
                right and Your Content is not defamatory, obscene, unlawful,
                threatening, abusive, tortious, offensive or harassing; and
              </Text>
              <Text className="my-3 font-normal">
                iii. &nbsp;you will use the Services only in compliance with our
                policies and all applicable laws and regulations.
              </Text>
            </Box>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            12. Disclaimer of Warranty
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE
              SERVICES ARE AT YOUR SOLE RISK AND THAT THE SERVICES ARE PROVIDED
              “AS IS” AND “AS AVAILABLE.”
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;GEEKYANTS INC., ITS PARENT COMPANY, GROUP COMPANIES,
              AFFILIATES, LICENSORS, OFFICERS, AGENTS, EMPLOYEES, ADVERTISERS,
              SUPPLIERS OR PARTNERS (Collectively,&nbsp;
              <Text>&quot;GeekyAnts Inc. and Partners&quot;</Text>) MAKE NO
              EXPRESS WARRANTIES AND DISCLAIM ALL IMPLIED WARRANTIES REGARDING
              THE SERVICES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. WITHOUT
              LIMITING THE GENERALITY OF THE FOREGOING, GEEKYANTS INC., ITS
              PARENT COMPANY, GROUP COMPANIES AND AFFILIATES, AND ITS LICENSORS
              DO NOT REPRESENT OR WARRANT TO YOU THAT: (i) YOUR USE OF THE
              SERVICES WILL MEET YOUR REQUIREMENTS, (ii) YOUR USE OF THE
              SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR,
              AND (iii) USAGE DATA PROVIDED THROUGH THE SERVICES WILL BE
              ACCURATE
            </Text>
            <Text className="my-3 font-normal">
              c. &nbsp;IN ADDITION, YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT
              NO ORAL OR WRITTEN INFORMATION OR ADVICE PROVIDED BY GEEKYANTS
              INC., ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS , AND THIRD
              PARTY SERVICE PROVIDERS WILL (i) CONSTITUTE LEGAL OR FINANCIAL
              ADVICE OR (ii) CREATE A WARRANTY OF ANY KIND WITH RESPECT TO THIS
              SITE OR THE SERVICES FOUND AT THIS SITE, AND USERS SHOULD NOT RELY
              ON ANY SUCH INFORMATION OR ADVICE.
            </Text>
            <Text className="my-3 font-normal">
              d. &nbsp;NOTHING IN THESE TERMS, INCLUDING SECTIONS 12 AND 13,
              SHALL EXCLUDE OR LIMIT GEEKYANTS INC.&apos;S, WARRANTY OR
              LIABILITY FOR LOSSES WHICH MAY NOT BE LAWFULLY EXCLUDED OR LIMITED
              BY APPLICABLE LAW.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            13. Limitation of Liability
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;SUBJECT TO SECTION 12 ABOVE, YOU EXPRESSLY UNDERSTAND AND
              AGREE THAT GEEKYANTS INC. AND ITS PARTNERS SHALL NOT BE LIABLE TO
              YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              EXEMPLARY DAMAGES WHICH MAY BE INCURRED BY YOU, HOWEVER CAUSED AND
              UNDER ANY THEORY OF LIABILITY. THIS SHALL INCLUDE, BUT NOT BE
              LIMITED TO, ANY LOSS OF PROFIT (WHETHER INCURRED DIRECTLY OR
              INDIRECTLY), ANY LOSS OF GOODWILL OR BUSINESS REPUTATION, ANY LOSS
              OF DATA SUFFERED, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR
              SERVICES, OR OTHER INTANGIBLE LOSS. THESE LIMITATIONS SHALL APPLY
              NOTWITHSTANDING THE FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED
              REMEDY.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;THE LIMITATIONS ON GEEKYANTS INC.&apos;S LIABILITY TO YOU
              IN THIS SECTION SHALL APPLY WHETHER OR NOT GEEKYANTS INC. HAS BEEN
              ADVISED OF OR SHOULD HAVE BEEN AWARE OF THE POSSIBILITY OF ANY
              SUCH LOSSES ARISING.
            </Text>
            <Text className="my-3 font-normal">
              c. &nbsp;SOME STATES AND JURISDICTIONS MAY NOT ALLOW THE
              LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
              CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY
              NOT APPLY TO YOU. IN NO EVENT SHALL GEEKYANTS INC. AND
              PARTNER&apos;S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND
              CAUSES OF ACTION (WHETHER IN CONTRACT, TORT (INCLUDING
              NEGLIGENCE), OR OTHERWISE) EXCEED THE AMOUNT THAT YOU HAVE
              ACTUALLY PAID FOR THE SERVICES IN THE PAST TWELVE MONTHS, OR ONE
              THOUSAND DOLLARS ($1000.00), WHICHEVER IS GREATER.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            14. Indemnification
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;You agree to hold harmless and indemnify GeekyAnts Inc.
              and Partners from and against any third party claim arising from
              or in any way related to (i) your breach of the Terms, (ii) your
              use of the Services, (iii) your violation of applicable laws,
              rules or regulations in connection with the Services, or (iv) your
              User Content, including any liability or expense arising from all
              claims, losses, damages (actual and consequential), suits,
              judgments, litigation costs and attorneys&apos; fees, of every
              kind and nature.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;We reserve the right to assume the exclusive defense and
              control of any matter which is subject to indemnification under
              this Section. In such case, you agree to cooperate with any
              reasonable requests for assisting our defense of such matter.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            15. Location of Server
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;Our Servers and Data Centres (including that of our
              sub-processors) are located in:
            </Text>
            <Box className="ml-7">
              <Text className="my-3 font-normal">i. &nbsp;India</Text>
              <Text className="my-3 font-normal">ii. &nbsp;Germany</Text>
              <Text className="my-3 font-normal">iii. &nbsp;Sweden</Text>
              <Text className="my-3 font-normal">iv. &nbsp;Finland</Text>
              <Text className="my-3 font-normal">v. &nbsp;USA</Text>
              <Text className="my-3 font-normal">vi. &nbsp;Netherlands</Text>
              <Text className="my-3 font-normal">vii. &nbsp;England</Text>
              <Text className="my-3 font-normal">viii. &nbsp;Austria</Text>
              <Text className="my-3 font-normal">ix. &nbsp;Singapore</Text>
              <Text className="my-3 font-normal">x. &nbsp;United Kingdom</Text>
              <Text className="my-3 font-normal">xi. &nbsp;Canada</Text>
              <Text className="my-3 font-normal">xii. &nbsp;Australia</Text>
            </Box>
          </Box>
          <Text className="my-3 font-normal">
            Any change to the above list that pertains to the location of the
            Servers will be updated in the following versions of these Terms.
          </Text>
          <Text className="text-2xl font-bold mb-4 mt-9">
            16.Third-Party Content and Materials
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;You may be able to access or use third party websites,
              resources, content, communications or information (
              <Text className="font-bold">
                &quot;Third Party Materials&quot;
              </Text>
              ) via the Services. You acknowledge sole responsibility for and
              assume all risk arising from your access to, reliance upon or use
              of any such Third Party Materials and we disclaim any and all
              liabilities that you may incur arising from access to, reliance
              upon or use of such Third Party Materials via the Services.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;You acknowledge and agree that we: (i) are not
              responsible for the availability or accuracy of such Third Party
              Materials; (ii) have no liability to you or any third party for
              any harm, injuries or losses suffered as a result of your access
              to, reliance upon or use of such Third Party Materials; and (iii)
              do not make any promises to remove Third Party Materials from
              being accessed through the Services.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            17.Third Party Software & Tools
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;The Services may incorporate certain third party software
              (
              <Text className="font-bold">
                &quot;Third Party Software&quot;
              </Text>
              ), which is licensed subject to the terms and conditions of such
              Third Party Software. Nothing in these Terms limits your rights
              under, or grants you rights that supersede, the terms and
              conditions of any applicable license for such Third Party
              Software.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;You acknowledge and agree that we may use third-party
              Service Providers to monitor and analyze your use of our Service.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">18. Inactivity</Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;
              <Text className="font-bold">Username squatting policy:</Text>
              &nbsp; We prohibit account name squatting, and account names may
              not be inactively held for future use. Inactive accounts may be
              renamed or removed by our staff at their discretion. Keep in mind
              that not all activity on our Service Platform is publicly visible.
              Attempts to sell, buy, or solicit other forms of payment in
              exchange for account names are prohibited and may result in
              permanent account suspension.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;
              <Text className="font-bold">
                {' '}
                Deployment URL squatting policy:
              </Text>{' '}
              We prohibit squatting of free *.alpha.gluestack.app or
              *.gluestack.app domain names, and these domain names may not be
              inactively held for future use. Inactive registrations may be
              renamed or removed by our staff at their discretion. Keep in mind
              that not all activity on our Service Platforms publicly
              visible.Attempts to sell, buy, or solicit other forms of payment
              in exchange for account names are prohibited and may result in
              permanent account suspension.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            19. Trademark Violations
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp; When we receive reports of trademark policy violations
              from holders of federal or international trademark registrations,
              we review the account and may take the following actions:
            </Text>
            <Box className="ml-7">
              <Text className="my-3 font-normal">
                i. &nbsp;When there is a clear intent to mislead others through
                the unauthorized use of a trademark, we will suspend the account
                and notify the account holder.
              </Text>
              <Text className="my-3 font-normal">
                ii. &nbsp;When we determine that an account appears to be
                confusing users, but is not purposefully passing itself off as
                the trademarked good or service, we give the account holder an
                opportunity to clear up any potential confusion. We may also
                release the username or user id, deployment URL, for the
                trademark holder&apos;s active use.
              </Text>
            </Box>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            20. Governing Law
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;The Terms and the resolution of any disputes shall be
              governed by and construed in accordance with the laws of the State
              of California, without regard to its conflict of laws principles.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            21. Disputes and Arbitration
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;<Text className="font-bold">Binding Contract:</Text> You
              acknowledge that these Terms are a contract between you and us,
              even though it is electronic and is not physically signed by you
              and us, and it governs your use of the Services.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;
              <Text className="font-bold">
                Arbitration: Please read the following Section carefully because
                it requires you to arbitrate certain disputes and claims with us
                and limits the manner in which you can seek relief from us.
              </Text>
            </Text>
            <Box className="ml-7">
              <Text className="my-3 font-normal">
                i. &nbsp;These Terms and any action related thereto will be
                governed by the laws of the State of California without regard
                to its conflict of laws provisions. Except for small claims
                disputes in which you or GeekyAnts Inc., seek to bring an
                individual action in small claims court located in the county of
                your billing address or claims for injunctive relief by either
                party, any dispute or controversy arising out of, in relation
                to, or in connection with these Terms or your use of the
                Services shall be finally settled by binding arbitration in San
                Francisco, California under the Federal Arbitration Act **** (9
                U.S.C. §§ 1-307) and the then current rules of JAMS (formerly
                known as Judicial Arbitration & Mediation Services) by one (1)
                arbitrator appointed in accordance with such rules. Where
                arbitration is not required by these Terms, the exclusive
                jurisdiction and venue of any action with respect to the subject
                matter of these Terms will be the state and federal courts
                located in Santa Clara, California, and each of the parties
                hereto waives any objection to jurisdiction and venue in such
                courts.
              </Text>
            </Box>
            <Text className="my-3 font-normal">
              c. &nbsp;<Text className="font-bold">CLASS ACTION: </Text>ANY
              DISPUTE RESOLUTION PROCEEDING ARISING OUT OF OR RELATED TO THESE
              TERMS OR THE SALES TRANSACTIONS BETWEEN YOU AND US, WHETHER IN
              ARBITRATION OR OTHERWISE, SHALL BE CONDUCTED ONLY ON AN INDIVIDUAL
              BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE ACTION,
              AND YOU EXPRESSLY AGREE THAT CLASS ACTION AND REPRESENTATIVE
              ACTION PROCEDURES SHALL NOT BE ASSERTED IN NOR APPLY TO ANY
              ARBITRATION PURSUANT TO THESE TERMS AND CONDITIONS. YOU ALSO AGREE
              NOT TO BRING ANY LEGAL ACTION, BASED UPON ANY LEGAL THEORY
              INCLUDING CONTRACT, TORT, EQUITY OR OTHERWISE, AGAINST US THAT IS
              MORE THAN ONE YEAR AFTER THE DATE OF THE APPLICABLE ORDER.
            </Text>
            <Text className="my-3 font-normal">
              d. &nbsp;You are solely responsible for your interactions with
              other Users. We reserve the right, but have no obligation, to
              monitor disputes between you and other Users. We shall have no
              liability for your interactions with other Users, or for any
              User&apos;s action or inaction.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">22. Security</Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;You understand that the operation of the Services,
              including the User Content, may be unencrypted and involve (a)
              transmissions over various networks; (b) changes to conform and
              adapt to technical requirements of connecting networks or devices
              and (c) transmission to our third-party vendors and hosting
              partners to provide the necessary hardware, software, networking,
              storage, and related technology required to operate and maintain
              the Services. Accordingly, you acknowledge that you bear sole
              responsibility for adequate security, protection and backup of the
              User Content. We will have no liability to you for any
              unauthorized access or use of any of the User Content that is
              attributable, in whole or in part, to an insecurity in your
              website or project, malware or malicious content in your website
              or project, or any corruption, deletion, destruction or loss of
              any the User Content.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">23. Support.</Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;Subject to the terms hereof, we may, but are not required
              to, provide you with commercially reasonable remote technical
              support services during our normal business hours (
              <Text className="font-bold">Support Services</Text>).
              Notwithstanding anything to the contrary contained in these Terms,
              all Support Services are provided at our sole discretion.
              Furthermore, Support Services are not provided for Free Plans.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            24. Modification and Termination of Services
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;GeekyAnts Inc., is constantly innovating in order to
              provide the best possible experience for its users. You
              acknowledge and agree that the form and nature of the Services
              which we provide may change from time to time without prior notice
              to you, subject to the terms in its&nbsp;
              <Link
                href="/privacy-policy"
                className="no-underline text-[#38BDF8]"
              >
                Privacy Policy.
              </Link>
              &nbsp; Changes to the form and nature of the Services will be
              effective with respect to all versions of the Services; examples
              of changes to the form and nature of the Services include without
              limitation changes to fee and payment policies, security patches,
              added functionality, automatic updates, and other enhancements.
              Any new features that may be added or modified or removed from the
              Services from time to time will be subject to these Terms, unless
              stated otherwise.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;You may terminate these Terms at any time by canceling
              your account on the Services.
            </Text>
            <Text className="my-3 font-normal">
              c. &nbsp;You agree that GeekyAnts Inc., in its sole discretion and
              for any or no reason, may terminate your account or any part
              thereof. You agree that any termination of your access to the
              Services may be without prior notice, and you agree that GeekyAnts
              Inc., will not be liable to you or any third party for such
              termination.
            </Text>
            <Text className="my-3 font-normal">
              d. &nbsp;You are solely responsible for exporting your User
              Content from the Services prior to termination of your account for
              any reason, provided that if we terminate your account for our
              convenience, we will endeavor to provide you a reasonable
              opportunity to retrieve your User Content.
            </Text>
            <Text className="my-3 font-normal">
              e. &nbsp;Upon any termination of the Services or your account
              these Terms will also terminate, but all provisions of these Terms
              which, by their nature, should survive termination, shall survive
              termination, including, without limitation, ownership provisions,
              warranty disclaimers, limitations of liability and
              indemnification.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            25. Changes to the Terms of Service
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;These Terms may be amended or updated from time to time
              without notice and may have changed since your last visit to the
              website or use of the Services. It is your responsibility to
              review these Terms for any changes. By continuing to access or use
              the Services after revisions become effective, you agree to be
              bound by the revised Terms. If you do not agree to the new Terms,
              please stop using the Services. Please visit this page regularly
              to review the Terms for any changes.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            26. Privacy Policy
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;These Services are provided in accordance with our&nbsp;
              <Link
                href="/privacy-policy"
                className="no-underline text-[#38BDF8]"
              >
                Privacy Policy.
              </Link>
              &nbsp; You agree to the use of your User Content and personal
              data/information in accordance with these Terms and Privacy
              Policy.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            27. No Third-Party Beneficiaries
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;Nothing in this Terms shall be deemed to confer any
              third-party rights or benefits.
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">
            28. Miscellaneous
          </Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;If GeekyAnts Inc. or its representatives provides you
              with a translation of the English language version of these Terms,
              the English language version of these Terms will prevail over any
              other language version in case of any conflict.
            </Text>
            <Text className="my-3 font-normal">
              b. &nbsp;If any part of the Terms of Service is held to be
              unlawful, void, or unenforceable, that part shall be deemed
              severed and shall not affect the validity and enforceability of
              the remaining provisions.
            </Text>
            <Text className="my-3 font-normal">
              c. &nbsp;The failure of GeekyAnts Inc. to exercise or enforce any
              right or provision under these Terms shall not constitute a waiver
              of such right or provision. Any waiver of any right or provision
              by GeekyAnts Inc. must be in writing and shall only apply to the
              specific instance identified in such writing.
            </Text>
            <Text className="my-3 font-normal">
              d. &nbsp;You may not assign these Terms, or any rights or licenses
              granted hereunder, whether voluntarily, by operation of law, or
              otherwise without our prior written consent.
            </Text>
            <Text className="my-3 font-normal">
              e. &nbsp;By using the Services, you consent to receiving
              electronic communications from us. These electronic communications
              may include notices about applicable Services fees and charges
              related to the Services and transactional or other information
              concerning or related to the Services. These electronic
              communications are part of your relationship with us and you
              receive them as part of your use of the Services. You agree that
              any notices, agreements, disclosures or other communications that
              we send you electronically will satisfy any legal communication
              requirements, including that such communications be in writing.
            </Text>
            <Text className="my-3 font-normal">
              f. &nbsp;All communications, notices and requests to GeekyAnts
              Inc., in relation to the Services and the like must be made in
              writing and shall be emailed to&nbsp;
              <Link
                href="mailto:support@gluestack.io"
                className="no-underline text-[#38BDF8]"
              >
                support@gluestack.io
              </Link>
            </Text>
          </Box>
          <Text className="text-2xl font-bold mb-4 mt-9">29. Previews:</Text>
          <Box className="ml-7">
            <Text className="my-3 font-normal">
              a. &nbsp;GeekyAnts Inc., may elect to provide certain Previews
              from time to time. During the Preview phase, the primary targeted
              users for our Services are Customers located in the geographic
              locations of the United States. Notwithstanding anything contained
              to the contrary in these Terms, Previews are provided
              &quot;AS-IS&quot;, &quot;WITH ALL FAULTS&quot;, and &quot;AS
              AVAILABLE&quot; without warranty, indemnity, support, or other
              commitments. You acknowledge and agree that Previews are not ready
              for production usage, and that your use of any Previews is at its
              sole risk and discretion. We may change, discontinue or terminate
              your use of Previews at any time without notice. You acknowledge
              and agree that we may track your activities, your device type, and
              collect various data, including analytics, about how you use and
              interact with our Previews.
              <Text className="font-bold">&quot;Previews&quot;</Text> means
              Services, releases, features, or functionality provided for
              preview, pre-release, evaluation, demonstration, or similar
              purposes.
            </Text>
          </Box>

          <Text className="text-2xl font-bold mb-4 mt-9">30. Contact Us</Text>
          <Text className="my-3 font-normal">
            If you have any questions about these Terms, please contact us:
          </Text>
          <Text className="my-3 font-normal">
            By email:&nbsp;
            <Link
              href="mailto:support@gluestack.io"
              className="no-underline text-[#38BDF8]"
            >
              support@gluestack.io
            </Link>
          </Text>
        </Box>
      </Box>
      <BadgeComponent />
      <Footer />
    </WebsiteLayout>
  );
};

export default TermsOfService;
