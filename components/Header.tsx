// components/Header.tsx
import React, { useEffect, useState } from "react";
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
  const [isReady, setIsReady] = useState(false); // 첫 렌더 완료 감지

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // ✅ 첫 렌더 후 바로 상태 확인 (깜빡임 방지)
    handleScroll();
    setIsReady(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = currentPage === "home";
  const isTransparent =
    isHome && !scrolled && !isMenuVisible && !isMobileMenuOpen;
  const isSolid = !isTransparent;

  const darkLogo = "https://i.postimg.cc/MpCPzjY4/hyuaenlobotigseu-kkamang-galo.png";
  const whiteLogo = "https://i.postimg.cc/t4QWTdLv/hyuaenlobotigseu-hayang-galo.png";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[9999]"
      onMouseLeave={() => setIsMenuVisible(false)}
    >
      {/* ✅ 상단 헤더 */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isSolid ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            {/* 로고 */}
            <div className="flex-shrink-0">
              <button
                onClick={() => {
                  onNavigate("home");
                  setIsMobileMenuOpen(false);
                }}
                aria-label="HuRobotics Homepage"
              >
                <img
                  src={isSolid ? darkLogo : whiteLogo}
                  alt="HuRobotics Logo"
                  className={`h-12 w-auto transition-all duration-500 ${
                    isReady ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            </div>

            {/* 중앙 메뉴 */}
            <nav
              className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-full items-center"
              onMouseEnter={() => setIsMenuVisible(true)}
            >
              <div className="flex items-center space-x-8">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      if (link.pageId) {
                        onNavigate(link.pageId as PageId);
                        setIsMenuVisible(false);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`text-lg font-medium transition-colors duration-500 ${
                      isSolid
                        ? "text-slate-700 hover:text-[#175689]"
                        : "text-white hover:text-slate-200"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </nav>

            {/* 모바일 버튼 */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
                className="text-3xl transition-colors duration-500"
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
      </div>

      {/* ✅ 모바일 딤 */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* ✅ 모바일 메뉴 */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 max-h-[500px]"
            : "-translate-y-6 opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-2 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                if (link.pageId) {
                  onNavigate(link.pageId as PageId);
                  setIsMobileMenuOpen(false);
                  setIsMenuVisible(false);
                }
              }}
              className="text-left text-slate-800 text-lg font-medium py-2 border-b border-slate-200 hover:text-[#175689] transition-all duration-200"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ PC 메가 메뉴 */}
      <div
        className={`absolute top-full left-0 w-full bg-[#175689]/95 backdrop-blur-sm shadow-lg transition-all duration-500 ease-in-out transform ${
          isMenuVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0 invisible"
        }`}
        aria-hidden={!isMenuVisible}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 py-10">
          <div className="flex justify-center gap-x-20">
            {NAV_LINKS.map(
              (link) =>
                link.children &&
                link.children.length > 0 && (
                  <div key={link.name}>
                    <h3 className="text-lg font-bold text-white mb-6">
                      {link.name}
                    </h3>
                    <ul className="space-y-4">
                      {link.children.map((child) => (
                        <li key={child.name}>
                          <button
                            onClick={() => {
                              if (link.pageId) {
                                onNavigate(link.pageId as PageId);
                                setIsMenuVisible(false);
                              }
                            }}
                            className="block text-slate-300 hover:text-white font-medium transition-colors duration-300"
                          >
                            {child.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
