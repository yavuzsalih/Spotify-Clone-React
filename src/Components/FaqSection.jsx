import React from 'react';

const faqData = [
    {
        question: "Spotify Premium teklifi nasıl işler?",
        answer: "Premium'u daha önce kullanmadıysan ücretsiz (veya düşük fiyatlı) bir tekliften yararlanabilirsin. Öncelikle geçerli bir ödeme yöntemi girerek üye olman gerekir. Üye olmadan önce herhangi bir teklif için uygun olup olmadığını görüntüleyebilirsin. Teklifin sona ermeden 7 gün önce sana hatırlatma göndeririz. Bulunduğun ülkedeki kısıtlamalar ve hükümler geçerlidir."
    },
    {
        question: "Premium planımı nasıl iptal edebilirim?",
        answer: "Premium planını dilediğin zaman çevrimiçi olarak hesap sayfandan kolayca iptal edebilirsin. Premium planın sonraki fatura tarihine kadar iptal edilmez. Bu tarihten sonra hesabın ücretsiz planımıza geçer. Ücretsiz hesaba geçtiğinde çalma listelerinle kaydettiğin müzikler sende kalır ve dinlerken reklamları duyarsın."
    },
    {
        question: "Premium Duo planı nasıl çalışır?",
        answer: "Premium Duo, birlikte yaşayan 2 kişinin yararlanabileceği bir plandır. İki ayrı Premium Bireysel hesabı için tam fiyat ödemekten daha ekonomiktir. Aynı adreste yaşadığını onaylamak için adresini isteriz. Satın alma işleminden sonra plana üye davet edebilirsin. Her üyenin ayrı birer Premium hesabı olur ve kendi hesabıyla aynı anda dinleyebilir."
    },
    {
        question: "Premium Öğrenci planı nasıl çalışır?",
        answer: "Geçerli bir yüksekokulda veya üniversitede kayıtlı olan bir öğrenciysen ve 18 yaşından büyüksen yararlanabilirsin. Premium Öğrenci'yi 4 yıla kadar kullanabilirsin."
    },
    {
        question: "Spotify Premium'un Türkiye dahilindeki ücreti nedir?",
        answer: "Türkiye dahilindeki Spotify Premium fiyatları, seçtiğin Premium planına bağlı olarak farklılık gösterir: Spotify Premium Bireysel planı /ay ₺59,99, Premium Duo planı /ay ₺79,99, Premium Aile planı /ay ₺99,99, Premium Öğrenci planı ise /ay ₺32,99 tutarındadır."
    }
];

const FaqSection = () => {
    return (
        <section className="container py-5 my-4">
            <div className="text-center">
                <h3 className="fw-bold">Soruların mı var?</h3>
                <p className="fw-small" style={{ fontSize: '10px' }}>Yanıtları bizde.</p>
                <p className="fw-small" style={{ fontSize: '13px' }}>
                    <a href="#" style={{ color: 'white' }}>Destek sitemizde</a> sorularının yanıtlarını bulabilirsin.
                </p>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {faqData.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                {faq.question}
                            </button>
                        </h2>
                        <div id={`flush-collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body bg-dark text-white">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;