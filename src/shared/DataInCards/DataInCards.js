import React from 'react'

import Card from 'shared/Card/Card'
import Loader from 'shared/Loader/Loader'

const DataInCards = ({data, to}) => (
  data !== undefined && data !== null ? data.map(item => (
    <Card key={item.id} to={`/${to}/${item.id}`} thumbnail={item.thumbnail} title={item.title || item.name} />
  )) : <Loader />
)

export default DataInCards

