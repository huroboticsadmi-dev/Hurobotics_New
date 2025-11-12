// pages/HomePage.tsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { PRODUCTS, SOLUTIONS } from "../constants";
import type { Product, PageId } from "../types";
import VideoSection from "../components/VideoSection";

/* =========================
   Hero Section
========================= */
const heroVideos = [
  {
    id: 1,
    title: "신속한 A/S는 물론 고객 만족을\n최고의 가치로 삼는 휴로보틱스!",
    videoUrl: "./videos/LIBERTY_CC1.mp4",
  },
  {
    id: 2,
    title: "인건비 절감, 기업 이윤의 시작\n생산성을 높이는 가장 확실한 투자!",
    videoUrl: "./videos/LIBERTY_MT1.mp4",
  },
  {
    id: 3,
    title: "성공적인 스마트 팩토리\n자동화를 위한 최고의 파트너!",
    videoUrl: "./videos/LIBERTY_T300.mp4",
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [isManualSwitch, setIsManualSwitch] = useState(false);
  const total = heroVideos.length;
  const lineHeightValue = 1.6;

  const nextSlide = () => {
    setIsManualSwitch(true);
    setCurrentSlide((p) => (p === total - 1 ? 0 : p + 1));
  };
  const prevSlide = () => {
    setIsManualSwitch(true);
    setCurrentSlide((p) => (p === 0 ? total - 1 : p - 1));
  };

  const handleEnded = () => {
    if (!isManualSwitch) setCurrentSlide((p) => (p === total - 1 ? 0 : p + 1));
  };

  useEffect(() => {
    const t = setTimeout(() => setIsManualSwitch(false), 3000);
    return () => clearTimeout(t);
  }, [currentSlide]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === currentSlide) {
        try {
          v.currentTime = 0;
          v.play().catch(() => {});
        } catch {}
      } else {
        try {
          v.pause();
        } catch {}
      }
    });
  }, [currentSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {heroVideos.map((slide, i) => (
        <video
          key={slide.id}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          src={slide.videoUrl}
          muted
          playsInline
          preload="none"
          autoPlay={i === currentSlide}
          onEnded={handleEnded}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative flex flex-col items-center justify-center h-full text-center px-6 z-20">
        <h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold whitespace-pre-line font-paperlogi drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] max-w-5xl"
          style={{ lineHeight: lineHeightValue }}
        >
          {heroVideos[currentSlide].title}
        </h1>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 p-3 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 p-3 rounded-full"
      >
        ▶
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {heroVideos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsManualSwitch(true);
              setCurrentSlide(i);
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === i ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`slide-${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

/* =========================
   PRODUCTS Section
========================= */
const ShowcaseProductsSection: React.FC<{
  onProductSelect: (product: Product) => void;
}> = ({ onProductSelect }) => {
  const categories = ["청소로봇", "물류로봇", "서빙로봇", "특수목적로봇"] as const;
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("청소로봇");
  const [currentIndex, setCurrentIndex] = useState(0);

  const AVAILABLE_PRODUCT_IDS = useMemo(
    () => new Set(["MT1", "CC1", "SH1", "PHANTAS", "T300"]),
    []
  );

  const filtered = useMemo(
    () =>
      PRODUCTS.filter(
        (p) => p.category === activeCategory && AVAILABLE_PRODUCT_IDS.has(p.id)
      ),
    [activeCategory, AVAILABLE_PRODUCT_IDS]
  );

  const hasCarousel = filtered.length > 0;

  const handlePrev = () =>
    hasCarousel && setCurrentIndex((p) => (p - 1 + filtered.length) % filtered.length);
  const handleNext = () =>
    hasCarousel && setCurrentIndex((p) => (p + 1) % filtered.length);

  useEffect(() => setCurrentIndex(0), [activeCategory]);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold font-paperlogi text-slate-800">
          PRODUCTS
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          생산성과 효율성을 높이는 혁신적 로봇 기술
        </p>

        <div className="mt-8 inline-flex bg-gray-100 rounded-full p-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeCategory === c
                  ? "bg-[#175689] text-white"
                  : "text-slate-700 hover:text-[#175689]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative mt-10 min-h-[520px] flex items-center justify-center">
          {!hasCarousel ? (
            <div className="py-24 text-slate-600">
              해당 카테고리의 제품이 준비 중입니다.
            </div>
          ) : (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#175689]/20 rounded-full shadow hover:bg-[#175689]/40"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#175689]/20 rounded-full shadow hover:bg-[#175689]/40"
              >
                ▶
              </button>

              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  className={`absolute w-full transition-all duration-500 ${
                    i === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      loading="lazy"
                      className="h-80 object-contain cursor-pointer"
                      onClick={() => i === currentIndex && onProductSelect(p)}
                    />
                    <h3 className="text-3xl font-bold mt-4">{p.title}</h3>
                    {p.name !== p.title && (
                      <p className="text-slate-700 text-lg font-semibold">
                        {p.name}
                      </p>
                    )}
                    <ul className="mt-2 text-slate-600">
                      {p.descriptionPoints.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

/* =========================
   SOLUTION Section
========================= */
const SolutionSection: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const prevIndex = useRef(0);

  useEffect(() => {
    SOLUTIONS.forEach((sol) => {
      const img = new Image();
      img.src = sol.imageUrl;
    });
  }, []);

  const handleSelect = (index: number) => {
    if (index === selected) return;
    setDirection(index > prevIndex.current ? "right" : "left");
    prevIndex.current = index;
    setSelected(index);
  };

  return (
    <section
      className="relative bg-slate-100 py-0 min-h-[100vh] flex flex-col justify-center overflow-hidden"
      style={{
        contain: "layout paint",
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {SOLUTIONS.map((sol, i) => (
          <div
            key={sol.id}
            className={`absolute inset-0 w-full h-full transition-transform transition-opacity duration-500 ease-out ${
              i === selected
                ? "opacity-100 translate-x-0"
                : direction === "right"
                ? "opacity-0 translate-x-10"
                : "opacity-0 -translate-x-10"
            }`}
            style={{
              backgroundImage: `url(${sol.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.9)",
              willChange: "transform, opacity, filter",
              transform: "translateZ(0)",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/70 via-slate-100/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center select-none mt-10">
        <h2 className="text-4xl md:text-5xl font-paperlogi font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] mb-2">
          SOLUTION
        </h2>
        <p className="text-lg text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          다양한 산업 분야를 위한 최적의 솔루션
        </p>

        <div className="mt-12 max-w-3xl mx-auto bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg transition-transform duration-500">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#175689]">
            {SOLUTIONS[selected].name}
          </h3>
          <ul className="text-left text-slate-700 space-y-3">
            {SOLUTIONS[selected].description.map((d, i) => (
              <li key={i} className="flex items-start text-base md:text-lg">
                <svg
                  className="w-6 h-6 text-[#175689] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex justify-center flex-wrap gap-4 mb-10">
          {SOLUTIONS.map((sol, i) => (
            <button
              key={sol.id}
              onClick={() => handleSelect(i)}
              className={`flex flex-col items-center transition-transform duration-300 will-change-transform ${
                selected === i ? "scale-110" : "hover:scale-105"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  selected === i
                    ? "border-[#175689]"
                    : "border-white hover:border-[#175689]/60"
                }`}
              >
                <img
                  src={sol.imageUrl}
                  alt={sol.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* ✅ 여기 — 그림자 기본 있음 / hover면 제거 / selected면 제거 */}
              <span
                className={`mt-2 text-sm font-semibold transition-all duration-300 ${
                  selected === i
                    ? "text-[#175689] drop-shadow-none"
                    : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:drop-shadow-none"
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

/* =========================
   Contact Section
========================= */
const ContactSection: React.FC<{ onNavigate: (page: PageId) => void }> = ({
  onNavigate,
}) => (
  <section
    className="relative py-24 bg-cover bg-center bg-fixed"
    style={{ backgroundImage: "url('./images/advice.jpg')" }}
  >
    <div className="absolute inset-0 bg-[#175689] opacity-80" />
    <div className="relative container mx-auto px-4 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-paperlogi font-bold">
        CONTACT
      </h2>
      <p className="mt-4 text-xl max-w-3xl mx-auto">
        궁금한 점이 있으신가요? 언제든지 문의해주세요. <br />
        휴로보틱스는 항상 고객의 목소리에 귀 기울이고 있습니다.
      </p>
      <button
        onClick={() => onNavigate("support")}
        className="mt-8 px-10 py-3 bg-white text-[#175689] font-bold rounded-full text-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105"
      >
        문의하기
      </button>
    </div>
  </section>
);

/* =========================
   HomePage 구성
========================= */
const HomePage: React.FC<{
  onProductSelect: (product: Product) => void;
  onNavigate: (page: PageId) => void;
}> = ({ onProductSelect, onNavigate }) => (
  <div>
    <HeroSection />
    <ShowcaseProductsSection onProductSelect={onProductSelect} />
    <VideoSection />
    <SolutionSection />
    <ContactSection onNavigate={onNavigate} />
  </div>
);

export default HomePage;
