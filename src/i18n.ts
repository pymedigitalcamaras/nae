import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: { translation: { nav: { home:'Inicio',products:'Productos',services:'Servicios',about:'Nosotros',contact:'Contacto',pricing:'Precios',savings:'Ahorro',oem:'OEM',login:'Ingresar',dashboard:'Panel',admin:'Admin' }, footer: { rights:'Todos los derechos reservados.' }, hero: { title:'Energía Inteligente para un Futuro Sostenible', subtitle:'Bombas de calor de última generación. Fabricados en China para Latinoamérica.' }, common: { readMore:'Ver más',contactUs:'Contáctanos',learnMore:'Saber más',send:'Enviar',save:'Guardar',cancel:'Cancelar',edit:'Editar',delete:'Eliminar',add:'Agregar',search:'Buscar',loading:'Cargando...' } } },
  en: { translation: { nav: { home:'Home',products:'Products',services:'Services',about:'About',contact:'Contact',pricing:'Pricing',savings:'Savings',oem:'OEM',login:'Login',dashboard:'Dashboard',admin:'Admin' }, footer: { rights:'All rights reserved.' }, hero: { title:'Smart Energy for a Sustainable Future', subtitle:'Next-generation heat pumps. Made in China for Latin America.' }, common: { readMore:'Read more',contactUs:'Contact Us',learnMore:'Learn more',send:'Send',save:'Save',cancel:'Cancel',edit:'Edit',delete:'Delete',add:'Add',search:'Search',loading:'Loading...' } } },
  pt: { translation: { nav: { home:'Início',products:'Produtos',services:'Serviços',about:'Sobre',contact:'Contato',pricing:'Preços',savings:'Economia',oem:'OEM',login:'Entrar',dashboard:'Painel',admin:'Admin' }, footer: { rights:'Todos os direitos reservados.' }, hero: { title:'Energia Inteligente para um Futuro Sustentável', subtitle:'Bombas de calor de última geração. Fabricadas na China para a América Latina.' }, common: { readMore:'Ver mais',contactUs:'Contate-nos',learnMore:'Saiba mais',send:'Enviar',save:'Salvar',cancel:'Cancelar',edit:'Editar',delete:'Excluir',add:'Adicionar',search:'Buscar',loading:'Carregando...' } } },
  zh: { translation: { nav: { home:'首页',products:'产品',services:'服务',about:'关于我们',contact:'联系我们',pricing:'价格',savings:'节能',oem:'代工',login:'登录',dashboard:'仪表板',admin:'管理' }, footer: { rights:'版权所有。' }, hero: { title:'智能能源，可持续未来', subtitle:'新一代热泵。中国制造，服务拉美。' }, common: { readMore:'了解更多',contactUs:'联系我们',learnMore:'了解更多',send:'发送',save:'保存',cancel:'取消',edit:'编辑',delete:'删除',add:'添加',search:'搜索',loading:'加载中...' } } },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources, fallbackLng: 'es', interpolation: { escapeValue: false },
  detection: { order: ['localStorage','navigator'], caches: ['localStorage'] }
});
export default i18n;
