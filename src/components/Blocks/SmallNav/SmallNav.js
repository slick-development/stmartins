import { Link } from 'gatsby'
import React from 'react'

const SmallNav = ({ open, setOpen }) => {
  const handleClick = () => {
    if (open) {
      setOpen(false)
    }
  }
  return (
    <ul>
      <li onClick={() => handleClick()}>
        <a href="/#whats-on">
          What's On<span className="sr-only">What's on</span>
        </a>
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
          FAQS<span className="sr-only">FAQS</span>
        </Link>
      </li>
      <li>
        <Link to="/contact-us/">
          Contact Us<span className="sr-only">Contact Us</span>
        </Link>
      </li>
    </ul>
  )
}

export default SmallNav
