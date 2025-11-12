// hurobotics-main/App.tsx

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RentalPage from "./pages/RentalPage";   // ✅ 체험신청
import ASPage from "./pages/ASPage";           // ✅ A/S신청
import CasesPage from "./pages/CasesPage";     // ✅ 도입사례
import SupportPage from "./pages/SupportPage"; // ✅ 고객지원
import type { Product, PageId } from "./types";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // ✅ 제품 카테고리 상태 (한글)
  const [productCategory, setProductCategory] = useState<
    "청소로봇" | "물류로봇" | "서빙로봇" | "특수목적로봇"
  >("청소로봇");

  // ✅ 고객지원 탭 상태 (영문으로 고정)
  const [supportTab, setSupportTab] = useState<"resources" | "faq" | "contact">(
    "resources"
  );

  // ✅ 페이지 변경 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // ✅ 브라우저 뒤로가기/앞으로가기 흉내내기
  useEffect(() => {
    window.history.pushState({ page: currentPage }, "", `#${currentPage}`);

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [currentPage]);

  // ✅ 페이지 이동 핸들러
  const handleNavigate = (page: PageId) => {
    // ----- 제품소개 클릭 시 기본값을 청소로봇으로 설정 -----
    if (page === "products") {
      setProductCategory("청소로봇");
      setCurrentPage("products");
      return;
    }

    // ----- 제품 카테고리 전용 라우팅 -----
    if (page === "products-cleaner") {
      setProductCategory("청소로봇");
      setCurrentPage("products");
      return;
    }
    if (page === "products-logistics") {
      setProductCategory("물류로봇");
      setCurrentPage("products");
      return;
    }
    if (page === "products-delivery") {
      setProductCategory("서빙로봇");
      setCurrentPage("products");
      return;
    }
    if (page === "products-special") {
      setProductCategory("특수목적로봇");
      setCurrentPage("products");
      return;
    }

    // ----- 고객지원 3개 탭 라우팅 -----
    if (page === "support-resources") {
      setSupportTab("resources");
      setCurrentPage("support");
      return;
    }
    if (page === "support-faq") {
      setSupportTab("faq");
      setCurrentPage("support");
      return;
    }
    if (page === "support-contact") {
      setSupportTab("contact");
      setCurrentPage("support");
      return;
    }

    // ----- 일반 페이지 이동 -----
    setCurrentPage(page);

    // 제품 상세 초기화
    if (page !== "product") {
      setSelectedProduct(null);
    }
  };

  // ✅ 제품 클릭 → 상세 페이지로 이동
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage("product");
  };

  // ✅ 페이지 렌더링
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onProductSelect={handleProductSelect}
            onNavigate={handleNavigate}
          />
        );

      case "products":
        return (
          <ProductsPage
            onProductSelect={handleProductSelect}
            initialCategory={productCategory}
          />
        );

      case "product":
        return selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => handleNavigate("products")}
            onNavigate={handleNavigate}
          />
        ) : (
          <ProductsPage
            onProductSelect={handleProductSelect}
            initialCategory={productCategory}
          />
        );

      case "experience":
        return <RentalPage />;

      case "as":
        return <ASPage />;

      case "cases":
        return <CasesPage />;

      case "support":
        return <SupportPage activeTab={supportTab} />;

      default:
        return (
          <HomePage
            onProductSelect={handleProductSelect}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
