export const getCharacters = async (set, setCount, offset, name) => {
  await getData(set, setCount, `https://gateway.marvel.com/v1/public/characters?${name.replace(/\s/g, '') ? `nameStartsWith=${name}&` : ''}limit=20&offset=${offset}&apikey=a79cdc2f1f537cac642535152f632819`)
}

export const getComics = async (set, setCount, offset, name) => {
  await getData(set, setCount, `https://gateway.marvel.com/v1/public/comics?${name.replace(/\s/g, '') ? `titleStartsWith=${name}&` : ''}limit=20&offset=${offset}&apikey=a79cdc2f1f537cac642535152f632819`)
}

const getData = (set, setCount, uri) => {
  fetch(uri)
    .then(response => response.json())
    .then(({ data }) => {
      set(data.results)
      setCount(data.total)
    })
    .catch(error => console.log(error))
}