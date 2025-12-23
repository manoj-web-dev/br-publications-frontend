import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/BR_logo.png';
import Search from '../common/search';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="bg-[#1e5292] text-white relative z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1316px] mx-auto px-[18px] py-[clamp(0.47rem,0.94vw+0.18rem,0.94rem)] flex items-center justify-between gap-[10px]">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-[clamp(9px,1.4vw,18px)] min-w-0 no-underline text-white">
            <img
              src={logo}
              alt="BR Publications Logo"
              className="w-[clamp(30px,4.7vw+5px,61px)] h-[clamp(30px,4.7vw+5px,61px)] rounded-full shrink-0 object-cover"
            />
            <div className="flex flex-col">
              <h1 className="text-[clamp(14px,2vw+5px,30px)] font-bold whitespace-nowrap m-0">
                BR Publications
              </h1>
              <p className="text-[clamp(6.5px,0.65vw+3.7px,11.2px)] text-[rgba(255,255,255,0.9)] bg-[rgba(255,255,255,0.15)] px-[6px] py-[2px] rounded-[3px] inline-block uppercase w-fit">
                Registered under Ministry of SME, Government of India
              </p>
            </div>
          </a>

          {/* Right Section */}
          <nav className="flex items-center gap-[10px]">
            {/* Nav Links (Desktop > 768px) & Mobile Dropdown (<= 370px) */}
            <div
              ref={menuRef}
              className={`
                gap-[10px]
                ${/* Desktop: Visible > 768px */ 'hidden min-[769px]:flex'}
                ${/* Mobile Dropdown: Visible <= 370px if open */ isMenuOpen ? 'max-[370px]:flex max-[370px]:flex-col max-[370px]:absolute max-[370px]:top-full max-[370px]:left-0 max-[370px]:right-0 max-[370px]:bg-[#1e4470] max-[370px]:py-[10px] max-[370px]:border-t max-[370px]:border-[rgba(255,255,255,0.1)] max-[370px]:shadow-[0_4px_10px_rgba(0,0,0,0.2)]' : 'max-[370px]:hidden'}
              `}
            >
              <button onClick={() => setIsSearchOpen(true)} className="bg-transparent border-none cursor-pointer text-white text-[clamp(13px,0.9vw+5px,17px)] font-semibold px-[10px] py-[6px] whitespace-nowrap no-underline max-[370px]:w-full max-[370px]:px-[20px] max-[370px]:py-[12px] max-[370px]:border-b max-[370px]:border-[rgba(255,255,255,0.05)] hover:text-gray-200 text-left">Search</button>
              <a href="/login" className="text-white text-[clamp(13px,0.9vw+5px,17px)] font-semibold px-[10px] py-[6px] whitespace-nowrap no-underline max-[370px]:w-full max-[370px]:px-[20px] max-[370px]:py-[12px] max-[370px]:border-b max-[370px]:border-[rgba(255,255,255,0.05)] hover:text-gray-200">Register / Login</a>
            </div>

            {/* Mobile Icons (371px - 768px) */}
            <div className="hidden min-[371px]:max-[768px]:flex gap-[8px]">
              <button onClick={() => setIsSearchOpen(true)} className="bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.3)] rounded-[6px] w-[34px] h-[34px] flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="Search" className="w-[16px] h-[16px] brightness-0 invert" />
              </button>
              <button className="bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.3)] rounded-[6px] w-[34px] h-[34px] flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Login" className="w-[16px] h-[16px] brightness-0 invert" />
              </button>
            </div>

            {/* Hamburger (< 370px) */}
            <button
              ref={btnRef}
              className="hidden max-[370px]:flex flex-col gap-[4px] p-[5px] bg-transparent border-none cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="w-[22px] h-[2px] bg-white rounded-[2px] transition-all duration-300"></span>
              <span className="w-[22px] h-[2px] bg-white rounded-[2px] transition-all duration-300"></span>
              <span className="w-[22px] h-[2px] bg-white rounded-[2px] transition-all duration-300"></span>
            </button>
          </nav>
        </div>
      </header>
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}