import React, { useState, useEffect } from 'react';
import { 
  Moon, Star, Clock, MapPin, ChevronDown, 
  Award, Crown, Zap, UtensilsCrossed, 
  GlassWater, Sparkles, MoveUpRight, Heart,
  Coffee, ShieldCheck, Trophy, X 
} from 'lucide-react';

const InfoPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  // --- YANGI QO'SHILGAN STATE'LAR (MENYU UCHUN) ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const fullText = "LUXOR";
  const menuImages = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    "https://images.unsplash.com/photo-1512058560366-cd2427ff0663?q=80&w=800",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800"
  ];

  // INFINITE TYPING & DELETING LOGIC (O'zgarishsiz)
  useEffect(() => {
    setIsLoaded(true);
    const handleTyping = () => {
      const currentText = fullText;
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(200);
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(100);
        if (displayText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  // --- CAROUSEL LOGIC (Faqat menyu ochiqligida ishlaydi) ---
  useEffect(() => {
    if (isMenuOpen) {
      const interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % menuImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMenuOpen]);

  const theme = {
    cream: '#FFF5E1',
    goldLight: '#EBC176',
    goldDark: '#C48B28',
    deepBrown: '#5A3C0B',
  };

  return (
    <div style={styles.mainWrapper}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,500&family=Outfit:wght@100;300;400;600&display=swap');

          * { margin: 0; padding: 0; box-sizing: border-box; -webkit-font-smoothing: antialiased; }
          body { background-color: ${theme.cream}; }

          .type-cursor {
            display: inline-block; width: 3px; height: 35px; background-color: ${theme.goldDark};
            margin-left: 5px; animation: blink 0.7s infinite; vertical-align: middle;
          }
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

          .floating-element { animation: floatObj 5s ease-in-out infinite; }
          @keyframes floatObj {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-15px) translateX(10px); }
          }

          .glass-card {
            background: rgba(255, 245, 225, 0.4); backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(196, 139, 40, 0.25);
            box-shadow: 0 25px 50px -12px rgba(90, 60, 11, 0.15); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .glow-text { animation: textGlow 2s ease-in-out infinite alternate; }
          @keyframes textGlow { from { opacity: 0.8; } to { opacity: 1; filter: brightness(1.2); } }

          .btn-hover-effect { position: relative; z-index: 1; overflow: hidden; transition: 0.4s ease; }
          .btn-hover-effect::before {
            content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: 0.5s; z-index: -1;
          }
          .btn-hover-effect:hover::before { left: 100%; }

          .scroll-indicator {
            width: 2px; height: 40px; background: linear-gradient(to bottom, ${theme.goldDark}, transparent);
            animation: scrollLine 2s infinite;
          }
          @keyframes scrollLine {
            0% { transform: scaleY(0); transform-origin: top; }
            50% { transform: scaleY(1); transform-origin: top; }
            51% { transform: scaleY(1); transform-origin: bottom; }
            100% { transform: scaleY(0); transform-origin: bottom; }
          }

          /* --- YANGI ANIMATSIYALAR --- */
          .carousel-img {
            width: 100%; height: 100%; object-fit: cover; position: absolute;
            transition: opacity 1.5s ease-in-out, transform 3s ease;
          }
        `}
      </style>

      {/* OVERLAY LAYER (Menyu ochilganda fonni yopish uchun) */}
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', 
        zIndex: 90, opacity: isMenuOpen ? 1 : 0, pointerEvents: isMenuOpen ? 'all' : 'none',
        backdropFilter: 'blur(10px)', transition: '0.6s ease'
      }} onClick={() => setIsMenuOpen(false)} />

      {/* 1. RAMAZON PREMIUM PANEL */}
      <header style={{...styles.topBanner, filter: isMenuOpen ? 'blur(10px)' : 'none', transition: '0.6s'}}>
        <div style={styles.bannerContainer}>
          <div style={styles.bannerLeft} className="glow-text">
            <Moon size={22} color={theme.deepBrown} fill={theme.deepBrown} className="floating-element" />
            <span style={styles.ramadanText}>RAMAZON MUBORAK</span>
          </div>
          <div style={styles.bannerCenter}>
            <div style={styles.timeBlock}><Clock size={14} color={theme.goldDark} /><span style={styles.label}>SAHARLIK (YOPISH):</span><span style={styles.time}>05:12</span></div>
            <div style={styles.vLine}></div>
            <div style={styles.timeBlock}><Star size={14} color={theme.goldDark} fill={theme.goldDark} /><span style={styles.label}>IFTORLIK (OCHISH):</span><span style={styles.time}>18:45</span></div>
          </div>
          <div style={styles.bannerRight}>
            <div style={styles.badge3d}><Sparkles size={12} /><span>IFTORLIK SETLARIGA BUYURTMA OLISH BOSHLANDI</span></div>
          </div>
        </div>
      </header>

      {/* 2. NAVIGATION BAR */}
      <nav style={{...styles.navbar, filter: isMenuOpen ? 'blur(10px)' : 'none', transition: '0.6s'}}>
        <div style={styles.logoArea}>
          <Crown size={32} color={theme.goldDark} />
          <h1 style={styles.logoText}>{displayText}<span className="type-cursor"></span><span style={{color: theme.goldDark}}>.</span></h1>
        </div>
        <div style={styles.menuLinks}>
          {['Menyu', 'Rezervatsiya', 'Galereya', 'Tadbirlar'].map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} style={styles.navLink}>{item.toUpperCase()}</a>
          ))}
          <button style={styles.contactBtn} className="btn-hover-effect">ALOQA</button>
        </div>
      </nav>

      {/* 3. MAIN HERO SECTION */}
      <main style={styles.heroSection}>
        {/* LEFT SIDE: TEXTUAL CONTENT */}
        <div style={{
          ...styles.heroContent, 
          filter: isMenuOpen ? 'blur(5px)' : 'none',
          transform: isMenuOpen ? 'scale(0.9) translateX(-50px)' : 'scale(1) translateX(0)',
          opacity: isMenuOpen ? 0.3 : 1,
          transition: '0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={styles.preTitle}><div style={styles.goldLine}></div><span style={styles.preTitleText}>SINCE 2018 • THE PEAK OF TASTE</span></div>
          <h2 style={styles.mainHeading}>Mukammal <br /><span style={{fontStyle: 'italic', fontWeight: '400', color: theme.goldDark}}>Lazzat</span> <br />Arxitekturasi</h2>
          <p style={styles.heroSubText}>Luxor — Toshkentning qoq markazida joylashgan, premium servis va yuqori gastronomik san'atni o'zida mujassam etgan maskan.</p>
          <div style={styles.ctaGroup}>
            <button style={styles.primaryBtn} className="btn-hover-effect">STOL BAND QILISH <MoveUpRight size={20} /></button>
            <div style={styles.trustGroup}>
              <div style={styles.avatars}>
                {[1,2,3].map(i => <div key={i} style={{...styles.avatar, left: (i-1)*15, backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`}}></div>)}
              </div>
              <div style={styles.trustText}>
                <div style={{display: 'flex', gap: '2px'}}>{[1,2,3,4,5].map(i => <Star key={i} size={10} fill={theme.goldDark} color={theme.goldDark} />)}</div>
                <span style={{fontSize: '11px', opacity: 0.6}}>2,500+ Mehmonlar tanlovi</span>
              </div>
            </div>
          </div>
          <div style={styles.featuresRow}>
            <div style={styles.featItem}><ShieldCheck size={20} color={theme.goldDark} /><span>100% Halol</span></div>
            <div style={styles.featItem}><Coffee size={20} color={theme.goldDark} /><span>Premium Coffee</span></div>
            <div style={styles.featItem}><Trophy size={20} color={theme.goldDark} /><span>Best Service 2023</span></div>
          </div>
        </div>

        {/* RIGHT SIDE: 3D COMPOSITIONS */}
        <div style={styles.heroVisual}>
          <div style={styles.visualStack}>
            {/* Fon elementlari menyu ochilganda xiralashadi */}
            <div style={{width:'100%', height:'100%', transition:'0.6s', filter: isMenuOpen ? 'blur(15px)' : 'none', opacity: isMenuOpen ? 0.2 : 1}}>
                <div style={styles.patternBg}></div>
                <div style={styles.mainInfoCard} className="glass-card floating-element">
                <div style={styles.cardTop}><UtensilsCrossed size={35} color={theme.goldDark} strokeWidth={1} /><Heart size={20} color="#E74C3C" fill="#E74C3C" /></div>
                <h3 style={styles.cardHeader}>Mualliflik <br/> Oshxonasi</h3>
                <p style={styles.cardDesc}>Har bir ingredient tabiatning eng sara in'omlaridan tanlab olingan.</p>
                </div>
                <div style={styles.roundBadge} className="floating-element"><span style={{fontSize: '24px', fontWeight: '800'}}>5.0</span><span style={{fontSize: '9px', letterSpacing: '2px'}}>GOOGLE REVIEWS</span></div>
            </div>

            {/* --- MAXSUS MENYU KARTASI (ZOOM EFFEKTI BILAN) --- */}
            <div 
              onClick={() => !isMenuOpen && setIsMenuOpen(true)}
              className={!isMenuOpen ? "glass-card" : ""}
              style={{
                ...styles.iftorCard,
                ...(isMenuOpen ? styles.iftorCardActive : {})
              }}
            >
              {isMenuOpen ? (
                <div style={styles.menuModalContent}>
                   <button onClick={(e) => {e.stopPropagation(); setIsMenuOpen(false);}} style={styles.closeBtn}><X /></button>
                   <div style={styles.modalLeft}>
                      {menuImages.map((img, i) => (
                        <img key={i} src={img} className="carousel-img" style={{opacity: currentImg === i ? 1 : 0, transform: currentImg === i ? 'scale(1)' : 'scale(1.1)'}} />
                      ))}
                      <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, #5A3C0B, transparent)'}}></div>
                   </div>
                   <div style={styles.modalRight}>
                      <h2 style={{fontFamily:"'Playfair Display'", fontSize:'45px', color:theme.cream}}>Iftorlik <br/> To'plami</h2>
                      <p style={{marginTop:'20px', opacity:0.8, color:theme.cream, lineHeight:'1.6'}}>Besh bosqichli maxsus taomlar, Luxor sharbatlari va desert.</p>
                      <div style={{fontSize:'32px', fontWeight:'800', color:theme.goldLight, margin:'30px 0'}}>185,000 UZS</div>
                      <button style={{background:theme.goldDark, border:'none', padding:'18px', color:'white', fontWeight:'800', borderRadius:'8px', cursor:'pointer'}}>BUYURTMA BERISH</button>
                   </div>
                </div>
              ) : (
                <>
                  <div style={styles.iftorIcon}><GlassWater size={24} color={theme.cream} /></div>
                  <div>
                    <span style={{fontSize: '10px', opacity: 0.6, display: 'block'}}>IFTORLIK 2024</span>
                    <span style={{fontSize: '15px', fontWeight: '700'}}>MAXSUS MENYU</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* SCROLL DOWN INDICATOR */}
      <div style={{...styles.scrollDownArea, opacity: isMenuOpen ? 0 : 1}}>
        <div className="scroll-indicator"></div>
        <span style={styles.scrollText}>PASTGA SURING</span>
      </div>
    </div>
  );
};

