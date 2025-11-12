// hurobotics-main/pages/ProductDetailPage.tsx
import React from 'react';
import type { Product, PageId } from '../types';

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

  const textByProduct: Record<string, { desc: string }> = {
    'LIBERTY MT1': { desc: '대규모 공간을 빠르고 효율적으로 청소하는 스마트 청소 솔루션입니다.' },
    'LIBERTY CC1': { desc: '건식, 습식, 진공청소를 한 번에 수행하는 상업용 올인원 청소 로봇입니다.' },
    'LIBERTY SH1': { desc: '간편한 조작으로 효율적인 청소가 가능한 휴대형 바닥 세척 로봇입니다.' },
    'LIBERTY T300': { desc: '최대 300kg 하중을 운반하는 자율주행형 물류 이송 솔루션입니다.' },
    'LIBERTY PHANTAS': { desc: '스위핑·스크러빙·진공·모핑까지 수행하는 AI 기반 프리미엄 청소 로봇입니다.' },
  };

  const specsByProduct: Record<string, Record<string, string>> = {
    'LIBERTY MT1': {
      크기: '840mm × 600mm × 490mm',
      무게: '65 kg',
      청소능력: 'Max.1800㎡/h / Max.6000㎡/h(Spot)',
      '쓰레기통 용량': '35 L',
      '배터리 용량': '45 Ah',
      '사용 가능 시간': '4~8h',
      '이동 속도': '0.2~1.2 m/s',
      '충전 시간': '< 3h',
      '위치 추적': 'VSLAM + Marker + LiDAR SLAM',
      '이동 최소 폭': '75 cm',
      '청소 폭': '70 cm',
    },
    'LIBERTY CC1': {
      청소능력: '700~1,000㎡/h',
      배터리: '25.6V / 50Ah',
      물탱크: '15L / 15L',
      쓰레기통: '0.5L',
      거름망: '2.5L',
      청소폭: '500mm',
      속도: '0.8m/s',
      압력: '15kg',
      소음: '<70dB',
      사용시간: '습식 3~4h / 건식 8h',
      충전: '<3h',
      크기: '552 × 625 × 690mm',
      무게: '75kg',
    },
    'LIBERTY SH1': {
      크기: '490 × 530 × 1200mm',
      무게: '27kg',
      효율: '1100~1600㎡/h',
      청수: '4L',
      오수: '4L',
      배터리: '18Ah',
      청소폭: '44cm',
      스퀴지폭: '49cm',
      충전: '2.5h',
      지속시간: '70~100분',
      소음: '71~76dB',
    },
    'LIBERTY T300': {
      크기: '835 × 500 × 1350mm',
      무게: '65kg',
      하중: '최대 300kg',
      속도: '1.2m/s',
      배터리: '30Ah',
      충전: '2h (0~90%)',
      장애물: '20mm',
      홈폭: '35mm',
      통과성: '≥60cm',
      지속시간: '6~12h',
      포지셔닝: 'VSLAM & LiDAR SLAM',
    },
    'LIBERTY PHANTAS': {
      크기: '540 × 440 × 617 mm',
      무게: '48 kg',
      청소폭: '330–410 mm',
      청소효율: '400–700㎡/h',
      커버리지: '1500㎡ 이상',
      먼지보관: '3–7일',
      쓰레기통: '0.7 L',
      등판능력: '8°',
      속도: '0.8 m/s',
      최소통과폭: '600 mm',
      회전반경: '700 mm',
      소음: '< 65 dB',
      센서: 'LiDAR · 3D Depth · RGB · Anti-drop · Anti-collision',
    },
  };

  const currentText = textByProduct[product.title] ?? { desc: '' };
  const specs = specsByProduct[product.title] ?? {};

  return (
    <div className="bg-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-8">
          <button
            onClick={onBack}
            className="text-blue-800 hover:text-blue-600 transition-colors duration-300 font-semibold"
          >
            &larr; 제품 목록으로 돌아가기
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src={product.imageUrl || 'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image'}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <p className="text-blue-700 font-semibold mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.title}</h1>
            <p className="text-lg text-slate-600 mb-8">
              {currentText.desc || '제품 설명이 준비 중입니다.'}
            </p>

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

            {/* ✅ 문의하기 버튼 수정 */}
            <div className="mt-8">
              <button
                onClick={() => onNavigate && onNavigate('support-contact' as PageId)}
                className="w-full bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors duration-300 shadow-lg"
              >
                문의하기
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
