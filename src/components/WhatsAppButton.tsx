import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 3000); return () => clearTimeout(t); }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 bg-white rounded-xl shadow-2xl p-4 w-72 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-sm text-gray-800">¿Necesitas ayuda?</span>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={16} /></button>
          </div>
          <p className="text-xs text-gray-500 mb-3">Escríbenos por WhatsApp y te atenderemos en español.</p>
          <a href="https://wa.me/56990117784?text=Hola%20NAE%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20bombas%20de%20calor" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
            <MessageCircle size={16} /> Iniciar chat
          </a>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
        {open ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>
    </div>
  );
}
