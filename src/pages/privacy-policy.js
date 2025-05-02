import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from 'utils/Layout'
import { SmallerHeader } from 'components/Headers'
import { LegalWrapper } from 'components/shared'

const PrivacyPolicy = ({ data }) => {
  const meta = {
    title: 'Privacy Policy | St Martins Theatre',
  }
  return (
    <Layout title={meta.title}>
      <SmallerHeader title="Privacy Policy" />
      <LegalWrapper>
        <p>
          <a href="https://stmartinstheatre.co.uk ">
            https://stmartinstheatre.co.uk
          </a>{' '}
          (our website) trading as St. Martin's Theatre (&lsquo;we&rsquo;,
          &lsquo;our&rsquo; or &lsquo;us&rsquo;). We are the controller of
          personal data obtained via our website, meaning we are the
          organisation legally responsible for deciding how and for what
          purposes it is used.
        </p>
        <p>
          We take your privacy very seriously. Please read this privacy policy
          carefully as it contains important information on who we are and how
          and why we collect, store, use and share any information relating to
          you (your personal data) in connection with your use of our website.
          It also explains your rights in relation to your personal data and how
          to contact us or a relevant regulator in the event you have a
          complaint.
        </p>
        <p>
          We collect, use and are responsible for certain personal data about
          you. When we do so we are subject to the UK General Data Protection
          Regulation (UK GDPR).
        </p>
        <p>
          This version of our privacy policy is primarily written for adults,
          including parents and guardians of child users.
        </p>
        <p>This privacy policy is divided into the following sections:</p>
        <ul>
          <li>What this policy applies to</li>
          <li>Personal data we collect about you</li>
          <li>How your personal data is collected</li>
          <li>How and why we use your personal data</li>
          <li>Marketing</li>
          <li>Who we share your personal data with</li>
          <li>How long your personal data will be kept</li>
          <li>Transferring your personal data out of the UK</li>
          <li>Cookies</li>
          <li>Your rights</li>
          <li>Keeping your personal data secure</li>
          <li>How to complain</li>
          <li>Changes to this privacy policy</li>
          <li>How to contact us</li>
        </ul>
        <h3>What this policy applies to</h3>
        <p>
          This privacy policy relates to your use of our website only, including
          purchase of tickets via our website.
        </p>
        <p>
          Throughout our website we may link to other websites owned and
          operated by certain trusted third parties. Those third-party websites
          may also gather information about you in accordance with their own
          separate privacy policies. For privacy information relating to those
          third-party websites, please consult their privacy policies as
          appropriate.
        </p>
        <h3>Personal data we collect about you</h3>
        <p>
          The personal data we collect about you depends on the particular
          activities carried out through our website. We may collect and use the
          following personal data about you:
        </p>
        <ul>
          <li>
            your name, address and contact information, including email address
            and telephone number.
          </li>
          <li>
            information to check and verify your identity, e.g. date of birth
          </li>
          <li>your gender, if you choose to give this to us</li>
          <li>location data, if you choose to give this to us</li>
          <li>
            your billing information, transaction and payment card or other
            payment method information
          </li>
          <li>bank account and payment details</li>
          <li>
            details of any information, feedback or other matters you give to us
            by phone, email, post or via social media
          </li>
          <li>your account details, such as username and login details</li>
          <li>your activities on, and use of, our website</li>
          <li>your personal interests</li>
          <li>information about the services we provide to you</li>
          <li>your contact history, purchase history and saved items</li>
          <li>
            information about how you use our website and technology systems
          </li>
          <li>your responses to surveys, competitions and promotions</li>
        </ul>
        <p>
          You must provide this personal data in order to use our website and/or
          to purchase tickets via our website unless we tell you that you have a
          choice.
        </p>
        <p>
          Sometimes you can choose if you want to give us your personal data and
          let us use it. Where that is the case we will tell you and give you
          the choice before you give the personal data to us. We will also tell
          you whether declining to share that personal data will have any effect
          on your ability to use our website or to purchase tickets via our
          website.
        </p>
        <p>
          We collect and use this personal data for the purposes described in
          the section &lsquo;
          <strong>How and why we use your personal data</strong>&rsquo; below.
        </p>
        <h3>How your personal data is collected</h3>
        <p>We collect personal data from you:</p>
        <ul>
          <li>
            directly, when you enter or send us information, such as when you
            register an account with us, contact us (including via email), send
            us feedback, purchase tickets via our website, post material to our
            website or social media sites and complete customer surveys or
            participate in competitions via our website, and
          </li>
          <li>
            indirectly, such as your browsing activity while on our website; we
            will usually collect information indirectly using the technologies
            explain in the section on &lsquo;<strong>Cookies</strong>&rsquo;
            below
          </li>
        </ul>
        <h3>How and why we use your personal data</h3>
        <p>
          Under data protection law, we can only use your personal data if we
          have a proper reason, e.g.:
        </p>
        <ul>
          <li>where you have given consent</li>
          <li>to comply with our legal and regulatory obligations</li>
          <li>
            for the performance of a contract with you or to take steps at your
            request before entering into a contract, or
          </li>
          <li>for our legitimate interests or those of a third party</li>
        </ul>
        <p>
          A legitimate interest is when we have a business or commercial reason
          to use your personal data, so long as this is not overridden by your
          own rights and interests. We will carry out an assessment when relying
          on legitimate interests, to balance our interests against your own.
          You can obtain details of this assessment by contacting us (see
          &lsquo;<strong>How to contact us</strong>&rsquo; below).
        </p>
        <p>
          The table below explains what we use your personal data for and why.
        </p>
        <table>
          <thead>
            <tr>
              <td width="301">
                <p>
                  <strong>What we use your personal data for</strong>
                </p>
              </td>
              <td width="301">
                <p>
                  <strong>Our reasons</strong>
                </p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="301">
                <p>Create and manage your account with us</p>
              </td>
              <td width="301">
                <p>Depending on the circumstances:</p>
                <p>
                  - For our legitimate interests, i.e. to be as efficient as we
                  can so we can deliver the best service to you at the best
                  price
                </p>
                <p>
                  - To perform our contract with you or to take steps at your
                  request before entering into a contract
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>Providing tickets to you</p>
              </td>
              <td width="301">
                <p>
                  To perform our contract with you or to take steps at your
                  request before entering into a contract
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>
                  Conducting checks to identify you and verify your identity or
                  to help prevent and detect fraud against you or us
                </p>
              </td>
              <td width="301">
                <p>Depending on the circumstances:</p>
                <p>- To comply with our legal and regulatory obligations</p>
                <p>
                  - For our legitimate interests, i.e. to minimise fraud that
                  could be damaging for you and/or us
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>
                  To enforce legal rights or defend or undertake legal
                  proceedings
                </p>
              </td>
              <td width="301">
                <p>Depending on the circumstances:</p>
                <p>- to comply with our legal and regulatory obligations</p>
                <p>
                  - in other cases, for our legitimate interests, i.e. to
                  protect our business, interests and rights
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>
                  Customise our website and its content to your particular usage
                  requirements and preferences based on a record of your
                  selected preferences, your customer profile or on your use of
                  our website
                </p>
              </td>
              <td width="301">
                <p>Depending on the circumstances:</p>
                <p>
                  - your consent as gathered on our website &mdash;see &lsquo;
                  <strong>Cookies</strong>&rsquo; below
                </p>
                <p>
                  - where we are not required to obtain your consent and do not
                  do so, for our legitimate interests, i.e. to be as efficient
                  as we can so we can deliver the best service to you at the
                  best price
                </p>
                <p>
                  - If you have provided such a consent you may withdraw it at
                  any time by changing the settings here [add appropriate links]
                  (this will not affect the lawfulness of our use of your
                  personal data in reliance on that consent before it was
                  withdrawn).
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>
                  Retaining and evaluating information on your recent visits to
                  our website and how you move around different sections of our
                  website for analytics purposes to understand how people use
                  our website so that we can make it more intuitive or to check
                  our website is working as intended
                </p>
              </td>
              <td width="301">
                <p>Depending on the circumstances:</p>
                <p>
                  - your consent as gathered on our website &mdash;see &lsquo;
                  <strong>Cookies</strong>&rsquo; below
                </p>
                <p>
                  - where we are not required to obtain your consent and do not
                  do so, for our legitimate interests, i.e. to be as efficient
                  as we can so we can deliver the best service to you at the
                  best price
                </p>
                <p>
                  - If you have provided such a consent you may withdraw it at
                  any time by changing the settings here [add appropriate links]
                  (this will not affect the lawfulness of our use of your
                  personal data in reliance on that consent before it was
                  withdrawn).
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>
                  Communications with you not related to marketing, including
                  about changes to our terms or policies or changes to the
                  products and/or services or other important notices
                </p>
              </td>
              <td width="301">
                <p>Depending on the circumstances:</p>
                <p>- to comply with our legal and regulatory obligations</p>
                <p>
                  - in other cases, for our legitimate interests, i.e. to be as
                  efficient as we can so we can deliver the best service to you
                  at the best price
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>
                  Protecting the security of systems and data used to provide
                  the services
                </p>
              </td>
              <td width="301">
                <p>To comply with our legal and regulatory obligations</p>
                <p>
                  We may also use your personal data to ensure the security of
                  systems and data to a standard that goes beyond our legal
                  obligations, and in those cases our reasons are for our
                  legitimate interests, i.e. to protect systems and data and to
                  prevent and detect criminal activity that could be damaging
                  for you and/or us
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>
                  Statistical analysis to help us understand our customer base
                </p>
              </td>
              <td width="301">
                <p>
                  For our legitimate interests, i.e. to be as efficient as we
                  can so we can deliver the best service to you at the best
                  price
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>Updating and enhancing customer records</p>
              </td>
              <td width="301">
                <p>Depending on the circumstances:</p>
                <p>
                  - to perform our contract with you or to take steps at your
                  request before entering into a contract
                </p>
                <p>- to comply with our legal and regulatory obligations</p>
                <p>
                  - where neither of the above apply, for our legitimate
                  interests, e.g. making sure that we can keep in touch with our
                  customers about existing orders and new products
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>
                  Disclosures and other activities necessary to comply with
                  legal and regulatory obligations that apply to our business,
                  e.g. to record and demonstrate evidence of your consents where
                  relevant.
                </p>
              </td>
              <td width="301">
                <p>To comply with our legal and regulatory obligations</p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>Marketing our services to existing and former customers</p>
              </td>
              <td width="301">
                <p>
                  For our legitimate interests, i.e. to promote our business to
                  existing and former customers
                </p>
                <p>
                  See &lsquo;<strong>Marketing</strong>&rsquo; below for further
                  information
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>
                  To share your personal data with members of our group and
                  third parties that will or may take control or ownership of
                  some or all of our business (and professional advisors acting
                  on our or their behalf) in connection with a significant
                  corporate transaction or restructuring, including a merger,
                  acquisition, asset sale, initial public offering or in the
                  event of our insolvency
                </p>
                <p>
                  In such cases information will be anonymised where possible
                  and only shared where necessary
                </p>
              </td>
              <td width="301">
                <p>Depending on the circumstances:</p>
                <p>- to comply with our legal and regulatory obligations</p>
                <p>
                  - in other cases, for our legitimate interests, i.e. to
                  protect, realise or grow the value in our business and assets
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>How and why we use your personal data&mdash;sharing</h3>
        <p>
          See &lsquo;<strong>Who we share your personal data with</strong>
          &rsquo; for further information on the steps we will take to protect
          your personal data where we need to share it with others.
        </p>
        <h3>Marketing</h3>
        <p>
          We will use your personal data to send you updates (by email, text
          message, telephone or post) about our <strong>show</strong>, including
          exclusive offers, promotions or ticket information.
        </p>
        <p>
          We have a legitimate interest in using your personal data for
          marketing purposes (see above &lsquo;
          <strong>How and why we use your personal data</strong>&rsquo;). This
          means we do not need your consent to send you marketing information.
          If we change our marketing approach in the future so that consent is
          needed, we will ask for this separately and clearly.
        </p>
        <p>
          You have the right to opt out of receiving marketing communications at
          any time by:
        </p>
        <ul>
          <li>
            contacting us at{' '}
            <a href="mailto:enquiries@stmartinstheatre.co.uk">
              enquiries@stmartinstheatre.co.uk
            </a>
          </li>
          <li>using the &lsquo;unsubscribe&rsquo; link in emails</li>
        </ul>
        <p>
          We may ask you to confirm or update your marketing preferences if you
          ask us to provide further <strong>information on our show</strong> in
          the future, or if there are changes in the law, regulation, or the
          structure of our business.
        </p>
        <p>
          We will always treat your personal data with the utmost respect and
          never sell it to other organisations for marketing purposes.
        </p>
        <p>
          For more information on your right to object at any time to your
          personal data being used for marketing purposes, see &lsquo;
          <strong>Your rights</strong>&rsquo; below.
        </p>
        <h3>Who we share your personal data with</h3>
        <p>We routinely share personal data with:</p>
        <ul>
          <li>
            third parties we use to help deliver our services to you, e.g.
            payment service providers, ticketing providers.
          </li>
          <li>
            other third parties we use to help us run our business, e.g.
            marketing agencies or website hosts and website analytics providers
          </li>
          <li>our bank</li>
        </ul>
        <p>
          We or the third parties mentioned above occasionally also share
          personal data with:
        </p>
        <ul>
          <li>
            our external auditors, e.g. in relation to the audit of our
            accounts, in which case the recipient of the information will be
            bound by confidentiality obligations
          </li>
          <li>
            our and their professional advisors (such as lawyers and other
            advisors), in which case the recipient of the information will be
            bound by confidentiality obligations
          </li>
          <li>
            law enforcement agencies, courts, tribunals and regulatory bodies to
            comply with our legal and regulatory obligations
          </li>
          <li>
            other parties that have or may acquire control or ownership of our
            business (and our or their professional advisers) in connection with
            a significant corporate transaction or restructuring, including a
            merger, acquisition, asset sale, initial public offering or in the
            event of our insolvency&mdash;usually, information will be
            anonymised but this may not always be possible. The recipient of any
            of your personal data will be bound by confidentiality obligations
          </li>
        </ul>
        <h3>Who we share your personal data with&mdash;in more detail</h3>
        <p>
          More details about who we share your personal data with and why are
          set out in the table below.
        </p>
        <table>
          <thead>
            <tr>
              <td width="201">
                <p>Recipient</p>
              </td>
              <td width="201">
                <p>Processing operation (use) by recipient</p>
              </td>
              <td width="201">
                <p>
                  Relevant categories of personal data transferred to recipient
                </p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="201">
                <p>TickX Limited</p>
                <p>
                  Registered Address: Fifth Floor, 11 Leadenhall Street, London
                  EC3V 1LP
                </p>
                <p>Company Number: 9614775</p>
              </td>
              <td width="201">
                <p>
                  TickX is a booking and marketing platform for Theatre Shows,
                  Exhibits and Visitor Attractions. The software sits on top the
                  existing ticketing system provided by us enable a better user
                  experience for customers, and to provide marketing tools for
                  the theatre show which include surveying and audience creation
                  &amp; export. To do this they store a copy of order data
                  (excluding card data) carried out through the website.
                </p>
              </td>
              <td width="201">
                <p>
                  Customer Name, Address, Phone Number, Email Address, Device
                  information (including IP Address) and Survey responses.
                </p>
              </td>
            </tr>
            <tr>
              <td width="201">
                <p>Spektrix Ltd</p>
                <p>Registered Address:</p>
                <p>Third Floor, 20 Old Bailey, London, EC4M 7AN</p>
              </td>
              <td width="201">
                <p>
                  Spektrix is a ticketing and customers relations management
                  system for Theatre Exhibits and Visitor Attractions. They
                  store the order data (including card data) carried out through
                  the website, in person or for booking made over the phone.
                  They also hold a limited amount of data on Third party
                  bookings for operation purposes.
                </p>
              </td>
              <td width="201">
                <p>
                  Information submitted by the customer for the purposes of
                  using the services provided by Spektrix, which may include but
                  is not limited to Customer Name, Address, Phone Number, Email
                  Address, payment/card details and Ticket information related
                  to bookings.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Who we share your personal data with&mdash;further information</h3>
        <p>
          If you would like more information about who we share our data with
          and why, please contact us (see &lsquo;
          <strong>How to contact us</strong>&rsquo; below).
        </p>
        <h3>How long your personal data will be kept</h3>
        <p>
          We will not keep your personal data for longer than we need it for the
          purpose for which it is used.
        </p>
        <p>
          Different retention periods apply for different types of personal
          data.
        </p>
        <p>
          If you stop using your account we will delete or anonymise your
          account data after seven years.
        </p>
        <h3>Transferring your personal data out of the UK and EEA</h3>
        <p>
          The EEA, UK and other countries outside the EEA and the UK have
          differing data protection laws, some of which may provide lower levels
          of protection of privacy.
        </p>
        <p>
          It is sometimes necessary for us to transfer your personal data to
          countries outside the UK and EEA. In those cases we will comply with
          applicable UK and EEA laws designed to ensure the privacy of your
          personal data.
        </p>
        <p>
          Where required will transfer your personal data to our service
          providers located outside the UK. As we are based in the UK we will
          also transfer your personal data from the EEA to the UK.
        </p>
        <p>
          Under data protection laws, we can only transfer your personal data to
          a country outside the UK/EEA where:
        </p>
        <ul>
          <li>
            there are appropriate safeguards in place, together with enforceable
            rights and effective legal remedies for you, or
          </li>
          <li>
            a specific exception applies under relevant data protection law
          </li>
        </ul>
        <p>
          Where we transfer your personal data outside the UK or the EEA we do
          so on the basis of an adequacy regulation or decision or (where this
          is not available) legally-approved standard data protection clauses
          recognised or issued further to Article 46(2) of the UK GDPR. In the
          event we cannot or choose not to continue to rely on either of those
          mechanisms at any time we will not transfer your personal data outside
          the UK unless we can do so on the basis of an alternative mechanism or
          exception provided by UK data protection law and reflected in an
          update to this policy.
        </p>
        <p>
          Any changes to the destinations to which we send personal data or in
          the transfer mechanisms we rely on to transfer personal data
          internationally will be notified to you in accordance with the section
          on &lsquo;<strong>Changes to this privacy policy</strong>&rsquo;
          below.
        </p>
        <h3>
          Transferring your personal data out of the UK and EEA&mdash;further
          information
        </h3>
        <p>We do not currently transfer your data out of the UK and EEA.</p>
        <h3>Cookies</h3>
        <p>
          A cookie is a small text file which is placed onto your device (e.g.
          computer, smartphone or other electronic device) when you use our
          website. We use cookies&nbsp;on our website.
        </p>
        <p>
          For further information on cookies, our use of cookies and when we
          will request your consent before placing them and how to disable them
          are contained in our <Link to="/cookie-policy/">Cookie Policy</Link>.
        </p>
        <h3>Your rights</h3>
        <p>
          You generally have the following rights, which you can usually
          exercise free of charge:
        </p>
        <table>
          <tbody>
            <tr>
              <td width="301">
                <p>Access to a copy of your personal data</p>
              </td>
              <td width="301">
                <p>
                  The right to be provided with a copy of your personal data
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>Correction (also known as rectification)</p>
              </td>
              <td width="301">
                <p>
                  The right to require us to correct any mistakes in your
                  personal data
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>Erasure (also known as the right to be forgotten)</p>
              </td>
              <td width="301">
                <p>
                  The right to require us to delete your personal data&mdash;in
                  certain situations
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>Restriction of use</p>
              </td>
              <td width="301">
                <p>
                  The right to require us to restrict use of your personal data
                  in certain circumstances, eg if you contest the accuracy of
                  the data
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>Data portability</p>
              </td>
              <td width="301">
                <p>
                  The right to receive the personal data you provided to us, in
                  a structured, commonly used and machine-readable format and/or
                  transmit that data to a third party&mdash;in certain
                  situations
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>To object to use</p>
              </td>
              <td width="301">
                <p>The right to object:</p>
                <p>
                  - at any time to your personal data being used for direct
                  marketing (including profiling)
                </p>
                <p>
                  - in certain other situations to our continued use of your
                  personal data, eg where we use your personal data for our
                  legitimate interests unless there are compelling legitimate
                  grounds for the processing to continue or the processing is
                  required for the establishment, exercise or defence of legal
                  claims
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>Not to be subject to decisions without human involvement</p>
              </td>
              <td width="301">
                <p>
                  The right not to be subject to a decision based solely on
                  automated processing (including profiling) that produces legal
                  effects concerning you or similarly significantly affects you
                </p>
                <p>
                  We do not make any such decisions based on data collected by
                  our website
                </p>
              </td>
            </tr>
            <tr>
              <td width="301">
                <p>The right to withdraw consents</p>
              </td>
              <td width="301">
                <p>
                  If you have provided us with a consent to use your personal
                  data you have a right to withdraw that consent easily at any
                  time
                </p>
                <p>
                  You may withdraw consents by emailing{' '}
                  <a href="mailto:enquiries@stmartinstheatre.co.uk">
                    enquiries@stmartinstheatre.co.uk
                  </a>
                </p>
                <p>
                  Withdrawing a consent will not affect the lawfulness of our
                  use of your personal data in reliance on that consent before
                  it was withdrawn
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          For further information on each of those rights, including the
          circumstances in which they do and do not apply, please contact us
          (see &lsquo;<strong>How to contact us</strong>&rsquo; below). You may
          also find it helpful to refer to the guidance from the UK&rsquo;s
          Information Commissioner on your rights under the UK GDPR.
        </p>
        <p>
          If you would like to exercise any of those rights, please email, call
          or write to us&mdash;see below: &lsquo;
          <strong>How to contact us</strong>&rsquo;. When contacting us please:
        </p>
        <ul>
          <li>
            provide enough information to identify yourself (e.g. your full
            name, address and order number) and any additional identity
            information we may reasonably request from you, and
          </li>
          <li>
            let us know which right(s) you want to exercise and the information
            to which your request relates
          </li>
        </ul>
        <h3>Keeping your personal data secure</h3>
        <p>
          We have appropriate security measures to prevent personal data from
          being accidentally lost, or used or accessed unlawfully. We limit
          access to your personal data to those who have a genuine need to
          access it.
        </p>
        <p>
          We also have procedures in place to deal with any suspected data
          security breach. We will notify you and any applicable regulator of a
          suspected data security breach where we are legally required to do so.
        </p>
        <h3>How to complain</h3>
        <p>
          Please contact us if you have any queries or concerns about our use of
          your personal data (see below &lsquo;
          <strong>How to contact us</strong>&rsquo;). We hope we will be able to
          resolve any issues you may have.
        </p>
        <p>
          You also have the right to lodge a complaint with the Information
          Commissioner.
        </p>
        <p>
          The UK&rsquo;s Information Commissioner may be contacted using the
          details at https://ico.org.uk/make-a-complaint or by telephone: 0303
          123 1113.
        </p>
        <h3>Changes to this privacy policy</h3>
        <p>
          We may change this privacy policy from time to time&mdash;when we make
          significant changes we will take steps to inform you, for example via
          by including a prominent link to a description of those changes on our
          website for a reasonable period or by other means, such as email.
        </p>
        <h3>How to contact us</h3>
        <h3>Individuals in the UK</h3>
        <p>
          You can contact us by post, email or telephone if you have any
          questions about this privacy policy or the information we hold about
          you, to exercise a right under data protection law or to make a
          complaint.
        </p>
        <p>Our contact details are shown below:</p>
        <table width="642">
          <thead>
            <tr>
              <td width="642">
                <p>Our contact details</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="642">
                <p>
                  6<sup>th</sup> Floor, Charlotte Building, 17 Gresse Street,
                  London, W1T 1QL{' '}
                  <a href="mailto:enquiries@stmartinstheatre.co.uk">
                    enquiries@stmartinstheatre.co.uk
                  </a>
                </p>
                <p>Tel: 020 7287 7612</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>{`Policy effective date: 08/06/${new Date().getFullYear()}`}</p>
      </LegalWrapper>
    </Layout>
  )
}

export default PrivacyPolicy
