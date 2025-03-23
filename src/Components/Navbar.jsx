import React from 'react';
import Login from "./SpotifyLogin/login.jsx";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black text-white px-5">
                <div className="container-md">
                    <a className="navbar-brand text-white fw-bold" href="#">
                        <i className="bi bi-spotify"></i>
                        Spotify
                    </a>
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand text-white fw-bold me-4" href="#">Premium</a>
                        <a className="navbar-brand text-white fw-bold me-4" href="#">Destek</a>
                        <a className="navbar-brand text-white fw-bold me-4" href="#">İndir</a>
                        <div className="ms-auto">
                            <Login />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
