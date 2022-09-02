import React from 'react'

export const Header = () => {
    return (
        <nav className="navbar navbar-dark" style={{background: '#e91e63'}}>
        <div className="container-fluid text-white">
            <div>
            <img style={{width: '20%'}} src="./images/detective.png" alt="detective"/>
            </div>

            <div>
                <h1>
                <span>M</span>
                <span>u</span>
                <span>s</span>
                <span>i</span>
                <span>c</span>
                <span>D</span>
                <span>e</span>
                <span>t</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
                <span>i</span>
                <span>v</span>   
                <span>e</span> 
                </h1>
            </div>
            
        </div>
        </nav>
    )
}

export default Header

