// hurobotics-main/types.ts

export type PageId =
  | "home"
  | "products"
  | "product"
  | "experience" // 체험신청
  | "as"         // A/S신청
  | "cases"      // 도입사례
  | "support";   // 고객지원


export interface Page {
  name: string;
  path: string;
  pageId: PageId;
  children?: Page[];
}

export type ProductCategory =
  | '청소로봇'
  | '물류로봇'
  | '서빙로봇'
  | '특수목적로봇';

export type SolutionField =
  | '호텔'
  | '음식업'
  | '마트'
  | '제조물류'
  | '건강의료'
  | '주택빌딩'
  | '교육'
  | '엔터테인먼트'
  | '교통서비스'
  | '공공서비스';

export interface Product {
  id: string;
  title: string;
  name: string;
  imageUrl: string;
  category: ProductCategory;
  descriptionPoints: string[];
  type: string;
  path: string;
  isAvailable?: boolean; // ✅ 제품 준비 상태 표시
  longDescription?: string; // ✅ 제품 상세 설명 (optional)
  specs?: Record<string, string>; // ✅ 제품 사양 (optional)
}

export interface Solution {
  id: string;
  name: string;
  description: string[];
  imageUrl: string;
  path: string;
}
