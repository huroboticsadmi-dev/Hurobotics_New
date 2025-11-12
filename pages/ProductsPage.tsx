// hurobotics-main/pages/ProductsPage.tsx
import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../constants";
import type { Product } from "../types";

interface ProductsPageProps {
  onProductSelect: (product: Product) => void;
  initialCategory?: "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇";
  onCategoryChange?: (
    category: "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇"
  ) => void;
  onNavigate?: (pageId: string) => void;
}

const productCategories: Array<
  "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇"
> = ["청소로봇", "물류로봇", "서빙로봇", "특수목적로봇"];

const ProductsPage: React.FC<ProductsPageProps> = ({
  onProductSelect,
  initialCategory = "청소로봇",
  onCategoryChange,
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<
    "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇"
  >(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryClick = (
    category: "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇"
  ) => {
    setActiveCategory(category);
    if (onCategoryChange) onCategoryChange(category);
  };

  const filteredProducts = PRODUCTS.filter(
    (p) => p.category === activeCategory
  );

  const isClickable =
    activeCategory === "청소로봇" || activeCategory === "물류로봇";

  const handleInquiryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate) onNavigate("support-contact");
    else window.location.href = "/support/contact#support";
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 상단 타이틀 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-paperlogi text-slate-800">
            제품소개
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            휴로보틱스의 혁신적인 로봇 제품군을 만나보세요.
          </p>
        </div>

        {/* 카테고리 버튼 */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4 p-2 bg-white rounded-full shadow-md">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#175689] text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 제품 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const clickableProps = isClickable
              ? {
                  onClick: () => onProductSelect(product),
                  role: "button" as const,
                  tabIndex: 0,
                  onKeyPress: (e: React.KeyboardEvent) =>
                    e.key === "Enter" && onProductSelect(product),
                }
              : {};

            const hasImage = !!product.imageUrl?.trim();

            return (
              <div
                key={product.id}
                className={`flex flex-col bg-white rounded-2xl shadow-md overflow-visible group transition-transform duration-500 hover:shadow-2xl ${
                  isClickable ? "cursor-pointer" : "cursor-default"
                }`}
                {...clickableProps}
              >
                {/* 이미지 (비어 있으면 완전 생략) */}
                {hasImage && (
                  <div className="relative w-full bg-white flex items-center justify-center overflow-visible py-6">
                    <img
                      src={
                        product.imageUrl.startsWith("./")
                          ? product.imageUrl.replace("./", "/")
                          : product.imageUrl
                      }
                      alt={product.title}
                      className="max-h-64 w-auto object-contain transition-transform duration-700 scale-90 group-hover:scale-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {!product.isAvailable && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-lg font-semibold">
                        🚧 준비 중입니다
                      </div>
                    )}
                  </div>
                )}

                {/* 이미지가 아예 없을 때도 준비중 표시 */}
                {!hasImage && (
                  <div className="relative w-full bg-gray-200 flex items-center justify-center py-16 rounded-t-2xl">
                    <div className="text-slate-800 text-lg font-semibold flex items-center gap-2">
                      🚧 준비 중입니다
                    </div>
                  </div>
                )}

                {/* 텍스트 */}
                <div className="p-5 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 mb-4 text-sm">{product.name}</p>

                  {product.descriptionPoints && (
                    <div className="flex flex-wrap justify-center gap-2 mb-5">
                      {product.descriptionPoints.map((point, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3">
                    {product.isAvailable && isClickable && (
                      <button className="bg-[#175689] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#134d7a] transition-colors duration-300 text-sm">
                        더 알아보기
                      </button>
                    )}
                    <button
                      onClick={handleInquiryClick}
                      className="text-slate-600 font-semibold flex items-center gap-1 hover:text-[#175689] transition-colors duration-300 text-sm"
                    >
                      문의하기 <span className="text-base">›</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
