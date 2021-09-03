import React from 'react'

const Footer = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"> {" "} Nahuel Blangetti - &copy; {new Date().getFullYear()} {" "} </span>
            </div>
        </nav>
    )
}

export default Footer
