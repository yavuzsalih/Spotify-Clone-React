import React from 'react'

const PaymentSection = () => {
    return (
        <section className="container py-5 mt-3">
            <div className="text-center">
                <h1 className="fw-bold">Her duruma uygun, ekonomik planlar</h1>
                <p className="fw-small mx-auto w-50">Bir Premium planı seç ve telefonunda, hoparlöründe ve diğer cihazlarında sınırsız
                    ve reklamsız müzik dinle.
                    Çeşitli ödeme yöntemlerinden dilediğini seç. İstediğin zaman iptal et.</p>
            </div>

            <ul className="list-inline text-center mt-4">
                <li className="list-inline-item">
                    <div role="img" aria-label="visa" className="payment-icon">
                        <img src="/image/visa.png" alt="Visa" style={{ height: '50px' }} />
                    </div>
                </li>
                <li className="list-inline-item">
                    <div role="img" aria-label="mastercard" className="payment-icon">
                        <img src="/image/master.png" alt="MasterCard" style={{ height: '50px' }} />
                    </div>
                </li>
                <li className="list-inline-item">
                    <div role="img" aria-label="amex" className="payment-icon">
                        <img src="/image/amex.webp" alt="Amex" style={{ height: '50px' }} />
                    </div>
                </li>
                <li className="list-inline-item">
                    <div role="img" aria-label="discover" className="payment-icon">
                        <img src="/image/discover.webp" alt="Discover" style={{ height: '50px' }} />
                    </div>
                </li>
            </ul>

            <div className="mt-3 text-center">
                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#morePayments"
                    aria-expanded="false" aria-controls="morePayments">
                    + 3 Daha
                </button>
                <div className="collapse" id="morePayments">
                    <ul className="list-inline text-center mt-3">
                        <li className="list-inline-item">
                            <div role="img" aria-label="turkcell" className="payment-icon">
                                <img src="/image/turkcell.png" alt="Turkcell" style={{ height: '50px' }} />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div role="img" aria-label="turk-telekom" className="payment-icon">
                                <img src="/image/turk.png" alt="Türk Telekom" style={{ height: '50px' }} />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div role="img" aria-label="vodafone" className="payment-icon">
                                <img src="/image/vodafone.png" alt="Vodafone" style={{ height: '50px' }} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <aside className="card mt-4 bg-transparent text-light">
                <div className="card-body d-flex justify-content-center align-items-center">

                    <h3 className="card-title">Tüm Premium planlarına dahil olan avantajlar:</h3>

                    <ul className="list-unstyled text-light text-start ms-4">
                        <li><i className="bi bi-check-circle"></i> Reklamsız müzik dinle</li>
                        <li><i className="bi bi-check-circle"></i> İndir ve çevrimdışı dinle</li>
                        <li><i className="bi bi-check-circle"></i> Şarkıları istediğin sırada çal</li>
                        <li><i className="bi bi-check-circle"></i> Yüksek ses kalitesi</li>
                        <li><i className="bi bi-check-circle"></i> Arkadaşlarınla aynı anda dinle</li>
                        <li><i className="bi bi-check-circle"></i> Dinleme sıranı düzenle</li>
                    </ul>
                </div>
            </aside>
        </section>
    )
}

export default PaymentSection