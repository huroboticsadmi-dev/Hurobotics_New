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

        {/* Placeholder image */}
        <div className="w-full h-64 bg-gray-200 rounded-md mb-8 flex items-center justify-center">
          <span className="text-gray-500">
            여기에 프로모션 이미지를 넣을 수 있어요
          </span>
        </div>

        {/* Placeholder content */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          여기에 이벤트 상세 내용을 입력하면 됩니다.<br />
          현재는 기본 페이지 템플릿이며,<br />
          이벤트별 세부 이미지를 직접 구성할 수 있어요.
        </p>

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
