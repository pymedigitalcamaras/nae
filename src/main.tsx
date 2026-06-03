import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import './index.css';
import App from './App';

// NAE v4 - Supabase connected
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
