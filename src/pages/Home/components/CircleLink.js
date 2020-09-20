import React from 'react'
import { Link } from 'react-router-dom'

import { ImageSizeHome } from 'pages/Util/Util'

const CircleLink = ({text, to, srcImg}) => (
  <div className="circle-container"> 
    <div className="circle" style={{ height: ImageSizeHome.height, width: ImageSizeHome.width }}>
      <Link to={`/${to}`}>
        <img src={require(`public/images/${srcImg ? srcImg : to}.jpg`)} alt={to}/>
      </Link>
    </div>
    <h4>{text}</h4>
  </div>
)

export default CircleLink
