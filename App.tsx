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

  // ✅ 페이지 변경 시 항상 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // ✅ 페이지 이동 핸들러
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    if (page !== "product") {
      setSelectedProduct(null);
    }
  };

  // ✅ 제품 클릭 시 상세 페이지로 이동
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
        return <ProductsPage onProductSelect={handleProductSelect} />;

      case "product":
        return selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => handleNavigate("products")}
            onNavigate={handleNavigate}
          />
        ) : (
          <ProductsPage onProductSelect={handleProductSelect} />
        );

      case "experience":
        return <RentalPage />; // ✅ 체험신청

      case "as":
        return <ASPage />; // ✅ A/S신청

      case "cases":
        return <CasesPage />; // ✅ 도입사례 (Solutions 대체)

      case "support":
        return <SupportPage />; // ✅ 고객지원 (문의 등 포함)

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
      {/* ✅ 고정 헤더 */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* ✅ 메인 콘텐츠 */}
      <main className="flex-grow">{renderPage()}</main>

      {/* ✅ 푸터 */}
      <Footer />
    </div>
  );
};

export default App;
