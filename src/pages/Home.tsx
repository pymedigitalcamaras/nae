import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowRight,
  Factory,
  Wrench,
  Truck,
  ShieldCheck,
} from 'lucide-react';
import { products } from '../data';

/* ─────────────────── projects data ─────────────────── */
interface Project {
  image: string;
  title: string;
  location: string;
  desc: string;
}

const projects: Project[] = [
  {
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
    title: 'Instalación Residencial 12kW',
    location: 'Santiago, Chile',
    desc: 'Casa unifamiliar de 140m². Ahorro del 65% en factura energética.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800',
    title: 'Proyecto Comercial 30kW',
    location: 'Bogotá, Colombia',
    desc: 'Edificio de oficinas con 6 unidades y sistema centralizado.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    title: 'Condominio 8 Unidades',
    location: 'Buenos Aires, Argentina',
    desc: '8 sistemas monobloc R290 para condominio de lujo.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    title: 'Hotel Boutique 20kW',
    location: 'Lima, Perú',
    desc: 'Sistema de climatización para hotel boutique con ACS.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    title: 'Piscina Olímpica 40kW',
    location: 'Ciudad de México',
    desc: 'Calentamiento para piscina semi-olímpica.',
  },
];

/* ─────────────────── success stories data ─────────────────── */
interface Story {
  image: string;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
}

const stories: Story[] = [
  {
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
    title: 'Instalador Certificado 500+',
    desc: 'Red de instaladores certificados NAE en 15 países de Latinoamérica.',
    stat: '500+',
    statLabel: 'Instaladores Activos',
  },
  {
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    title: 'Ahorro Energético Real',
    desc: 'Ahorros de hasta el 70% en costos de calefacción.',
    stat: '70%',
    statLabel: 'Ahorro Promedio',
  },
  {
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    title: 'Proyectos en 15 Países',
    desc: 'Miles de instalaciones residenciales y comerciales.',
    stat: '15',
    statLabel: 'Países LATAM',
  },
];

