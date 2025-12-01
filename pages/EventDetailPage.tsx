// pages/EventDetailPage.tsx
import React from "react";
import type { PageId } from "../types";

interface EventDetailPageProps {
  onNavigate: (page: PageId) => void;
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-10">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">이벤트 상세</h1>

        {/* YouTube Video Embed (크기 축소 + 중앙 정렬) */}
        <div className="w-full flex justify-center mb-8">
          <div className="w-full max-w-3xl bg-gray-200 rounded-md overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hDt93Gy_LbM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          모델명: 리버티 판타스 (Liberty Phantas)<br />
          월 렌탈료: 399,000원 (VAT 별도 / 48개월 기준)<br />
          혜택 기간: ~ 2025년 12월 31일까지 (10대 한정!)
        </p>

        {/* 문의하기 버튼 */}
        <div className="mb-10">
          <button
            onClick={() => onNavigate("support-contact")}
            className="px-6 py-3 bg-[#175689] text-white font-semibold rounded-md"
          >
            문의하러 가기 →
          </button>
        </div>

        {/* Back to event list */}
        <button
          onClick={() => onNavigate("event")}
          className="text-[#175689] font-semibold"
        >
          ← 이벤트 목록으로 돌아가기
        </button>

      </div>
    </div>
  );
};

export default EventDetailPage;
