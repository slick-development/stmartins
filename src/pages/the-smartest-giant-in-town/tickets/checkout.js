import React from 'react';

import { IframeWrapper } from 'components/shared'
import { Layout } from 'utils/Layout'

const IframePage = () => {

  // const IframeLoad = () => {
  //   setTimeout(() => {
  //     const element = document.getElementById("spectrix-iframe");
  //     if (element) {
  //       const header = document.getElementById('main-header')
  //       let headerHeight = 0
  //       if (header) {
  //         headerHeight = header.offsetHeight
  //       }
  //       const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  //       window.scrollTo({top: y, behavior: 'smooth'});
  //     }
  //   }, 100);
  // };

  return (
      <Layout
          title="Checkout"
      >
      
        <IframeWrapper title="THE SMARTEST GIANT IN TOWN">
        <div id="spectrix-iframe">
          <iframe
            name="SpektrixIFrame"
            id="SpektrixIFrame"
            frameBorder="0"
            src="https://ticketing.stmartinstheatre.co.uk/stmartinstheatre/website/secure/checkout/v2?Stylesheet=stmartinstheatre-new.css&resize=true"
            style={{ width: '100%', height: '1000px' }}
            // onLoad={IframeLoad}
          />
          </div>
        </IframeWrapper>
      
    </Layout>
  )
}

export default IframePage
