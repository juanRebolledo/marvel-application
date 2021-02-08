import React from 'react'

import Card from 'shared/Card/Card'
import Loader from 'shared/Loader/Loader'

const DataInCards = ({data, to}) => (
  data ? data.length > 0 ? data.filter((item) => !item.thumbnail.path.includes("image_not_available")).map(item => (
    <Card 
      key={item.id} 
      to={`/${to}/${item.id}`} 
      thumbnail={item.thumbnail} 
      title={item.title || item.name} 
    />)
  ) : <p>No hay información, verifica tu busqueda</p> : <Loader />
)

export default React.memo(DataInCards)

