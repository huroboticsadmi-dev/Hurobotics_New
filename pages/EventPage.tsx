import React, { useState } from "react";

interface EventItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  start: string;
  end: string;
  status: "ongoing" | "ended";
}

// 🔥 지금은 비워두고 — 이벤트 생기면 여기 배열에 추가만 하면 됨!
const events: EventItem[] = [];

const EventPage: React.FC = () => {
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
            className={`px-10 py-3 rounded-sm font-semibold border ${
              tab === "ongoing"
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-white text-gray-600 border-gray-300"
            }`}
          >
            진행중
          </button>

          <button
            onClick={() => setTab("ended")}
            className={`px-10 py-3 rounded-sm font-semibold border ${
              tab === "ended"
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-white text-gray-600 border-gray-300"
            }`}
          >
            종료
          </button>
        </div>

        {/* Empty state */}
        <div className="text-gray-500 text-lg mt-20 text-center">
          등록된 이벤트가 없습니다.
        </div>
      </div>
    </div>
  );
};

export default EventPage;
