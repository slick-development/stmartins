import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { gsap } from 'gsap'

const MenuStyles = styled.nav`
  position: fixed;
  inset: 0;
  z-index: 999;
  width: 0;
  /* height: 0; */
  background-color: var(--black);
  section {
    width: 90%;
    height: 100%;
    margin: var(--auto);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    ul {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
      visibility: hidden;

      ${props => props.open && css`
        visibility: visible;
      `}

      li {
        font-family: var(--fontMain);
        opacity: 0;
        /* transform: translateY(20px); */
        text-transform: uppercase;
        font-size: 1.5rem;
        letter-spacing: 1.2px;
        font-weight: 400;
        visibility: hidden;
        color: var(--gold);
        &:hover,
        &:active {
          color: var(--main);
          text-decoration: underline 2px solid;
        }
      }
    }
  }
`
const Menu = ({ open, setOpen }) => {
  const menuRef = useRef()
  const q = gsap.utils.selector(menuRef)

  useEffect(() => {
    menuRef.current = gsap
      .timeline()
      .to(menuRef.current, { width: '100%' })
      .to(q('ul li'), {
        opacity: 1,
        y: 0,
        visibility: 'visible',

        // stagger: 0.15,
      })
      .to(q('div div a'), {
        opacity: 1,
        y: 0,
        visibility: 'visible',

        // stagger: 0.1,
      })

    return () => {
      menuRef.current?.kill()
    }
  }, [])
  useEffect(() => {
    //* Need to find a better way to handle tl speed and direction
    if (!open) {
      menuRef.current.timeScale(2.5)
      menuRef.current.reverse()
    } else {
      menuRef.current.timeScale(1.5)
      menuRef.current.play()
    }
  }, [open])
  return (
    <MenuStyles ref={menuRef} open={open}>
      <section>
        <ul>
          <li onClick={() => setOpen(false)}>
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
        {/* <Socials $nav /> */}
      </section>
    </MenuStyles>
  )
}

export default Menu
