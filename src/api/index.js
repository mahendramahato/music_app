import axios from 'axios';

const URL = 'https://youtube-music1.p.rapidapi.com/v2/search'

export const getAllSongs = async (queryword) => {

    try{
        const response = await axios.get(URL, {
          params: {query: queryword},
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
