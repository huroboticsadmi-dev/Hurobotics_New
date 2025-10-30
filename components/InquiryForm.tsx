import React, { useState } from "react";

const InquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    fetch(
      "https://script.google.com/macros/s/AKfycbw-sHvdJtK4nt24gtBMViRsP3YeBPY9tCLzN3UepdJ-2BE80Qd4nz76UKZSyn-rbwI0/exec",
      {
        method: "POST",
        body: data,
        mode: "no-cors",
      }
    ).then(() => setSubmitted(true));
  };

  return (
    <div className="flex justify-center items-start bg-white py-16 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-100">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-10 sm:p-12">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              문의를 남겨주세요
            </h2>

            {/* 문의유형 */}
            <div className="mb-6">
              <label className="block text-left text-lg font-semibold text-gray-800 mb-3">
                문의유형<span className="text-[#175689]">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="entry.1042803837"
                    value="고객지원"
                    required
                    className="text-[#175689] focus:ring-[#175689]"
                  />
                  고객지원
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="entry.1042803837"
                    value="렌탈문의"
                    className="text-[#175689] focus:ring-[#175689]"
                  />
                  렌탈문의
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="entry.1042803837"
                    value="A/S신청"
                    className="text-[#175689] focus:ring-[#175689]"
                  />
                  A/S신청
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="entry.1042803837"
                    value="파트너십"
                    className="text-[#175689] focus:ring-[#175689]"
                  />
                  파트너십
                </label>
              </div>
            </div>

            {/* 이름 */}
            <div className="mb-6">
              <label className="block text-left text-lg font-semibold text-gray-800 mb-2">
                이름<span className="text-[#175689]">*</span>
              </label>
              <input
                name="entry.393729095"
                type="text"
                placeholder="성함을 입력해주세요."
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#175689]"
              />
            </div>

            {/* 연락처 */}
            <div className="mb-6">
              <label className="block text-left text-lg font-semibold text-gray-800 mb-2">
                연락처<span className="text-[#175689]">*</span>
              </label>
              <input
                name="entry.674743901"
                type="tel"
                placeholder="'-' 없이 입력해주세요. (예: 01012345678)"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#175689]"
              />
            </div>

            {/* 주소 */}
            <div className="mb-6">
              <label className="block text-left text-lg font-semibold text-gray-800 mb-2">
                주소<span className="text-[#175689]">*</span>
              </label>
              <input
                name="entry.1832876511"
                type="text"
                placeholder="업체 및 주소를 입력해주세요."
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#175689]"
              />
            </div>

            {/* 문의내용 */}
            <div className="mb-6">
              <label className="block text-left text-lg font-semibold text-gray-800 mb-2">
                문의내용<span className="text-[#175689]">*</span>
              </label>
              <textarea
                name="entry.847066597"
                placeholder="내용을 입력해주세요."
                rows={5}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#175689] resize-none"
              />
            </div>

            {/* 개인정보 동의 */}
            <div className="flex items-center mb-8">
              <input
                id="privacy"
                type="checkbox"
                required
                className="w-4 h-4 text-[#175689] border-gray-300 rounded focus:ring-[#175689]"
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                개인정보 보호정책에 따라 개인 데이터를 공유하는 데 동의합니다.
              </label>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full bg-[#175689] hover:bg-[#144d74] text-white font-bold py-4 rounded-lg shadow-md transition duration-300"
            >
              문의하기 ↗
            </button>
          </form>
        ) : (
          <div className="text-center py-24">
            <h2 className="text-2xl font-bold text-[#175689]">
              ✅ 문의가 정상적으로 제출되었습니다.
            </h2>
            <p className="text-gray-600 mt-4">
              빠른 시일 내에 담당자가 연락드리겠습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryForm;
