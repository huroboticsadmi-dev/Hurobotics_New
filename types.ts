// hurobotics-main/types.ts

export type PageId =
  | 'home'
  | 'products'
  | 'product'   // ✅ 상세 페이지
  | 'solutions'
  | 'company'
  | 'inquiry'
  | 'about'
  | 'rental'    // ✅ 체험문의 추가!
  | 'support'  // ✅ 지원센터(고객지원) 페이지 추가!
  | 'ASPage';

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
