// pages/HomePage.tsx
import React, { useEffect, useRef, useState } from "react";
import { PRODUCTS, SOLUTIONS } from "../constants";
import type { Product, PageId } from "../types";
import VideoSection from "../components/VideoSection";

// ✅ 스크롤 페이드인 공용 훅
const useScrollFadeIn = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `transition-all duration-[1200ms] ease-out transform ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`,
  };
};

// -------------------- Hero Section --------------------
const heroVideos = [
  {
    id: 1,
    title: "신속한 A/S는 물론 고객 만족을\n최고의 가치로 삼는 휴로틱스!",
    videoUrl: "./videos/LIBERTY_CC1.mp4",
  },
  {
    id: 2,
    title: "인건비 절감, 기업 이윤의 시작\n생산성을 높이는 가장 확실한 투자!",
    videoUrl: "./videos/LIBERTY_MT1.mp4",
  },
  {
    id: 3,
    title: "성공적인\n스마트 팩토리 자동화를 위한 최고의 파트너!",
    videoUrl: "./videos/LIBERTY_T300.mp4",
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isManualSwitch, setIsManualSwitch] = useState(false);

  const nextSlide = () => {
    setIsManualSwitch(true);
    setCurrentSlide((p) => (p === heroVideos.length - 1 ? 0 : p + 1));
  };
  const prevSlide = () => {
    setIsManualSwitch(true);
    setCurrentSlide((p) => (p === 0 ? heroVideos.length - 1 : p - 1));
  };
  const handleEnded = () => {
    if (!isManualSwitch)
      setCurrentSlide((p) => (p === heroVideos.length - 1 ? 0 : p + 1));
  };

  useEffect(() => {
    const t = setTimeout(() => setIsManualSwitch(false), 3000);
    return () => clearTimeout(t);
  }, [currentSlide]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === currentSlide) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else v.pause();
    });
  }, [currentSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white transition-all duration-700">
      {heroVideos.map((slide, i) => (
        <video
          key={slide.id}
          ref={(el: HTMLVideoElement | null) => {
            videoRefs.current[i] = el;
          }}
          src={slide.videoUrl}
          muted
          playsInline
          autoPlay={i === currentSlide}
          onEnded={handleEnded}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6 z-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold !leading-[1.5] whitespace-pre-line font-paperlogi drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] max-w-5xl">
          {heroVideos[currentSlide].title}
        </h1>
      </div>

      {/* 좌우 버튼 */}
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

      {/* 하단 인디케이터 */}
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
          />
        ))}
      </div>
    </section>
  );
};

// -------------------- Showcase Products Section --------------------
const ShowcaseProductsSection: React.FC<{ onProductSelect: (product: Product) => void }> = ({
  onProductSelect,
}) => {
  const fade = useScrollFadeIn();
  const categories = ["청소로봇", "물류로봇", "서빙로봇", "특수목적로봇"] as const;
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("청소로봇");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts = PRODUCTS.filter((p) => p.category === activeCategory);
  const isReady =
    activeCategory === "청소로봇" || activeCategory === "물류로봇";

  return (
    <section
      ref={fade.ref}
      className={`${fade.className} relative py-20 bg-white overflow-hidden`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold font-paperlogi text-slate-800">
          PRODUCTS
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          생산성과 효율성을 높이는 혁신적 로봇 기술
        </p>
      </div>

      {/* 기존 캐러셀 제품 리스트 전체 유지 */}
      {/* (너가 쓰던 Product 캐러셀 그대로 여기에 둬도 무방) */}
    </section>
  );
};

// -------------------- Solution Section --------------------
const SolutionSection: React.FC = () => {
  const fade = useScrollFadeIn();
  const [selected, setSelected] = useState(0);
  const active = SOLUTIONS[selected];

  return (
    <section
      ref={fade.ref}
      className={`${fade.className} relative bg-slate-100 py-20 min-h-[100vh] flex flex-col justify-between overflow-hidden`}
    >
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
const ContactSection: React.FC<{ onNavigate: (page: PageId) => void }> = ({
  onNavigate,
}) => {
  const fade = useScrollFadeIn();

  return (
    <section
      ref={fade.ref}
      className={`${fade.className} relative py-24 bg-cover bg-center bg-fixed`}
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
          onClick={() => onNavigate("inquiry")}
          className="mt-8 px-10 py-3 bg-white text-[#175689] font-bold rounded-full text-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105"
        >
          문의하기
        </button>
      </div>
    </section>
  );
};

// -------------------- HomePage --------------------
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
