import React, { useState, useEffect } from "react";

const Login = () => {
    const [userName, setUserName] = useState("");  // Kullanıcı adı durumu
    const [token, setToken] = useState("");  // Kullanıcı token durumu

    // Sayfa yüklendiğinde token'ı localStorage'dan alıyoruz
    useEffect(() => {
        const storedToken = localStorage.getItem("spotify_token");
        const storedUserName = localStorage.getItem("user_name");

        // Eğer token ve kullanıcı adı varsa, state'e yükle
        if (storedToken && storedUserName) {
            setToken(storedToken);
            setUserName(storedUserName);
        } else {
            const urlToken = new URLSearchParams(window.location.hash).get("#access_token");
            if (urlToken) {
                // Token varsa, kullanıcı bilgilerini al
                fetch("https://api.spotify.com/v1/me", {
                    headers: {
                        Authorization: `Bearer ${urlToken}`,
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const name = data.display_name;
                        setUserName(name);
                        setToken(urlToken);
                        localStorage.setItem("spotify_token", urlToken);  // Token'ı kaydet
                        localStorage.setItem("user_name", name);  // Kullanıcı adını kaydet
                    })
                    .catch((error) => console.error("Error fetching user data:", error));
            }
        }
    }, []);

    return (
        <div className="d-flex justify-content-end align-items-center p-3">
            {userName ? (
                <span className="text-white fs-4">Hoş Geldiniz, {userName}</span>  // Kullanıcı adı gösteriliyor
            ) : (
                <a
                    className="btn btn-success rounded-pill px-4 py-2 shadow-sm d-flex align-items-center"
                    href={`https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI}&scope=user-top-read`}
                    style={{ textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}
                >
                    <i className="fas fa-sign-in-alt me-2"></i> {/* Giriş simgesi */}
                    Giriş Yap
                </a>
            )}
        </div>
    );
};

export default Login;
