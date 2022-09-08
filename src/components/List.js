import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { getAllSongs } from '../api';

export const List = () => {

    const location = useLocation()
    const [song, setSong] = useState([])
    
    const getlist = location.state

    useEffect(() => {
        // console.log(location)

        getAllSongs(getlist).then((data) => {
            console.log(data)
            setSong(data)
            
        }).catch(error =>{
            console.log(error)
        })
    }, [])
    

    return (

        <div className="container-fluid" style={{marginBottom: 20}}>
            <div className="card shadow" style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
                <div className="row" style={{ paddingBottom: '20px' }}>
                    <h4>Songs</h4>
                </div>
            </div>

            <div className="card shadow" style={{ marginTop: 8, marginBottom: '4px' }}>
                <table className=" align-middle mb-3 mt-3 bg-white" style={{ borderRadius: 10 }}>
                    <thead className="bg-light">
                        <tr>
                            <th style={{ paddingLeft: '10%' }}>Title</th>
                            <th>Artist</th>
                            <th>Duration</th>
                            <th>Album</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            song?.map((sng, i)=>(
                            <tr key={i}>
                            <td>
                                <div className="d-flex align-items-center" style={{paddingLeft: '10%'}}>
                                    <img
                                        src={sng.thumbnail}
                                        alt=""
                                        style={{ width: '50px', height: '50px' }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{sng.title}</p>
                                        <p className="text-muted mb-0">{sng.name}</p>
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
                            <td>
                                <span className="badge badge-success rounded-pill d-inline">{sng.duration / 100}</span>
                            </td>
                            
                            <td><Link to="/album_details" state={sng.album.album_id}>{sng.album.name}</Link></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>


    )
}

export default List