const styles = {
  // Avvalgi barcha stillar saqlangan...
  mainWrapper: { fontFamily: "'Outfit', sans-serif", minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden' },
  topBanner: { width: '100%', height: '60px', backgroundColor: '#EBC176', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  bannerContainer: { width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  bannerLeft: { display: 'flex', alignItems: 'center', gap: '12px' },
  ramadanText: { fontWeight: '800', fontSize: '13px', letterSpacing: '3px', color: '#5A3C0B' },
  bannerCenter: { display: 'flex', alignItems: 'center', gap: '40px' },
  timeBlock: { display: 'flex', alignItems: 'center', gap: '10px' },
  label: { fontSize: '10px', fontWeight: '400', opacity: 0.8 },
  time: { fontSize: '18px', fontWeight: '800' },
  vLine: { width: '1px', height: '25px', backgroundColor: 'rgba(90, 60, 11, 0.15)' },
  bannerRight: { display: 'flex' },
  badge3d: { backgroundColor: '#5A3C0B', color: '#FFF5E1', padding: '8px 18px', borderRadius: '40px', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' },
  navbar: { padding: '30px 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logoArea: { display: 'flex', alignItems: 'center', gap: '15px', minWidth: '220px' },
  logoText: { fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: '700' },
  menuLinks: { display: 'flex', alignItems: 'center', gap: '45px' },
  navLink: { textDecoration: 'none', color: '#5A3C0B', fontSize: '11px', fontWeight: '600', letterSpacing: '2px' },
  contactBtn: { backgroundColor: '#5A3C0B', color: '#FFF5E1', border: 'none', padding: '12px 30px', borderRadius: '4px', fontSize: '11px', fontWeight: '700' },
  heroSection: { display: 'flex', padding: '40px 8% 100px', alignItems: 'center', minHeight: '85vh' },
  heroContent: { flex: 1.2, zIndex: 2 },
  preTitle: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' },
  goldLine: { width: '50px', height: '2px', backgroundColor: '#C48B28' },
  preTitleText: { fontSize: '12px', fontWeight: '700', letterSpacing: '4px', color: '#C48B28' },
  mainHeading: { fontFamily: "'Playfair Display', serif", fontSize: '95px', lineHeight: '1', marginBottom: '35px' },
  heroSubText: { fontSize: '18px', lineHeight: '1.8', opacity: 0.7, maxWidth: '550px', marginBottom: '50px' },
  ctaGroup: { display: 'flex', alignItems: 'center', gap: '50px', marginBottom: '60px' },
  primaryBtn: { backgroundColor: '#5A3C0B', color: '#FFF5E1', border: 'none', padding: '24px 45px', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', display: 'flex', alignItems: 'center', gap: '20px' },
  trustGroup: { display: 'flex', alignItems: 'center', gap: '15px' },
  avatars: { position: 'relative', width: '70px', height: '35px' },
  avatar: { position: 'absolute', width: '35px', height: '35px', borderRadius: '50%', border: '2px solid #FFF5E1', backgroundSize: 'cover' },
  featuresRow: { display: 'flex', gap: '35px' },
  featItem: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: '600' },
  heroVisual: { flex: 1, display: 'flex', justifyContent: 'flex-end', position: 'relative' },
  visualStack: { position: 'relative', width: '520px', height: '550px' },
  patternBg: { position: 'absolute', top: '15%', right: '5%', width: '380px', height: '450px', border: '1px solid #EBC176', borderRadius: '30px' },
  mainInfoCard: { position: 'absolute', top: '25%', left: '5%', width: '330px', padding: '45px', borderRadius: '30px', zIndex: 5, display: 'flex', flexDirection: 'column', gap: '25px' },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  cardHeader: { fontFamily: "'Playfair Display', serif", fontSize: '34px' },
  cardDesc: { fontSize: '14px', lineHeight: '1.7', opacity: 0.7 },
  roundBadge: { position: 'absolute', top: '10%', left: '25%', width: '110px', height: '110px', borderRadius: '50%', backgroundColor: '#EBC176', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 7 },
  
  // --- MODAL UCHUN STILLAR ---
  iftorCard: { position: 'absolute', bottom: '12%', right: '0', width: '240px', padding: '22px', borderRadius: '20px', zIndex: 100, display: 'flex', alignItems: 'center', gap: '18px', cursor: 'pointer' },
  iftorCardActive: { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '850px', height: '500px', background: '#5A3C0B', padding: 0, borderRadius: '30px', cursor: 'default' },
  iftorIcon: { width: '50px', height: '50px', backgroundColor: '#5A3C0B', borderRadius: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  menuModalContent: { display: 'flex', width: '100%', height: '100%', position: 'relative', overflow: 'hidden' },
  modalLeft: { flex: 1.2, position: 'relative', overflow: 'hidden' },
  modalRight: { flex: 1, padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  closeBtn: { position: 'absolute', top: '20px', right: '20px', zIndex: 10, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', color: 'white', cursor: 'pointer' },
  scrollDownArea: { position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' },
  scrollText: { fontSize: '10px', letterSpacing: '4px', opacity: 0.5, fontWeight: '600' }
};

export default InfoPage;