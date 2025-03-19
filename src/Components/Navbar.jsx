import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black text-white px-5">
                <div className="container-md">
                    <a className="navbar-brand text-white fw-bold" href="#">
                        <i className="bi bi-spotify"></i>
                        Spotify
                    </a>
                    <div>
                        <a className="navbar-brand text-white fw-bold" href="#">Premium</a>
                        <a className="navbar-brand text-white fw-bold" href="#">Destek</a>
                        <a className="navbar-brand text-white fw-bold" href="#">Indir</a>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar