// components/Header.tsx
import React, { useState } from "react";
import { NAV_LINKS } from "../constants";
import type { PageId } from "../types";
import { HiOutlineMenu, HiX } from "react-icons/hi";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = currentPage === "home";
  const isTransparent =
    isHome && !scrolled && !isMenuVisible && !isMobileMenuOpen;
  const isSolid = !isTransparent;

  const darkLogo =
    "https://i.postimg.cc/MpCPzjY4/hyuaenlobotigseu-kkamang-galo.png";
  const whiteLogo =
    "https://i.postimg.cc/t4QWTdLv/hyuaenlobotigseu-hayang-galo.png";

  const TOP_LINKS = NAV_LINKS.filter((l) => l.name !== "홈");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[9999]"
      onMouseLeave={() => setIsMenuVisible(false)}
    >
      {/* --- TOP NAV BAR --- */}
      <div
        className={`transition-all duration-500 ${
          isSolid ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">

          {/* 로고 */}
          <div className="absolute left-0">
            <button
              onClick={() => {
                onNavigate("home");
                setIsMobileMenuOpen(false);
              }}
            >
              <img
                src={isSolid ? darkLogo : whiteLogo}
                alt="logo"
                className="h-12 w-auto transition-all duration-500"
              />
            </button>
          </div>

          {/* --- 7열 네비게이션 (1열은 로고아래 빈칸) --- */}
          <nav
            className="hidden md:grid grid-cols-7 w-full gap-x-6 ml-[120px]"
            onMouseEnter={() => setIsMenuVisible(true)}
          >
            {/* 1열: 로고 아래 빈칸 */}
            <div></div>

            {/* 2~7 열: 실제 메뉴 */}
            {TOP_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onNavigate(link.pageId as PageId);
                  setIsMobileMenuOpen(false);
                  setIsMenuVisible(false);
                }}
                className={`text-[19px] font-semibold text-center transition-colors duration-300 ${
                  isSolid
                    ? "text-slate-800 hover:text-[#175689]"
                    : "text-white hover:text-slate-200"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className="absolute right-0 md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="text-3xl"
            >
              {isMobileMenuOpen ? (
                <HiX className={isSolid ? "text-slate-700" : "text-white"} />
              ) : (
                <HiOutlineMenu
                  className={isSolid ? "text-slate-700" : "text-white"}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MEGA MENU --- */}
      <div
        className={`absolute top-full left-0 w-full bg-[#175689]/95 backdrop-blur-sm shadow-lg 
          transition-all duration-500
          ${
            isMenuVisible
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 invisible"
          }`}
      >
        <div className="container mx-auto px-10 py-8">
          
          {/* 7열 (1열은 로고 아래 빈칸) */}
          <div className="grid grid-cols-7 gap-x-6 ml-[120px]">

            {/* 1열 비워두기 */}
            <div></div>

            {/* 2~7열 서브메뉴 */}
            {TOP_LINKS.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                <ul className="space-y-[1px] text-center w-full">
                  {(link.children ?? []).map((child, idx) => (
                    <li key={idx}>
                      <button
                        className="text-[17px] text-slate-200 hover:text-white transition"
                        onClick={() => {
                          onNavigate(child.pageId as PageId);
                          setIsMenuVisible(false);
                        }}
                      >
                        {child.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
