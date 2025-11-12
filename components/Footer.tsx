// components/Footer.tsx
import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

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
{`휴로보틱스(HuRobotics, 이하 “회사”)는 고객님의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 및 관계 법령을 준수하고 있습니다.
회사는 본 개인정보처리방침을 통해 고객님께서 제공하시는 개인정보가 어떤 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 이루어지고 있는지 알려드립니다.
본 방침은 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리절차 및 기준을 안내하기 위해 수립·공개합니다.

■ 1. 수집하는 개인정보 항목
- 이름 또는 회사명, 주소, 연락처(전화번호 또는 휴대전화번호)
- 수집 방법 : 홈페이지 문의 양식, 서면 양식 등

■ 2. 개인정보의 수집 및 이용 목적
- 고객 문의 및 A/S 접수, 서비스 제공 관련 연락
- 서비스 제공에 따른 계약 이행 및 청구서 발송
※ 목적 외 이용 또는 제3자 제공 시에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받습니다.

■ 3. 개인정보의 보유 및 이용기간
- 개인정보는 문의 처리 완료 시점을 기준으로 1년 이내에 파기합니다.
- 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관할 수 있습니다.

■ 4. 개인정보의 파기절차 및 방법
- 목적 달성 후 내부 방침에 따라 별도 DB 또는 서류함으로 이동 후 일정 기간 저장 후 파기합니다.
- 전자적 파일은 복구 불가능한 기술적 방법으로 삭제하며, 문서는 분쇄 또는 소각합니다.

■ 5. 개인정보의 제공 및 위탁
- 회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
- 다만 법령에 의하거나 사전 동의가 있는 경우에 한하여 예외적으로 제공될 수 있습니다.

■ 6. 정보주체의 권리
- 정보주체는 개인정보 열람·정정·삭제·처리정지를 요구할 수 있습니다.
- 요청은 서면, 전화 또는 이메일로 가능하며 회사는 지체 없이 조치합니다.

■ 7. 개인정보의 안전성 확보조치
- 관리적 조치 : 내부관리계획 수립 및 직원 교육
- 기술적 조치 : 접근통제, 권한관리, 보안프로그램 설치
- 물리적 조치 : 전산실 및 자료보관실 출입통제

■ 8. 쿠키 등 자동수집 장치
- 회사는 쿠키를 사용하지 않습니다.

■ 9. 개인정보 보호책임자
- 성명 : [담당자명]
- 직위 : [직위]
- 연락처 : [전화번호]
- 이메일 : [이메일주소]

■ 10. 권익침해 구제방법
- 개인정보분쟁조정위원회 (www.1336.or.kr / 국번없이 1336)
- 한국인터넷진흥원(KISA) 개인정보침해신고센터 (privacy.kisa.or.kr / 118)

■ 11. 개인정보처리방침 변경
- 본 방침은 2025년 11월 12일부터 적용됩니다.
- 회사는 변경 시 홈페이지 공지사항 등을 통해 고지합니다.`}
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
{`「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제50조의2에 의거하여,
본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나
그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.
이를 위반 시 관련 법률에 따라 형사처벌을 받을 수 있습니다.`}
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
