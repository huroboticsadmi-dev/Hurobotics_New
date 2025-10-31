import React from "react";
import RentalForm from "../components/RentalForm";

const RentalPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      {/* ✅ 페이지 상단 여백 확보 + 폼 불러오기 */}
      <RentalForm />
    </div>
  );
};

export default RentalPage;
