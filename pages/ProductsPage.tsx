// hurobotics-main/pages/ProductsPage.tsx
import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../constants";
import type { Product } from "../types";

interface ProductsPageProps {
  onProductSelect: (product: Product) => void;
  initialCategory?: "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇";
  onCategoryChange?: (
    category: "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇"
  ) => void; // ✅ 추가
}

const productCategories: Array<
  "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇"
> = ["청소로봇", "물류로봇", "서빙로봇", "특수목적로봇"];

const ProductsPage: React.FC<ProductsPageProps> = ({
  onProductSelect,
  initialCategory = "청소로봇",
  onCategoryChange,
}) => {
  const [activeCategory, setActiveCategory] = useState<
    "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇"
  >(initialCategory);

  /* ✅ initialCategory 변경 시 반영 (App → ProductsPage) */
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  /* ✅ 버튼 클릭 시 내부 UI + App 동기화 */
  const handleCategoryClick = (
    category: "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇"
  ) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category); // ✅ App에게도 알려줌
    }
  };

  const filteredProducts = PRODUCTS.filter(
    (p) => p.category === activeCategory
  );

  const isClickable =
    activeCategory === "청소로봇" || activeCategory === "물류로봇";

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

        {/* 제품 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            return (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 ${
                  isClickable
                    ? "cursor-pointer hover:-translate-y-2"
                    : "cursor-default"
                }`}
                {...clickableProps}
              >
                {/* 이미지 */}
                <div className="relative h-64 bg-gray-50 flex items-center justify-center">
                  {!product.isAvailable ? (
                    <div className="flex flex-col items-center justify-center h-full">
                      <span className="text-2xl font-semibold text-gray-400">
                        🚧 준비 중입니다
                      </span>
                      <p className="text-gray-500 mt-2 text-sm">
                        해당 제품은 곧 만나보실 수 있습니다.
                      </p>
                    </div>
                  ) : (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/400x300/e2e8f0/94a3b8?text=No+Image";
                      }}
                    />
                  )}
                </div>

                {/* 텍스트 */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-800 truncate">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-slate-500 font-medium">
                    {product.name}
                  </p>

                  {product.descriptionPoints && (
                    <ul className="mt-4 space-y-1 text-slate-400 text-sm">
                      {product.descriptionPoints.map((point, idx) => (
                        <li key={idx}>• {point}</li>
                      ))}
                    </ul>
                  )}

                  {product.isAvailable && isClickable && (
                    <button className="mt-6 w-full bg-[#175689]/10 text-[#175689] font-semibold py-2 px-4 rounded-lg group-hover:bg-[#175689] group-hover:text-white transition-colors duration-300">
                      자세히 보기
                    </button>
                  )}
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
