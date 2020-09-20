import React from 'react'

import AppLayout from 'layout/AppLayout'
import LeftToRigth from 'pages/PageSlide/LeftToRigth'
import PageHeader from 'shared/PageContainer/components/PageHeader/PageHeader'

import 'styles/shared/PageContainer.css'

function PageContainer({ children, image, text }) {
  return (
    <AppLayout>
      <LeftToRigth>
        <PageHeader image={image} text={text} />
        <div className="data-content">
          <div className="data-content-title">
            <h4>{text}</h4>
          </div>
          <div className="data-content-data">
            {children}
          </div>
        </div>
      </LeftToRigth>
    </AppLayout >
  )
}

export default PageContainer
