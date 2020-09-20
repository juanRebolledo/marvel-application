import React from 'react'
import Card from 'shared/Card/Card'
import CardLoader from 'shared/Card/CardLoader'

const DataInCards = ({data, to}) => (
  data !== undefined && data !== null ? data.map(({ id, thumbnail }) => (
    <Card key={id} to={`/${to}/${id}`} thumbnail={thumbnail} />
  )) : <CardLoader />
)

export default DataInCards

