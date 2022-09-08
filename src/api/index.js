import axios from 'axios';

// api to get search from main page
const URL = 'https://youtube-music1.p.rapidapi.com/v2/search'

export const getAllSongs = async (getlist) => {

    try{
        const response = await axios.get(URL, {
          params: {query: getlist},
          headers: {
            'X-RapidAPI-Key': 'f19236b2dbmshd94c17dab305d9ep1bebccjsn3aae7d283d5e',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
          }
        })
        // console.log(response)
        return response.data.result.songs

    }catch(error){
        console.log(error)
    }
}

// api to get information about artist when artist is clicked

const URL_ARTIST = 'https://youtube-music1.p.rapidapi.com/v2/get_artist'

export const getArtistInfo = async (getartist) =>{
  try{
    const response = await axios.get(URL_ARTIST, {
      params: {artist_id: getartist},
      headers: {
        'X-RapidAPI-Key': 'f19236b2dbmshd94c17dab305d9ep1bebccjsn3aae7d283d5e',
        'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
      }
    })
    return response.data.result

  }catch(error){
    console.log(error)
  }
}

// api to get information for album

const URL_ALBUM = 'https://youtube-music1.p.rapidapi.com/v2/get_album'

export const getAlbumInfo = async (getalbum) =>{
  try{
    const response = await axios.get(URL_ALBUM, {
      params: {album_id: getalbum},
      headers: {
        'X-RapidAPI-Key': 'f19236b2dbmshd94c17dab305d9ep1bebccjsn3aae7d283d5e',
        'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
      }
    })
    return response.data.result

  }catch(error){
    console.log(error)
  }
}

// api for jokes

const URL_JOKES = 'https://dad-jokes.p.rapidapi.com/random/joke'

export const getJokes = async () => {
  try{
    const response = await axios.get(URL_JOKES, {
      headers: {
        'X-RapidAPI-Key': 'f19236b2dbmshd94c17dab305d9ep1bebccjsn3aae7d283d5e',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
    })
    return response.data.body
  }catch(error){
    console.log(error)
  }
}