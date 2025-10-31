// components/RentalForm.tsx
import React, { useState } from "react";

const RentalForm: React.FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    location: "",
    product: "",
    concernOption: "",
    otherConcern: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const OPTIONS = [
    "청소시간",
    "청소도구",
    "오염물 제거 어려움 (기름, 먼지 등등..)",
    "기타",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSev3zpMw4Z1ADffkvc-6VIAMPDtaE2EXKmSMfljDAu-GgCV1Q/formResponse";

    const isOther = formData.concernOption === "기타";

    const body = new URLSearchParams({
      "entry.2080266763": formData.company,
      "entry.976553456": formData.location,
      "entry.172256757": formData.product,
      "entry.1103512394": isOther
        ? "__other_option__"
        : formData.concernOption,
      ...(isOther && {
        "entry.1103512394.other_option_response": formData.otherConcern,
      }),
    }).toString();

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setIsSuccess(true);
      setFormData({
        company: "",
        location: "",
        product: "",
        concernOption: "",
        otherConcern: "",
      });
    } catch (err) {
      alert("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-slate-50 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#175689] mb-4">
          시연 신청이 완료되었습니다 🎉
        </h2>
        <p className="text-lg text-slate-600">
          담당자가 빠른 시일 내에 연락드리겠습니다. 감사합니다.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 px-8 py-3 bg-[#175689] text-white rounded-full hover:bg-[#124c73] transition-all"
        >
          다시 작성하기
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-[100vh] bg-slate-50 flex items-center justify-center px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl w-full border border-slate-200"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#175689] font-paperlogi">
          시연 신청 폼
        </h2>

        {/* 회사명 */}
        <div className="mb-6">
          <label className="block text-slate-700 font-semibold mb-2">회사명</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#175689] focus:outline-none"
            required
          />
        </div>

        {/* 시연 희망 장소 */}
        <div className="mb-6">
          <label className="block text-slate-700 font-semibold mb-2">시연 희망 장소</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#175689] focus:outline-none"
            required
          />
        </div>

        {/* 관심 있는 제품 */}
        <div className="mb-6">
          <label className="block text-slate-700 font-semibold mb-2">관심 있는 제품</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#175689] focus:outline-none"
            placeholder="예: LIBERTY CC1, LIBERTY MT1 등"
            required
          />
        </div>

        {/* 청소 고민점 */}
        <div className="mb-6">
          <label className="block text-slate-700 font-semibold mb-2">
            청소하면서 가장 고민되는 점이 무엇인가요?
          </label>
          <div className="space-y-3">
            {OPTIONS.map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="concernOption"
                  value={opt}
                  checked={formData.concernOption === opt}
                  onChange={handleChange}
                  className="text-[#175689]"
                  required
                />
                <span className="text-slate-700">{opt}</span>
              </label>
            ))}
          </div>

          {/* 기타 입력창 */}
          {formData.concernOption === "기타" && (
            <textarea
              name="otherConcern"
              value={formData.otherConcern}
              onChange={handleChange}
              placeholder="기타 의견을 입력해주세요."
              className="w-full mt-3 border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#175689] focus:outline-none"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-[#175689] text-white font-bold rounded-full hover:bg-[#124c73] transition-all disabled:opacity-50"
        >
          {isSubmitting ? "전송 중..." : "신청하기"}
        </button>
      </form>
    </section>
  );
};

export default RentalForm;
