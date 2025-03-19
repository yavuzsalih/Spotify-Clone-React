import React from 'react';

const FooterSection = () => {
    const companyLinks = ["Hakkında", "Kariyer", "For the Record"];
    const communityLinks = ["Sanatçılar İçin", "Geliştiriciler", "Reklam", "Yatırımcılar", "Satıcılar"];
    const usefulLinks = ["Destek", "Web Çalar", "Ücretsiz Mobil Uygulama"];
    const plans = ["Premium Bireysel", "Premium Duo", "Premium Aile", "Premium Öğrenci", "Spotify Free"];
    const socialIcons = ["facebook", "instagram", "twitter"];
    const legalLinks = [
        "Yasal", "Güvenlik ve Gizlilik Merkezi", "Gizlilik Politikası", 
        "Tanımlama Bilgisi Ayarları", "Reklamlar Hakkında", "Erişilebilirlik"
    ];
    
    return (
        <footer className="footer container-fluid bg-black p-5 pb-1">
            <div className="row container p-5 mx-5 pb-1">
                <div className="col-6 col-md">
                    <i className="bi bi-spotify" style={{ fontSize: '26px' }}></i>
                    <h3 className="fw-bold d-inline-block">Spotify</h3>
                </div>
                {[{ title: "ŞİRKET", links: companyLinks },
                  { title: "Topluluklar", links: communityLinks },
                  { title: "Yararlı bağlantılar", links: usefulLinks },
                  { title: "Spotify Planları", links: plans }].map((section, idx) => (
                    <div className="col-6 col-md" key={idx}>
                        <p className="fw-bold text-secondary text-uppercase">{section.title}</p>
                        <ul className="list-unstyled">
                            {section.links.map((link, index) => <li key={index}>{link}</li>)}
                        </ul>
                    </div>
                ))}
                <div className="col-6 col-md">
                    <ul className="list-inline d-flex">
                        {socialIcons.map((icon, index) => (
                            <li key={index} className="list-inline-item bg-dark text-white rounded-circle d-flex justify-content-center align-items-center mx-3" style={{ width: '60px', height: '60px' }}>
                                <i className={`bi bi-${icon} fs-4`}></i>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-12 d-flex flex-wrap align-items-center mt-5">
                    {legalLinks.map((link, index) => (
                        <p key={index} className="fw-bold text-secondary text-uppercase me-3 mb-2" style={{ fontSize: '10px' }}>{link}</p>
                    ))}
                    <div className="ms-auto text-end mt-2 mb-2 d-flex flex-column align-items-end justify-content-end">
                        <p className="fw-bold text-secondary text-uppercase mb-1" style={{ fontSize: '10px' }}>Türkiye</p>
                        <p className="fw-bold text-secondary text-uppercase mb-0" style={{ fontSize: '10px' }}>© 2021 Spotify AB</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
