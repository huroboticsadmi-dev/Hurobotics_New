import React from "react";

const CasesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* ✅ 상단 배너 (여백 완전 제거 + 어두운 오버레이 추가 + 높이 줄임) */}
      <div className="relative w-full mt-0">
        {/* 배너 이미지 */}
        <img
          src="./images/Casebanner.png"
          alt="도입사례 배너"
          className="w-full h-[540px] object-cover"
        />
        {/* 어둡게 덮는 반투명 오버레이 */}
        <div className="absolute inset-0 bg-black bg-opacity-65" />
        {/* 중앙 텍스트 */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-paperlogi font-bold text-white drop-shadow-xl">
            도입 사례
          </h1>
        </div>
      </div>

      {/* ✅ 본문 영역 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl font-bold font-paperlogi text-[#175689] mb-10">
          주요 도입처 안내
        </h2>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-left text-gray-800 text-lg leading-relaxed">
          <ul className="space-y-2 list-disc list-inside">
            <li>SK하이닉스 반도체 공장 직원식당</li>
            <li>삼성 래미안아파트 잠실, 반포 (공사현장)</li>
            <li>대한항공 화물청사</li>
            <li>용산CGV, 롯데백화점 본점</li>
            <li>롯데몰 수지점, 을지로 시그니처타워</li>
            <li>명동스탠포드 호텔</li>
            <li>제주 신화월드, 여산휴게소</li>
          </ul>

          <ul className="space-y-2 list-disc list-inside">
            <li>육미향파주점, 한샘디자인파크고양점</li>
            <li>MUJI 롯데월드몰점, 스타필드 고양점</li>
            <li>골프존 파크 도통 남원점</li>
            <li>프렌즈 스크린 별내</li>
            <li>베뉴지CC, 동래베네스트CC, 군위칼레이드CC</li>
            <li>밀양노벨CC, 세이지우드 홍천 등 다수 골프관련 사업체</li>
            <li>기타 연회장, 스프린골프장 등</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CasesPage;
