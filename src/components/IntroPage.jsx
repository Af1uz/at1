import React, { useState, useEffect } from 'react';
import { 
  Utensils, Coffee, IceCream, Beef, Fish, 
  Star, Percent, Flame, Clock, Heart, 
  ChevronRight, ArrowRight, ShoppingBag, 
  Award, Zap, Sparkles, ChefHat, ChevronLeft,
  Drumstick, Pizza, Leaf, Soup, Wine
} from 'lucide-react';

const IntroPage = () => {
  const [activeCategory, setActiveCategory] = useState('main');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const theme = {
    cream: '#FFF5E1',
    gold: '#C48B28',
    goldLight: '#EBC176',
    deepBrown: '#5A3C0B',
    softBlack: '#1A1A1A',
    accentRed: '#E74C3C'
  };

  // --- MENU DATA (Kengaytirilgan variant) ---
  const menuData = {
    main: [
      { id: 1, name: "Lamb Chops 'Luxor'", desc: "Yosh qo'zi go'shti, maxsus ziravorlar va anor sousi bilan", price: "185,000", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600", tag: "Best Seller", rating: 5, cal: 520 },
      { id: 2, name: "Royal Beef Wellington", desc: "Seryumshak mol go'shti, qo'ziqorinli duxsel va qatlamli xamir", price: "240,000", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600", tag: "Signature", rating: 5, cal: 780 },
      { id: 3, name: "Duck Confit", desc: "Fransuzcha uslubda pishirilgan o'rdak oyog'i, malina sousi bilan", price: "165,000", img: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=600", tag: "Classic", rating: 4, cal: 450 },
      { id: 4, name: "Saffron Risotto", desc: "Eron za'faroni bilan tayyorlangan italiyan guruchi", price: "120,000", img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=600", tag: "Vegetarian", rating: 5, cal: 320 },
      { id: 5, name: "Osso Buco", desc: "Sekin pishirilgan buzoq go'shti, sabzavotli ragu bilan", price: "195,000", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600", tag: "Premium", rating: 5, cal: 610 },
      { id: 6, name: "Chicken Roulade", desc: "Ismaloq va pishloq bilan to'ldirilgan tovuq filesi", price: "95,000", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600", tag: "Light", rating: 4, cal: 380 },
      { id: 61, name: "Turkish Adana Kebab", desc: "Achchiq qalampir va maxsus ziravorlar bilan qo'y go'shti", price: "115,000", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600", tag: "Spicy", rating: 5, cal: 550 },
      { id: 62, name: "Veal Medallions", desc: "Qo'ziqorinli qaymoq sousida pishirilgan buzoq go'shti", price: "175,000", img: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600", tag: "New", rating: 5, cal: 490 }
    ],
    steaks: [
      { id: 7, name: "Ribeye Gold Edition", desc: "45 kun quritilgan (Dry-aged) mol go'shti", price: "350,000", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600", tag: "Dry-Aged", rating: 5, cal: 850 },
      { id: 8, name: "Filet Mignon", desc: "Eng yumshoq qism, sariyog' va sarimsoq bilan", price: "290,000", img: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=600", tag: "Popular", rating: 5, cal: 520 },
      { id: 9, name: "T-Bone Giant", desc: "800 grammlik ulkan steyk, erkaklar tanlovi", price: "420,000", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600", tag: "Heavy", rating: 5, cal: 1200 },
      { id: 10, name: "Tomahawk Steak", desc: "Oltin changi bilan bezatilgan maxsus steyk", price: "850,000", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600", tag: "Luxury", rating: 5, cal: 1100 },
      { id: 101, name: "New York Strip", desc: "Klassik mramor go'shtidan tayyorlangan steyk", price: "310,000", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600", tag: "Classic", rating: 4, cal: 720 }
    ],
    seafood: [
      { id: 11, name: "Grilled Lobster", desc: "Atlantika omari, limonli sariyog' sousida", price: "550,000", img: "https://images.unsplash.com/photo-1559740038-04677705e044?q=80&w=600", tag: "Fresh", rating: 5, cal: 400 },
      { id: 12, name: "Salmon Steak", desc: "Norvegiya losos balig'i, parmezanli ismaloq bilan", price: "180,000", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600", tag: "Healthy", rating: 5, cal: 350 },
      { id: 13, name: "Black Tiger Prawns", desc: "Grilda pishirilgan ulkan krevetkalar", price: "210,000", img: "https://images.unsplash.com/photo-1559740038-04677705e044?q=80&w=600", tag: "Exotic", rating: 5, cal: 280 },
      { id: 131, name: "Sea Bass Royale", desc: "Pechda pishirilgan dengiz balig'i, o'tlar bilan", price: "195,000", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600", tag: "Light", rating: 5, cal: 310 }
    ]
  };

  const desserts = [
    { id: 14, name: "Gold Pistachio Baklava", price: "85,000", img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=600", note: "Turkish Style" },
    { id: 15, name: "Tiramisu Luxury", price: "65,000", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600", note: "Italian Origin" },
    { id: 16, name: "Chocolate Fondant", price: "55,000", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600", note: "Molten Heart" },
    { id: 17, name: "Honey Cheesecake", price: "60,000", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600", note: "Creamy Bliss" },
    { id: 18, name: "Macarons Box", price: "45,000", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600", note: "French Delight" }
  ];

  const categories = [
    { id: 'main', name: 'ASOSIY TAOMLAR', icon: <Utensils size={18}/> },
    { id: 'steaks', name: 'STEYKLAR', icon: <Beef size={18}/> },
    { id: 'seafood', name: 'DENIZ MAHSULOTLARI', icon: <Fish size={18}/> }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % desserts.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + desserts.length) % desserts.length);

  return (
    <div style={{...styles.container, backgroundColor: theme.cream}}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,500&family=Outfit:wght@200;300;400;600;800&display=swap');
          
          .menu-card { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
          .menu-card:hover { transform: translateY(-15px); }
          .menu-card:hover .food-img { transform: scale(1.1); }
          
          .category-btn { transition: 0.3s; position: relative; border: none; background: none; cursor: pointer; }
          .category-btn.active { color: ${theme.gold} !important; }
          .category-btn::after {
            content: ''; position: absolute; bottom: -5px; left: 50%; width: 0; height: 2px;
            background: ${theme.gold}; transition: 0.3s; transform: translateX(-50%);
          }
          .category-btn.active::after { width: 80%; }
          
          .carousel-container { position: relative; width: 100%; overflow: hidden; padding: 50px 0; }
          .carousel-track { display: flex; transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1); gap: 30px; }
          .carousel-item { min-width: 350px; height: 450px; border-radius: 30px; position: relative; overflow: hidden; filter: grayscale(40%); transition: 0.5s; }
          .carousel-item.active { filter: grayscale(0%); transform: scale(1.05); box-shadow: 0 30px 60px rgba(90, 60, 11, 0.2); }

          .animate-up { animation: fadeInUp 0.8s ease forwards; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        `}
      </style>

      {/* --- HEADER --- */}
      <section style={styles.header}>
        <div style={styles.badge} className="animate-up">
          <ChefHat size={18} color={theme.gold} />
          <span>LUXURIOUS EXPERIENCE</span>
        </div>
        <h1 style={styles.title} className="animate-up">San'at <span style={{fontStyle: 'italic', color: theme.gold}}>Darajasidagi</span> Menyu</h1>
        <div style={styles.offersRow} className="animate-up">
           <div style={styles.offerItem}><Percent size={18}/> Iftorlik uchun 15% chegirma</div>
           <div style={styles.vLine}></div>
           <div style={styles.offerItem}><Star size={18}/> Chef's Selection 2024</div>
        </div>
      </section>

      {/* --- FILTERS --- */}
      <div style={styles.filterBar}>
        {categories.map((cat) => (
          <button 
            key={cat.id} 
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            style={{...styles.catBtn, color: theme.deepBrown}}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* --- MAIN GRID --- */}
      <div style={styles.grid}>
        {menuData[activeCategory].map((food, i) => (
          <div key={food.id} className="menu-card animate-up" style={{animationDelay: `${i * 0.1}s`}}>
            <div style={styles.cardInner}>
              <div style={styles.imageBox}>
                <img src={food.img} style={styles.foodImg} className="food-img" alt={food.name} />
                <div style={styles.priceTag}>{food.price} UZS</div>
              </div>
              <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.foodName}>{food.name}</h3>
                  <div style={styles.rating}><Star size={12} fill={theme.gold} color={theme.gold}/> {food.rating}.0</div>
                </div>
                <p style={styles.foodDesc}>{food.desc}</p>
                <div style={styles.cardFooter}>
                  <span><Flame size={14}/> {food.cal} kcal</span>
                  <button style={styles.addBtn}><ShoppingBag size={16}/> QO'SHISH</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- DESERT CAROUSEL SECTION --- */}
      <section style={styles.desertSection}>
        <div style={styles.sectionHeading}>
          <div style={styles.goldLine}></div>
          <h2 style={styles.sectionTitle}>Shirin <span style={{color: theme.gold}}>Lazzatlar</span></h2>
          <div style={styles.carouselNav}>
            <button onClick={prevSlide} style={styles.navBtn}><ChevronLeft/></button>
            <button onClick={nextSlide} style={styles.navBtn}><ChevronRight/></button>
          </div>
        </div>

        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 380}px)` }}>
            {desserts.map((ds, idx) => (
              <div key={ds.id} className={`carousel-item ${currentSlide === idx ? 'active' : ''}`}>
                <img src={ds.img} style={styles.desertImg} alt={ds.name} />
                <div style={styles.desertOverlay}>
                  <span style={styles.desertNote}>{ds.note}</span>
                  <h4 style={styles.desertName}>{ds.name}</h4>
                  <div style={styles.desertPrice}>{ds.price} UZS</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHEF SPECIAL INTERACTIVE BLOCK --- */}
      <div style={styles.specialBanner}>
         <div style={styles.bannerText}>
            <Sparkles color={theme.gold}/>
            <h3>Bugun kunda nima yeymiz?</h3>
            <p>Bosh oshpazimizdan bugungi maxsus tavsiya: <strong>Royal Beef Wellington</strong></p>
         </div>
         <button style={styles.bannerBtn}>RESERV QILISH</button>
      </div>
    </div>
  );
};

// --- STYLES OBJECT ---
const styles = {
  container: { padding: '80px 8%', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" },
  header: { textAlign: 'center', marginBottom: '80px' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(196, 139, 40, 0.1)', padding: '10px 25px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', color: '#5A3C0B', marginBottom: '25px' },
  title: { fontFamily: "'Playfair Display', serif", fontSize: '64px', color: '#1A1A1A', marginBottom: '25px' },
  offersRow: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', opacity: 0.7, fontWeight: '600', fontSize: '14px' },
  vLine: { width: '1px', height: '20px', backgroundColor: '#5A3C0B', opacity: 0.2 },
  filterBar: { display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '80px', borderBottom: '1px solid rgba(90, 60, 11, 0.1)', paddingBottom: '20px' },
  catBtn: { display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px', marginBottom: '120px' },
  cardInner: { backgroundColor: 'white', borderRadius: '35px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' },
  imageBox: { height: '260px', position: 'relative', overflow: 'hidden' },
  foodImg: { width: '100%', height: '100%', objectFit: 'cover', transition: '0.8s' },
  priceTag: { position: 'absolute', top: '20px', right: '20px', backgroundColor: '#5A3C0B', color: 'white', padding: '8px 18px', borderRadius: '15px', fontWeight: '700', fontSize: '14px' },
  cardContent: { padding: '30px' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' },
  foodName: { fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '700' },
  rating: { backgroundColor: 'rgba(196, 139, 40, 0.1)', padding: '4px 10px', borderRadius: '10px', fontSize: '12px', fontWeight: '800', color: '#C48B28' },
  foodDesc: { fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '25px', height: '44px', overflow: 'hidden' },
  cardFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f5f5f5', paddingTop: '20px' },
  addBtn: { backgroundColor: 'transparent', border: '1.5px solid #5A3C0B', color: '#5A3C0B', padding: '8px 15px', borderRadius: '12px', fontSize: '11px', fontWeight: '800', cursor: 'pointer', transition: '0.3s' },
  
  // DESERT CAROUSEL
  desertSection: { marginBottom: '120px' },
  sectionHeading: { display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '50px' },
  goldLine: { width: '80px', height: '3px', backgroundColor: '#C48B28' },
  sectionTitle: { fontFamily: "'Playfair Display', serif", fontSize: '42px', flex: 1 },
  carouselNav: { display: 'flex', gap: '15px' },
  navBtn: { width: '50px', height: '50px', borderRadius: '50%', border: '1px solid #5A3C0B', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' },
  desertImg: { width: '100%', height: '100%', objectFit: 'cover' },
  desertOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(90, 60, 11, 0.9), transparent)', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: 'white' },
  desertNote: { fontSize: '10px', letterSpacing: '3px', color: '#EBC176', marginBottom: '10px' },
  desertName: { fontFamily: "'Playfair Display', serif", fontSize: '28px', marginBottom: '10px' },
  desertPrice: { fontSize: '18px', fontWeight: '300', opacity: 0.8 },

  // SPECIAL BANNER
  specialBanner: { backgroundColor: '#1A1A1A', borderRadius: '30px', padding: '40px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' },
  bannerText: { display: 'flex', alignItems: 'center', gap: '25px' },
  bannerBtn: { backgroundColor: '#C48B28', color: 'white', border: 'none', padding: '15px 35px', borderRadius: '15px', fontWeight: '700', cursor: 'pointer' }
};

export default IntroPage;