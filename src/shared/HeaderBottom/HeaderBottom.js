import React from 'react'

import Search from 'pages/Characters/components/Search'
import ChangeOffset from './components/ChangeOffset'

import 'styles/shared/HeaderBottom.css'

const HeaderBottom = ({ search, nextPage, previousPage }) => (
  <div className="footer-navigation">
    <div className="search-container">
      <Search onChange={search} />
    </div>
    <ChangeOffset nextPage={nextPage} previousPage={previousPage} />
  </div>
)


export default HeaderBottom
