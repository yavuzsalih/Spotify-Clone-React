import React from 'react'

const FooterSection = () => {
    return (
        <footer className="footer container-fluid bg-black p-5 pb-1">
            <div className="row container p-5 mx-5 pb-1">
                <div className="col-6 col-md">
                    <i className="bi bi-spotify" style={{ fontSize: '26px' }}></i>
                    <h3 className="fw-bold d-inline-block">Spotify</h3>
                </div>
                <div className="col-6 col-md">
                    <p className="fw-bold text-secondary text-uppercase">ŞIRKET</p>
                    <ul className="list-unstyled">
                        <li>Hakkında</li>
                        <li>Kariyer</li>
                        <li>For the Record</li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <p className="fw-bold text-secondary text-uppercase">Topluluklar</p>
                    <ul className="list-unstyled">
                        <li>Sanatçılar İçin</li>
                        <li>Geliştiriciler</li>
                        <li>Reklam</li>
                        <li>Yatırımcılar</li>
                        <li>Satıcılar</li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <p className="fw-bold text-secondary text-uppercase">Yararlı bağlantılar</p>
                    <ul className="list-unstyled">
                        <li>Destek</li>
                        <li>Web Çalar</li>
                        <li>Ücretsiz Mobil Uygulama</li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <p className="fw-bold text-secondary text-uppercase">Spotify Planları</p>
                    <ul className="list-unstyled">
                        <li>Premium Bireysel</li>
                        <li>Premium Duo</li>
                        <li>Premium Aile</li>
                        <li>Premium Öğrenci</li>
                        <li>Spotify Free</li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <ul className="list-inline d-flex">
                        <li className="list-inline-item bg-dark text-white rounded-circle d-flex justify-content-center align-items-center mx-3" style={{ width: '60px', height: '60px' }}>
                            <i className="bi bi-facebook fs-4"></i>
                        </li>
                        <li className="list-inline-item bg-dark text-white rounded-circle d-flex justify-content-center align-items-center mx-3" style={{ width: '60px', height: '60px' }}>
                            <i className="bi bi-instagram fs-4"></i>
                        </li>
                        <li className="list-inline-item bg-dark text-white rounded-circle d-flex justify-content-center align-items-center mx-3" style={{ width: '60px', height: '60px' }}>
                            <i className="bi bi-twitter fs-4"></i>
                        </li>
                    </ul>
                </div>
                <div className="col-md-12 d-flex flex-wrap align-items-center mt-5">
                    <p className="fw-bold text-secondary text-uppercase me-3 mb-2" style={{ fontSize: '10px' }}>Yasal</p>
                    <p className="fw-bold text-secondary text-uppercase me-3 mb-2" style={{ fontSize: '10px' }}>Güvenlik ve Gizlilik Merkezi</p>
                    <p className="fw-bold text-secondary text-uppercase me-3 mb-2" style={{ fontSize: '10px' }}>Gizlilik Politikası</p>
                    <p className="fw-bold text-secondary text-uppercase me-3 mb-2" style={{ fontSize: '10px' }}>Tanımlama Bilgisi Ayarları</p>
                    <p className="fw-bold text-secondary text-uppercase me-3 mb-2" style={{ fontSize: '10px' }}>Reklamlar Hakkında</p>
                    <p className="fw-bold text-secondary text-uppercase me-3 mb-2" style={{ fontSize: '10px' }}>Erişilebilirlik</p>
                    <div className="ms-auto text-end mt-2 mb-2 d-flex flex-column align-items-end justify-content-end">
                        <p className="fw-bold text-secondary text-uppercase mb-1" style={{ fontSize: '10px' }}>Türkiye</p>
                        <p className="fw-bold text-secondary text-uppercase mb-0" style={{ fontSize: '10px' }}>© 2021 Spotify AB</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection