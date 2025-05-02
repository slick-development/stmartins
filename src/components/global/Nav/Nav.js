import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { window, document } from 'browser-monads'

import { NavBlock, SmallNav } from 'components/Blocks'
import Logo from 'svgs/white-logo.svg'
import { media } from 'utils/Media'
import MaxWidth from 'components/MaxWidth'
import { StaticImage } from 'gatsby-plugin-image'
import { Menu } from '../Menu'
import { Hamburger } from '../Hamburger'

const NavStyles = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  overflow: hidden;
  background-color: var(--black);

  .nav-background {
    transition: all 0.25s ease-in-out;
    padding: 0.5rem 0;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
      width: 240px;
      height: 100%;

      .gatsby-image-wrapper {
        transition: var(--transition);
        width: 150px;
        @media ${media.md} {
          width: 190px;
        }
      }
    }

    &__links {
      width: 100%;
      height: 100%;
      display: none;
      @media ${media.lg} {
        display: block;
      }

      ul {
        width: 100%;
        height: 100%;
        margin: 0px 0px 0px auto;
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1.25rem;
        list-style: none;

        li {
          color: var(--white);
          text-transform: uppercase;
        }
      }
    }
  }
`
const Nav = () => {
  const [scroll, setScroll] = useState(false)
  const [open, setOpen] = useState(false)
  const changeScroll = () => {
    if (window.scrollY >= 20 || window.pageYOffset >= 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', changeScroll)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      // document.body.style.paddingRight = '15px'
    } else if (!open) {
      document.body.style.overflow = 'auto'
      // document.body.style.paddingRight = '0'
    }
  }, [open])

  return (
    <>
      <NavStyles id="header">
        <div
          className={
            scroll ? 'nav-background nav-background-active' : 'nav-background'
          }
        >
          <MaxWidth maxWidth="1600" $noLazy>
            <div className="nav">
              <section className="nav__logo">
                <div className="logo">
                  <Link to="/">
                    <span className="sr-only">Home</span>
                    <StaticImage
                      src="../../../images/new-logo-copy.png"
                      alt="St Martins Theatre"
                    />
                  </Link>
                </div>
              </section>
              <Hamburger open={open} setOpen={setOpen} />
              <div className="nav__links">
                <SmallNav open={open} setOpen={setOpen} />
              </div>
            </div>
          </MaxWidth>
        </div>
      </NavStyles>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default Nav
