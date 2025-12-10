import React from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../constants";
import {
  Star,
  ShoppingCart,
  Truck,
  RotateCcw,
  Shield,
  ChevronLeft,
} from "lucide-react";

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-8 text-center text-neutral-500">Product not found</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link
        to="/products"
        className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 mb-6 font-medium"
      >
        <ChevronLeft size={16} />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery Mockup */}
        <div className="space-y-4">
          <div className="aspect-square bg-white border border-neutral-200 rounded-xl overflow-hidden flex items-center justify-center p-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-white border border-neutral-200 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer hover:border-neutral-400 transition-colors"
              >
                <img
                  src={product.image}
                  alt={`${product.name} thumbnail`}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-neutral-500">
              {product.sku}
            </span>
            {product.inStock ? (
              <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded">
                In Stock
              </span>
            ) : (
              <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-1 rounded">
                Out of Stock
              </span>
            )}
          </div>

          <h1 className="text-3xl font-extrabold text-neutral-900 mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <div className="flex text-neutral-900">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={
                      i < Math.floor(product.rating) ? "currentColor" : "none"
                    }
                    className={
                      i < Math.floor(product.rating)
                        ? "text-neutral-900"
                        : "text-neutral-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-neutral-900 ml-1">
                {product.rating}
              </span>
            </div>
            <span className="text-sm text-neutral-400 border-l border-neutral-200 pl-4">
              {product.reviews} Reviews
            </span>
          </div>

          <div className="text-4xl font-bold text-neutral-900 mb-6">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-neutral-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="space-y-4 mb-8">
            <button className="w-full bg-neutral-900 text-white py-4 rounded-lg font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="w-full bg-white border border-neutral-200 text-neutral-900 py-4 rounded-lg font-bold hover:bg-neutral-50 transition-colors">
              Buy Now
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6">
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="text-neutral-400" size={24} />
              <span className="text-xs font-medium text-neutral-600">
                Free Shipping
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <RotateCcw className="text-neutral-400" size={24} />
              <span className="text-xs font-medium text-neutral-600">
                30 Days Return
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Shield className="text-neutral-400" size={24} />
              <span className="text-xs font-medium text-neutral-600">
                2 Year Warranty
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Table */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
          Technical Specifications
        </h2>
        <div className="border border-neutral-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm text-left">
            <tbody className="divide-y divide-neutral-100">
              {product.features.map((feature, idx) => (
                <tr key={idx} className="bg-white hover:bg-neutral-50">
                  <td className="py-4 px-6 font-medium text-neutral-500 w-1/3">
                    Feature {idx + 1}
                  </td>
                  <td className="py-4 px-6 text-neutral-900">{feature}</td>
                </tr>
              ))}
              <tr className="bg-white hover:bg-neutral-50">
                <td className="py-4 px-6 font-medium text-neutral-500 w-1/3">
                  SKU
                </td>
                <td className="py-4 px-6 text-neutral-900 font-mono">
                  {product.sku}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