/* ─────────────────── reusable slider hook ─────────────────── */
function useAutoSlide(
  total: number,
  intervalMs: number,
  getVisibleCount: () => number
) {
  const [current, setCurrent] = useState(0);

  const maxIndex = Math.max(total - getVisibleCount(), 0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  useEffect(() => {
    if (total <= getVisibleCount()) return;
    const timer = setInterval(goNext, intervalMs);
    return () => clearInterval(timer);
  }, [goNext, intervalMs, total, getVisibleCount]);

  return { current, goNext, goPrev, goTo, maxIndex };
}

/* ═══════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  /* featured products */
  const featuredProducts = products.slice(0, 3);

  /* projects slider */
  const [visibleProjects, setVisibleProjects] = useState(3);
  useEffect(() => {
    const mqMd = window.matchMedia('(min-width: 1024px)');
    const mqSm = window.matchMedia('(min-width: 768px)');

    const update = () => {
      if (mqMd.matches) setVisibleProjects(3);
      else if (mqSm.matches) setVisibleProjects(2);
      else setVisibleProjects(1);
    };

    update();
    mqMd.addEventListener('change', update);
    mqSm.addEventListener('change', update);
    return () => {
      mqMd.removeEventListener('change', update);
      mqSm.removeEventListener('change', update);
    };
  }, []);

  const projectsSlider = useAutoSlide(
    projects.length,
    5000,
    () => visibleProjects
  );

  /* success stories slider */
  const storiesSlider = useAutoSlide(stories.length, 6000, () => 1);

  /* ─────────────── render ─────────────── */
  return (
    <div className="font-body">
      {/* ═══════ 1. HERO SECTION ═══════ */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-nae-dark-blue to-nae-blue">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* left */}
            <div className="max-w-2xl flex-1">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                🔥 Tecnología de Climatización para Latinoamérica
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Bombas de Calor de Alta Eficiencia
              </h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Fábrica certificada ISO 9001 · Soporte técnico en español · Red
                de 500+ instaladores
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-nae-orange hover:bg-nae-dark-orange text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30"
                >
                  Ver Productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-nae-blue transition-all duration-200"
                >
                  Solicitar Cotización
                </Link>
              </div>
            </div>

            {/* right */}
            <div className="flex-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600"
                alt="Bombas de calor NAE"
                className="rounded-2xl shadow-2xl w-full max-w-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 2. STATS BAR ═══════ */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Instaladores Certificados' },
              { value: '15', label: 'Países LATAM' },
              { value: '10+', label: 'Años de Experiencia' },
              { value: '98%', label: 'Satisfacción Cliente' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-nae-blue to-nae-orange bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 3. PROJECTS SLIDER ═══════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-nae-dark mb-4">
              Proyectos e Instalaciones
            </h2>
            <p className="text-gray-500 text-lg">
              Casos de éxito de nuestros instaladores en Latinoamérica
            </p>
          </div>

          <div className="relative">
            {/* track */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${projectsSlider.current * (100 / visibleProjects)}%)`,
                }}
              >
                {projects.map((p) => (
                  <div
                    key={p.title}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / visibleProjects}%` }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {p.location}
                        </div>
                        <h3 className="font-heading text-lg font-bold text-nae-dark mb-2">
                          {p.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* arrows */}
            {projects.length > visibleProjects && (
              <>
                <button
                  onClick={projectsSlider.goPrev}
                  className="absolute left-0 top-1/3 -translate-x-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-nae-dark hover:bg-nae-blue hover:text-white transition-all z-10 hidden md:flex"
                  aria-label="Anterior proyecto"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={projectsSlider.goNext}
                  className="absolute right-0 top-1/3 translate-x-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-nae-dark hover:bg-nae-blue hover:text-white transition-all z-10 hidden md:flex"
                  aria-label="Siguiente proyecto"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* dots */}
          {projects.length > visibleProjects && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: projectsSlider.maxIndex + 1 }).map(
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => projectsSlider.goTo(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === projectsSlider.current
                        ? 'bg-nae-orange w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir al proyecto ${i + 1}`}
                  />
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* ═══════ 4. SUCCESS STORIES SLIDER ═══════ */}
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Historias de Éxito
            </h2>
            <p className="text-blue-100 text-lg">
              Resultados reales de instaladores NAE
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${storiesSlider.current * 100}%)`,
                }}
              >
                {stories.map((s) => (
                  <div
                    key={s.title}
                    className="flex-shrink-0 w-full px-2"
                  >
                    <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                      {/* image */}
                      <div className="md:w-1/2">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      {/* content */}
                      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="font-heading text-2xl font-bold text-white mb-4">
                          {s.title}
                        </h3>
                        <p className="text-blue-100 text-lg leading-relaxed mb-8">
                          {s.desc}
                        </p>
                        <div className="flex items-baseline gap-3">
                          <span className="text-5xl font-bold text-nae-orange">
                            {s.stat}
                          </span>
                          <span className="text-blue-100 text-lg">
                            {s.statLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* arrows */}
            <button
              onClick={storiesSlider.goPrev}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-nae-blue transition-all z-10 hidden md:flex"
              aria-label="Historia anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={storiesSlider.goNext}
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-nae-blue transition-all z-10 hidden md:flex"
              aria-label="Siguiente historia"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-8">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => storiesSlider.goTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === storiesSlider.current
                    ? 'bg-nae-orange w-8'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir a historia ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 5. FEATURED PRODUCTS ═══════ */}
      <section className="bg-nae-grey py-16 md:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-nae-dark mb-4">
              Productos Destacados
            </h2>
            <p className="text-gray-500 text-lg">
              Nuestra selección de bombas de calor más solicitadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product: any) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.classList.add(product.badgeBg, 'flex', 'items-center', 'justify-center');
                      target.parentElement!.innerHTML += `<span class="text-6xl">${product.emoji}</span><span class="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">${product.category}</span>`;
                    }}
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold shadow">{product.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-nae-dark mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">COP {product.cop}</span>
                    <Link to={`/products/${product.slug}`} className="text-nae-blue font-medium text-sm hover:underline">Ver Detalles →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-nae-blue hover:bg-nae-dark-blue text-white font-semibold rounded-xl transition-all duration-200"
            >
              Ver Catálogo Completo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ 6. WHY NAE ═══════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-nae-dark mb-4">
              ¿Por qué elegir NAE?
            </h2>
            <p className="text-gray-500 text-lg">
              Más que un proveedor, somos tu aliado estratégico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Factory,
                emoji: '🏭',
                title: 'Fábrica Propia',
                desc: 'Planta certificada ISO 9001 con capacidad de 10,000+ unidades mensuales',
              },
              {
                icon: Wrench,
                emoji: '🔧',
                title: 'Soporte Técnico',
                desc: 'Asesoría en español desde el primer contacto hasta la puesta en marcha',
              },
              {
                icon: Truck,
                emoji: '🚚',
                title: 'Logística Integral',
                desc: 'Envíos marítimos, aéreos y terrestres con tracking en tiempo real',
              },
              {
                icon: ShieldCheck,
                emoji: '✅',
                title: 'Garantía Real',
                desc: '2 años de garantía y repuesto de componentes disponibles de inmediato',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-nae-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-nae-blue" />
                </div>
                <h3 className="font-heading text-xl font-bold text-nae-dark mb-3">
                  {item.emoji} {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 7. CTA BANNER ═══════ */}
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Únete a nuestra red de instaladores y accede a precios mayoristas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-nae-orange hover:bg-nae-dark-orange text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30"
            >
              Registrarme como Instalador
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-nae-blue transition-all duration-200"
            >
              Contactar Ventas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
