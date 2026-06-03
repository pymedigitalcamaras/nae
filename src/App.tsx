import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Pricing = lazy(() => import('./pages/Pricing'));
const SavingsCalculator = lazy(() => import('./pages/SavingsCalculator'));
const Admin = lazy(() => import('./pages/Admin'));
const OEM = lazy(() => import('./pages/OEM'));

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-nae-blue border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
        <Route path="/products" element={<Suspense fallback={<Loading />}><Products /></Suspense>} />
        <Route path="/products/:slug" element={<Suspense fallback={<Loading />}><ProductDetail /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<Loading />}><Services /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<Loading />}><Register /></Suspense>} />
        <Route path="/oem" element={<Suspense fallback={<Loading />}><OEM /></Suspense>} />
        <Route path="/pricing" element={<Suspense fallback={<Loading />}><Pricing /></Suspense>} />
        <Route path="/savings-calculator" element={<Suspense fallback={<Loading />}><SavingsCalculator /></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={<Loading />}><ProtectedRoute><Dashboard /></ProtectedRoute></Suspense>} />
        <Route path="/admin" element={<Suspense fallback={<Loading />}><ProtectedRoute adminOnly><Admin /></ProtectedRoute></Suspense>} />
      </Route>
    </Routes>
  );
}
