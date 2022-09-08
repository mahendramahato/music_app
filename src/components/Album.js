import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getAlbumInfo } from '../api';

let name = ''
let picture = ''
let year = ''

export const Album = () => {

    const location = useLocation()
    const getalbum = location.state

    const [artistInfo, setArtistinfo] = useState([])
    const [songlist, setSonglist] = useState([])

    useEffect(() => {
        // console.log(location)
    
        getAlbumInfo(getalbum).then((data) => {
            // console.log(data)

            name = data.title
            picture = data.thumbnail
            year = data.year

            setArtistinfo(data.artists)
            setSonglist(data.songs)

        }).catch(error =>{
            console.log(error)
        })
    }, [])

    return (
        <div className="container-fluid" style={{marginBottom: 20}}>

            {/* // first row with image and information */}
            <div className="container" style={{marginTop: 16}}>
                <div className="row">
                <div className="col-md-4">
                    <div className="card shadow" style={{width: '95%', height: '95%'}}>
                        <img src={picture} alt="album image" style={{borderRadius: 6}} />
                    </div>
                </div>
                {
                    artistInfo?.map((info)=>( 
                    <div className="col-md-8" style={{paddingTop: '9%'}}>
                        <h2 className="card-title fw-bold">{name}</h2>
                        <p>Album : {info.name} - {year}</p>
                    </div>
                    ))
                }
                </div>
            </div>

            {/* // list of songs in the album */}

            <div className="container-fluid" style={{marginTop: 16}}>
                <div className="card shadow" style={{ marginTop: 8, marginBottom: '4px' }}>
                    <table className=" align-middle mb-4 mt-4 bg-white" style={{ borderRadius: 10 }}>
                        <thead className="bg-light">
                            <tr>
                                <th></th>
                                <th style={{paddingLeft: '114px'}}><h4 className="fw-bold">Songs</h4></th>
                                <th><h4 className="fw-bold">Artist</h4></th>
                                <th><h4 className="fw-bold">Duration</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                songlist?.map((sng, i)=>(
                                <tr key={i}>
                                <td style={{textAlign: 'center'}}>{i+1}</td>
                                <td>
                                    <div className="d-flex align-items-center" style={{paddingLeft: '10%'}}>
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{sng.name}</p>
                                            <p className="text-muted mb-0">{sng.title}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {sng?.artists.map((items)=>(     
                                    <Link to="/artist_details" state={items.artist_id}><p className="fw-normal mb-1 text-dark">
                                        {items.name}
                                    </p>
                                    </Link>
                                    ))}
                                    {/* {sng.artists[0].name} {sng.artists[0].artist_id} */}
                                </td>                              
                                <td style={{paddingLeft: '30px'}}>
                                <span className="badge badge-success rounded-pill d-inline">{sng.duration / 100}</span>
                            </td>
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
