import React, { useState, useEffect } from 'react'
import { getJokes } from '../api';

export const Modal = ({closeModal}) => {

    const [joke, setJoke] = useState([])

    useEffect(() => {
        getJokes().then((data)=>{

            console.log(data)
            setJoke(data)
            
        }).catch(error=>{
            console.log(error)
        })
    }, [])
    
    return (
        <div className="modalBackground">
            {
                joke?.map((jok,i)=>( 
            <div className="modalContainer" key={i}>
                {/* <div className="row" style={{paddingRight: 15}}>
                    <button className="btn" style={{outline: 'none', border: 'none', textAlign: 'right'}} onClick={()=>closeModal(false)}>
                        <img src="./images/cross.png" alt="cross" style={{width: 25, height: 25}}/>
                    </button>
                </div> */}
                <div className="head">
                    <h5>{jok.setup}</h5>
                </div>
                <div className="body">
                    <h6>{jok.punchline}</h6>
                </div>
                <div className="foot" style={{textAlign: 'right'}}>
                    <button className="btn btn-danger" onClick={()=>closeModal(false)}>Cancel</button>
                </div>
            </div>
                ))
            }  
        </div>
    
    )
}

export default Modal
