// components/VideoSection.tsx
import React from "react";
import { FaYoutube } from "react-icons/fa";

const VideoSection: React.FC = () => {
  const videos = [
    "https://www.youtube.com/embed/h4AW9qIxi2s",
    "https://www.youtube.com/embed/1E2_yozoLGI",
    "https://www.youtube.com/embed/awZhLrbR0M0",
    "https://www.youtube.com/embed/5NcvUFIn6J8",
  ];

  const youtubeChannel = "https://www.youtube.com/@Hurobotics";

  return (
    <section className="py-20 bg-slate-50 text-center">
      {/* 타이틀 (아이콘 제거됨) */}
      <h2 className="text-5xl font-bold font-paperlogi text-[#175689] mb-4">
        HuRobotics 영상
      </h2>

      {/* 공식 유튜브 주소 */}
      <div className="flex items-center justify-center gap-2 mb-10 text-[#175689] text-lg font-medium">
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

      {/* 영상 리스트 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {videos.map((url, index) => (
          <div
            key={index}
            className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-lg border border-slate-200"
          >
            <iframe
              className="w-full h-full"
              src={`${url}?rel=0`}
              title={`HuRobotics Video ${index + 1}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
