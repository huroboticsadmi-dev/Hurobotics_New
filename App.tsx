// hurobotics-main/App.tsx

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import SolutionsPage from "./pages/SolutionsPage";
import InquiryPage from "./pages/InquiryPage";
import SupportPage from "./pages/SupportPage";
import RentalPage from "./pages/RentalPage"; // ✅ 체험신청 페이지 추가
import type { Product, PageId } from "./types";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // ✅ 페이지 변경 시 항상 맨 위로 이동
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
      case "rental":
        return <RentalPage />;
      case "inquiry":
        return <SupportPage />;
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
      {/* ✅ 고정 Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />


      {/* ✅ 메인 콘텐츠 */}
      <main className="flex-grow">{renderPage()}</main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default App;
