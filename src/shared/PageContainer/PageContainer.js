import React from 'react'

import AppLayout from 'layout/AppLayout'
import SlideTo from 'pages/PageSlide/SlideTo'
import PageHeader from 'shared/PageContainer/components/PageHeader/PageHeader'

import 'styles/shared/PageContainer.css'
import Body from './components/Body/Body'

function PageContainer({ children, image, text, left = false }) {
  return (
    <AppLayout>
      <SlideTo left={left}>
        <PageHeader alt={text} image={image} />
        <Body text={text}>
          {children}
        </Body>
      </SlideTo>
    </AppLayout >
  )
}

export default PageContainer
