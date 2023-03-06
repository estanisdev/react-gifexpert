export const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=RnBKyKOPsMwhD6tS4O371Ofb168zvJFH&q=${category}&limit=20`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))
  return gifs
}
