import React from 'react'

const HeroSection = () => {
    return (
        <section className="container-md py-5">
            <img className="position-absolute z-n1 end-0 top-0 w-50"
                src="https://wwwmarketing.scdn.co/static/images/premium/desktop-album-evergreen-1x.png" />
            <div className="w-50">
                <h1 className="fw-bold">
                    Sınırsız dinle. Hesabını Premium Bireysel planına yükselttiğinde 1 ay ücretsiz
                </h1>
                <h2 className="fs-6 fw-lighter">
                    Sonra yalnızca ₺59,99/ay. İstediğin zaman iptal et.
                </h2>
            </div>

            <div className="d-flex  mt-5">
                <button className=" rounded-pill btn btn-danger">
                    Kullanmaya Basla
                </button>
                <button className=" rounded-pill btn btn-secondary ms-2">
                    Planlari Goruntule
                </button>
            </div>

            <div className="w-50 mt-3">
                <p className="fw-lighter w-50" style={{fontSize: "8px"}}>İlk 1 ay boyunca ücretsiz, sonra ayda ₺59,99. Sadece Premium'u
                    daha önce denememiş kişiler tekliften yararlanabilir. Koşullar geçerlidir.</p>
            </div>
        </section>
    )
}

export default HeroSection