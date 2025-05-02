import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from 'utils/Layout'
import { SmallerHeader } from 'components/Headers'
import { LegalWrapper } from 'components/shared'

const TicketTerms = ({ data }) => {
  const meta = {
    title: 'Terms and conditions for purchase of tickets | St Martins Theatre',
  }
  return (
    <Layout title={meta.title}>
      <SmallerHeader title="Terms &amp; conditions for purchase of tickets" />
      <LegalWrapper>
        <p>
          <strong>
            These terms apply to the purchase of tickets made on our website.
            Please read them carefully before you place any orders on our
            website, as they set out important information about your and our
            rights and obligations.{' '}
          </strong>
          <strong>
            Customers booking through third party agents should contact their
            point of sale and refer to the individual terms and conditions of
            sale of that agent.
          </strong>
        </p>
        <p>
          <strong>
            You must agree to these terms before you place your order.
          </strong>
        </p>
        <p>
          <strong>
            You must be at least 16 years old to place an order on our website.
          </strong>
        </p>
        <ol>
          <li>
            About us
            <ol>
              <li>
                We are St. Martin's Theatre, a company registered in England and
                Wales under company number: 02910157. Our registered office is
                at: 6th Floor Charlotte Building, 17 Gresse Street, London W1T
                1QL. Our VAT number is:644960607.
              </li>
            </ol>
          </li>
          <li>
            These terms
            <ol>
              <li>
                Any reference to &lsquo;we&rsquo;, &lsquo;us&rsquo; or
                &lsquo;our&rsquo; in these terms is to St. Martin's Theatre, and
                any reference to &lsquo;you&rsquo; or &lsquo;your&rsquo; is to
                the person placing an order on our
              </li>
              <li>
                We may make changes to these terms at any time. However, the
                terms which apply to your order will be those in force at the
                time you submitted your order to us.
              </li>
              <li>
                Please print out or save a copy of these terms and any emails
                from us for your records, as we will not save or file a copy for
                you. These terms are only available in English.
              </li>
              <li>
                Your use of our website is governed by our Website{' '}
                <Link to="/website-terms-and-conditions-of-use">
                  Terms of Use.
                </Link>
              </li>
            </ol>
          </li>
          <li>
            Orders
            <ol>
              <li>
                Please check your order to purchase tickets for the show The
                Moustrap (&rdquo;the order&rdquo;) carefully and correct any
                errors before you submit it to us.
              </li>
              <li>
                After you place your order, we will send you an acknowledgment
                email to let you know that we have received your This does not
                mean that your order has been accepted by us. Your order is an
                offer to buy products from us on these terms.
              </li>
              <li>
                Acceptance of your order by us takes place when we dispatch your
                tickets to you, at which point a legally binding contract is
                formed between you and us on these terms. We will send you an
                email with your tickets or an email confirming that your tickets
                have been dispatched.
              </li>
              <li>
                If we do not accept your order, for example because we have been
                unable to pre-authorise the payment, the tickets are
                unavailable, or there has been a mistake regarding the pricing
                or description of the tickets, we will email you using the
                details you provided when you placed your We have the right to
                reject any order for any reason.
              </li>
            </ol>
          </li>

          <li>
            Availability
            <ol>
              <li>
                All orders are subject to availability. We cannot guarantee
                tickets will be available at any given time. In certain
                circumstances beyond our reasonable control, for example where
                there has been a change in law, we may need to stop selling
                certain products. If this happens and it affects your order, we
                will notify you by email, cancel your order and provide you with
                a full refund (including any delivery costs) if payment has
                already been taken.
              </li>
            </ol>
          </li>
          <li>
            Making changes to your order
            <ol>
              <li>Tickets are non-refundable.</li>
              <li>
                Tickets may be exchanged up to 24 hours prior to a performance.
                The tickets may be exchanged for a performance within a year of
                the date of the original show.
              </li>
            </ol>
          </li>
          <li>
            Performance cancellation
            <ol>
              <li>
                If a performance is cancelled, tickets may be exchanged to a
                future performance within a year of the cancelled show or
                refunded. We will only refund the cost of ticket(s) and will not
                refund any other associated costs. We will not remunerate any
                customers for any other expenses connected to their theatre
                visit including, but not limited to, travel and accommodation
                expenses.
              </li>
            </ol>
          </li>
          <li>
            Resale
            <ol>
              <li>
                A ticket purchased from us remains our property and is sold to
                you as a personal revocable licence.
              </li>
              <li>
                You may not resell, transfer or advertise for profit or
                commercial gain a ticket purchased from us and in the event we
                reasonably believe you are doing so we reserve the right to void
                the ticket and refuse entry to, or eject from, the show without
                a refund.
              </li>
            </ol>
          </li>
          <li>
            Ticket prices
            <ol>
              <li>
                Prices for our tickets are set out on our All prices are in
                pounds sterling (&pound;)(GBP) but exclude delivery charges.
                Information on delivery options and costs is provided as part of
                the purchasing process on our website
              </li>
              <li>
                Prices for our tickets and delivery charges may change at any
                time. Except as set out in clause 8.3 below, such changes will
                not affect existing orders.
              </li>
              <li>
                If there has been an error on the website regarding the pricing
                of any of our tickets and this affects your order, we will try
                to contact you using the contact details you provided when you
                placed your We will give you the option to re-confirm your order
                at the correct price or to cancel your order. If we are unable
                to contact you, we will treat the order as cancelled and notify
                you by email.
              </li>
            </ol>
          </li>
          <li>
            Payment
            <ol>
              <li>
                We accept the following credit cards and debit cards: Visa,
                Mastercard and American Express. You can also pay by{' '}
                <strong>cash or cheque if your purchase is offline</strong>. If
                you wish to pay via bank transfer please contact us for details.
                All credit card and debit card payments need to be authorised by
                the relevant card issuer.
              </li>
              <li>
                We will take payment from your card when your order is
                confirmed. If the payment is unsuccessful, we will try to
                contact you using the contact details you provided when you
                placed your If we are unable to contact you, we will cancel your
                order and notify you by email.
              </li>
            </ol>
          </li>
          <li>
            Delivery
            <ol>
              <li>
                f you choose for your order to be posted to you, we will deliver
                your order to the address specified by you when you placed your
              </li>
              <li>
                Please examine the tickets as soon as reasonably possible after
                delivery (whether by post, picking up at the box office or
                electronically) and notify us of any error as soon as reasonably
                possible.
              </li>
              <li>
                Once your order has been delivered to your address or in
                accordance with the delivery instructions you provided to us,
                the risk in the products passes to you and the tickets are
                classed as having been &lsquo;delivered&rsquo;. This means that
                you are responsible for the tickets and we are not liable to you
                if the tickets are lost stolen or destroyed after they have been
                delivered to you.
              </li>
              <li>
                In the event you do lose your tickets please contact us and we
                will endeavour to replace them, although we make no guarantees
                in this regard and we reserve the right to charge an
                administration fee for doing so.
              </li>
            </ol>
          </li>
          <li>
            Admission and attendance
            <ol>
              <li>
                The unauthorised use of equipment for photographing, recording
                or transmitting (by digital or other means) any audio, visual or
                audio-visual material within the St. Martin&rsquo;s Theatre
                (&ldquo;the Venue&rdquo;) is strictly forbidden. Unauthorised
                recordings, tapes, films or similar items may be confiscated and
                destroyed by us. Any recording made of the show in breach of
                these conditions shall belong to the us and you agree to assign
                any and all rights in the recording to us.
              </li>
              <li>
                We reserve the right to conduct security searches upon entry to
                the Venue and confiscate any item which in our opinion may cause
                danger or disruption to other persons or is not permitted in
                accordance with these Terms and Conditions.
              </li>
              <li>
                You shall not bring all or any of the following into the Venue:
              </li>

              <li>
                smoking materials; laser pens; animals (except guide dogs); your
                own food and drink (including alcohol); bottles, cans or glass
                containers; any item which we consider could be used as a weapon
                (including sharp or pointed objects such as knives); and illegal
                substances.&nbsp;
              </li>

              <li>
                Smoking and vaping within the Venue is strictly prohibited. The
                Management reserves the right to eject any person found smoking
                or vaping within the Venue without refund.
              </li>

              <li>
                All mobile phones must be switched off during any performance at
                the St. Martin&rsquo;s Theatre.
              </li>
              <li>
                You must comply with any and all instructions given to you by
                any staff at the Venue and we reserve the right to remove anyone
                from the Venue who does not comply with our reasonable
                instructions.
              </li>
            </ol>
          </li>
          <li>
            Events beyond our control
            <ol>
              <li>
                We are not liable to you if we fail to comply with these terms
                because of circumstances beyond our reasonable control.
              </li>
            </ol>
          </li>
          <li>
            Our responsibility to you
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
            </ol>
          </li>
          <li>
            Your information
            <ol>
              <li>
                Any personal information that you provide to us will be dealt
                with in line with our{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>, which explains
                what information we collect and hold about you, and how we
                collect, store, use and share such information.
              </li>
            </ol>
          </li>
          <li>
            No third party rights
            <ol>
              <li>
                No one other than us or you has any right to enforce any of
                these terms.
              </li>
            </ol>
          </li>
          <li>
            {' '}
            Transfer of rights
            <ol>
              <li>
                We may transfer our rights under these terms to another business
                without your consent, but we will notify you of the transfer and
                make sure that your rights are not adversely affected as a
                result.
              </li>
              <li>
                You are not allowed to transfer your rights under these terms to
                anyone without our prior written consent.
              </li>
            </ol>
          </li>
          <li>
            Complaints
            <ol>
              <li>
                If you are unhappy with us or the products you ordered, please
                contact us atenquiries@stmartinstheatre.co.uk.
              </li>
            </ol>
          </li>
          <li>
            Governing law and jurisdiction
            <ol>
              <li>
                The laws of England and Wales apply to these terms, although if
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
      </LegalWrapper>
    </Layout>
  )
}

export default TicketTerms
