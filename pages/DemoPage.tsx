// pages/DemoPage.tsx
import React from "react";
import InquiryForm from "../components/InquiryForm";

const DemoPage: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-paperlogi font-bold text-[#175689] text-center mb-6">
          체험 신청
        </h1>
        <p className="text-center text-slate-600 mb-12">
          휴로보틱스의 혁신적인 로봇을 직접 경험해보세요.
          <br />
          아래 양식을 작성하시면 담당자가 빠르게 연락드리겠습니다.
        </p>

        {/* ✅ 문의 폼 그대로 재사용 */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
