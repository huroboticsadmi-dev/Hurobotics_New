import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaBlogger } from "react-icons/fa"; // ✅ Blogger 아이콘 사용 (네이버용으로 대체)

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      {/* ===== Footer 본문 ===== */}
      <footer className="bg-slate-800 text-slate-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* 왼쪽 회사 정보 */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                HuRobotics
              </h2>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>대표이사: 김기만</p>
                <p>
                  주소: <br />
                  (본사) 서울시 강남구 논현동 203 <br />
                  (사업장) 서울시 서초구 방배동 2732-45
                </p>
                <p>사업자등록번호: 819-81-03171</p>
                <p>전화: 1577-3706, 070-4155-5542</p>
                <p>영업시간: 09:00 ~ 18:00</p>
                <p>이메일: huroboticsadmi@gmail.com</p>
              </div>
            </div>

            {/* 오른쪽 — 아이콘 + 정책 링크 */}
            <div className="flex flex-col md:items-end items-start gap-4 w-full md:w-auto">
              {/* 소셜 아이콘 */}
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
                <a
                  href="https://www.facebook.com/profile.php?id=61583444499475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                  aria-label="HuRobotics Facebook"
                >
                  <FaFacebook />
                </a>
                {/* ✅ 네이버 블로그 아이콘 */}
                <a
                  href="https://blog.naver.com/hurobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                  aria-label="HuRobotics Naver Blog"
                >
                  <FaBlogger />
                </a>
              </div>

              {/* 정책 링크 */}
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="hover:text-white transition-colors"
                >
                  개인정보처리방침
                </button>
                <span className="text-slate-500">|</span>
                <button
                  onClick={() => setShowEmail(true)}
                  className="hover:text-white transition-colors"
                >
                  이메일무단수집거부
                </button>
              </div>
            </div>
          </div>

          {/* 하단 저작권 표시 */}
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
            <p>
              COPYRIGHT &copy; {new Date().getFullYear()} HuRobotics Co., Ltd.
              ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== 개인정보처리방침 모달 ===== */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-3xl p-6 relative overflow-y-auto max-h-[80vh]">
            <h3 className="text-xl font-bold mb-3 text-slate-800">
              개인정보처리방침
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {`휴로보틱스(HuRobotics, 이하 “회사”)는 고객님의 개인정보를 중요하게 생각하며... (이하 생략)`}
            </p>
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 text-xl"
              aria-label="닫기"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* ===== 이메일무단수집거부 모달 ===== */}
      {showEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 relative">
            <h3 className="text-xl font-bold mb-3 text-slate-800">
              이메일무단수집거부
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {`「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제50조의2에 의거하여... (이하 생략)`}
            </p>
            <button
              onClick={() => setShowEmail(false)}
              className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 text-xl"
              aria-label="닫기"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
