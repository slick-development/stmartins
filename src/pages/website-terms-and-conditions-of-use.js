import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from 'utils/Layout'
import { SmallerHeader } from 'components/Headers'
import { LegalWrapper } from 'components/shared'

const WebsiteTerms = ({ data }) => {
  const meta = {
    title: 'Website Terms & Conditions of use | St Martins Theatre',
  }
  return (
    <Layout title={meta.title}>
      <SmallerHeader title="Website Terms &amp; Conditions of use" />
      <LegalWrapper>
        <ol>
          <li>
            About our terms
            <ol>
              <li>
                These terms and conditions of use (Terms) explain how you may
                use this website and any of its content (Site). These Terms
                apply between St. Martin's Theatre (we, us or our) and you, the
                person accessing or using the Site (you or your).
              </li>
              <li>
                You should read these Terms carefully before using the Site. By
                using the Site or otherwise indicating your consent, you agree
                to be bound by these Terms. If you do not agree with any of
                these Terms, you should stop using the Site
              </li>
              <li>
                The Site is provided by us to you free of charge for
                informationpurposes only.
              </li>
              <li>
                If you order any tickets from the Site, separate terms and
                conditions will apply as set out here{' '}
                <Link to="/terms-and-conditions-for-purchase-of-tickets/">
                  {' '}
                  Terms and Conditions for purchase of tickets{' '}
                </Link>
                in addition to these Terms.
              </li>
            </ol>
          </li>

          <li>
            About us
            <ol>
              <li>
                We are St. Martin's Theatre, a company registered in England and
                Wales under company registration number 02910157. Our registered
                office is at 6<sup>th</sup> Floor, Charlotte Building, 17 Gresse
                Street, London, W1T 1QL. Our VAT registration number is
              </li>
              <li>
                If you have any questions about the Site, please contact us
                using the details on our <Link to="/">contact page </Link>.
              </li>
            </ol>
          </li>
          <li>
            Using the site
            <ol>
              <li>
                The Site is for your personal and non-commercial use only.
              </li>
              <li>
                You agree that you are solely responsible for all costs and
                expenses you may incur in relation to your use of the Site.
              </li>
              <li>
                We make no promise that the Site is appropriate or available for
                use in locations outside of the UK. If you choose to access the
                Site from locations outside the UK, you acknowledge you do so at
                your own initiative and are responsible for compliance with
                local laws where they apply.
              </li>
              <li>
                As a condition of your use of the Site, you agree to comply with
                our{' '}
                <Link to="/acceptable-use-policy/">
                  {' '}
                  Acceptable Use Policy{' '}
                </Link>{' '}
                and agree not to:
                <ol>
                  <li>
                    misuse or attack our Site by knowingly introducing viruses,
                    trojans, worms, logic bombs or any other material which is
                    malicious or technologically harmful (such as by way of a
                    denial-of-service attack), or
                  </li>
                  <li>
                    attempt to gain unauthorised access to our Site, the server
                    on which our Site is stored or any server, computer or
                    database connected to our Site.
                  </li>
                </ol>
              </li>
              <li>
                We may prevent or suspend your access to the Site if you do not
                comply with these Terms or any applicable law.
              </li>
            </ol>
          </li>
          <li>
            Registration and password security
            <ol>
              <li>
                Use of the Site may require registration, particularly in order
                to access restricted areas of the Site.
              </li>
              <li>
                We are not obliged to permit anyone to register with the Site
                and we may refuse, terminate or suspend registration to anyone
                at any time.
              </li>
              <li>
                You are responsible for making sure that your password and any
                other account details are kept secure and confidential.
              </li>
              <li>
                If we have reason to believe there is likely to be a breach of
                security or misuse of the Site through your account or the use
                of your password, we may notify you and require you to change
                your password, or we may suspend or terminate your
              </li>
              <li>
                Any personal information you provide to us as part of the
                registration process will be processed in accordance with our{' '}
                <Link to="/terms-and-conditions-for-purchase-of-tickets/">
                  {' '}
                  Privacy Policy
                </Link>
                .
              </li>
            </ol>
          </li>
          <li>
            Competitions and prize draws
            <ol>
              <li>
                From time to time it may possible to enter competitions or prize
                draws through the Site. There may be additional terms and
                conditions applicable to those competitions or prize draws.
                Where additional terms apply you will be notified of that fact
                and given an opportunity to read those terms and conditions
                before you enter the competition or the prize draw.
              </li>
              <li>
                If you are 16 years old or younger you may not enter
                competitions on the Site.
              </li>
            </ol>
          </li>
          <li>
            Your privacy and personal information
            <ol>
              <li>
                Your privacy and personal information are important to us. Any
                personal information that you provide to us will be dealt with
                in line with our{' '}
                <Link to="/terms-and-conditions-for-purchase-of-tickets/">
                  {' '}
                  Privacy Policy
                </Link>
                , which explains what personal information we collect from you,
                how and why we collect, store, use and share such information,
                your rights in relation to your personal information and how to
                contact us and supervisory authorities in the event you have a
                query or complaint about the use of your personal information.
              </li>
            </ol>
          </li>

          <li>
            Ownership, use and intellectual property rights
            <ol>
              <li>
                The intellectual property rights in the Site and in any text,
                images, video, audio or other multimedia content, software or
                other information or material submitted to or accessible from
                the Site (Content) are owned by us and our
              </li>
              <li>
                We and our licensors reserve all our intellectual property
                rights (including, but not limited to, all copyright, trade
                marks, domain names, design rights, database rights, patents and
                all other intellectual property rights of any kind) whether
                registered or unregistered anywhere in the world. This means,
                for example, that we remain owners of them and are free to use
                them as we see fit.
              </li>
              <li>
                Nothing in these Terms grants you any legal rights in the Site
                or the Content other than as necessary for you to access it. You
                agree not to adjust, try to circumvent or delete any notices
                contained on the Site or the Content (including any intellectual
                property notices) and in particular, in any digital rights or
                other security technology embedded or contained within the Site
                or the Content.
              </li>
            </ol>
          </li>
          <li>
            Submitting information to the site
            <ol>
              <li>
                While we try to make sure that the Site is secure, we do not
                actively monitor or check whether information supplied to us
                through the Site is confidential, commercially sensitive or
                valuable.
              </li>
              <li>
                Other than any personal information which will be dealt with in
                accordance with our Privacy Policy, we do not guarantee that
                information supplied to us through the Site will be kept
                confidential and we may use it on an unrestricted and
                free-of-charge basis as we reasonably see fit.
              </li>
            </ol>
          </li>
          <li>
            Accuracy of information and availability of the site
            <ol>
              <li>
                We try to make sure that the Site is accurate, up-to-date and
                free from bugs, but we cannot promise that it will be.
                Furthermore, we cannot promise that the Site will be fit or
                suitable for any purpose. Any reliance that you may place on the
                information on the Site is at your own risk.
              </li>
              <li>
                We may suspend or terminate access or operation of the Site at
                any time as we see fit.
              </li>
              <li>
                Any Content is provided for your general information purposes
                only and to inform you about us and our products and news,
                features, services and other websites that may be of interest,
                but has not been tailored to your specific requirements or
                circumstances. It does not constitute technical, financial or
                legal advice or any other type of advice and should not be
                relied on for any purposes. You should always use your own
                independent judgment when using our Site and its Content.
              </li>
              <li>
                While we try to make sure that the Site is available for your
                use, we do not promise that the Site will be available at all
                times or that your use of the Site will be uninterrupted.
              </li>
            </ol>
          </li>
          <li>
            Hyperlinks and third party sites
            <ol>
              <li>
                The Site may contain hyperlinks or references to third party
                advertising and websites other than the Site. Any such
                hyperlinks or references are provided for your convenience only.
                We have no control over third party advertising or websites and
                accept no legal responsibility for any content, material or
                information contained in them. The display of any hyperlink and
                reference to any third party advertising or website does not
                mean that we endorse that third party&rsquo;s website, products
                or services. Your use of a third party site may be governed by
                the terms and conditions of that third-party site and is at your
                own risk.
              </li>
            </ol>
          </li>

          <li>
            Our responsibility to you/liability
            <ol>
              <li>
                We are not liable to you for any loss or damage that was not
                foreseeable, any loss or damage not caused by our breach or
                negligence, or any business loss or damage.
              </li>
              <li>
                Nothing in these terms excludes or limits our liability for any
                death or personal injury caused by our negligence, liability for
                fraud or fraudulent misrepresentation, or any other liability
                that the law does not allow us to exclude or limit.
              </li>
              <li>
                You agree that you shall indemnify us against any claims or
                legal proceedings that are brought or threatened against us by a
                third party because your use of the Site or any material or
                information that you have obtained through the Site, which is in
                breach of these Terms.
              </li>
            </ol>
          </li>
          <li>
            Events beyond our control
            <ol>
              <li>
                We are not liable to you if we fail to comply with these Terms
                because of circumstances beyond our reasonable control.
              </li>
            </ol>
          </li>
          <li>
            No third party rights
            <ol>
              <li>
                No one other than us or you has any right to enforce any of
                these Terms.
              </li>
            </ol>
          </li>

          <li>
            Variation
            <ol>
              <li>
                No changes to these Terms are valid or have any effect unless
                agreed by us in writing or made in accordance with this clause
                15.
              </li>
              <li>
                We reserve the right to vary these Terms from time to time. Our
                updated Terms will be displayed on the Site and by continuing to
                use and access the Site following such changes, you agree to be
                bound by any variation made by us. It is your responsibility to
                check these Terms from time to time to verify such variations.
              </li>
            </ol>
          </li>

          <li>
            Complaints
            <ol>
              <li>
                We will try to resolve any disputes with you quickly and
                efficiently. If you are unhappy with us, please contact us as
                soon as possible using the contact details set out at the top of
                this page.
              </li>
              <li>
                The laws of England and Wales apply to these Terms, although if
                you are resident elsewhere you will retain the benefit of any
                mandatory protections given to you by the laws of that country.
              </li>
              <li>
                Any disputes will be subject to the non-exclusive jurisdiction
                of the courts of England and Wales. This means that you can
                choose whether to bring a claim in the courts of England and
                Wales or in the courts of another part of the UK in which you
              </li>
            </ol>
          </li>
        </ol>
        <address>
          Website administrator: Dewynters Ltd <br />
          Wellington House <br />
          125 Strand <br />
          London WC2R 0AP
        </address>
      </LegalWrapper>
    </Layout>
  )
}

export default WebsiteTerms
