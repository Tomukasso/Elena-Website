import { useState } from 'react';
import { translations } from './translations';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [lang, setLang] = useState('en');
  const [clicks, setClicks] = useState([]);
  const t = translations[lang];

  const handleGlobalClick = (e) => {
    const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
    setClicks((prev) => [...prev, newClick]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
    }, 1000);
  };

  const products = [
    { id: 1, img: '/assets/images/easter_bunnies.jpg', titleEN: 'Easter Bunnies', titleRO: 'Iepurași de Paște' },
    { id: 2, img: '/assets/images/bracelets.jpg', titleEN: 'Bracelets', titleRO: 'Brățări' },
    { id: 3, img: '/assets/images/real_candle.jpg', titleEN: 'Candles', titleRO: 'Lumânări' },
    { id: 4, img: '/assets/images/decorations.jpg', titleEN: 'Decorations', titleRO: 'Decorațiuni' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-linen)] flex flex-col font-body" onClick={handleGlobalClick}>
      <AnimatePresence>
        {clicks.map((c) => (
          <motion.div
            key={c.id}
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed pointer-events-none rounded-full bg-[#E5C07B]"
            style={{ 
              left: c.x - 20, 
              top: c.y - 20, 
              width: 40, 
              height: 40,
              zIndex: 9999
            }}
          />
        ))}
      </AnimatePresence>
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-end items-center text-[#FDFBF7] bg-transparent">
        <div className="flex gap-4 items-center text-[10px] md:text-xs font-light tracking-[0.2em] uppercase mt-1">
          <button 
            onClick={() => setLang('en')} 
            className={`transition-all duration-300 pb-1 border-b border-transparent ${lang === 'en' ? 'text-[#FDFBF7] font-medium !border-[#FDFBF7]' : 'text-[#FDFBF7]/60 hover:text-[#FDFBF7]'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLang('ro')} 
            className={`transition-all duration-300 pb-1 border-b border-transparent ${lang === 'ro' ? 'text-[#FDFBF7] font-medium !border-[#FDFBF7]' : 'text-[#FDFBF7]/60 hover:text-[#FDFBF7]'}`}
          >
            RO
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('/assets/images/sharp_modern_hero.png')` }}
        ></div>
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 w-full flex flex-col items-end gap-4 mt-20 pr-8 md:pr-16 lg:pr-24 xl:pr-32">
          <p className="font-body text-[14px] md:text-[16px] text-[#FDFBF7] uppercase tracking-[0.5em] font-medium drop-shadow-sm text-right">
            {t.heroSubtitle}
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[8rem] text-[#FDFBF7] font-semibold max-w-4xl text-right leading-none drop-shadow-lg">
            {t.heroTitle}
          </h1>
          <div className="mt-8 flex flex-col items-end gap-3">
            <div className="w-24 h-[1px] bg-[#FDFBF7]"></div>
            <p className="font-body text-[10px] text-[#FDFBF7] uppercase tracking-[0.3em] font-light text-right">
              {t.scrollHint}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container with Stitch borders */}
      <main className="max-w-7xl mx-auto w-full px-6 py-12 flex flex-col gap-24">
        
        {/* My Story */}
        <section id="story" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center stitch-border pb-24">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center border-4 border-white shadow-lg overflow-hidden relative">
              <img src="/assets/images/ela_at_work.jpg" alt="Elena working" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 relative z-20" />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-4xl mb-6 text-black">{t.storyTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.storyText}
            </p>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="stitch-border pb-24">
          <h2 className="font-heading text-4xl mb-12 text-center text-black">{t.blogTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={`https://images.unsplash.com/photo-1612204530299-8383f9416b5a?auto=format&fit=crop&q=80&sig=${item}`} 
                    alt="Blog post" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl mb-3 text-black">Poveste #{item}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <button className="text-sm font-semibold uppercase tracking-wider text-[var(--color-forest)] hover:opacity-80 transition-opacity">
                    {t.readMore} &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Store & Gallery */}
        <section id="store" className="stitch-border pb-24">
          <h2 className="font-heading text-4xl mb-12 text-center text-black">{t.storeTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.titleEN} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between items-center text-center bg-gradient-to-b from-transparent to-gray-50/50">
                  <h3 className="font-heading text-lg font-semibold text-black mb-4">
                    {lang === 'en' ? product.titleEN : product.titleRO}
                  </h3>
                  <button className="w-full bg-black text-white py-3 px-6 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-md hover:scale-105 hover:shadow-[0_0_15px_rgba(229,192,123,0.4)]">
                    {t.buyBtn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="pb-12 max-w-2xl mx-auto w-full">
          <h2 className="font-heading text-4xl mb-8 text-center text-black">{t.contactTitle}</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t.formName}</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--color-forest)] bg-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t.formEmail}</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--color-forest)] bg-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t.formInterest}</label>
              <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--color-forest)] bg-white">
                <option>Custom Order</option>
                <option>Wholesale</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t.formMessage}</label>
              <textarea rows="4" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--color-forest)] bg-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-[var(--color-forest)] text-white font-bold py-4 rounded hover:opacity-90 transition-all duration-300 uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_15px_rgba(229,192,123,0.4)]">
              {t.formSubmit}
            </button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-[#1a1a1a] text-gray-400 py-8 text-center mt-auto">
        <p className="text-sm">{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
