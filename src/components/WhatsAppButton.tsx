import { MessageCircle } from 'lucide-react';
export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/56990117784?text=Hola%20NAE%2C%20me%20interesa%20sus%20productos" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl" aria-label="WhatsApp">
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
