import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../constants";
import { Star, ShoppingCart } from "lucide-react";

export const Products: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-200 pb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Products
          </h2>
          <p className="text-neutral-500 text-sm mt-1">
            E-commerce patterns with nested data attributes.
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        id="product-grid"
      >
        {PRODUCTS.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="group block bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
            data-sku={product.sku}
          >
            <div className="aspect-square bg-neutral-100 relative group-hover:bg-neutral-50 transition-colors overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {!product.inStock && (
                <div className="absolute top-2 right-2 bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm bg-opacity-90">
                  Out of Stock
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-bold text-neutral-900 text-sm leading-tight group-hover:underline decoration-neutral-400 underline-offset-4 mb-1 truncate">
                {product.name}
              </h3>

              <div className="flex items-center gap-1 mb-3">
                <div className="flex text-neutral-900">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
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
                <span className="text-neutral-400 text-xs">
                  ({product.reviews})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xs text-neutral-500 font-medium">
                    $
                  </span>
                  <span className="text-lg font-bold text-neutral-900">
                    {product.price.toFixed(2)}
                  </span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center bg-neutral-100 rounded-full text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors">
                  <ShoppingCart size={14} />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
