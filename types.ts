// hurobotics-main/types.ts

export type PageId =
  | 'home'
  | 'products'
  | 'product'   // ✅ 상세 페이지
  | 'solutions'
  | 'company'
  | 'inquiry'
  | 'about'
  | 'demo';     // ✅ 체험신청 추가 (새 메뉴)

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
  isAvailable?: boolean; // ✅ 새로 추가
}

export interface Solution {
  id: string;
  name: string;
  description: string[];
  imageUrl: string;
  path: string;
}
