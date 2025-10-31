import React from 'react';
import type { Product } from '../types';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onNavigate?: (pageId: string) => void; // ✅ 체험신청 이동용
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

  const {
    name = '이름 없는 제품',
    imageUrl = '',
    category = '',
    longDescription = '제품 설명이 준비 중입니다.',
    specs = {},
  } = product as any;

  return (
    <div className="bg-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 뒤로가기 버튼 */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="text-blue-800 hover:text-blue-600 transition-colors duration-300 font-semibold"
          >
            &larr; 제품 목록으로 돌아가기
          </button>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 이미지 */}
          <div>
            <img
              src={
                imageUrl ||
                'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image'
              }
              alt={name}
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image';
              }}
            />
          </div>

          {/* 텍스트 영역 */}
          <div>
            <p className="text-blue-700 font-semibold mb-2">{category}</p>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{name}</h1>
            <p className="text-lg text-slate-600 mb-8">{longDescription}</p>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                제품 사양
              </h2>
              {Object.keys(specs).length > 0 ? (
                <ul className="space-y-3">
                  {Object.entries(specs).map(([key, value]) => (
                    <li
                      key={key}
                      className="flex justify-between border-b border-slate-200 pb-2"
                    >
                      <span className="font-medium text-slate-700">{key}</span>
                      <span className="text-slate-900">{String(value)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500">제품 사양 정보가 없습니다.</p>
              )}
            </div>

            {/* 견적 문의 버튼 → 체험신청 이동 */}
            <div className="mt-8">
              <button
                onClick={() => onNavigate && onNavigate("rental")} // ✅ 체험신청 페이지로 이동
                className="w-full bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors duration-300 shadow-lg"
              >
                견적 문의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
