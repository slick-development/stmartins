import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from 'utils/Layout'
import { SmallerHeader } from 'components/Headers'
import { LegalWrapper } from 'components/shared'

const CookiePolicy = ({ data }) => {
  const meta = {
    title: 'Cookie Policy | St. Martins Theatre',
  }
  return (
    <Layout title={meta.title}>
      <SmallerHeader title="Cookie Policy" />
      <LegalWrapper>
        <p>
          Please read this cookie policy carefully as it contains important
          information on who we are and how we use cookies on our website. This
          policy should be read together with our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> which sets out how
          and why we collect, store, use and share personal information
          generally, as well as your rights in relation to your personal
          information and details of how to contact us and supervisory
          authorities if you have a complaint.
        </p>
        <h3>Who we are</h3>
        <p>
          This website operated by The St. Martin's Theatre. We are theatre
          production company.
        </p>
        <h3>Our website and third party</h3>
        <p>
          This cookie policy only relates to your use of our website, including
          the purchase of tickets for The St. Martin's Theatre via our website.
        </p>
        <p>
          Our site, like most websites, includes functionality provided by third
          parties. A common example is an embedded YouTube video. We also have
          links to our facebook page and our twitter and Instagram accounts on
          our website. If you click on these links you will be asked for consent
          to accept their cookies. Disabling these cookies will likely break the
          functions offered by these third parties.
        </p>
        <h3>Cookies</h3>
        <p>
          A cookie is a small text file which is placed onto your device (e.g.
          computer, smartphone or other electronic device) when you use our
          website. We use cookies on our website. These help us to ensure our
          website works/functions quickly and efficiently; to monitor our
          website to help us to make improvements; to tailor our marketing to
          communicate more effectively; and to recognise you and your device and
          store information about your preferences or past actions to provide
          you with a better user experience.
        </p>
        <p>
          For example, we may monitor how many times you visit the website,
          which pages you go to, traffic data, location data and the originating
          domain name of your internet service provider. This information helps
          us to build a profile of our users.
        </p>
        <p>
          For further information on our use of cookies, including a detailed
          list of your information which we and others may collect through
          cookies, please see below.
        </p>
        <p>
          For further information on cookies generally, including how to control
          and manage them, visit the guidance on cookies published by the UK
          Information Commissioner&rsquo;s Office,{' '}
          <a
            href="http://www.aboutcookies.org"
            target="_blank"
            rel="noreferrer"
          >
            www.aboutcookies.org
          </a>{' '}
          or{' '}
          <a
            href="http://www.allaboutcookies.org"
            target="_blank"
            rel="noreferrer"
          >
            www.allaboutcookies.org
          </a>
          .
        </p>
        <h3>
          Consent to use cookies and changing settings/ How to turn off all
          cookies and consequences of doing so
        </h3>
        <p>
          We will ask for your consent to place cookies or other similar
          technologies on your device, except where they are essential for us to
          provide you with a service that you have requested, e.g. to enable you
          to purchase tickets.
        </p>
        <p>
          You can withdraw any consent to the use of cookies or manage any other
          cookie preferences by clicking on the Privacy icon at the bottom right
          of any page on our site. You can then choose to accept all, reject all
          or alternatively turn consent on or off for specific elements. It may
          be necessary to refresh the page for the updated settings to take
          effect.
        </p>
        <p>
          If you do not want to accept any cookies, you may be able to change
          your browser settings so that cookies (including those which are
          essential to the services requested) are not accepted. If you do this,
          please be aware that you may lose some of the functionality of our
          website.
        </p>
        <p>
          For further information about cookies and how to disable them please
          go to the guidance on cookies published by the UK Information
          Commissioner&rsquo;s Office,{' '}
          <a
            href="http://www.aboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aboutcookies.org
          </a>{' '}
          or
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            www.allaboutcookies.org
          </a>
          .
        </p>
        <h3>Our use of cookies</h3>
        <p>The following is a summary of the cookies we use on our website:</p>
        <p>We use cookies to make our website work, for example:</p>
        <ul>
          <li>
            Analytics cookies, which monitor how people use our site &ndash; for
            example the browser they use and the pages they visit. It&rsquo;s
            used to assess our website&rsquo;s performance and to help us plan
            improvements.
          </li>

          <li>
            {' '}
            Session cookies, which is a transient cookie (it is erased when you
            close the browser). It acts as a small amount of memory to remember
            what you&rsquo;ve done on past pages.
          </li>
          <li>
            Performance cookies to collect information about how you use our
            website, e.g. which pages you go to most often. These cookies do not
            collect personally identifiable information about you. All
            information collected by these cookies is aggregated and anonymous,
            and is only used to improve how our website works.
          </li>
          <li>
            Functionality cookies, which allow our website to remember the
            choices you make (such as your user name, language, last action and
            search preferences) and provide enhanced, more personal features.
            The information collected by these cookies is anonymous and cannot
            track your browsing activity on other websites.
          </li>
          <li>
            Anonymous visitor statistics cookies to compile visitor statistics
            such as how many people have visited our website, what type of
            technology they are using (e.g., Mac or Windows, which helps to
            identify when our site isn&rsquo;t working as it should for
            particular technologies), how long they spend on the site, what page
            they look at etc. This helps us to continuously improve our website.
            These so called &ldquo;analytics&rdquo; programs also tell us if, on
            an anonymous basis, how people reached this site (e.g. from a search
            engine) and whether they have been here before; this helps us to put
            more money into developing our services for you instead of marketing
            spend.
          </li>

          <li>
            Social media cookies, which allow us to personalise your interaction
            with social media, such as Twitter, Facebook, Instagram, Tik Tok and
            YouTube. Such cookies recognise users of those social media sites
            when you view social media content on our website, and have their
            own cookie policies. They also allow you to quickly share content
            across social media.
          </li>
          <li>
            Advertising cookies. Neither us, advertisers or our advertising
            partners can gain personally identifiable information from these
            cookies. We only work with advertising partners who work to accepted
            privacy standards such as&nbsp;
            <a href="https://www.youronlinechoices.com/goodpractice">
              Your Online Choices
            </a>
            . You can learn more about online advertising at&nbsp;
            <a href="http://www.youronlinechoices.com/">Your Online Choices</a>.
            You can opt-out of almost all advertising cookies at&nbsp;
            <a href="http://www.youronlinechoices.com/uk/your-ad-choices">
              here
            </a>
            &nbsp;although we would prefer that you didn&rsquo;t, as ultimately
            advertising helps keep much of the internet free. It is also worth
            noting that opting out of advertising cookies will not mean you
            won&rsquo;t see adverts, just simply that they won&rsquo;t be
            tailored to you any longer.
          </li>
        </ul>
        <p>You can learn more about the individual cookies we use below:</p>
        <table>
          <tbody>
            <tr>
              <td width="217">
                <p>
                  <strong>Cookie &ndash; type and name</strong>
                </p>
              </td>
              <td width="76">
                <p>
                  <strong>Essential</strong>
                </p>
              </td>
              <td width="197">
                <p>
                  <strong>Purpose</strong>
                </p>
              </td>
              <td width="125">
                <p>
                  <strong>Duration</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>_gcl_au</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  Provided by Google Tag Manager to experiment advertisement
                  efficiency of websites using their services.
                </p>
              </td>
              <td width="125">
                <p>3 months</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>_ga</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  The _ga cookie, installed by Google Analytics, calculates
                  visitor, session and campaign data and also keeps track of
                  site usage for the site's analytics report. The cookie stores
                  information anonymously and assigns a randomly generated
                  number to recognize unique visitors.
                </p>
              </td>
              <td width="125">
                <p>2 years</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>_gid</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  Installed by Google Analytics, _gid cookie stores information
                  on how visitors use a website, while also creating an
                  analytics report of the website's performance. Some of the
                  data that are collected include the number of visitors, their
                  source, and the pages they visit anonymously.
                </p>
              </td>
              <td width="125">
                <p>1 day</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>_gat_UA_&lt;container-id&gt;</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  A variation of the _gat cookie set by Google Analytics and
                  Google Tag Manager to allow website owners to track visitor
                  behaviour and measure site performance. The pattern element in
                  the name contains the unique identity number of the account or
                  website it relates to.
                </p>
              </td>
              <td width="125">
                <p>1 minute</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>_gat_gtag_UA__&lt;container-id&gt;</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>Set by Google to distinguish users.</p>
              </td>
              <td width="125">
                <p>1 minute</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>yt-remote-device-id</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  YouTube sets this cookie to store the video preferences of the
                  user using embedded YouTube video.
                </p>
              </td>
              <td width="125">
                <p>never</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>yt.innertube::requests</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  This cookie, set by YouTube, registers a unique ID to store
                  data on what videos from YouTube the user has seen.
                </p>
              </td>
              <td width="125">
                <p>never</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>yt.innertube::nextId</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  This cookie, set by YouTube, registers a unique ID to store
                  data on what videos from YouTube the user has seen.
                </p>
              </td>
              <td width="125">
                <p>never</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>yt-remote-connected-devices</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  YouTube sets this cookie to store the video preferences of the
                  user using embedded YouTube video.
                </p>
              </td>
              <td width="125">
                <p>never</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>CONSENT</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  YouTube sets this cookie via embedded youtube-videos and
                  registers anonymous statistical data.
                </p>
              </td>
              <td width="125">
                <p>2 years</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>YSC</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  YSC cookie is set by Youtube and is used to track the views of
                  embedded videos on Youtube pages.
                </p>
              </td>
              <td width="125">
                <p>session</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>VISITOR_INFO1_LIVE</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  A cookie set by YouTube to measure bandwidth that determines
                  whether the user gets the new or old player interface.
                </p>
              </td>
              <td width="125">
                <p>5 months 27 days</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>test_cookie</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  The test_cookie is set by doubleclick.net and is used to
                  determine if the user's browser supports cookies.
                </p>
              </td>
              <td width="125">
                <p>15 minutes</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>IDE</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  Google DoubleClick IDE cookies are used to store information
                  about how the user uses the website to present them with
                  relevant ads and according to the user profile.
                </p>
              </td>
              <td width="125">
                <p>1 year 24 days</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>_fbp</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  This cookie is set by Facebook to display advertisements when
                  either on Facebook or on a digital platform powered by
                  Facebook advertising, after visiting the website.
                </p>
              </td>
              <td width="125">
                <p>3 months</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>fr</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  Facebook sets this cookie to show relevant advertisements to
                  users by tracking user behaviour across the web, on sites that
                  have Facebook pixel or Facebook social plugin.
                </p>
              </td>
              <td width="125">
                <p>3 months</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>mc</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  Quantcast set this cookie for remarketing and modelling
                  digital advertising
                </p>
              </td>
              <td width="125">
                <p>13 months</p>
              </td>
            </tr>
            <tr>
              <td width="217">
                <p>d</p>
              </td>
              <td width="76">
                <p>Yes</p>
              </td>
              <td width="197">
                <p>
                  Quantcast set this cookie for remarketing and modelling
                  digital advertising and references the cookie mc's membership
                  in remarketing segments and information about third-party
                  partners of Quantcast, such as advertising exchanges
                </p>
              </td>
              <td width="125">
                <p>13 months</p>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Third party access to the cookies</h3>
        <p>
          Dewynters Ltd, who provide advertising services for us, have access to
          the cookies.
        </p>
        <p>
          The cookies we use will only be accessed by us and those third parties
          named above for the purposes referred to in this cookie policy. Those
          cookies will not be accessed by any other third party.
        </p>
        <h3>How to turn off all cookies and consequences of doing so</h3>
        <p>
          If you do not want to accept any cookies, you may be able to change
          your browser settings so that cookies (including those which are
          essential to the services requested) are not accepted. If you do this,
          please be aware that you may lose some of the functionality of our
          website.
        </p>
        <p>
          For further information about cookies and how to disable them please
          go to the guidance on cookies published by the UK Information
          Commissioner&rsquo;s Office,{' '}
          <a
            href="https://www.aboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aboutcookies.org
          </a>{' '}
          or
          <a
            href="http://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            www.allaboutcookies.org
          </a>
          .
        </p>
        <h3>How to contact us</h3>
        <p>
          Please contact us if you have any questions about this cookie policy
          or the information we hold about you.
        </p>
        <p>
          If you wish to contact us, please send an email to{' '}
          <a href="mailto:enquiries@stmartinstheatre.co.uk">
            enquiries@stmartinstheatre.co.uk
          </a>{' '}
          write to 6<sup>th</sup> Floor, Charlotte Building, 17 Gresse Street,
          London, W1T 1QL or call 020 7287 7612
        </p>
      </LegalWrapper>
    </Layout>
  )
}

export default CookiePolicy
