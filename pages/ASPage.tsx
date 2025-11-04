import React from "react";
import InquiryForm from "../components/InquiryForm"; // ✅ 기존 폼 그대로 재사용

const ASPage: React.FC = () => {
  // 🔸 배너 이미지 (현재 비워둠 — 나중에 추가 가능)
  const bannerImage = ""; // 예: "./images/as_banner.png"

  return (
    <div className="flex flex-col justify-start items-center bg-white pt-32 pb-16 px-4">
      {/* ✅ 맨 위 배너 이미지 (없으면 placeholder 표시) */}
      {bannerImage ? (
        <img
          src={bannerImage}
          alt="A/S 안내 배너"
          className="w-full max-w-4xl rounded-2xl shadow-md mb-10"
        />
      ) : (
        <div className="w-full max-w-4xl h-56 bg-slate-100 rounded-2xl shadow-inner mb-10 flex items-center justify-center text-slate-400 text-lg">
          (A/S 안내 배너 이미지가 아직 등록되지 않았습니다)
        </div>
      )}

      {/* ✅ 문의폼 그대로 재사용 */}
      <div className="w-full max-w-5xl">
        <InquiryForm />
      </div>
    </div>
  );
};

export default ASPage;
