
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from './Modal'

export const Home = () => {

    const [queryword, setQueryword] = useState('')
    const [openModal, setOpenmodal] = useState(false)
    const navigate = useNavigate()
    

    const handleSubmit= (e) =>{
        e.preventDefault()

        console.log(queryword)
        navigate('/songlist', {state:queryword})

    }
    return (
        
        <div className="container-fluid" style={{height: '545px'}}>

            <div className="container text-center" style={{paddingTop: '10%'}}>
                <img style={{marginBottom: 18}} className="cd" src="./images/cd.png" alt="cd"></img>
                <form className="search" onSubmit={handleSubmit}>
                        <input type="text" className="searchTerm" onChange={(e) => setQueryword(e.target.value)}
                        placeholder="Search for Artist, Song, Albums"/>
                        <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                        </button>
                </form>
                <div type="submit" className="" style={{outline: 'none', border: 'none'}} 
                    onClick={()=>{setOpenmodal(true)}}>
                        <p>I'm feeling lucky
                        <img src="./images/lucky.png" alt="lucky" style={{width: 15, height: 15}} /> </p>
                </div>
            </div>
            {/* open modal if condition is true */}
            {openModal && <Modal closeModal={setOpenmodal}/>} 
        </div>
    )
}

export default Home
