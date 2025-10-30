// hurobotics-main/App.tsx

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import SolutionsPage from "./pages/SolutionsPage";
import DemoPage from "./pages/DemoPage";
import InquiryPage from "./pages/InquiryPage";
import SupportPage from "./pages/SupportPage";
import type { Product, PageId } from "./types";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    if (page !== "product") {
      setSelectedProduct(null);
    }
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage("product");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onProductSelect={handleProductSelect}
            onNavigate={handleNavigate}
          />
        );

      case "product":
        return selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => handleNavigate("products")}
          />
        ) : (
          <HomePage
            onProductSelect={handleProductSelect}
            onNavigate={handleNavigate}
          />
        );

      case "products":
        return <ProductsPage onProductSelect={handleProductSelect} />;

      case "solutions":
        return <SolutionsPage />;

      case "demo":
        return <DemoPage />; // ✅ 체험신청 페이지 연결 (문의폼만 표시)

      case "company":
        return <DemoPage />; // 🔹 필요 시 나중에 회사소개 전용 페이지로 교체 가능

      case "about":
        return <DemoPage />; // 🔹 현재는 임시 연결 유지

      case "inquiry":
        return <SupportPage />; // ✅ 고객지원 (4탭 구조: A/S, 파트너십, 자료실, FAQ)

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
