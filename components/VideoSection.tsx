// components/VideoSection.tsx
import React from "react";

const VideoSection: React.FC = () => {
  // 아직 업로드된 유튜브 영상이 없을 때 false로 유지
  const hasVideo = false;
  const youtubeUrl = "https://www.youtube.com/embed/"; // 영상 등록 시 ID만 붙이면 됨 (예: .../embed/abc123)

  return (
    <section className="py-20 bg-white text-center">
      {/* 섹션 타이틀 */}
      <h2 className="text-5xl font-bold font-paperlogi text-[#175689] mb-10">
        HuRobotics 영상 ❤️
      </h2>

      {/* 영상 영역 */}
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
        {hasVideo ? (
          <iframe
            className="w-full h-[500px]"
            src={youtubeUrl}
            title="HuRobotics YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#175689"
              className="w-20 h-20 mb-4 opacity-70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l-6 3.75V6.75l6 3.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-slate-600 text-lg font-semibold">
              아직 업로드된 영상이 없습니다.
            </p>
            <p className="text-slate-500 mt-2 text-sm">
              곧 HuRobotics 공식 영상을 만나보실 수 있습니다.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
