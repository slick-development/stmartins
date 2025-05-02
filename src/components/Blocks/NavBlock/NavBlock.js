import {Link} from 'gatsby'
import React from 'react'

const NavBlock = () => (
    <ul>
        <li>
            <Link to="/#whats-on/">
                What's On<span className="sr-only">What's on</span>
            </Link>
        </li>
        <li>
            <Link to="/our-theatre/">
                Our Theatre<span className="sr-only">Our Theatre</span>
            </Link>
        </li>
        <li>
            <Link to="/plan-your-visit/">
                Plan Your Visit<span className="sr-only">Plan Your Visit</span>
            </Link>
        </li>
        <li>
            <Link to="/access/">
                Access<span className="sr-only">Access</span>
            </Link>
        </li>
        <li>
            <Link to="/faqs/">
                Faq's<span className="sr-only">Faqs</span>
            </Link>
        </li>
        <li>
            <Link to="/contact-us/">
                Contact us<span className="sr-only">Contact us</span>
            </Link>
        </li>
    </ul>
)

export default NavBlock
