import React from "react";

const paymentMethods = [
    { name: "Visa", img: "/image/visa.png" },
    { name: "MasterCard", img: "/image/master.png" },
    { name: "Amex", img: "/image/amex.webp" },
    { name: "Discover", img: "/image/discover.webp" }
];

const extraPayments = [
    { name: "Turkcell", img: "/image/turkcell.png" },
    { name: "Türk Telekom", img: "/image/turk.png" },
    { name: "Vodafone", img: "/image/vodafone.png" }
];

const benefits = [
    "Reklamsız müzik dinle",
    "İndir ve çevrimdışı dinle",
    "Şarkıları istediğin sırada çal",
    "Yüksek ses kalitesi",
    "Arkadaşlarınla aynı anda dinle",
    "Dinleme sıranı düzenle"
];

const PaymentSection = () => {
    return (
        <section className="container py-5 mt-3">
            <div className="text-center">
                <h1 className="fw-bold">Her duruma uygun, ekonomik planlar</h1>
                <p className="fw-small mx-auto w-50">
                    Bir Premium planı seç ve telefonunda, hoparlöründe ve diğer cihazlarında sınırsız ve reklamsız müzik dinle.
                    Çeşitli ödeme yöntemlerinden dilediğini seç. İstediğin zaman iptal et.
                </p>
            </div>

            <ul className="list-inline text-center mt-4">
                {paymentMethods.map((method, index) => (
                    <li key={index} className="list-inline-item">
                        <div role="img" aria-label={method.name} className="payment-icon">
                            <img src={method.img} alt={method.name} style={{ height: '50px' }} />
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-3 text-center">
                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#morePayments"
                    aria-expanded="false" aria-controls="morePayments">
                    + 3 Daha
                </button>
                <div className="collapse" id="morePayments">
                    <ul className="list-inline text-center mt-3">
                        {extraPayments.map((method, index) => (
                            <li key={index} className="list-inline-item">
                                <div role="img" aria-label={method.name} className="payment-icon">
                                    <img src={method.img} alt={method.name} style={{ height: '50px' }} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <aside className="card mt-4 bg-transparent text-light">
                <div className="card-body d-flex justify-content-center align-items-center">
                    <h3 className="card-title">Tüm Premium planlarına dahil olan avantajlar:</h3>
                    <ul className="list-unstyled text-light text-start ms-4">
                        {benefits.map((benefit, index) => (
                            <li key={index}><i className="bi bi-check-circle"></i> {benefit}</li>
                        ))}
                    </ul>
                </div>
            </aside>
        </section>
    );
};

export default PaymentSection;