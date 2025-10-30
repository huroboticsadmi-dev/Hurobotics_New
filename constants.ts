import type { Page, Solution } from "./types";

// --- NAV_LINKS ---
export const NAV_LINKS: Page[] = [
  { name: "홈", path: "/", pageId: "home" },
  {
    name: "제품소개",
    path: "/products",
    pageId: "products",
    children: [
      { name: "청소로봇", path: "/products/cleaner", pageId: "products" },
      { name: "물류로봇", path: "/products/logistics", pageId: "products" },
      { name: "서빙로봇", path: "/products/delivery", pageId: "products" },
      { name: "특수목적로봇", path: "/products/special", pageId: "products" },
    ],
  },
  {
    name: "솔루션",
    path: "/solutions",
    pageId: "solutions",
    children: [
      { name: "솔루션", path: "/solutions", pageId: "solutions" },
      { name: "서비스 시스템", path: "/solutions/system", pageId: "solutions" },
    ],
  },
  {
    name: "체험신청",
    path: "/demo",
    pageId: "demo",
    children: [
      { name: "체험신청", path: "/demo", pageId: "demo" },
    ],
  },
  {
    name: "고객지원",
    path: "/inquiry",
    pageId: "inquiry",
    children: [
      { name: "A/S 신청", path: "/inquiry/service", pageId: "inquiry" },
      { name: "파트너십", path: "/inquiry/partner", pageId: "inquiry" },
      { name: "자료실", path: "/inquiry/resources", pageId: "inquiry" },
      { name: "자주 묻는 질문", path: "/inquiry/faq", pageId: "inquiry" },
    ],
  },
];

// --- PRODUCTS ---
export const PRODUCTS = [
  {
    id: "MT1",
    title: "LIBERTY MT1",
    name: "대규모 공간 청소가 가능한 건식청소로봇",
    imageUrl: "./images/LIBERTY_MT1.png",
    category: "청소로봇" as const,
    descriptionPoints: [
      "AI 기반 자율주행",
      "고효율 필터 시스템",
      "IoT 실시간 모니터링",
    ],
    type: "Cleaner",
    path: "/product/MT1",
    isAvailable: true,
  },
  {
    id: "CC1",
    title: "LIBERTY CC1",
    name: "지능형 상업용 청소 로봇",
    imageUrl: "./images/LIBERTY_CC1.png",
    category: "청소로봇" as const,
    descriptionPoints: [
      "AI 기반 자율주행",
      "고효율 필터 시스템",
      "IoT 실시간 모니터링",
    ],
    type: "Cleaner",
    path: "/product/CC1",
    isAvailable: true,
  },
  {
    id: "SH1",
    title: "LIBERTY SH1",
    name: "직립형 스마트 바닥 세척기",
    imageUrl: "./images/LIBERTY_SH1_BLACK.png",
    category: "청소로봇" as const,
    descriptionPoints: ["다차원 청소", "부품 자체 검사", "빠른 배터리 교체"],
    type: "Cleaner",
    path: "/product/SH1",
    isAvailable: true,
  },
  {
    id: "T300",
    title: "LIBERTY T300",
    name: "자율 물류 이동 솔루션",
    imageUrl: "./images/LIBERTY_T300_WHITE.png",
    category: "물류로봇" as const,
    descriptionPoints: [
      "자율 물류 이동",
      "경로 최적화 알고리즘",
      "다중 로봇 관리 시스템",
    ],
    type: "Logistics",
    path: "/product/T300",
    isAvailable: true,
  },
  {
    id: "DELIVERY",
    title: "비대면 배달 서비스 로봇",
    name: "서빙 및 배송 자동화",
    imageUrl: "./images/LIBERTY_T300_WHITE.png",
    category: "서빙로봇" as const,
    descriptionPoints: [
      "빠르고 안전한 배송",
      "엘리베이터 연동 가능",
      "비접촉 서비스 제공",
    ],
    type: "Delivery",
    path: "/solutions",
    isAvailable: false,
  },
  {
    id: "SPECIAL",
    title: "맞춤형 특수 임무 로봇",
    name: "현장 맞춤 기능 설계",
    imageUrl: "./images/LIBERTY_MT1.png",
    category: "특수목적로봇" as const,
    descriptionPoints: [
      "맞춤형 기능 설계",
      "위험 구역 투입 가능",
      "고강도 내구성 확보",
    ],
    type: "Special",
    path: "/solutions",
    isAvailable: false,
  },
] as const;

// --- SOLUTIONS ---
export const SOLUTIONS: Solution[] = [
  {
    id: "sol-hotel",
    name: "호텔",
    description: [
      "객실 및 복도 청소 자동화로 인력 부담 최소화",
      "고객 경험 향상을 위한 위생 관리 강화",
      "24시간 운영 가능한 무인 청소 시스템",
    ],
    imageUrl: "./images/Hotel_picture.jpg",
    path: "/solutions/hotel",
  },
  {
    id: "sol-restaurant",
    name: "음식점",
    description: [
      "홀·주방 동선 최적화로 효율적인 서비스 운영",
      "테이블 청소 및 살균 자동화로 위생 수준 향상",
      "피크 타임 인력 부담 완화",
    ],
    imageUrl: "./images/big_restaurant.jpg",
    path: "/solutions/restaurant",
  },
  {
    id: "sol-mart",
    name: "대형마트",
    description: [
      "매장 내 바닥 청소 및 물류 이송 자동화",
      "재고 및 진열 구역 자동 모니터링",
      "고객 동선 최적화를 통한 효율적 관리",
    ],
    imageUrl: "./images/mart.jpg",
    path: "/solutions/mart",
  },
  {
    id: "sol-logistics",
    name: "물류창고",
    description: [
      "AGV 기반 자동 물류 이송",
      "입출고 자동화 및 경로 최적화 시스템",
      "야간 무인 물류 운영 환경 구축",
    ],
    imageUrl: "./images/Logistics_Warehouse.jpg",
    path: "/solutions/logistics",
  },
  {
    id: "sol-hospital",
    name: "병원",
    description: [
      "병실·복도 청소 및 살균 자동화",
      "의료 폐기물 운반 자동화",
      "의료진 업무 부담 경감 및 감염 예방 강화",
    ],
    imageUrl: "./images/hospital_picture.jpg",
    path: "/solutions/hospital",
  },
  {
    id: "sol-apartment",
    name: "아파트 지하주차장",
    description: [
      "넓은 면적의 먼지·오염 자동 청소",
      "야간 무인 청소로 입주민 불편 최소화",
      "관리비 절감 및 쾌적한 환경 유지",
    ],
    imageUrl: "./images/underground_parking.jpg",
    path: "/solutions/apartment",
  },
  {
    id: "sol-construction",
    name: "공사현장",
    description: [
      "분진 및 잔해물 자동 수거 시스템",
      "위험 구역 내 원격 제어 청소",
      "작업자 안전 확보 및 환경 개선",
    ],
    imageUrl: "./images/Indoor_Building_Site.jpg",
    path: "/solutions/construction",
  },
  {
    id: "sol-education",
    name: "교육시설",
    description: [
      "교실·복도·강당 등 청소 자동화",
      "감염 예방 및 위생 환경 조성",
      "정규 수업 외 시간대 자동 청소 운영",
    ],
    imageUrl: "./images/education.jpg",
    path: "/solutions/education",
  },
];
