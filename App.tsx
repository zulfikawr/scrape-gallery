import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Articles } from "./pages/Articles";
import { ArticleDetail } from "./pages/ArticleDetail";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Code } from "./pages/Code";
import { Tables } from "./pages/Tables";
import { Messy } from "./pages/Messy";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/code" element={<Code />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/messy" element={<Messy />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
