import React, { useState } from "react";

interface Resource {
  id: number;
  title: string;
  date: string;
  author: string;
  file?: string;
}

const ResourcesList: React.FC<{ onSelect: (id: number) => void }> = ({ onSelect }) => {
  const [resources] = useState<Resource[]>([
    // 🔹 지금은 비워두면 "파일 목록이 없습니다" 문구가 나옵니다.
    // {
    //   id: 1,
    //   title: "지능형 상업용 청소 로봇 스위피 제품소개서",
    //   date: "2025.03.14",
    //   author: "관리자",
    //   file: "./files/SWEEPI_INTRO.pdf",
    // },
  ]);

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-paperlogi font-bold text-[#175689] mb-8 text-center">
        자료실
      </h1>

      <table className="w-full border-t border-b border-slate-200">
        <thead>
          <tr className="bg-slate-100 text-slate-700">
            <th className="py-3 text-left px-4">제목</th>
            <th className="py-3 px-4">작성자</th>
            <th className="py-3 px-4">등록일</th>
          </tr>
        </thead>

        <tbody>
          {resources.length === 0 ? (
            <tr>
              <td colSpan={3} className="py-10 text-center text-slate-500 text-lg">
                파일 목록이 없습니다.
              </td>
            </tr>
          ) : (
            resources.map((r) => (
              <tr
                key={r.id}
                className="border-b hover:bg-slate-50 cursor-pointer"
                onClick={() => onSelect(r.id)}
              >
                <td className="py-3 px-4 text-[#175689] font-semibold">{r.title}</td>
                <td className="py-3 px-4 text-center">{r.author}</td>
                <td className="py-3 px-4 text-center">{r.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResourcesList;
