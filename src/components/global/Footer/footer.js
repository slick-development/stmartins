import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import BlackLogo from 'svgs/logo-black.svg'
import { media } from 'utils/Media'
import MaxWidth from 'components/MaxWidth'

const FooterStyles = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background: var(--white);
  .logo {
    text-align: center;
    margin: var(--auto);
    svg {
      width: 159px;
      @media ${media.md} {
        width: 212px;
      }
    }
  }
  ul {
    margin: 1.5rem 0;
    list-style: none;
    border-top: solid 1px #787878;
    border-bottom: solid 1px #787878;
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    li {
      font-size: 0.85rem;
      &:active,
      &:hover {
        color: var(--gold);
        text-decoration: underline;
      }
      @media ${media.md} {
        font-size: 0.8rem;
      }
      @media ${media.xl} {
        font-size: 0.95rem;
      }
    }
    @media ${media.sm} {
      text-align: center;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    @media ${media.md} {
      gap: 1rem;
      flex-wrap: wrap;
    }
  }
  p {
    text-align: center;
  }
`
const Footer = () => {
  const { links } = useStaticQuery(graphql`
    query FooterQuery {
      links: allLegalPagesJson {
        nodes {
          title
          slug
        }
      }
    }
  `)

  return (
    <FooterStyles>
      <MaxWidth>
        <div className="logo">
          <BlackLogo />
        </div>
        <ul>
          {links.nodes.map((link, i) => (
            <li key={i}>
              <Link to={link.slug}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <p>&copy; St. Martins Theatre {new Date().getFullYear()}</p>
      </MaxWidth>
    </FooterStyles>
  )
}

export default Footer
