import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from 'utils/Layout'
import { SmallerHeader } from 'components/Headers'
import { LegalWrapper } from 'components/shared'

const WebsiteUse = ({ data }) => {
  const meta = {
    title: 'Accepted use policy | St Martins Theatre',
  }
  return (
    <Layout title={meta.title}>
      <SmallerHeader title="Accepted use policy" />
      <LegalWrapper>
        <ol>
          <li>
            About this policy
            <ol>
              <li>
                Together with our{' '}
                <Link to="/terms-and-conditions-for-purchase-of-tickets/">
                  website terms and conditions of use
                </Link>
                , this acceptable use policy (Policy) governs how you may access
                and use this website and all associated web pages (Site), which
                is provided by us free of charge.
              </li>
              <li>
                You should read this Policy carefully before using the Site.
              </li>
              <li>
                By accessing or using the Site or otherwise indicating your
                consent, you agree to be bound by this Policy, which supplements
                our{' '}
                <Link to="/terms-and-conditions-for-purchase-of-tickets/">
                  website terms and conditions of use
                </Link>
                . If you do not agree with or accept any part of this Policy,
                you should stop using the Site
              </li>
              <li>
                If you have any questions about this Policy, please contact us
                using the contact details provided in our{' '}
                <Link to="/terms-and-conditions-for-purchase-of-tickets/">
                  website terms and conditions of use
                </Link>
                .
              </li>
              <li>
                <strong>[</strong>If you would like this Policy in another
                format (for example: audio, large print, braille) please
              </li>
              <li>
                In this Policy: &lsquo;we&rsquo;, &lsquo;us&rsquo; or
                &lsquo;our&rsquo; means St. Martin's Theatre, a company
                registered in England and Wales under company registration
                number 02910157, whose registered office 6<sup>th</sup> Floor,
                Charlotte Building, 17 Gresse Street, London, W1T 1QL with VAT
                registration number [insert VAT number]; and &lsquo;you&rsquo;
                or &lsquo;your&rsquo; means the person accessing or using the
                Site or its content.
              </li>
            </ol>
          </li>
          <li>
            {' '}
            Acceptable use
            <ul>
              <l>
                We permit you to use the Site only for personal, non-commercial
                purposes and primarily for accessing information about us and
                purchasing tickets. Use of the Site in any other way, including
                any unacceptable use set out in this Policy, is not permitted.
              </l>
            </ul>
          </li>
          <li>
            Unacceptable use
            <ol>
              <li>
                As a condition of your use of the Site, you agree not to use the
                Site:
                <ol>
                  <li>
                    for any purpose that is unlawful under any applicable law or
                    prohibited by this Policy or our{' '}
                    <Link to="/terms-and-conditions-for-purchase-of-tickets/">
                      website terms and conditions of use
                    </Link>
                    ;
                  </li>
                  <li>to commit any act of fraud;</li>
                  <li>
                    to distribute viruses or malware or other similar harmful
                    software code;
                  </li>
                  <li>
                    for purposes of promoting unsolicited advertising or sending
                    spam;
                  </li>
                  <li>
                    to simulate communications from us or another service or
                    entity in order to collect identity information,
                    authentication credentials, or other information
                    (&lsquo;phishing&rsquo;);
                  </li>
                  <li>
                    in any manner that disrupts the operation of our Site or
                    business or the website or business of any other entity;
                  </li>
                  <li>in any manner that harms minors;</li>
                  <li>to promote any unlawful activity;</li>
                  <li>
                    to represent or suggest that we endorse any other business,
                    product or service unless we have separately agreed to do so
                    in writing;
                  </li>
                  <li>
                    to gain unauthorised access to or use of computers, data,
                    systems, accounts or networks; or
                  </li>
                  <li>
                    to attempt to circumvent password or user authentication
                    methods.
                  </li>
                </ol>
              </li>
            </ol>
          </li>

          <li>
            Bulletin boards, chat rooms and other interactive services
            <ol>
              <li>
                We may make bulletin boards, chat rooms or other communication
                services (Interactive Services) available on the Site.
              </li>
              <li>
                We are not obliged to monitor or moderate any text, images,
                video, audio or other multimedia content, information or
                material (Submission) submitted to ourInteractive Services.
                Where we do monitor or moderate Submissions we shall indicate
                how this is performed and who should be contacted in relation to
                any Submission of concern to you.
              </li>
              <li>
                We may remove or edit any Submission to any of ourInteractive
                Services whether they are moderated or not.
              </li>
              <li>
                Any Submission you make must comply with our Submission
                standards set out in clause 5 below.
              </li>
              <li>
                By making a Submission, you grant to us a royalty-free,
                irrevocable, non-exclusive, transferable licence to use,
                reproduce, modify, publish, edit, translate, distribute, perform
                and display the Submission (in whole or in part) on the Site,
                and on any other websites operated by us, indefinitely.
              </li>
            </ol>
          </li>

          <li>
            Submission standards
            <ol>
              <li>
                Any Submission you make to our Interactive Services and any
                other communication to users of our Site by you must conform to
                standards of accuracy, decency and lawfulness, which shall be
                applied in our discretion, acting reasonably.
              </li>
              <li>
                In particular, any Submission or communication by you must be:
                <ol>
                  <li>your own original work and lawfully submitted;</li>
                  <li>factually accurate or your own genuinely held belief;</li>
                  <li>
                    provided with the necessary consent of any third party;
                  </li>
                  <li>
                    not defamatory or likely to give rise to an allegation of
                    defamation;
                  </li>
                  <li>
                    not offensive, obscene, sexually explicit, discriminatory or
                    deceptive; and
                  </li>
                  <li>
                    unlikely to cause offence, embarrassment or annoyance to
                    others.
                  </li>
                </ol>
              </li>
            </ol>
          </li>

          <li>
            Linking and framing
            <ol>
              <li>
                You may create a link to our Site from another website without
                our prior written consent provided no such link:
                <ol>
                  <li>
                    creates a frame or any other browser or border environment
                    around the content of our Site;
                  </li>
                  <li>
                    implies that we endorse your products or services or any of
                    the products or services of, or available through, the
                    website on which you place a link to our Site;
                  </li>
                  <li>
                    displays any of the trade marks or logos used on our Site
                    without our permission or that of the owner of such trade
                    marks or logos; or
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            Breach
            <ol>
              <li>
                We shall apply the terms of this Policy in our absolute
                discretion. In the event of your breach of this Policy we may
                terminate or suspend your use of the Site, remove or edit
                Submissions, disclose Submissions or any other communication to
                users of our Site by you to law enforcement authorities or take
                any action we consider necessary to remedy the breach.
              </li>
            </ol>
          </li>
        </ol>
      </LegalWrapper>
    </Layout>
  )
}

export default WebsiteUse
