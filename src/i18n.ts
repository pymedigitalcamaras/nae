import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: { home: 'Home', products: 'Productos', services: 'Servicios', about: 'Nosotros', oem: 'OEM', contact: 'Contacto', calculator: 'Calculadora', access: 'Acceso Instalador' },
      hero: { tagline: 'Tecnología de Climatización para Latinoamérica', title: 'Bombas de Calor de Alta Eficiencia', subtitle: 'Fábrica certificada ISO 9001 · Soporte técnico en español · Red de 500+ instaladores', cta1: 'Ver Productos', cta2: 'Solicitar Cotización' },
      stats: { installers: 'Instaladores Certificados', countries: 'Países LATAM', years: 'Años de Experiencia', satisfaction: 'Satisfacción Cliente' },
      why: { title: '¿Por qué elegir NAE?', factory: 'Fábrica Propia', support: 'Soporte Técnico', logistics: 'Logística Integral', kits: 'Kits Completos' },
      services: { title: 'Nuestros Servicios', design: 'Planos y Diseño', tracking: 'Seguimiento de Proyectos', development: 'Desarrollo de Proyectos', training: 'Capacitación', postSale: 'Soporte Post-Venta', work: 'Conexión con Trabajos' },
      footer: { rights: '© 2025 NAE — New AGE Energy. Todos los derechos reservados.' },
      auth: { login: 'Iniciar Sesión', register: 'Registro de Instalador', email: 'Correo electrónico', password: 'Contraseña', name: 'Nombre completo', company: 'Empresa', phone: 'Teléfono', country: 'País', confirmPassword: 'Confirmar contraseña', remember: 'Recordarme', forgot: '¿Olvidaste tu contraseña?', noAccount: '¿No tienes cuenta?', hasAccount: '¿Ya tienes cuenta?', submit: 'Enviar', createAccount: 'Crear Cuenta' },
      products: { title: 'Nuestros Productos', filter: 'Filtrar por', category: 'Categoría', all: 'Todos', heatPumps: 'Bombas de Calor', tanks: 'Estanques', kits: 'Kits', accessories: 'Accesorios', details: 'Ver Detalles', quote: 'Solicitar Cotización', cop: 'COP', power: 'Potencia', price: 'Precio FOB', moq: 'MOQ' },
      about: { title: 'Nuestra Historia', slogan: 'No vendemos máquinas. Vendemos certeza.', mission: 'Misión', vision: 'Visión', values: 'Valores', team: 'Nuestro Equipo' },
      contact: { title: 'Contáctanos', message: 'Mensaje', send: 'Enviar Mensaje' },
      pricing: { title: 'Tarifas Mayoristas', restricted: 'Acceso Restringido', loginRequired: 'Regístrate para ver precios mayoristas' },
      calculator: { title: 'Calculadora de Ahorro', fuelType: 'Tipo de combustible', monthlyCost: 'Costo mensual (USD)', sqm: 'Metros cuadrados', climate: 'Zona climática', calculate: 'Calcular Ahorro', monthlySave: 'Ahorro Mensual', annualSave: 'Ahorro Anual', co2: 'Reducción CO₂' },
      dashboard: { welcome: 'Bienvenido', myProfile: 'Mi Perfil', quickLinks: 'Accesos Rápidos', activity: 'Actividad Reciente' },
      admin: { title: 'Panel de Administración', products: 'Productos', leads: 'Leads', newProduct: 'Nuevo Producto', edit: 'Editar', delete: 'Eliminar' },
      oem: { title: 'Servicios OEM & ODM', process: 'Nuestro Proceso' },
      cta: { join: 'Únete a nuestra red de instaladores' }
    }
  },
  en: {
    translation: {
      nav: { home: 'Home', products: 'Products', services: 'Services', about: 'About Us', oem: 'OEM', contact: 'Contact', calculator: 'Calculator', access: 'Installer Access' },
      hero: { tagline: 'Climate Technology for Latin America', title: 'High Efficiency Heat Pumps', subtitle: 'ISO 9001 Certified Factory · Spanish Technical Support · 500+ Installer Network', cta1: 'View Products', cta2: 'Request Quote' },
      stats: { installers: 'Certified Installers', countries: 'LATAM Countries', years: 'Years Experience', satisfaction: 'Client Satisfaction' },
      why: { title: 'Why NAE?', factory: 'Own Factory', support: 'Technical Support', logistics: 'Integrated Logistics', kits: 'Complete Kits' },
      services: { title: 'Our Services', design: 'Plans & Design', tracking: 'Project Tracking', development: 'Project Development', training: 'Training', postSale: 'Post-Sale Support', work: 'Job Connections' },
      footer: { rights: '© 2025 NAE — New AGE Energy. All rights reserved.' },
      auth: { login: 'Sign In', register: 'Installer Registration', email: 'Email', password: 'Password', name: 'Full name', company: 'Company', phone: 'Phone', country: 'Country', confirmPassword: 'Confirm password', remember: 'Remember me', forgot: 'Forgot password?', noAccount: "Don't have an account?", hasAccount: 'Already have an account?', submit: 'Send', createAccount: 'Create Account' },
      products: { title: 'Our Products', filter: 'Filter by', category: 'Category', all: 'All', heatPumps: 'Heat Pumps', tanks: 'Tanks', kits: 'Kits', accessories: 'Accessories', details: 'View Details', quote: 'Request Quote', cop: 'COP', power: 'Power', price: 'FOB Price', moq: 'MOQ' },
      about: { title: 'Our Story', slogan: "We don't sell machines. We sell certainty.", mission: 'Mission', vision: 'Vision', values: 'Values', team: 'Our Team' },
      contact: { title: 'Contact Us', message: 'Message', send: 'Send Message' },
      pricing: { title: 'Wholesale Pricing', restricted: 'Restricted Access', loginRequired: 'Register to view wholesale prices' },
      calculator: { title: 'Savings Calculator', fuelType: 'Fuel type', monthlyCost: 'Monthly cost (USD)', sqm: 'Square meters', climate: 'Climate zone', calculate: 'Calculate Savings', monthlySave: 'Monthly Savings', annualSave: 'Annual Savings', co2: 'CO₂ Reduction' },
      dashboard: { welcome: 'Welcome', myProfile: 'My Profile', quickLinks: 'Quick Links', activity: 'Recent Activity' },
      admin: { title: 'Admin Panel', products: 'Products', leads: 'Leads', newProduct: 'New Product', edit: 'Edit', delete: 'Delete' },
      oem: { title: 'OEM & ODM Services', process: 'Our Process' },
      cta: { join: 'Join our installer network' }
    }
  },
  pt: {
    translation: {
      nav: { home: 'Home', products: 'Produtos', services: 'Serviços', about: 'Sobre Nós', oem: 'OEM', contact: 'Contato', calculator: 'Calculadora', access: 'Acesso Instalador' },
      hero: { tagline: 'Tecnologia de Climatização para América Latina', title: 'Bombas de Calor de Alta Eficiência', subtitle: 'Fábrica Certificada ISO 9001 · Suporte Técnico em Espanhol · Rede de 500+ Instaladores', cta1: 'Ver Produtos', cta2: 'Solicitar Cotação' },
      stats: { installers: 'Instaladores Certificados', countries: 'Países LATAM', years: 'Anos de Experiência', satisfaction: 'Satisfação Cliente' },
      why: { title: 'Por que NAE?', factory: 'Fábrica Própria', support: 'Suporte Técnico', logistics: 'Logística Integral', kits: 'Kits Completos' },
      services: { title: 'Nossos Serviços', design: 'Plantas e Design', tracking: 'Acompanhamento Projetos', development: 'Desenvolvimento Projetos', training: 'Treinamento', postSale: 'Suporte Pós-Venda', work: 'Conexão Trabalhos' },
      footer: { rights: '© 2025 NAE — New AGE Energy. Todos os direitos reservados.' },
      auth: { login: 'Entrar', register: 'Cadastro de Instalador', email: 'E-mail', password: 'Senha', name: 'Nome completo', company: 'Empresa', phone: 'Telefone', country: 'País', confirmPassword: 'Confirmar senha', remember: 'Lembrar-me', forgot: 'Esqueceu a senha?', noAccount: 'Não tem conta?', hasAccount: 'Já tem conta?', submit: 'Enviar', createAccount: 'Criar Conta' },
      products: { title: 'Nossos Produtos', filter: 'Filtrar por', category: 'Categoria', all: 'Todos', heatPumps: 'Bombas Calor', tanks: 'Tanques', kits: 'Kits', accessories: 'Acessórios', details: 'Ver Detalhes', quote: 'Solicitar Cotação', cop: 'COP', power: 'Potência', price: 'Preço FOB', moq: 'MOQ' },
      about: { title: 'Nossa História', slogan: 'Não vendemos máquinas. Vendemos certeza.', mission: 'Missão', vision: 'Visão', values: 'Valores', team: 'Nossa Equipe' },
      contact: { title: 'Contato', message: 'Mensagem', send: 'Enviar Mensagem' },
      pricing: { title: 'Preços Atacado', restricted: 'Acesso Restrito', loginRequired: 'Cadastre-se para ver preços atacado' },
      calculator: { title: 'Calculadora Economia', fuelType: 'Tipo combustível', monthlyCost: 'Custo mensal (USD)', sqm: 'Metros quadrados', climate: 'Zona climática', calculate: 'Calcular Economia', monthlySave: 'Economia Mensal', annualSave: 'Economia Anual', co2: 'Redução CO₂' },
      dashboard: { welcome: 'Bem-vindo', myProfile: 'Meu Perfil', quickLinks: 'Acessos Rápidos', activity: 'Atividade Recente' },
      admin: { title: 'Painel Admin', products: 'Produtos', leads: 'Leads', newProduct: 'Novo Produto', edit: 'Editar', delete: 'Excluir' },
      oem: { title: 'Serviços OEM & ODM', process: 'Nosso Processo' },
      cta: { join: 'Junte-se à nossa rede de instaladores' }
    }
  },
  zh: {
    translation: {
      nav: { home: '首页', products: '产品', services: '服务', about: '关于我们', oem: 'OEM', contact: '联系我们', calculator: '计算器', access: '安装商登录' },
      hero: { tagline: '拉丁美洲气候技术', title: '高效热泵', subtitle: 'ISO 9001认证工厂 · 西班牙语技术支持 · 500+安装商网络', cta1: '查看产品', cta2: '请求报价' },
      stats: { installers: '认证安装商', countries: '拉丁美洲国家', years: '年经验', satisfaction: '客户满意度' },
      why: { title: '为什么选择NAE？', factory: '自有工厂', support: '技术支持', logistics: '综合物流', kits: '完整套件' },
      services: { title: '我们的服务', design: '平面图与设计', tracking: '项目跟踪', development: '项目开发', training: '培训', postSale: '售后支持', work: '工作连接' },
      footer: { rights: '© 2025 NAE — New AGE Energy。版权所有。' },
      auth: { login: '登录', register: '安装商注册', email: '电子邮件', password: '密码', name: '全名', company: '公司', phone: '电话', country: '国家', confirmPassword: '确认密码', remember: '记住我', forgot: '忘记密码？', noAccount: '没有账户？', hasAccount: '已有账户？', submit: '发送', createAccount: '创建账户' },
      products: { title: '我们的产品', filter: '筛选', category: '类别', all: '全部', heatPumps: '热泵', tanks: '水箱', kits: '套件', accessories: '配件', details: '查看详情', quote: '请求报价', cop: 'COP', power: '功率', price: '离岸价格', moq: '最小订货量' },
      about: { title: '我们的历史', slogan: '我们不卖机器，我们卖的是确定性。', mission: '使命', vision: '愿景', values: '价值观', team: '我们的团队' },
      contact: { title: '联系我们', message: '留言', send: '发送留言' },
      pricing: { title: '批发价格', restricted: '受限访问', loginRequired: '注册查看批发价格' },
      calculator: { title: '节能计算器', fuelType: '燃料类型', monthlyCost: '每月费用（美元）', sqm: '平方米', climate: '气候区', calculate: '计算节省', monthlySave: '每月节省', annualSave: '每年节省', co2: '二氧化碳减少' },
      dashboard: { welcome: '欢迎', myProfile: '我的资料', quickLinks: '快速链接', activity: '最近活动' },
      admin: { title: '管理面板', products: '产品', leads: '线索', newProduct: '新产品', edit: '编辑', delete: '删除' },
      oem: { title: 'OEM & ODM服务', process: '我们的流程' },
      cta: { join: '加入我们的安装商网络' }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] }
  });

export default i18n;
