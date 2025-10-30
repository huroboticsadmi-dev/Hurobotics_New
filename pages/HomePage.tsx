// pages/HomePage.tsx
import React, { useEffect, useRef, useState } from "react";
import { PRODUCTS, SOLUTIONS } from "../constants";
import type { Product, PageId } from "../types";
import VideoSection from "../components/VideoSection"; // ✅ HuRobotics 영상 ❤️ 섹션 import

interface HomePageProps {
  onProductSelect: (product: Product) => void;
  onNavigate: (page: PageId) => void;
}

// -------------------- Hero Section --------------------
const heroSlides = [
  {
    id: 1,
    title: "신속한 A/S는 물론\n고객 만족을 최고의 가치로 삼는 휴로틱스!",
    imageUrl: "./images/hero1.jpg",
  },
  {
    id: 2,
    title: "인건비 절감, 기업 이윤의 시작\n생산성을 높이는 가장 확실한 투자!",
    imageUrl: "./images/hero2.jpg",
  },
  {
    id: 3,
    title: "성공적인 스마트 팩토리 자동화를 위한\n최고의 파트너!",
    imageUrl: "./images/hero3.jpg",
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p === heroSlides.length - 1 ? 0 : p + 1)), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section
      className="relative h-screen w-full overflow-hidden text-white transition-all duration-700"
      style={{
        backgroundImage: `url(${slide.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6 z-20">
        {/* ✅ line-height 강제 확대 */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold !leading-[1.5] whitespace-pre-line font-paperlogi drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] max-w-5xl">
          {slide.title}
        </h1>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full ${currentSlide === i ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

// -------------------- Showcase Products Section --------------------
const ShowcaseProductsSection: React.FC<{ onProductSelect: (product: Product) => void }> = ({ onProductSelect }) => {
  const categories = ["청소로봇", "물류로봇", "서빙로봇", "특수목적로봇"] as const;
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("청소로봇");
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState<Record<string, string>>({});

  const filteredProducts = PRODUCTS.filter((p) => p.category === activeCategory);
  const isReady = activeCategory === "청소로봇" || activeCategory === "물류로봇";

  const handleCategorySelect = (category: typeof activeCategory) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  useEffect(() => {
    const calcPill = () => {
      const i = categories.indexOf(activeCategory);
      const btn = buttonRefs.current[i];
      if (btn) setPillStyle({ left: `${btn.offsetLeft}px`, width: `${btn.offsetWidth}px` });
    };
    calcPill();
    window.addEventListener("resize", calcPill);
    return () => window.removeEventListener("resize", calcPill);
  }, [activeCategory]);

  const handleNext = () => {
    if (filteredProducts.length <= 1) return;
    setCurrentIndex((p) => (p + 1) % filteredProducts.length);
  };
  const handlePrev = () => {
    if (filteredProducts.length <= 1) return;
    setCurrentIndex((p) => (p - 1 + filteredProducts.length) % filteredProducts.length);
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold font-paperlogi text-slate-800">PRODUCTS</h2>
        <p className="mt-4 text-lg text-slate-600">생산성과 효율성을 높이는 혁신적 로봇 기술</p>

        <div className="mt-8 flex justify-center">
          <div ref={containerRef} className="relative flex items-center p-1 bg-gray-100 rounded-full shadow-inner">
            <div
              className="absolute top-1 bottom-1 bg-[#175689] rounded-full transition-all duration-300 ease-in-out"
              style={pillStyle}
            />
            {categories.map((cat, i) => (
              <button
                key={cat}
                ref={(el) => (buttonRefs.current[i] = el)}
                onClick={() => handleCategorySelect(cat)}
                className={`relative px-6 py-2 rounded-full text-lg font-semibold z-10 ${
                  activeCategory === cat ? "text-white" : "text-slate-700 hover:text-[#175689]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {!isReady ? (
        <div className="py-32 text-center text-slate-600 text-xl font-semibold">
          🚧 현재 <span className="font-bold text-slate-800">{activeCategory}</span> 관련 제품은 준비 중입니다.
        </div>
      ) : (
        <div className="relative h-[600px] mt-12 flex items-center justify-center">
          <div className="absolute top-1/2 -translate-y-1/2 w-[90%] md:w-[70%] lg:w-[55%] h-[500px] bg-gray-100 rounded-[50%]" />
          <div className="w-full h-full relative">
            {filteredProducts.map((product, index) => {
              const offset = index - currentIndex;
              let transform = "scale(0.5)";
              let opacity = "opacity-0";
              let zIndex = "z-0";
              let pointer: "auto" | "none" = "none";
              if (offset === 0) {
                transform = "translateX(0%) scale(1)";
                opacity = "opacity-100";
                zIndex = "z-20";
                pointer = "auto";
              } else if (offset === -1 || (currentIndex === 0 && index === filteredProducts.length - 1)) {
                transform = "translateX(-60%) scale(0.7)";
                opacity = "opacity-70";
                zIndex = "z-10";
              } else if (offset === 1 || (currentIndex === filteredProducts.length - 1 && index === 0)) {
                transform = "translateX(60%) scale(0.7)";
                opacity = "opacity-70";
                zIndex = "z-10";
              }
              return (
                <div
                  key={product.id}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${opacity} ${zIndex}`}
                  style={{ transform, pointerEvents: pointer }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className={`mx-auto transition-all duration-500 ${
                        offset === 0 ? "h-80 cursor-pointer" : "h-56"
                      }`}
                      onClick={() => offset === 0 && onProductSelect(product)}
                    />
                    {offset === 0 ? (
                      <>
                        <h3 className="text-3xl font-bold mt-4">{product.title}</h3>
                        {(product.name as string) !== (product.title as string) && (
                          <p className="text-slate-700 text-lg font-semibold">{product.name}</p>
                        )}
                        <ul className="mt-2 text-slate-600">
                          {product.descriptionPoints.map((pt, i) => (
                            <li key={i}>{pt}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-slate-700 text-md font-semibold mt-2">{product.name}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-[#175689]/20 rounded-full shadow-md hover:bg-[#175689]/40"
          >
            <svg className="w-6 h-6 text-[#175689]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-[#175689]/20 rounded-full shadow-md hover:bg-[#175689]/40"
          >
            <svg className="w-6 h-6 text-[#175689]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

// -------------------- Solution Section --------------------
const SolutionSection: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const active = SOLUTIONS[selected];

  return (
    <section className="relative bg-slate-100 py-20 min-h-[100vh] flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        {SOLUTIONS.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
              selected === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${s.imageUrl})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 via-slate-100/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-paperlogi font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          SOLUTION
        </h2>
        <p className="mt-4 text-lg text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          다양한 산업 분야를 위한 최적의 솔루션
        </p>

        <div className="mt-12 max-w-3xl mx-auto bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#175689]">{active.name}</h3>
          <ul className="text-left text-slate-700 space-y-3">
            {active.description.map((d, i) => (
              <li key={i} className="flex items-start text-base md:text-lg">
                <svg className="w-6 h-6 text-[#175689] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                </svg>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex justify-center flex-wrap gap-4">
          {SOLUTIONS.map((sol, i) => (
            <button
              key={sol.id}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-center transition-all duration-300 ${
                selected === i ? "scale-110" : "hover:scale-105"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  selected === i ? "border-[#175689]" : "border-white hover:border-[#175689]/60"
                }`}
              >
                <img src={sol.imageUrl} alt={sol.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <span
                className={`mt-2 text-sm font-semibold transition-all duration-300 ${
                  selected === i
                    ? "text-[#175689] drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] hover:text-[#1d6fa5]"
                    : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:text-white/90"
                }`}
              >
                {sol.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// -------------------- Contact Section --------------------
const ContactSection: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => (
  <section
    className="relative py-24 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('./images/advice.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-[#175689] opacity-80" />
    <div className="relative container mx-auto px-4 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-paperlogi font-bold">CONTACT</h2>
      <p className="mt-4 text-xl max-w-3xl mx-auto">
        궁금한 점이 있으신가요? 언제든지 문의해주세요. <br /> 휴로보틱스는 항상 고객의 목소리에 귀 기울이고 있습니다.
      </p>
      <button
        onClick={() => onNavigate("inquiry")}
        className="mt-8 px-10 py-3 bg-white text-[#175689] font-bold rounded-full text-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105"
      >
        문의하기
      </button>
    </div>
  </section>
);

// -------------------- HomePage --------------------
const HomePage: React.FC<HomePageProps> = ({ onProductSelect, onNavigate }) => (
  <div>
    <HeroSection />
    <ShowcaseProductsSection onProductSelect={onProductSelect} />
    <VideoSection /> {/* ✅ HuRobotics 영상 ❤️ 섹션 */}
    <SolutionSection />
    <ContactSection onNavigate={onNavigate} />
  </div>
);

export default HomePage;
