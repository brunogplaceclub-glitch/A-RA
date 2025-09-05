'use client'

import { useState } from 'react'
import { Play, Star, ArrowRight, Menu, X, Check, Sparkles, Heart, Brain, Target, Users, Crown, Zap, Shield, Infinity, Phone, CreditCard, Smartphone, Building, TreePine, Leaf, Mountain, Waves, Sun, Moon, Award, BookOpen, Clock, BarChart3, Send, Gift } from 'lucide-react'

interface Package {
  id: string
  name: string
  price: string
  originalPrice?: string
  description: string
  transformation: string
  features: string[]
  modules: Module[]
  popular?: boolean
  premium?: boolean
}

interface Module {
  id: string
  title: string
  description: string
  videos: Video[]
  duration: string
}

interface Video {
  id: string
  title: string
  duration: string
  description: string
}

interface Theory {
  id: string
  title: string
  description: string
  content: string
  icon: any
}

interface Pioneer {
  id: string
  name: string
  area: string
  contribution: string
  quote: string
  image: string
  achievements: string[]
}

const pioneers: Pioneer[] = [
  {
    id: 'napoleon-hill',
    name: 'Napoleon Hill',
    area: 'Sucesso e Riqueza',
    contribution: 'Criador dos princípios fundamentais do sucesso pessoal e autor de "Pense e Enriqueça"',
    quote: "Tudo o que a mente pode conceber e acreditar, pode alcançar.",
    image: '🎩',
    achievements: [
      'Estudou mais de 500 milionários por 20 anos',
      'Desenvolveu os 13 princípios do sucesso',
      'Influenciou milhões através de seus livros',
      'Pioneiro no desenvolvimento da mentalidade de abundância'
    ]
  },
  {
    id: 'dale-carnegie',
    name: 'Dale Carnegie',
    area: 'Relacionamentos e Comunicação',
    contribution: 'Revolucionou a arte de influenciar pessoas e desenvolver habilidades sociais',
    quote: "Você pode fazer mais amigos em dois meses interessando-se genuinamente pelas outras pessoas.",
    image: '🤝',
    achievements: [
      'Autor de "Como Fazer Amigos e Influenciar Pessoas"',
      'Criou técnicas atemporais de comunicação',
      'Fundou instituto global de treinamento',
      'Transformou milhões de relacionamentos'
    ]
  },
  {
    id: 'tony-robbins',
    name: 'Tony Robbins',
    area: 'Coaching e Performance',
    contribution: 'Mestre em estratégias de pico de performance e transformação pessoal',
    quote: "A qualidade da sua vida é a qualidade dos seus relacionamentos.",
    image: '🚀',
    achievements: [
      'Coach de líderes mundiais e celebridades',
      'Criou metodologias de mudança rápida',
      'Eventos que transformaram milhões',
      'Pioneiro em programação neurolinguística aplicada'
    ]
  },
  {
    id: 'deepak-chopra',
    name: 'Deepak Chopra',
    area: 'Espiritualidade e Consciência',
    contribution: 'Integrou sabedoria oriental com ciência ocidental para o desenvolvimento da consciência',
    quote: "Você não está no universo, você é o universo expressando-se como um ser humano.",
    image: '🧘',
    achievements: [
      'Mais de 90 livros publicados',
      'Pioneiro em medicina mente-corpo',
      'Fundador do Centro Chopra',
      'Integrou meditação com neurociência'
    ]
  },
  {
    id: 'louise-hay',
    name: 'Louise Hay',
    area: 'Cura Emocional e Autoestima',
    contribution: 'Revolucionou a compreensão da conexão mente-corpo na cura emocional',
    quote: "Você tem o poder de curar sua vida, e você precisa saber disso.",
    image: '💖',
    achievements: [
      'Criou afirmações positivas sistemáticas',
      'Fundou a editora Hay House',
      'Pioneira em autocura emocional',
      'Transformou vidas através do amor próprio'
    ]
  },
  {
    id: 'eckhart-tolle',
    name: 'Eckhart Tolle',
    area: 'Presença e Mindfulness',
    contribution: 'Mestre em ensinar a arte de viver no momento presente e despertar espiritual',
    quote: "O poder está no agora. Toda a sua vida acontece neste momento.",
    image: '🌟',
    achievements: [
      'Autor de "O Poder do Agora"',
      'Revolucionou o conceito de presença',
      'Ensinou milhões a viver conscientemente',
      'Integrou espiritualidade com vida prática'
    ]
  }
]

const packages: Package[] = [
  {
    id: 'essencial',
    name: 'Aura Essencial',
    price: '29,90€',
    description: 'Desperte sua energia interior e comece sua jornada de transformação pessoal',
    transformation: 'Você descobrirá sua verdadeira essência, desenvolvendo autoconhecimento e presença. Sua aura começará a brilhar com mais clareza e você sentirá uma conexão mais profunda consigo mesmo.',
    features: [
      'Fundamentos da Aura Pessoal',
      'Meditações Guiadas (15 sessões)',
      'Exercícios de Respiração Consciente',
      'Técnicas de Limpeza Energética',
      'Comunidade Exclusiva',
      'Suporte por 30 dias',
      'Progresso Gamificado 0-100%',
      'Certificado de Conclusão'
    ],
    modules: [
      {
        id: 'mod1',
        title: 'Fundamentos da Aura',
        description: 'Compreenda a ciência e espiritualidade por trás da energia pessoal',
        duration: '45 min',
        videos: [
          { id: 'v1', title: 'O que é a Aura - Introdução', duration: '8 min', description: 'Definição científica e espiritual da aura pessoal' },
          { id: 'v2', title: 'Campos Energéticos Humanos', duration: '12 min', description: 'Como medimos e percebemos energia' },
          { id: 'v3', title: 'Tipos de Aura', duration: '10 min', description: 'Diferentes manifestações energéticas' },
          { id: 'v4', title: 'Autodiagnóstico Inicial', duration: '15 min', description: 'Avalie sua aura atual' }
        ]
      },
      {
        id: 'mod2',
        title: 'Limpeza Energética',
        description: 'Remova bloqueios e purifique sua energia',
        duration: '60 min',
        videos: [
          { id: 'v5', title: 'Identificando Bloqueios', duration: '15 min', description: 'Reconheça padrões energéticos negativos' },
          { id: 'v6', title: 'Técnicas de Limpeza', duration: '20 min', description: 'Métodos práticos de purificação' },
          { id: 'v7', title: 'Proteção Energética', duration: '12 min', description: 'Crie escudos energéticos naturais' },
          { id: 'v8', title: 'Prática Guiada', duration: '13 min', description: 'Sessão completa de limpeza' }
        ]
      }
    ]
  },
  {
    id: 'transformacao',
    name: 'Aura Transformação',
    price: '49,90€',
    originalPrice: '79,90€',
    description: 'Eleve sua vibração e transforme completamente sua presença no mundo',
    transformation: 'Você experimentará uma transformação profunda em sua energia pessoal. Sua confiança aumentará significativamente, você atrairá pessoas e oportunidades positivas, e sua presença se tornará magnética e inspiradora.',
    features: [
      'Tudo do Essencial +',
      'Técnicas Avançadas de Magnetismo Pessoal',
      'Workshop de Carisma e Presença',
      'Meditações de Manifestação (25 sessões)',
      'Análise Personalizada da Aura',
      'Sessão 1:1 com Especialista',
      'Suporte por 60 dias',
      'Progresso Gamificado 0-100%',
      'Mensagens Motivacionais SMS'
    ],
    modules: [
      {
        id: 'mod3',
        title: 'Magnetismo Pessoal',
        description: 'Desenvolva uma presença irresistível e autêntica',
        duration: '75 min',
        videos: [
          { id: 'v9', title: 'Ciência do Carisma', duration: '18 min', description: 'Neurociência por trás da atração pessoal' },
          { id: 'v10', title: 'Linguagem Corporal Magnética', duration: '22 min', description: 'Postura e gestos que atraem' },
          { id: 'v11', title: 'Voz e Presença', duration: '15 min', description: 'Tom, ritmo e energia vocal' },
          { id: 'v12', title: 'Exercícios Práticos', duration: '20 min', description: 'Treine sua presença magnética' }
        ]
      },
      {
        id: 'mod4',
        title: 'Manifestação Consciente',
        description: 'Atraia o que deseja através da energia focada',
        duration: '90 min',
        videos: [
          { id: 'v13', title: 'Lei da Atração Científica', duration: '25 min', description: 'Base quântica da manifestação' },
          { id: 'v14', title: 'Visualização Avançada', duration: '20 min', description: 'Técnicas de criação mental' },
          { id: 'v15', title: 'Alinhamento Energético', duration: '18 min', description: 'Sincronize pensamento e emoção' },
          { id: 'v16', title: 'Prática de Manifestação', duration: '27 min', description: 'Sessão completa guiada' }
        ]
      }
    ],
    popular: true
  },
  {
    id: 'mastery',
    name: 'Aura Mastery',
    price: '99,90€',
    originalPrice: '149,90€',
    description: 'Torne-se um mestre da energia pessoal e inspire transformação em outros',
    transformation: 'Você se tornará uma pessoa completamente transformada, irradiando uma energia poderosa e inspiradora. Será capaz de influenciar positivamente qualquer ambiente, liderar com presença natural e criar um impacto duradouro na vida das pessoas ao seu redor.',
    features: [
      'Tudo dos pacotes anteriores +',
      'Certificação em Desenvolvimento de Aura',
      'Técnicas de Liderança Energética',
      'Masterclass Exclusivas (12 sessões)',
      'Mentoria Grupal Mensal',
      '3 Sessões 1:1 Personalizadas',
      'Acesso Vitalício ao Conteúdo',
      'Comunidade VIP',
      'Suporte Prioritário',
      'Progresso Gamificado 0-100%',
      'Mensagens Motivacionais Premium'
    ],
    modules: [
      {
        id: 'mod5',
        title: 'Liderança Energética',
        description: 'Lidere através da presença e inspire transformação',
        duration: '120 min',
        videos: [
          { id: 'v17', title: 'Psicologia da Liderança', duration: '30 min', description: 'Como líderes influenciam energeticamente' },
          { id: 'v18', title: 'Presença Executiva', duration: '25 min', description: 'Comando natural em qualquer situação' },
          { id: 'v19', title: 'Inspiração Autêntica', duration: '28 min', description: 'Motive outros através do exemplo' },
          { id: 'v20', title: 'Casos Práticos', duration: '37 min', description: 'Situações reais de liderança' }
        ]
      },
      {
        id: 'mod6',
        title: 'Mastery Integration',
        description: 'Integre todos os conhecimentos em uma presença masterful',
        duration: '150 min',
        videos: [
          { id: 'v21', title: 'Síntese dos Ensinamentos', duration: '35 min', description: 'Conecte todos os conceitos aprendidos' },
          { id: 'v22', title: 'Vivendo como Mestre', duration: '40 min', description: 'Incorpore a maestria no dia a dia' },
          { id: 'v23', title: 'Impacto no Mundo', duration: '30 min', description: 'Use sua aura para transformar outros' },
          { id: 'v24', title: 'Cerimônia de Graduação', duration: '45 min', description: 'Celebre sua transformação completa' }
        ]
      }
    ],
    premium: true
  }
]

const theories: Theory[] = [
  {
    id: 'quantum',
    title: 'Física Quântica e Energia Pessoal',
    description: 'Como a ciência moderna explica o campo energético humano',
    content: 'A física quântica revela que tudo no universo é energia vibrando em diferentes frequências. Nosso corpo emite um campo eletromagnético mensurável, conhecido cientificamente como biofield. Este campo reflete nosso estado emocional, mental e físico, criando o que tradicionalmente chamamos de "aura". Estudos com câmeras Kirlian e medidores de campo biomagnético demonstram que podemos conscientemente influenciar nossa vibração energética através de práticas específicas.',
    icon: Zap
  },
  {
    id: 'neurociencia',
    title: 'Neurociência da Presença',
    description: 'O que acontece no cérebro quando desenvolvemos presença magnética',
    content: 'Pesquisas em neurociência mostram que pessoas com presença forte apresentam padrões únicos de ondas cerebrais. O estado de "flow" e presença ativa o córtex pré-frontal, aumenta a produção de neurotransmissores como serotonina e dopamina, e sincroniza os hemisférios cerebrais. Esta coerência neural se reflete em nossa linguagem corporal, tom de voz e energia, criando o que percebemos como carisma natural.',
    icon: Brain
  },
  {
    id: 'psicologia',
    title: 'Psicologia da Influência Positiva',
    description: 'Como nossa energia afeta e inspira outras pessoas',
    content: 'A psicologia social demonstra que os seres humanos são altamente sensíveis aos estados emocionais uns dos outros através de neurônios-espelho e contágio emocional. Quando cultivamos estados internos de paz, confiança e amor, isso se transmite inconscientemente para outros. O fenômeno da "presença" é resultado da congruência entre nossos pensamentos, emoções e ações, criando um campo de influência positiva ao nosso redor.',
    icon: Heart
  },
  {
    id: 'biologia',
    title: 'Biologia da Transformação',
    description: 'Como práticas energéticas transformam nosso corpo físico',
    content: 'Estudos em epigenética mostram que práticas como meditação, respiração consciente e visualização podem alterar a expressão de nossos genes. O sistema nervoso parassimpático é ativado, reduzindo cortisol e aumentando hormônios do bem-estar. A coerência cardíaca melhora, o sistema imunológico se fortalece, e até mesmo nossa postura e expressão facial se transformam, refletindo nossa nova vibração energética.',
    icon: Shield
  }
]

export default function AuraApp() {
  const [currentView, setCurrentView] = useState<'home' | 'packages' | 'theories' | 'pioneers' | 'package-detail' | 'checkout' | 'progress'>('home')
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [courseProgress, setCourseProgress] = useState(67) // Exemplo de progresso
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'mbway' | 'card' | 'transfer' | 'klarna' | null>(null)

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg)
    setCurrentView('package-detail')
  }

  const handleCheckout = (pkg: Package) => {
    setSelectedPackage(pkg)
    setCurrentView('checkout')
  }

  const handleMotivationalSignup = () => {
    if (phoneNumber) {
      alert(`Obrigado! Você receberá mensagens motivacionais no ${phoneNumber}`)
      setPhoneNumber('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <header className="border-b border-white/20 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-3xl font-light tracking-wider text-gray-900 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">AÜRA</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentView('home')}
                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => setCurrentView('packages')}
                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
              >
                Pacotes
              </button>
              <button 
                onClick={() => setCurrentView('theories')}
                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
              >
                Teorias
              </button>
              <button 
                onClick={() => setCurrentView('pioneers')}
                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
              >
                Pioneiros
              </button>
              <button 
                onClick={() => setCurrentView('progress')}
                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
              >
                Progresso
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-3 space-y-3">
              {['home', 'packages', 'theories', 'pioneers', 'progress'].map((view) => (
                <button 
                  key={view}
                  onClick={() => {
                    setCurrentView(view as any)
                    setMobileMenuOpen(false)
                  }}
                  className="block text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium capitalize"
                >
                  {view === 'home' ? 'Início' : view === 'packages' ? 'Pacotes' : view === 'theories' ? 'Teorias' : view === 'pioneers' ? 'Pioneiros' : 'Progresso'}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {currentView === 'home' && (
          <div>
            {/* Hero Section with Nature Background */}
            <section className="py-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-teal-50/20 to-blue-100/30 rounded-3xl"></div>
              <div className="absolute top-10 left-10 text-emerald-200/40 text-6xl"><TreePine /></div>
              <div className="absolute top-20 right-20 text-teal-200/40 text-4xl"><Leaf /></div>
              <div className="absolute bottom-10 left-1/4 text-blue-200/40 text-5xl"><Mountain /></div>
              <div className="absolute bottom-20 right-1/3 text-emerald-200/40 text-3xl"><Waves /></div>
              
              <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full text-sm font-medium text-emerald-800 mb-6 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    <span>Transforme sua energia pessoal</span>
                  </div>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-6 leading-tight">
                  Desperte sua
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent font-medium block"> AÜRA</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Descubra o poder da sua energia pessoal e transforme sua presença no mundo. 
                  Desenvolva magnetismo natural, confiança autêntica e uma aura que inspira e atrai.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setCurrentView('packages')}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Começar Jornada
                  </button>
                  <button 
                    onClick={() => setCurrentView('theories')}
                    className="border border-emerald-300 text-emerald-700 px-10 py-4 rounded-full font-medium hover:bg-emerald-50 transition-colors"
                  >
                    Conhecer a Ciência
                  </button>
                </div>
              </div>
            </section>

            {/* What is Aura Section */}
            <section className="py-20 bg-white/70 backdrop-blur-sm rounded-3xl mb-20 shadow-lg">
              <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-light text-gray-900 mb-6">O que é a sua <span className="text-emerald-600">AÜRA</span>?</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Sua aura é o campo energético único que você emite - uma combinação de sua presença, 
                    energia emocional, confiança e magnetismo pessoal que influencia como outros se sentem ao seu redor.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Energia Emocional</h3>
                    <p className="text-gray-600">
                      Sua capacidade de irradiar paz, amor e positividade, criando um ambiente harmonioso ao seu redor.
                    </p>
                  </div>

                  <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Presença Magnética</h3>
                    <p className="text-gray-600">
                      Sua habilidade de comandar atenção naturalmente, inspirar confiança e liderar com autenticidade.
                    </p>
                  </div>

                  <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Infinity className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Vibração Elevada</h3>
                    <p className="text-gray-600">
                      Sua frequência energética que atrai oportunidades, pessoas e experiências alinhadas com seus objetivos.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Motivational Messages Signup */}
            <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl text-white mb-20 shadow-xl">
              <div className="max-w-4xl mx-auto text-center px-8">
                <div className="mb-8">
                  <Phone className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
                  <h2 className="text-4xl font-light mb-6">Receba Inspiração Diária</h2>
                  <p className="text-xl text-emerald-100 mb-8">
                    Insira seu número e receba mensagens motivacionais personalizadas para manter sua energia elevada
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="tel"
                    placeholder="+351 9XX XXX XXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                  <button
                    onClick={handleMotivationalSignup}
                    className="bg-white text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Ativar
                  </button>
                </div>
                
                <p className="text-sm text-emerald-200 mt-4">
                  Mensagens 2-3x por semana • Cancele a qualquer momento
                </p>
              </div>
            </section>

            {/* Transformation Preview */}
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-gray-900 mb-6">Sua Transformação Aguarda</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Milhares de pessoas já transformaram suas vidas desenvolvendo uma aura poderosa e autêntica.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Users, title: 'Relacionamentos Magnéticos', desc: 'Atraia pessoas positivas e inspire conexões profundas' },
                  { icon: Crown, title: 'Liderança Natural', desc: 'Desenvolva presença que inspira e motiva outros' },
                  { icon: Zap, title: 'Energia Elevada', desc: 'Sinta-se vibrante, confiante e cheio de vitalidade' },
                  { icon: Star, title: 'Propósito Claro', desc: 'Descubra e viva sua missão de vida com paixão' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {currentView === 'pioneers' && (
          <div className="py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Grandes Pioneiros do Desenvolvimento Pessoal
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça os mestres que revolucionaram diferentes áreas do crescimento humano e inspiraram milhões de transformações.
              </p>
            </div>

            <div className="space-y-12">
              {pioneers.map((pioneer, index) => (
                <div key={pioneer.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 text-center shadow-xl">
                      <div className="text-8xl mb-6">{pioneer.image}</div>
                      <h3 className="text-3xl font-medium text-gray-900 mb-2">{pioneer.name}</h3>
                      <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        {pioneer.area}
                      </div>
                      <blockquote className="text-lg text-gray-700 italic mb-6">
                        "{pioneer.quote}"
                      </blockquote>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium text-gray-900 mb-3">Contribuição Principal</h4>
                        <p className="text-gray-700 leading-relaxed">{pioneer.contribution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-gray-900 mb-3">Principais Conquistas</h4>
                        <ul className="space-y-2">
                          {pioneer.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <Award className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'progress' && (
          <div className="py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Seu Progresso na Jornada AÜRA
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Acompanhe sua evolução através de módulos curtos e práticos, com vídeos de 8-15 minutos cada.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Overall Progress */}
              <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-medium text-gray-900">Progresso Geral</h2>
                  <div className="text-3xl font-light text-emerald-600">{courseProgress}%</div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${courseProgress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Iniciante</span>
                  <span>Intermediário</span>
                  <span>Avançado</span>
                  <span>Mestre</span>
                </div>
              </div>

              {/* Module Progress */}
              <div className="space-y-6">
                {packages[1].modules.map((module, index) => (
                  <div key={module.id} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium text-gray-900">{module.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{module.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    
                    <div className="space-y-3">
                      {module.videos.map((video, videoIndex) => {
                        const isCompleted = index === 0 || (index === 1 && videoIndex < 2)
                        const isCurrent = index === 1 && videoIndex === 2
                        
                        return (
                          <div key={video.id} className={`flex items-center space-x-4 p-3 rounded-lg ${
                            isCompleted ? 'bg-emerald-50 border border-emerald-200' :
                            isCurrent ? 'bg-blue-50 border border-blue-200' :
                            'bg-gray-50 border border-gray-200'
                          }`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              isCompleted ? 'bg-emerald-500 text-white' :
                              isCurrent ? 'bg-blue-500 text-white' :
                              'bg-gray-300 text-gray-600'
                            }`}>
                              {isCompleted ? <Check className="w-4 h-4" /> :
                               isCurrent ? <Play className="w-4 h-4" /> :
                               <span className="text-xs">{videoIndex + 1}</span>}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-gray-900">{video.title}</h4>
                                <span className="text-sm text-gray-500">{video.duration}</span>
                              </div>
                              <p className="text-sm text-gray-600">{video.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievement Badges */}
              <div className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Conquistas Desbloqueadas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: '🌱', title: 'Primeiro Passo', desc: 'Completou o primeiro módulo' },
                    { icon: '⚡', title: 'Energia Ativada', desc: 'Praticou 7 dias seguidos' },
                    { icon: '🎯', title: 'Foco Total', desc: 'Completou módulo sem pausas' },
                    { icon: '🔥', title: 'Em Chamas', desc: 'Streak de 14 dias' }
                  ].map((badge, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md">
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <h4 className="font-medium text-gray-900 text-sm">{badge.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{badge.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'packages' && (
          <div className="py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Escolha sua Jornada de Transformação
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cada pacote foi cuidadosamente desenvolvido para levar você a um novo nível de presença e magnetismo pessoal.
                Módulos curtos e vídeos práticos de 8-15 minutos para máximo aprendizado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer shadow-xl ${
                    pkg.popular 
                      ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-2xl' 
                      : pkg.premium
                      ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl'
                      : 'bg-white border border-gray-200 hover:shadow-2xl'
                  }`}
                  onClick={() => handlePackageSelect(pkg)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        Mais Popular
                      </div>
                    </div>
                  )}
                  
                  {pkg.premium && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        Premium
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-medium mb-2 ${pkg.popular || pkg.premium ? 'text-white' : 'text-gray-900'}`}>
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      {pkg.originalPrice && (
                        <span className={`text-lg line-through mr-2 ${pkg.popular || pkg.premium ? 'text-white/70' : 'text-gray-400'}`}>
                          {pkg.originalPrice}
                        </span>
                      )}
                      <span className={`text-4xl font-light ${pkg.popular || pkg.premium ? 'text-white' : 'text-gray-900'}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <p className={`text-sm ${pkg.popular || pkg.premium ? 'text-white/90' : 'text-gray-600'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className={`w-5 h-5 ${pkg.popular || pkg.premium ? 'text-white' : 'text-emerald-600'}`} />
                        <span className={`text-sm ${pkg.popular || pkg.premium ? 'text-white/90' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCheckout(pkg)
                    }}
                    className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-white text-emerald-600 hover:bg-gray-50'
                      : pkg.premium
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-300 hover:to-yellow-400'
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg'
                  }`}>
                    Começar Agora
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'checkout' && selectedPackage && (
          <div className="py-20">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-light text-gray-900 mb-4">Finalizar Compra</h1>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                  <h2 className="text-xl font-medium text-gray-900 mb-2">{selectedPackage.name}</h2>
                  <div className="text-3xl font-light text-emerald-600">{selectedPackage.price}</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Escolha o método de pagamento</h3>
                
                <div className="space-y-4 mb-8">
                  {[
                    { id: 'mbway', name: 'MB WAY', icon: Smartphone, desc: 'Pagamento instantâneo via MB WAY' },
                    { id: 'card', name: 'Cartão de Crédito/Débito', icon: CreditCard, desc: 'Visa, Mastercard, American Express' },
                    { id: 'transfer', name: 'Transferência Bancária', icon: Building, desc: 'Entidade e referência multibanco' },
                    { id: 'klarna', name: 'Klarna', icon: Gift, desc: 'Pague em 3x sem juros' }
                  ].map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedPaymentMethod(method.id as any)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        selectedPaymentMethod === method.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <method.icon className={`w-6 h-6 ${
                          selectedPaymentMethod === method.id ? 'text-emerald-600' : 'text-gray-500'
                        }`} />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{method.name}</h4>
                          <p className="text-sm text-gray-600">{method.desc}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          selectedPaymentMethod === method.id
                            ? 'border-emerald-500 bg-emerald-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedPaymentMethod === method.id && (
                            <Check className="w-3 h-3 text-white m-0.5" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedPaymentMethod && (
                  <div className="border-t pt-6">
                    {selectedPaymentMethod === 'mbway' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Número de telemóvel
                        </label>
                        <input
                          type="tel"
                          placeholder="+351 9XX XXX XXX"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    )}
                    
                    {selectedPaymentMethod === 'transfer' && (
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-medium text-gray-900 mb-4">Dados para Transferência</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Entidade:</strong> 12345</div>
                          <div><strong>Referência:</strong> 123 456 789</div>
                          <div><strong>Valor:</strong> {selectedPackage.price}</div>
                        </div>
                      </div>
                    )}
                    
                    {selectedPaymentMethod === 'klarna' && (
                      <div className="bg-pink-50 rounded-xl p-6">
                        <h4 className="font-medium text-gray-900 mb-2">Pague em 3x sem juros</h4>
                        <div className="text-sm text-gray-600">
                          <div>1ª parcela: {(parseFloat(selectedPackage.price.replace('€', '').replace(',', '.')) / 3).toFixed(2)}€ hoje</div>
                          <div>2ª parcela: {(parseFloat(selectedPackage.price.replace('€', '').replace(',', '.')) / 3).toFixed(2)}€ em 30 dias</div>
                          <div>3ª parcela: {(parseFloat(selectedPackage.price.replace('€', '').replace(',', '.')) / 3).toFixed(2)}€ em 60 dias</div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <button
                  disabled={!selectedPaymentMethod}
                  className="w-full mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirmar Pagamento
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Garantia de 30 dias ou seu dinheiro de volta
                </p>
              </div>
            </div>
          </div>
        )}

        {currentView === 'theories' && (
          <div className="py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                A Ciência por trás da Aura
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubra as bases científicas que fundamentam o desenvolvimento da energia pessoal e presença magnética.
              </p>
            </div>

            <div className="space-y-12">
              {theories.map((theory, index) => (
                <div key={theory.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 text-center shadow-xl">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <theory.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-4">{theory.title}</h3>
                      <p className="text-gray-600">{theory.description}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed">{theory.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'package-detail' && selectedPackage && (
          <div className="py-20">
            <button
              onClick={() => setCurrentView('packages')}
              className="text-gray-500 hover:text-gray-700 text-sm mb-8 flex items-center"
            >
              ← Voltar aos pacotes
            </button>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  {selectedPackage.name}
                </h1>
                <div className="mb-6">
                  {selectedPackage.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through mr-4">
                      {selectedPackage.originalPrice}
                    </span>
                  )}
                  <span className="text-5xl font-light text-gray-900">
                    {selectedPackage.price}
                  </span>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {selectedPackage.description}
                </p>
              </div>

              {/* Transformation Section */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 mb-12 shadow-lg">
                <h2 className="text-2xl font-medium text-gray-900 mb-4 text-center">
                  Sua Transformação
                </h2>
                <p className="text-gray-700 leading-relaxed text-center">
                  {selectedPackage.transformation}
                </p>
              </div>

              {/* Modules Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
                  Módulos do Curso - Vídeos Curtos e Práticos
                </h2>
                <div className="space-y-6">
                  {selectedPackage.modules.map((module, index) => (
                    <div key={module.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white text-sm font-medium">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">{module.title}</h3>
                            <p className="text-gray-600 mb-4">{module.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{module.duration}</span>
                        </div>
                      </div>
                      
                      <div className="ml-14 space-y-2">
                        {module.videos.map((video, videoIndex) => (
                          <div key={video.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors">
                            <div className="flex items-center space-x-3">
                              <Play className="w-4 h-4 text-emerald-600" />
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">{video.title}</h4>
                                <p className="text-xs text-gray-600">{video.description}</p>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 font-medium">{video.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
                  O que está incluído
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedPackage.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <button 
                  onClick={() => handleCheckout(selectedPackage)}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Começar Transformação Agora
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Garantia de 30 dias ou seu dinheiro de volta
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}