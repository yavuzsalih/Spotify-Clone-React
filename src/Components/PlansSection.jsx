import React from 'react'

const PlansSection = () => {
    return (
        <section>
            {/* <!-- Premium Plan --> */}
            <div className="container my-5">
                <div className="row">
                    {/* <!-- Plan 1 --> */}
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className="bg-dark text-white p-4 rounded w-100">
                            <div className="d-flex align-items-center">
                                <img src="image/spotify.png" width="30" height="30" />
                                <h5 className="mb-0">Premium</h5>
                            </div>
                            <div className="text-start">
                                <h3 className="fw-bold mt-3" style={{ color: 'rgb(254, 209, 214)' }}>Bireysel</h3>
                                <h4 className="fw-bold">İlk 1 Ay Ücretsiz</h4>
                                <p className="text-muted">Sonra ayda ₺59,99</p>
                                <hr />
                                <ul className="fw-bold fs-1">
                                    <li>1 Premium hesabı</li>
                                    <li>İstediğin zaman iptal et</li>
                                </ul>
                                <a href="#" className="btn w-100 rounded-pill mt-5 fw-bold" style={{ background: 'rgb(254, 209, 214)' }}>Premium'u Edin</a>
                                <p className="text-center mt-3" style={{ fontSize: 'x-small' }}>İlk 1 ay boyunca ücretsiz, sonra ayda ₺59,99. Sadece Premium'u daha önce denememiş kişiler tekliften yararlanabilir.<a href="#" style={{ color: 'white' }}>Koşullar Geçerlidir</a></p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Plan 2 --> */}
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className="bg-dark text-white p-4 rounded w-100">
                            <div className="d-flex align-items-center">
                                <img src="image/spotify.png" width="30" height="30" />
                                <h5 className="mb-0">Premium</h5>
                            </div>
                            <div className="text-start">
                                <h3 className="fw-bold mt-3" style={{ color: 'rgb(196, 177, 212)' }}>Öğrenci</h3>
                                <h4 className="fw-bold">İlk 1 Ay Ücretsiz</h4>
                                <p className="text-muted">Sonra ayda ₺32,99</p>
                                <hr />
                                <ul className="fw-bold">
                                    <li>Doğrulanmış 1 Premium hesabı</li>
                                    <li>Koşulları sağlayan öğrenciler için indirim</li>
                                    <li>İstediğin zaman iptal et</li>
                                </ul>
                                <a href="#" className="btn w-100 rounded-pill mt-3 fw-bold" style={{ background: 'rgb(196, 177, 212)' }}>Premium'u Edin</a>
                                <p className=" text-center mt-3" style={{ fontSize: 'x-small' }}>İlk 1 ay boyunca ücretsiz, sonra ayda ₺32,99. Teklif yalnızca geçerli yükseköğretim kurumlarında okuyan ve Premium'u daha önce denememiş öğrenciler içindir. <a href="#" style={{ color: 'white' }}>Koşullar Geçerlidir</a></p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Plan 3 --> */}
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className="bg-dark text-white p-4 rounded w-100">
                            <div className="d-flex align-items-center">
                                <img src="image/spotify.png" width="30" height="30" />
                                <h5 className="mb-0">Premium</h5>
                            </div>
                            <div className="text-start">
                                <h3 className="fw-bold mt-3" style={{ color: 'rgb(165, 187, 209)' }}>Duo</h3>
                                <h4 className="fw-bold">₺79,99 / ay</h4>
                                <hr style={{ marginTop: '48px' }} />
                                <ul className="fw-bold">
                                    <li>2 Premium hesabı</li>
                                    <li>İstediğin zaman iptal et</li>
                                </ul>
                                <a href="#" className="btn w-100 rounded-pill mt-5 fw-bold" style={{ background: 'rgb(165, 187, 209)' }}>Premium Planını Duo Edinin</a>
                                <p className="text-center mt-3" style={{ fontSize: 'x-small' }}>Aynı adreste yaşayan çiftler için. <a href="#" style={{ color: 'white' }}>Koşullar Geçerlidir</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlansSection