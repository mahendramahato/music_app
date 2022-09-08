import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getArtistInfo } from '../api'

// const ReadMore = ({children})=>{
//     const text = children
//     const [readmore, setReadmore] = useState(true)
//     const toggleReadMore = () =>{
//         setReadmore(!readmore)
//     }
//     return(
//         <p className="text">
//             {readmore ? text.slice(0, 150):text}
//             <span onClick={toggleReadMore} className="read-or-hide">
//                 {readmore ? "...more" : "Show less"}
//             </span>
//         </p>
//     )
// }

let name = ''
let description = ''
let picture = ''

export const Artist = () => {

    const location = useLocation()
    const getartist = location.state
    // console.log(location.state)
    const [artistsong, setArtistsong] = useState([])
    const [artistalbum, setArtistalbum] = useState([])
    const [artistsingle, setArtistsingle] = useState([])

    const refreshPage =()=>{
        window.location.reload(true)
    }
    

    useEffect(() => {
    // console.log(location)

    getArtistInfo(getartist).then((data) => {
        console.log(data)

        name = data.name
        description = data.description
        picture = data.thumbnail

        setArtistsong(data.songs)
        setArtistalbum(data.albums)
        setArtistsingle(data.singles)

    }).catch(error =>{
        console.log(error)
    })
    }, [])

    return (
        <div className="container-fluid" style={{marginBottom: 20}}>
            {/* head part */}
            <div className="container-fluid" style={{backgroundImage: `url(${picture})`, 
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 550}}>
                <div className="container">
                    <div>
                        <h2 className="text-white" style={{paddingTop: '30%'}}>{name}</h2>
                    </div>
                    <div>
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Read More
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className="container-fluid">
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <div style={{paddingBottom: '0%'}}>
                            <p>{description}</p>
                        </div>  
                    </div>
                </div>
            </div>

            {/* song list part */}
            <div className="container-fluid" style={{marginTop: 16}}>
                <div className="card shadow" style={{ marginTop: 4, marginBottom: '4px' }}>
                <table className=" align-middle mb-3 mt-3" style={{ borderRadius: 40 }}>
                    <thead>
                        <tr>
                        <th><h5 style={{fontWeight: 'bold',paddingLeft: '10%'}}>Songs</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        artistsong?.map((artist)=>(
                            <tr>
                            <td>
                                <div className="d-flex align-items-center" style={{paddingLeft: '10%'}}>
                                    <img
                                        src={artist.thumbnail}
                                        alt=""
                                        style={{ width: '50px', height: '50px' }}
                                        className="rounded-circle"
                                    />
                                </div>
                            </td>
                            <td><p className="fw-bold">{artist.title}</p></td>
                            <td>
                                {/* {artist?.artists.map((items)=>(
                                    <p className="fw-muted">{items.name}</p>
                                ))} */}
                                {artist?.artists.map((items)=>(     
                                <Link onClick={refreshPage} to="/artist_details" state={items.artist_id}><p className="fw-normal mb-1 text-dark">
                                    {items.name}
                                </p>
                                </Link>
                                ))}
                            </td>
                            <td> 
                                <Link to="/album_details" state={artist.album.album_id}>
                                    <p className="fw-bold mb-1 text-dark">
                                        {artist.album.name}
                                    </p>
                                </Link>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
                        
            {/* albums part */}
            <div className="container-fluid" style={{marginTop: 16}}>
                <h5 style={{fontWeight: 'bold',paddingLeft: '1%'}}>Albums</h5>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                artistalbum?.map((albm, i)=>(
                    <div className="col">
                        <div className="card shadow" style={{height: 400}}>
                            <Link to="/album_details" state={albm.album_id}>
                                <img src={albm.thumbnail} className="card-img-top" alt="..."/>
                            </Link>
                            <div className="card-footer">
                                <Link to="/album_details" state={albm.album_id}>
                                    <p className="card-title text-dark" style={{fontWeight: 'bold'}} >{albm.title}</p>
                                </Link>
                                <p className="card-text text-muted">Album: {albm.year}</p>
                            </div>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
            
            {/* singles part */}
            <div className="container-fluid" style={{marginTop: 16}}>
                <div className="card shadow" style={{ marginTop: 4, marginBottom: '4px' }}>
                <table className=" align-middle mb-3 mt-3" style={{ borderRadius: 40 }}>
                    <thead>
                        <tr>
                        <th><h5 style={{fontWeight: 'bold',paddingLeft: '10%'}}>Singles</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            artistsingle?.map((single, i)=>(      
                        <tr key={i}>
                        <td>
                            <div className="d-flex align-items-center" style={{paddingLeft: '10%'}}>
                                <img
                                    src={single.thumbnail}
                                    alt=""
                                    style={{ width: '50px', height: '50px', borderRadius: 4 }}
                                />
                            </div>
                        </td>
                        <td><p className="fw-muted">{single.title}</p></td>
                        <td><p className="fw-bold">Year: {single.year}</p></td>
                        </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>

        </div>
    )
}
