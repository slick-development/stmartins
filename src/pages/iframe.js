import { IframeWrapper } from 'components/shared'
import React from 'react'
import { Layout } from 'utils/Layout'

const IframePage = () => (
    <Layout>
        <IframeWrapper title="THE SMARTEST GIANT IN TOWN">
            <iframe name="SpektrixIFrame" id="SpektrixIFrame" frameBorder="0"
                    src="https://ticketing.stmartinstheatre.co.uk/stmartinstheatre/website/EventDetails.aspx?MonthSelect=202212&EventId=1601&Stylesheet=stmartinstheatre.css"
                    style={{ width: '100%', height: '2500px' }}
                    />
        </IframeWrapper>
    </Layout>
)

    export default IframePage
