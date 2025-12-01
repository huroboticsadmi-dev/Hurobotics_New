// pages/EventPage.tsx
import React, { useState } from "react";
import type { PageId } from "../types";

interface EventPageProps {
  onNavigate: (page: PageId) => void;
}

interface EventItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  start: string;
  end: string;
  status: "ongoing" | "ended";
}

// 🔥 이벤트 배열 — 필요할 때 이 배열만 수정하면 됨!
const events: EventItem[] = [
  {
    id: "promo_202512",
    title: "2025 크리스마스 기념 프로모션",
    desc: "12월 한정! 리버티 판타스 특별 프로모션을 확인하세요.",
    image: "/images/2025_December_Promotion.png",
    start: "2025-12-01",
    end: "2025-12-31",
    status: "ongoing",
  },
];

const EventPage: React.FC<EventPageProps> = ({ onNavigate }) => {
  const [tab, setTab] = useState<"ongoing" | "ended">("ongoing");

  const filteredEvents = events.filter((e) => e.status === tab);

  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-10">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-10">이벤트</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setTab("ongoing")}
            className={`px-10 py-3 rounded-sm font-semibold border transition ${
              tab === "ongoing"
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-[#175689] hover:text-white hover:border-[#175689]"
            }`}
          >
            진행중
          </button>

          <button
            onClick={() => setTab("ended")}
            className={`px-10 py-3 rounded-sm font-semibold border transition ${
              tab === "ended"
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-[#175689] hover:text-white hover:border-[#175689]"
            }`}
          >
            종료
          </button>
        </div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="text-gray-500 text-lg mt-20 text-center">
            등록된 이벤트가 없습니다.
          </div>
        )}

        {/* Event list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="border rounded-lg shadow-sm overflow-hidden transition hover:shadow-md hover:border-[#175689]"
            >

              {/* Image (clickable) */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => onNavigate("event-detail")}
              />

              {/* Text */}
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{event.desc}</p>

                {/* Dates */}
                <div className="text-sm text-gray-500 mb-4">
                  {event.start} ~ {event.end}
                </div>

                {/* View detail */}
                <button
                  onClick={() => onNavigate("event-detail")}
                  className="text-[#175689] font-semibold"
                >
                  자세히 보기 →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EventPage;
