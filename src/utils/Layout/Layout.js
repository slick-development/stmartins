import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

//* CSS
import 'normalize.css'
import 'utils/css/main.css'

//* Local Imports
import GlobalStyles from 'utils/GlobalStyles'
import theme from 'utils/Theme'
import Seo from 'utils/Seo'
import { Footer, Nav } from 'components/global'

//* Smooth scroll on all links
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const icon = 'favicon.jpeg'

const Layout = ({ children, title, description, img }) => {
  const { allSite } = useStaticQuery(graphql`
    query SiteQuery {
      allSite {
        nodes {
          siteMetadata {
            title
            siteUrl
            siteName
            description
            author
          }
        }
      }
    }
  `)
  const settings = allSite.nodes[0].siteMetadata
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: `${settings.title}`,
    description: `${settings.description}`,
    url: `${settings.siteUrl}`,
    logo: `${settings.siteUrl}/${icon}`,
  }
  useEffect(() => {
    const header = document.getElementById('header')
    let headerHeight = header.clientHeight
    document.body.style.paddingTop = `${headerHeight}px`
    window.addEventListener('resize', () => {
      headerHeight = header.clientHeight
      document.body.style.paddingTop = `${headerHeight}px`
    })
  })
  return (
    <ThemeProvider theme={theme}>
      <Seo schemaMarkup={schema} title={title} description={description} />
      <>
        <GlobalStyles />
        <Nav />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
