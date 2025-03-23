import React from "react"; // added missing semicolon

const plans = [
    {
        id: 1,
        title: "Bireysel",
        price: "Sonra ayda ₺59,99",
        offer: "İlk 1 Ay Ücretsiz",
        features: ["1 Premium hesabı", "İstediğin zaman iptal et"],
        bgColor: "rgb(254, 209, 214)",
    },
    {
        id: 2,
        title: "Öğrenci",
        price: "Sonra ayda ₺32,99",
        offer: "İlk 1 Ay Ücretsiz",
        features: [
            "Doğrulanmış 1 Premium hesabı",
            "Koşulları sağlayan öğrenciler için indirim",
            "İstediğin zaman iptal et",
        ],
        bgColor: "rgb(196, 177, 212)",
    },
    {
        id: 3,
        title: "Duo",
        price: "₺79,99 / ay",
        offer: "",
        features: ["2 Premium hesabı", "İstediğin zaman iptal et"],
        bgColor: "rgb(165, 187, 209)",
    },
];

const PlanCard = ({ title, price, offer, features, bgColor }) => {
    return (
        <div className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="bg-dark text-white p-4 rounded w-100 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                    <img src="image/spotify.png" width="30" height="30" alt="Spotify Logo" /> {/* added alt attribute */}
                    <h5 className="mb-0 ms-2">Premium</h5>
                </div>
                <div className="text-start flex-grow-1">
                    <h3 className="fw-bold mt-3" style={{ color: bgColor }}>{title}</h3>
                    {offer && <h4 className="fw-bold">{offer}</h4>}
                    <p className="text-muted">{price}</p>
                    <hr className="my-3 mx-0" /> {/* adjusted margin */}
                    <ul className="fw-bold">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-auto">
                    <a
                        href="#"
                        className="btn w-100 rounded-pill mt-3 fw-bold"
                        style={{ background: bgColor }}
                    >
                        Premium'u Edin
                    </a>
                    <p className="text-center mt-3" style={{ fontSize: "x-small" }}>
                        <a href="#" style={{ color: "white" }}>Koşullar Geçerlidir</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const PlansSection = () => {
    return (
        <section>
            <div className="container my-5">
                <div className="row">
                    {plans.map((plan) => (
                        <PlanCard key={plan.id} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlansSection;
