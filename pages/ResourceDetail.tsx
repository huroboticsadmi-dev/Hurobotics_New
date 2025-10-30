import React from "react";

interface ResourceDetailProps {
  title: string;
  date: string;
  author: string;
  file?: string;
  onBack: () => void;
}

const ResourceDetail: React.FC<ResourceDetailProps> = ({ title, date, author, file, onBack }) => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-paperlogi font-bold text-[#175689] mb-2">{title}</h1>
        <p className="text-slate-600 text-sm">
          작성자: {author} | 등록일: {date}
        </p>
      </div>

      <div className="bg-white shadow-md p-8 rounded-xl border border-slate-100">
        <p className="text-slate-700 mb-6">
          스위피 로봇의 상세 스펙과 기술 자료가 포함되어 있습니다.
        </p>

        {file && (
          <div className="flex items-center mb-6">
            <span className="mr-3 font-semibold">첨부파일:</span>
            <a
              href={file}
              download
              className="text-[#175689] underline hover:text-[#1a6dab]"
            >
              {file.split("/").pop()}
            </a>
          </div>
        )}

        <button
          onClick={onBack}
          className="px-6 py-2 bg-[#175689] text-white rounded-full hover:bg-[#1a6dab]"
        >
          목록으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default ResourceDetail;
