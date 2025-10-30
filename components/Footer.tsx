// Footer.tsx
import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* 왼쪽 회사 정보 */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">HuRobotics</h2>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>대표이사: 김기만</p>
              <p>주소: (본사) 서울시 강남구 논현동 203 (사업장) 서울시 서초구 방배동 2732-45</p>
              <p>사업자등록번호: 819-81-03171</p>
              <p>전화: 1577-3706, 070-4155-5542</p>
              <p>이메일: huroboticsadmi@gmail.com</p>
            </div>
          </div>

          {/* 오른쪽 — 아이콘 + 정책 링크 */}
          <div className="flex flex-col md:items-end items-start gap-4 w-full md:w-auto">
            {/* ✅ 소셜 아이콘 */}
            <div className="flex space-x-5 text-2xl text-slate-400">
              <a
                href="https://www.youtube.com/@Hurobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
                aria-label="HuRobotics YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/hu_robocits/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
                aria-label="HuRobotics Instagram"
              >
                <FaInstagram />
              </a>
            </div>

            {/* ✅ 정책 링크 (아래로 내림) */}
            <div className="flex space-x-6 text-sm mt-2">
              <a href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-white transition-colors">
                이메일무단수집거부
              </a>
            </div>
          </div>
        </div>

        {/* 하단 저작권 표시 */}
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p>
            COPYRIGHT &copy; {new Date().getFullYear()} HuRobotics Co., Ltd. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
