import React from 'react'

export const List = ({song}) => {
  return (
    <div className="row justify-content-center">
        <div className="col">
            <div className="card shadow" style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20, marginTop: 50 }}>
                <div className="row" style={{ paddingBottom: '20px' }}>
                    <div className="col-md-3">
                        <img src="/images/song.png" className="card-img" alt="..." style={{ width: 50, height: 50 }} />
                    </div>
                    <div className="col-md-9">
                        <h3 style={{ paddingTop: 6 }}>Song Lists</h3>
                    </div>
                </div>
            </div>

            <div className="card shadow" style={{ marginTop: 4 }}>
                <table className=" align-middle mb-0 bg-white" style={{ borderRadius: 10 }}>
                    <thead className="bg-light">
                        <tr>
                            <th style={{ paddingLeft: '10%' }}>Title</th>
                            <th>Artist</th>
                            <th>Time</th>
                            <th style={{ paddingLeft: '10%' }}>Album</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            song?.map((sng, i)=>(
                            <tr key={i}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={sng.thumbnail}
                                        alt=""
                                        style={{ width: '45px', height: '45px' }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{sng.title}</p>
                                        <p className="text-muted mb-0">{sng.name}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{sng.artists[0].name}</p>
                            </td>
                            <td>
                                <span className="badge badge-success rounded-pill d-inline">{sng.duration / 100}</span>
                            </td>
                            <td style={{ paddingLeft: '10%' }}>{sng.album.name}</td>
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

export default List
