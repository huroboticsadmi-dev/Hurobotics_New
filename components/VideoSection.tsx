// components/VideoSection.tsx
import React from "react";
import { FaYoutube } from "react-icons/fa";

const VideoSection: React.FC = () => {
  const youtubeChannel = "https://www.youtube.com/@Hurobotics";

  // ✅ 롱폼 영상 (지금은 1개만 표시)
  const longformVideos = [
    "https://www.youtube.com/embed/h4AW9qIxi2s",
  ];

  // ✅ 숏폼 영상 (여러 개 유지)
  const shortsVideos = [
    "https://www.youtube.com/embed/h4AW9qIxi2s",
    "https://www.youtube.com/embed/1E2_yozoLGI",
    "https://www.youtube.com/embed/awZhLrbR0M0",
    "https://www.youtube.com/embed/5NcvUFIn6J8",
  ];

  return (
    <section className="py-20 bg-slate-50 text-center">
      {/* ✅ 메인 타이틀 */}
      <h2 className="text-5xl font-bold font-paperlogi text-[#175689] mb-4">
        HuRobotics 영상
      </h2>

      {/* ✅ 유튜브 링크 */}
      <div className="flex items-center justify-center gap-2 mb-12 text-[#175689] text-lg font-medium">
        <FaYoutube className="text-[#FF0000] text-2xl" />
        <a
          href={youtubeChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#144d74] transition-colors duration-200"
        >
          {youtubeChannel}
        </a>
      </div>

      {/* ✅ 숏폼 영상 섹션 */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h3 className="text-3xl font-bold text-[#175689] mb-8">
          숏폼 영상 (Shorts)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shortsVideos.map((url, index) => (
            <div
              key={index}
              className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            >
              <iframe
                className="w-full h-full"
                src={`${url}?rel=0`}
                title={`HuRobotics Shorts ${index + 1}`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ 롱폼 영상 섹션 (1개만 표시됨) */}
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-[#175689] mb-8">
          롱폼 영상 (Long-form)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {longformVideos.map((url, index) => (
            <div
              key={index}
              className="aspect-video bg-black rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            >
              <iframe
                className="w-full h-full"
                src={`${url}?rel=0`}
                title={`HuRobotics Longform Video ${index + 1}`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
