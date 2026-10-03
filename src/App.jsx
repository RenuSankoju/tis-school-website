import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('light');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className={theme==='dark'?'bg-[#0a0a0a] text-white min-h-screen':'bg-[#fdfcfb] text-[#0a0a0a] min-h-screen transition-colors duration-500'}>
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-purple-600 z-[9999] origin-left" style={{ scaleX }} />
      <motion.div className="fixed w-8 h-8 border border-black dark:border-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference" animate={{ x: pos.x - 16, y: pos.y - 16 }} transition={{ type: "spring", damping: 25, stiffness: 500 }} />

      <nav className="flex justify-between items-center px-8 py-5 fixed w-full backdrop-blur-xl bg-white/60 dark:bg-black/60 z-50 border-b border-black/5">
        <h1 className="text-xl font-black tracking-tighter">TIS. <span className="font-light opacity-60">Dehradun</span></h1>
        <div className="hidden md:flex gap-8 items-center text-[13px] font-semibold tracking-widest uppercase">
          <span className="cursor-pointer hover:text-blue-600">About</span>
          <span className="cursor-pointer hover:text-blue-600">Academics</span>
          <span className="cursor-pointer hover:text-blue-600">Boarding</span>
          <span className="cursor-pointer hover:text-blue-600">Admissions</span>
          <button onClick={() => setTheme(theme==='light'?'dark':'light')} className="px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full normal-case tracking-normal">
            {theme==='light'?'Dark':'Light'} Mode
          </button>
        </div>
      </nav>

      <section className="h-[95vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_center,_blue,_transparent_60%)]" />
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-xs tracking-[0.3em] uppercase mb-6 opacity-60">No.1 Co-Ed Boarding School in Dehradun • Est. 2012</motion.p>
        <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: "easeOut" }} className="text-[14vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter">
          TULAS<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">INTERNATIONAL</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 text-lg md:text-xl max-w-2xl opacity-60 leading-relaxed">
          Where Himalayas Meet World-Class Education. 22 Acre Campus, International Curriculum, Future Leaders.
        </motion.p>
        <div className="flex gap-4 mt-10">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold shadow-xl">Explore Campus</motion.button>
          <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-4 border border-black/20 rounded-full font-bold">Virtual Tour</motion.button>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-4 p-4 md:p-8">
        <div className="md:col-span-2 rounded-[2rem] overflow-hidden h-[400px] relative group">
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl"><p className="font-bold">22 Acre Green Campus</p><p className="text-xs opacity-60">At the foothills of Himalayas</p></div>
        </div>
        <div className="bg-blue-600 text-white rounded-[2rem] p-8 flex flex-col justify-between">
          <h3 className="text-5xl font-black">100%</h3><p className="mt-2">Board Results 2024<br/>Top University Placements</p>
          <div className="mt-10 text-3xl">→</div>
        </div>
        <div className="bg-[#111] text-white dark:bg-zinc-900 rounded-[2rem] p-8 flex flex-col justify-between">
          <h3 className="text-5xl font-black">40+</h3><p className="mt-2">Nationalities<br/>Global Diversity</p>
          <div className="mt-10 text-3xl">→</div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-20">
        <h2 className="text-5xl font-black tracking-tighter">WHY TIS?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {t:"Elite Boarding", d:"5-star hostel, AC rooms, personal mentor, organic food, laundry & 24/7 medical."},
            {t:"Academic Excellence", d:"CBSE + Cambridge, Robotics, AI Lab, Leadership Program, IIT-JEE/NEET integration."},
            {t:"Sports Arena", d:"Olympic Pool, Horse Riding, Shooting Range, Football, Tennis, Basketball courts."}
          ].map((c,i)=>(
            <motion.div key={i} whileHover={{ y: -10 }} className="p-10 rounded-[2rem] border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
              <h3 className="text-xl font-bold">{c.t}</h3><p className="mt-4 opacity-60 leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20 px-8 text-center rounded-t-[3rem]">
        <h2 className="text-4xl md:text-6xl font-black">Ready to Join TIS Family?</h2>
        <p className="mt-4 opacity-60">Admissions Open for 2025-26 | Scholarships Available</p>
        <button className="mt-8 px-12 py-4 bg-white text-black rounded-full font-bold">Apply Now</button>
        <p className="mt-12 opacity-30 text-xs tracking-widest">© 2025 Tulas International School, Dehradun - Redesigned with React + Framer Motion</p>
      </section>
    </div>
  );
}