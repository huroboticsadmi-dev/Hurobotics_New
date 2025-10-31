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

  // ✅ 각 제품별 기본 스펙 정의
  const specsByProduct: Record<string, Record<string, string>> = {
    'LIBERTY MT1': {
      '크기': '840mm × 600mm × 490mm',
      '무게': '65 kg',
      '청소능력': 'Max. 1800㎡/h (Standard Cleaning Mode),\nMax.6000㎡/h (Spot Cleaning Mode)',
      '쓰레기통 용량': '35 L',
      '배터리 용량': '45 Ah',
      '사용 가능 시간': '4~8h (사용환경에 따라 다름)',
      '이동 속도': '0.2 m/s ~ 1.2 m/s (조정 가능)',
      '충전 시간': '< 3h',
      '위치 추적 방식': 'VSLAM + Marker + LiDAR SLAM',
      '이동 최소 폭': 'Min. 75 cm',
      '청소 폭': '70 cm',
    },
    'LIBERTY CC1': {
      '청소능력': '700~1,000㎡/h',
      '배터리 용량': '25.6V / 50Ah',
      '배터리 타입': 'Lithium Iron Phosphate battery',
      '물 탱크 용량': '정수 탱크 15L / 폐수 탱크 15L',
      '쓰레기통 용량': '0.5L',
      '거름망 용량': '2.5L',
      '청소 폭': '500mm',
      '최대 속도': '0.8m/s',
      '하방 압력': '15kg',
      '사용능력 시간': '습식청소 3~4시간 / 건식청소 8시간',
      '충전 시간': '<3시간',
      '작동 소음': '<70dB',
      '액세서리': '워크스테이션 / 카펫 청소기 헤드',
      '장비 크기': '552 × 625 × 690mm',
      '장비 무게': '75kg',
    },
    'LIBERTY SH1': {
      '본체 크기': '490mm × 530mm × 1200mm',
      '기기 중량': '27kg',
      '청소 효율성': '1100~1600㎡/h',
      '청수 탱크 용량': '4L',
      '오수 탱크 용량': '4L',
      '배터리 용량': '18Ah',
      '작업 청소 폭': '44cm',
      '스퀴지 청소 폭': '49cm',
      '충전 시간': '2.5h',
      '지속 시간': '표준모드 70분 / 에너지절약모드 100분',
      '소음': '표준모드 76dB(A) / 에너지절약모드 71dB(A)',
    },
    'LIBERTY T300': {
      '본체 크기': '835mm × 500mm × 1350mm',
      '기기 중량': '65kg',
      '하중능력': '최대 300kg',
      '최고 작동 속도': '1.2m/s',
      '배터리 용량': '30Ah',
      '충전 시간': '2시간 (0~90%)',
      '통과 가능 장애물 높이': '20mm',
      '통과 가능 홈 폭': '35mm',
      '통과성': '≥60cm',
      '지속 시간': '12시간(무부하) / 6시간(최대 부하)',
      '포지셔닝 방식': 'VSLAM & 레이저 SLAM',
    },
  };

  const specs = specsByProduct[product.title] || {};

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
              src={product.imageUrl || 'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image'}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* 텍스트 영역 */}
          <div>
            <p className="text-blue-700 font-semibold mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
            <p className="text-lg text-slate-600 mb-8">{product.longDescription || '제품 설명이 준비 중입니다.'}</p>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">제품 사양</h2>
              {Object.keys(specs).length > 0 ? (
                <ul className="space-y-3">
                  {Object.entries(specs).map(([key, value]) => (
                    <li key={key} className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium text-slate-700">{key}</span>
                      <span className="text-slate-900 whitespace-pre-line">{value}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500">제품 사양 정보가 없습니다.</p>
              )}
            </div>

            {/* 견적 문의 버튼 */}
            <div className="mt-8">
              <button
                onClick={() => onNavigate && onNavigate('rental')}
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
