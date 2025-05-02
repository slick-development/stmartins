import React from 'react'
import { window } from 'browser-monads'

import { IframeWrapper } from 'components/shared/IframeWrapper'
import { Layout } from 'utils/Layout'

const IframePage = () => {
  const IframeLoad = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }
  return (
    <Layout title="Tickets">
      <IframeWrapper title="Newest College, Oldest Show">
        <iframe
          name="SpektrixIFrame"
          id="SpektrixIFrame"
          frameBorder="0"
          src="https://ticketing.stmartinstheatre.co.uk/stmartinstheatre/website/EventDetails.aspx?EventId=1801&Stylesheet=stmartinstheatre-new.css?resize=true"
          style={{ width: '100%', height: '2000px' }}
          onLoad={IframeLoad}
        />
      </IframeWrapper>
    </Layout>
  )
}

export default IframePage
