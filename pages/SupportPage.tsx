// pages/SupportPage.tsx
import React, { useState } from "react";
import InquiryForm from "../components/InquiryForm";
import ResourcesList from "./ResourcesList";
import ResourceDetail from "./ResourceDetail";

const SupportPage: React.FC = () => {
  // ✅ 탭 구성: A/S문의, 파트너십 제거 → 자료실 / FAQ / 문의하기
  const tabs = ["자료실", "FAQ", "문의하기"];
  const [activeTab, setActiveTab] = useState("문의하기");
  const [selectedResourceId, setSelectedResourceId] = useState<number | null>(null);

  const handleBackToList = () => setSelectedResourceId(null);

  const renderContent = () => {
    switch (activeTab) {
      case "자료실":
        return (
          <div className="py-10">
            {!selectedResourceId ? (
              <ResourcesList onSelect={setSelectedResourceId} />
            ) : (
              <ResourceDetail
                title="지능형 상업용 청소 로봇 스위피 제품소개서"
                date="2025.03.14"
                author="관리자"
                file="./files/SWEEPI_INTRO.pdf"
                onBack={handleBackToList}
              />
            )}
          </div>
        );

      case "FAQ":
        return (
          <div className="text-center py-10 text-gray-600 text-lg">
            자주 묻는 질문(FAQ) 페이지는 준비 중입니다.
          </div>
        );

      case "문의하기":
        return (
          <div className="py-10">
            <InquiryForm />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* 상단 타이틀 */}
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-widest">SUPPORT</h1>
        <p className="text-gray-500 mt-2">고객지원</p>
      </div>

      {/* 탭 버튼 */}
      <div className="flex justify-center gap-6 mt-8 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelectedResourceId(null); // 자료실 상세 → 탭 이동 시 초기화
            }}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-[#175689] text-white shadow-md hover:bg-[#144d74]"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 탭별 내용 */}
      <div className="container mx-auto px-4 sm:px-8">{renderContent()}</div>
    </div>
  );
};

export default SupportPage;
