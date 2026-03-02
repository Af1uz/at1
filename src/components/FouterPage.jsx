import React, { useState } from 'react';
import { 
  Instagram, Facebook, Twitter, Mail, Phone, 
  MapPin, Clock, Send, ShieldCheck, Award, 
  Star, Heart, ChevronRight, Linkedin, Youtube,
  UserCheck, ChefHat, Briefcase, Camera, Sparkles,
  Users, GlassWater, Utensils, ArrowUpRight, Globe
} from 'lucide-react';

const FouterPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const theme = {
    cream: '#FFF5E1',
    gold: '#C48B28',
    goldLight: '#EBC176',
    deepBrown: '#5A3C0B',
    softBlack: '#1A1A1A',
  };

  // --- 1. TOP MENEJMENT (5 TA ASOSIY RAHBAR) ---
  const management = [
    { id: 1, role: "FOUNDER & CEO", name: "Iskandar Mansurov", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400", bio: "Luxor brendi asoschisi va strategik rivojlantirish rahbari." },
    { 
      id: 2, 
      role: "EXECUTIVE CHEF", 
      name: "Alexander Volkov", 
      img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=400", 
      bio: "Yevropa va Osiyo taomlari uyg'unligi bo'yicha dunyo tan olgan mahorat ustasi." 
    },
    { id: 3, role: "GENERAL MANAGER", name: "Sabina Rahmonova", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400", bio: "Xalqaro servis standartlari va operatsion boshqaruv mutaxassisi." },
    { id: 4, role: "FINANCIAL DIRECTOR", name: "Rustam G'ofurov", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400", bio: "Restoran tarmog'ining moliya va investitsiya masalalari bo'yicha mas'ul." },
    { id: 5, role: "MARKETING HEAD", name: "Dilnoza Olimova", img: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?q=80&w=400", bio: "Brend imidji va kreativ loyihalar bo'yicha yetakchi mutaxassis." }
  ];

  // --- 2. PREMIUM SERVIS (5 TA ASOSIY XIZMATCHI) ---
  const serviceTeam = [
    { id: 6, role: "HEAD SOMMELIER", name: "Javohir Ergashev", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400", bio: "Noyob ichimliklar kolleksiyasi va ta'mlar uyg'unligi ustasi." },
    { id: 7, role: "CHIEF HOSTESS", name: "Kamola Azizova", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400", bio: "Mehmonlarni oliy darajada kutib olish va joylashtirish koordinatori." },
    { id: 8, role: "VIP CAPTAIN", name: "Diyorbek Sodiqov", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400", bio: "Alohida mehmonlar uchun eksklyuziv xizmat ko'rsatish bo'yicha mas'ul." },
    { id: 9, role: "PASTRY ARTIST", name: "Malika Shokirova", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400", bio: "Mualliflik desertlari va shirinliklar arxitektori." },
    { id: 10, role: "SECURITY CHIEF", name: "Sardor Karimov", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400", bio: "Restoran hududidagi tinchlik va xavfsizlik kafolati." }
  ];

  return (
    <div style={{...styles.mainContainer, backgroundColor: theme.softBlack}}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,500&family=Outfit:wght@200;300;400;600;800&display=swap');
          
          .team-card { transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; position: relative; }
          .team-card:hover { transform: translateY(-15px); }
          .img-box { position: relative; overflow: hidden; border-radius: 25px; aspect-ratio: 3/4; background: #222; }
          .img-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s; }
          .team-card:hover img { transform: scale(1.1); filter: brightness(0.4); }
          
          .member-overlay {
            position: absolute; inset: 0; display: flex; flex-direction: column; 
            justify-content: flex-end; padding: 25px; opacity: 0; transition: 0.4s;
            background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          }
          .team-card:hover .member-overlay { opacity: 1; }

          .drip-footer {
            position: absolute; top: -1px; background: ${theme.cream};
            border-bottom-left-radius: 60px; border-bottom-right-radius: 60px;
            z-index: 5;
          }

          .footer-link { transition: 0.3s; color: rgba(255,245,225,0.6); text-decoration: none; display: flex; align-items: center; gap: 8px; font-size: 15px; }
          .footer-link:hover { color: ${theme.gold}; transform: translateX(8px); }

          .social-btn {
            width: 45px; height: 45px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1);
            display: flex; justify-content: center; align-items: center; transition: 0.4s; color: white;
            text-decoration: none;
          }
          .social-btn:hover { background: ${theme.gold}; border-color: ${theme.gold}; transform: rotate(360deg); }

          .map-frame { filter: invert(90%) grayscale(1); transition: 0.5s; border-radius: 35px; overflow: hidden; }
          .map-frame:hover { filter: invert(0%) grayscale(0); }
        `}
      </style>

      {/* --- DEKORATIV OQMALAR (TOP) --- */}
      <div className="drip-footer" style={{ width: '150px', height: '90px', left: '8%' }}></div>
      <div className="drip-footer" style={{ width: '220px', height: '140px', left: '40%' }}></div>
      <div className="drip-footer" style={{ width: '120px', height: '60px', right: '12%' }}></div>

      {/* --- SECTION 1: TOP MANAGEMENT --- */}
      <section style={styles.sectionPadding}>
        <div style={styles.centerHeader}>
          <div style={styles.miniLabel}><Briefcase size={14}/> RAHBARIYAT</div>
          <h2 style={styles.sectionTitle}>Luxor <span style={{color: theme.gold, fontStyle: 'italic'}}>Boshqaruvi</span></h2>
          <div style={styles.goldSeparator}></div>
        </div>

        <div style={styles.teamGrid}>
          {management.map((m) => (
            <div key={m.id} className="team-card">
              <div className="img-box">
                <img src={m.img} alt={m.name} />
                <div className="member-overlay">
                  <p style={styles.overlayBio}>{m.bio}</p>
                  <div style={styles.overlaySocial}>
                    <Linkedin size={18} /> <Instagram size={18} />
                  </div>
                </div>
              </div>
              <div style={styles.memberMeta}>
                <span style={styles.memberRole}>{m.role}</span>
                <h4 style={styles.memberName}>{m.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: SERVICE TEAM --- */}
      <section style={{...styles.sectionPadding, paddingTop: 0}}>
        <div style={styles.centerHeader}>
          <div style={styles.miniLabel}><Users size={14}/> PREMIUM SERVIS</div>
          <h2 style={styles.sectionTitle}>Sizning <span style={{color: theme.gold, fontStyle: 'italic'}}>Xodimlaringiz</span></h2>
        </div>

        <div style={styles.teamGrid}>
          {serviceTeam.map((s) => (
            <div key={s.id} className="team-card">
              <div className="img-box" style={{borderRadius: '100px 100px 20px 20px'}}>
                <img src={s.img} alt={s.name} />
                <div className="member-overlay">
                   <p style={styles.overlayBio}>{s.bio}</p>
                   <div style={styles.overlaySocial}><Instagram size={18} /></div>
                </div>
              </div>
              <div style={styles.memberMeta}>
                <span style={{...styles.memberRole, color: theme.goldLight}}>{s.role}</span>
                <h4 style={styles.memberName}>{s.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: ADDRESS & MAP & LINKS --- */}
      <footer style={styles.footerBase}>
        <div style={styles.mainFooterGrid}>
          {/* Col 1: Brand */}
          <div style={styles.footerCol}>
            <h1 style={styles.footerLogo}>LUXOR<span style={{color: theme.gold}}>.</span></h1>
            <p style={styles.footerDesc}>
              Toshkentning eng nufuzli restoranida oliyjanob muhit, mualliflik taomlari va beqiyos servis uyg'unligi.
            </p>
            <div style={styles.socialRow}>
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="social-btn"><Icon size={20} /></a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div style={styles.footerCol}>
            <h4 style={styles.colTitle}>SAHIFALAR</h4>
            <div style={styles.linksStack}>
              {['Bosh sahifa', 'Menyu', 'Rezervatsiya', 'Galereya', 'Yangiliklar', 'Vakansiya'].map(item => (
                <a key={item} href="#" className="footer-link"><ChevronRight size={14} color={theme.gold}/> {item}</a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact */}
          <div style={styles.footerCol}>
            <h4 style={styles.colTitle}>BOG'LANISH</h4>
            <div style={styles.contactItem}>
              <MapPin size={24} color={theme.gold} />
              <div>
                <p style={styles.contactMain}>Amir Temur ko'chasi, 108-uy</p>
                <p style={styles.contactSub}>Toshkent, Bodomzor metrosi</p>
              </div>
            </div>
            <div style={styles.contactItem}>
              <Phone size={24} color={theme.gold} />
              <div>
                <p style={styles.contactMain}>+998 (71) 200-00-00</p>
                <p style={styles.contactSub}>Rezervatsiya uchun</p>
              </div>
            </div>
            <div style={styles.contactItem}>
              <Clock size={24} color={theme.gold} />
              <div>
                <p style={styles.contactMain}>11:00 — 23:00</p>
                <p style={styles.contactSub}>Har kuni dam olmasdan</p>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div style={styles.footerCol}>
            <h4 style={styles.colTitle}>OBUNA BO'LING</h4>
            <p style={styles.footerDesc}>Yangi chegirmalar va Iftorlik setlari haqida birinchi bo'lib biling.</p>
            <div style={styles.subscribeBox}>
              <input style={styles.subInput} placeholder="Email manzilingiz..." />
              <button style={styles.subBtn}><Send size={18} /></button>
            </div>
            <div style={styles.badgeGroup}>
               <div style={styles.awardBadge}><Award size={14}/> Premium Service 2024</div>
            </div>
          </div>
        </div>

        {/* --- MAP INTEGRATION --- */}
        <div style={styles.mapWrapper}>
           <div className="map-frame">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.123456789!2d69.28123456789!3d41.33123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzUyLjQiTiA2OcKwMTYnNTIuNCJF!5e0!3m2!1suz!2s!4v1620000000000!5m2!1suz!2s" 
                width="100%" height="350" style={{border: 0}} allowFullScreen="" loading="lazy">
              </iframe>
           </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div style={styles.bottomBar}>
          <p>© 2024 LUXOR Restaurant. Barcha huquqlar himoyalangan.</p>
          <div style={styles.bottomLinks}>
            <a href="#" style={styles.bLink}>Xavfsizlik</a>
            <div style={styles.dot}></div>
            <a href="#" style={styles.bLink}>Foydalanish shartlari</a>
            <div style={styles.dot}></div>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}><Globe size={14}/> O'ZBEKISTON</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- STYLES OBJECT ---
const styles = {
  mainContainer: { color: '#FFF5E1', position: 'relative', overflow: 'hidden' },
  sectionPadding: { padding: '120px 8% 80px' },
  centerHeader: { textAlign: 'center', marginBottom: '70px' },
  miniLabel: { fontSize: '11px', fontWeight: '800', letterSpacing: '4px', color: '#C48B28', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' },
  sectionTitle: { fontFamily: "'Playfair Display', serif", fontSize: '52px', marginBottom: '20px' },
  goldSeparator: { width: '80px', height: '3px', backgroundColor: '#C48B28', margin: '0 auto' },
  teamGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px' },
  memberMeta: { textAlign: 'center', marginTop: '25px' },
  memberRole: { fontSize: '10px', fontWeight: '800', color: '#C48B28', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' },
  memberName: { fontFamily: "'Playfair Display', serif", fontSize: '22px' },
  overlayBio: { fontSize: '13px', lineHeight: '1.6', color: 'white', textAlign: 'center', marginBottom: '20px' },
  overlaySocial: { display: 'flex', gap: '15px', justifyContent: 'center', color: 'white' },
  
  footerBase: { backgroundColor: 'rgba(0,0,0,0.3)', padding: '100px 8% 40px', borderTop: '1px solid rgba(255,255,255,0.05)' },
  mainFooterGrid: { display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr 1.2fr', gap: '60px', marginBottom: '80px' },
  footerCol: { display: 'flex', flexDirection: 'column', gap: '30px' },
  footerLogo: { fontFamily: "'Playfair Display', serif", fontSize: '48px', fontWeight: '800' },
  footerDesc: { fontSize: '15px', opacity: 0.6, lineHeight: '1.8' },
  socialRow: { display: 'flex', gap: '15px' },
  colTitle: { fontSize: '14px', fontWeight: '800', letterSpacing: '3px', color: '#C48B28' },
  linksStack: { display: 'flex', flexDirection: 'column', gap: '18px' },
  contactItem: { display: 'flex', gap: '20px', alignItems: 'center' },
  contactMain: { fontSize: '16px', fontWeight: '600' },
  contactSub: { fontSize: '13px', opacity: 0.5 },
  subscribeBox: { display: 'flex', height: '55px' },
  subInput: { flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px 0 0 12px', padding: '0 20px', color: 'white', outline: 'none' },
  subBtn: { width: '60px', backgroundColor: '#C48B28', border: 'none', borderRadius: '0 12px 12px 0', color: 'white', cursor: 'pointer' },
  awardBadge: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 15px', backgroundColor: 'rgba(196,139,40,0.1)', borderRadius: '8px', fontSize: '11px', color: '#C48B28' },
  mapWrapper: { marginBottom: '80px', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '45px' },
  bottomBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', opacity: 0.4 },
  bottomLinks: { display: 'flex', alignItems: 'center', gap: '20px' },
  bLink: { color: 'white', textDecoration: 'none' },
  dot: { width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#C48B28' }
};

export default FouterPage;