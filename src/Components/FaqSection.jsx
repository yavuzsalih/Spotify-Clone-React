import React from 'react'

const FaqSection = () => {
    return (
        <section className="container py-5 my-4">
            <div className="text-center">
                <h3 className="fw-bold">Soruların mı var?</h3>
                <p className="fw-small" style={{ fontSize: '10px' }}>Yanıtları bizde.</p>
                <p className="fw-small" style={{ fontSize: '13px' }}>
                    <a href="#" style={{ color: 'white' }}>Destek sitemizde</a>
                    sorularının yanıtlarını bulabilirsin.
                </p>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Spotify Premium teklifi nasıl işler?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bg-dark text-white">Premium'u daha önce kullanmadıysan ücretsiz (veya düşük
                            fiyatlı) bir tekliften yararlanabilirsin.
                            Öncelikle geçerli bir ödeme yöntemi girerek üye olman gerekir. Üye olmadan önce herhangi bir teklif için
                            uygun olup
                            olmadığını görüntüleyebilirsin. Teklifin sona ermeden 7 gün önce sana hatırlatma göndeririz. Bulunduğun
                            ülkedeki kısıtlamalar
                            ve hükümler geçerlidir.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Premium planımı nasıl iptal edebilirim?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bg-dark text-white">Premium planını dilediğin zaman çevrimiçi olarak hesap
                            sayfandan kolayca iptal edebilirsin.
                            Premium planın sonraki fatura tarihine kadar iptal edilmez. Bu tarihten sonra hesabın ücretsiz planımıza
                            geçer.

                            Ücretsiz hesaba geçtiğinde çalma listelerinle kaydettiğin müzikler sende kalır ve dinlerken reklamları
                            duyarsın.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Premium Duo planı nasıl çalışır?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bg-dark text-white">Premium Duo, birlikte yaşayan 2 kişinin yararlanabileceği
                            bir
                            plandır. İki ayrı Premium
                            Bireysel hesabı için tam fiyat ödemekten daha ekonomiktir. Aynı adreste yaşadığını onaylamak için
                            adresini
                            isteriz.
                            Satın alma işleminden sonra plana üye davet edebilirsin. Her üyenin ayrı birer Premium hesabı olur ve
                            kendi hesabıyla
                            aynı anda dinleyebilir. Herkesin kendi kayıtlı müziği ve çalma listeleri kendisinde kalır. Diğer hesap
                            sahibi senin ne
                            dinlediğini göremez.

                            Premium Duo hakkında daha fazla bilgi edin.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Premium Öğrenci planı nasıl çalışır?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bg-dark text-white">Geçerli bir yüksekokulda veya üniversitede kayıtlı olan bir
                            öğrenciysen ve 18 yaşından büyüksen
                            yararlanabilirsin. Premium Öğrenci'yi 4 yıla kadar kullanabilirsin.

                            Premium Öğrenci hakkında daha fazla bilgi edin.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Spotify Premium'un Türkiye dahilindeki ücreti nedir?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bg-dark text-white">Türkiye dahilindeki Spotify Premium fiyatları, seçtiğin
                            Premium planına bağlı olarak farklılık
                            gösterir: Spotify Premium Bireysel planı /ay ₺59,99, Premium Duo planı /ay ₺79,99, Premium Aile planı
                            /ay
                            ₺99,99,
                            Premium Öğrenci planı ise /ay ₺32,99 tutarındadır. Daha önce bir Premium planını kullanmadıysan ücretsiz
                            (veya düşük fiyatlı)
                            bir tekliften yararlanabilirsin. Bulunduğun ülkedeki kısıtlamalar ve hükümler geçerlidir.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection