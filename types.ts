// hurobotics-main/types.ts

/* ============================
   ✅ PageId 타입 정의
   App.tsx / Header / constants.ts 에서 사용하는 모든 PageId 포함
============================ */
export type PageId =
  | "home"
  | "products"
  | "product"
  | "products-cleaner"
  | "products-logistics"
  | "products-delivery"
  | "products-special"
  | "experience"   // 체험신청
  | "as"           // A/S신청
  | "cases"        // 도입사례
  | "support"      // 고객지원 메인
  | "support-resources" // ✅ 자료실
  | "support-faq"       // ✅ FAQ
  | "support-contact";  // ✅ 문의하기

/* ============================
   ✅ Page 정보 타입
============================ */
export interface Page {
  name: string;
  path: string;
  pageId: PageId;
  children?: Page[];
}

/* ============================
   ✅ 제품 카테고리 타입
============================ */
export type ProductCategory =
  | "청소로봇"
  | "물류로봇"
  | "서빙로봇"
  | "특수목적로봇";

/* ============================
   ✅ 솔루션 분야 타입
============================ */
export type SolutionField =
  | "호텔"
  | "음식업"
  | "마트"
  | "제조물류"
  | "건강의료"
  | "주택빌딩"
  | "교육"
  | "엔터테인먼트"
  | "교통서비스"
  | "공공서비스";

/* ============================
   ✅ Product 타입
============================ */
export interface Product {
  id: string;
  title: string;
  name: string;
  imageUrl: string;
  category: ProductCategory;
  descriptionPoints: string[];
  type: string;
  path: string;
  isAvailable?: boolean;          // 제품 준비 상태
  longDescription?: string;       // 상세 내용
  specs?: Record<string, string>; // 스펙 정보
}

/* ============================
   ✅ Solution 타입
============================ */
export interface Solution {
  id: string;
  name: string;
  description: string[];
  imageUrl: string;
  path: string;
}
