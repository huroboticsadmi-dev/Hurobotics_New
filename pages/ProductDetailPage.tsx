
import React from 'react';
import type { Product } from '../types';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBack }) => {
  return (
    <div className="bg-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
            <button onClick={onBack} className="text-blue-800 hover:text-blue-600 transition-colors duration-300 font-semibold">
                &larr; 제품 목록으로 돌아가기
            </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <p className="text-blue-700 font-semibold mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
            <p className="text-lg text-slate-600 mb-8">{product.longDescription}</p>
            
            <div className="bg-slate-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">제품 사양</h2>
                <ul className="space-y-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                        <li key={key} className="flex justify-between border-b border-slate-200 pb-2">
                            <span className="font-medium text-slate-700">{key}</span>
                            <span className="text-slate-900">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <button className="w-full bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors duration-300 shadow-lg">
                    견적 문의하기
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;