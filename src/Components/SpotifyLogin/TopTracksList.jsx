import React from "react";

const TopTracksList = ({ topTracks }) => {
    return (
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
                                className="list-group-item bg-dark text-white d-flex align-items-center border-secondary py-3"
                            >
                                <span className="badge bg-white text-dark me-4 fs-6 d-flex align-items-center justify-content-center">
                                    {index + 1}
                                </span>
                                <img
                                    src={track.album.images[1].url} // Orta boyutlu resmi alıyoruz
                                    alt={track.name}
                                    className="track-image me-3"
                                    style={{ width: "40px", height: "40px" }} // Resim boyutunu ayarlıyoruz
                                />
                                <div className="d-flex flex-column flex-grow-1 text-start">
                                    <strong className="fs-5">{track.name}</strong>
                                    <small className="text-muted">{track.artists.map((artist) => artist.name).join(", ")}</small>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopTracksList;
