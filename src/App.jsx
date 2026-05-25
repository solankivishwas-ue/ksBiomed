import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Services from "./pages/Services.jsx";
import Brands from "./pages/Brands.jsx";
import Clients from "./pages/Clients.jsx";
import Contact from "./pages/Contact.jsx";

const pageMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

function AnimatedRoute({ children }) {
  return (
    <motion.main {...pageMotion} className="page-motion">
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
          <Route path="/index.html" element={<AnimatedRoute><Home /></AnimatedRoute>} />
          <Route path="/about" element={<AnimatedRoute><About /></AnimatedRoute>} />
          <Route path="/about.html" element={<AnimatedRoute><About /></AnimatedRoute>} />
          <Route path="/products" element={<AnimatedRoute><Products /></AnimatedRoute>} />
          <Route path="/products.html" element={<AnimatedRoute><Products /></AnimatedRoute>} />
          <Route path="/services" element={<AnimatedRoute><Services /></AnimatedRoute>} />
          <Route path="/services.html" element={<AnimatedRoute><Services /></AnimatedRoute>} />
          <Route path="/brands" element={<AnimatedRoute><Brands /></AnimatedRoute>} />
          <Route path="/brands.html" element={<AnimatedRoute><Brands /></AnimatedRoute>} />
          <Route path="/clients" element={<AnimatedRoute><Clients /></AnimatedRoute>} />
          <Route path="/clients.html" element={<AnimatedRoute><Clients /></AnimatedRoute>} />
          <Route path="/contact" element={<AnimatedRoute><Contact /></AnimatedRoute>} />
          <Route path="/contact.html" element={<AnimatedRoute><Contact /></AnimatedRoute>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
