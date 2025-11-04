// components/VideoSection.tsx
import React from "react";
import { FaYoutube } from "react-icons/fa";

const VideoSection: React.FC = () => {
  const youtubeChannel = "https://www.youtube.com/@Hurobotics";

  const videos = [
    "https://www.youtube.com/embed/vh0EkijmmJ8",
    "https://www.youtube.com/embed/8Dv48RjNuaw",
    "https://www.youtube.com/embed/1E2_yozoLGI",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 text-center">
      {/* 타이틀 */}
      <h2 className="text-5xl font-bold font-paperlogi text-[#175689] mb-10 flex items-center justify-center gap-3">
        HuRobotics 영상{" "}
        <a
          href={youtubeChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF0000] hover:scale-110 transition-transform duration-300"
          aria-label="HuRobotics YouTube Channel"
        >
          <FaYoutube className="text-5xl" />
        </a>
      </h2>

      {/* 영상 그리드 (쇼츠 비율 적용) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {videos.map((url, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white aspect-[9/16] flex items-center justify-center hover:scale-[1.02] transition-transform duration-300"
          >
            <iframe
              className="w-full h-full"
              src={`${url}?rel=0&autoplay=0`}
              title={`HuRobotics Shorts ${i + 1}`}
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
