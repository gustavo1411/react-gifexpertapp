

export const getGif = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?key=oTRf02vH21TlSD3sWCa3n0o6We96RkPd&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map( imgs => {
        return {
            id: imgs.id,
            url: imgs.images.downsized_medium.url,
            title: imgs.title
        }
    })

    return gifs;

}