import React from "react";

const features = [
    { name: "Reklamsız müzik dinle", free: false, premium: true },
    { name: "İndir ve çevrimdışı dinle", free: false, premium: true },
    { name: "Şarkıları istediğin sırada çal", free: false, premium: true },
    { name: "Arkadaşlarınla aynı anda dinle", free: false, premium: true },
    { name: "Yüksek ses kalitesi", free: false, premium: true },
];

const TableSection = () => {
    return (
        <section className="container py-5 mt-3">
            <div className="text-center">
                <h3 className="fw-bold">Farkı keşfet</h3>
                <p className="fw-small">Premium'a geç ve dinleyeceğine yalnızca sen karar ver. İstediğin zaman iptal et.</p>
            </div>
            <div className="mt-5">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Elde edeceğin avantajlar</th>
                            <th scope="col">Spotify'ın Free planı</th>
                            <th scope="col"><i className="bi bi-spotify"></i> Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index}>
                                <td>{feature.name}</td>
                                <td>{feature.free ? <i className="bi bi-check-circle-fill"></i> : "--"}</td>
                                <td>{feature.premium ? <i className="bi bi-check-circle-fill"></i> : "--"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TableSection;