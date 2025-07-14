'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { products } from '../data/products';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const brandFilter = searchParams.get('brand');

  const filteredProducts = brandFilter
    ? products.filter((p) => p.brand === brandFilter)
    : products;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        {brandFilter ? `${brandFilter} Products` : 'All Products'}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found for {brandFilter}.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border text-center p-4 rounded-lg shadow-md bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} hover`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <h2 className="text-xl text-black font-semibold">{product.name}</h2>
      <p className="text-lg text-gray-600">{product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Buy Now
      </Link>
    </div>
  );
}
