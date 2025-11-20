// hurobotics-main/pages/ProductDetailPage.tsx
import React from "react";
import type { Product, PageId } from "../types";

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onNavigate?: (pageId: PageId) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onNavigate,
}) => {
  if (!product) {
    return (
      <div className="bg-white pt-24 min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 text-lg mb-4">제품 정보를 불러올 수 없습니다.</p>
        <button
          onClick={onBack}
          className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors duration-300"
        >
          제품 목록으로 돌아가기
        </button>
      </div>
    );
  }

  const detailImages = [
    "/images/LIBERTYCC1_Detail_01.png",
    "/images/LIBERTYCC1_Detail_02.png",
    "/images/LIBERTYCC1_Detail_03.png",
    "/images/LIBERTYCC1_Detail_04.png",
    "/images/LIBERTYCC1_Detail_05.png",
    "/images/LIBERTYCC1_Detail_06.png",
    "/images/LIBERTYCC1_Detail_07.png",
    "/images/LIBERTYCC1_Detail_08.png",
  ];

  return (
    <div className="bg-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* 뒤로가기 */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="text-blue-800 hover:text-blue-600 transition-colors duration-300 font-semibold"
          >
            &larr; 제품 목록으로 돌아가기
          </button>
        </div>

        {/* 기본 정보 */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src={
                product.imageUrl ||
                "https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image"
              }
              alt={product.name}
              className="w-2/5 object-contain mx-auto"
            />
          </div>

          <div>
            <p className="text-blue-700 font-semibold mb-1">{product.category}</p>
            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              {product.title}
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              {product.title === "LIBERTY CC1"
                ? "건식, 습식, 진공청소를 한 번에 수행하는 상업용 올인원 청소 로봇입니다."
                : ""}
            </p>
          </div>
        </div>

        {/* CC1 상세 */}
        {product.title === "LIBERTY CC1" && (
          <div className="mt-12 space-y-0">

            {/* Detail 01 */}
            <img
              src={detailImages[0]}
              className="w-3/5 mx-auto"
              alt="Detail 01"
            />

            {/* Detail 02 */}
            <img
              src={detailImages[1]}
              className="w-3/5 mx-auto"
              alt="Detail 02"
            />

            {/* GIF 세션 (텍스트 제거 버전) */}
            <section className="w-3/5 mx-auto bg-black text-white py-6 mt-0 rounded-none">

              {/* GIF 2×2 */}
              <div className="grid grid-cols-2 gap-0 text-center">

                <div>
                  <img
                    src="/images/CC1_dust mopping.gif"
                    className="w-full h-auto rounded-none"
                    alt="걸레질"
                  />
                  <p className="py-3 text-lg font-semibold">걸레질</p>
                </div>

                <div>
                  <img
                    src="/images/CC1_scrubbing.gif"
                    className="w-full h-auto rounded-none"
                    alt="물청소"
                  />
                  <p className="py-3 text-lg font-semibold">물청소</p>
                </div>

                <div>
                  <img
                    src="/images/CC1_sweeping.gif"
                    className="w-full h-auto rounded-none"
                    alt="쓸기"
                  />
                  <p className="py-3 text-lg font-semibold">쓸기</p>
                </div>

                <div>
                  <img
                    src="/images/CC1_vaccuming.gif"
                    className="w-full h-auto rounded-none"
                    alt="흡입"
                  />
                  <p className="py-3 text-lg font-semibold">흡입</p>
                </div>
              </div>

              {/* 1일 최대 12,000㎡ 문구 (더 크고 여유 있게) */}
              <div className="text-center mt-10 pb-2">
                <p className="text-3xl font-extrabold tracking-tight">
                  1일 최대 12,000㎡ (약 3,600평) 청소!
                </p>
              </div>

            </section>

            {/* Detail 03~08 */}
            {detailImages.slice(2).map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-3/5 mx-auto"
                alt={`Detail ${i + 3}`}
              />
            ))}
          </div>
        )}

        {/* 문의하기 */}
        <div className="mt-12">
          <button
            onClick={() =>
              onNavigate && onNavigate("support-contact" as PageId)
            }
            className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-slate-900 transition-colors duration-300 shadow-lg text-lg"
          >
            문의하기
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
