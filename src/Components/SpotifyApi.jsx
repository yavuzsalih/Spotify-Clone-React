import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "../Utils/auth";
import { fetchWebApi } from "../Api/spotify";
import TopTracksList from "./SpotifyLogin/TopTracksList.jsx";

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
        isLoggedIn && <TopTracksList topTracks={topTracks} />
    );
}

export default SpotifyApi;
