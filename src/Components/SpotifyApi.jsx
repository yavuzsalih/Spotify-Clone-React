import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "../Utils/auth";
import { fetchWebApi } from "../Api/spotify";

const SpotifyApi = () => {
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token) {
            setToken(_token);
            localStorage.setItem("spotify_token", _token);
            setIsLoggedIn(true);
        } else {
            const savedToken = localStorage.getItem("spotify_token");
            if (savedToken) {
                setToken(savedToken);
                setIsLoggedIn(true);
            }
        }
    }, []);

    useEffect(() => {
        if (token) {
            getTopTracks();
        }
    }, [token]);

    async function getTopTracks() {
        const data = await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=5",
            "GET", token);
            console.log(data);
        setTopTracks(data.items || []);
    }

    return (
        !isLoggedIn ? (
            <div
                className="login-container d-flex justify-content-center align-items-center"
                style={{ height: "200px" }}
            >
                <div className="text-center p-4 rounded shadow">
                    <h3 className="mb-4">Spotify ile Giriş Yap</h3>
                    <a
                        className="btn btn-primary btn-block"
                        href={`https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI}&scope=user-top-read`}
                        style={{ textDecoration: "none", fontSize: "18px" }}
                    >
                        Giriş Yap
                    </a>
                </div>
            </div>
        ) : (

            <div className="container mt-5">
                <div className="card bg-dark text-white shadow-lg p-3">
                    <div className="card-body">
                        <h2 className="card-title fw-bold mb-3 text-white fs-4 text-center">
                            En Çok Dinlediğin Şarkılar
                        </h2>
                        <ul className="list-group list-group-flush">
                            {topTracks.map((track, index) => (
                                <li
                                    key={track.id}
                                    className="list-group-item bg-dark text-white d-flex align-items-center border-secondary py-2"
                                >
                                    <span className="badge bg-white text-dark me-4 fs-6 d-flex align-items-center justify-content-center">
                                        {index + 1}
                                    </span>
                                    <div className="flex-grow-1 text-start">
                                        <strong className="fs-6">{track.name}</strong>
                                        <br />
                                        <small className="text-white">{track.artists.map((artist) => artist.name).join(", ")}</small>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        )
    );
}

export default SpotifyApi;
