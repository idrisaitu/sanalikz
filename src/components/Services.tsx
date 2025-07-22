'use client'

import { useState } from 'react'
import { 
  Image, 
  CreditCard, 
  Mail, 
  Shield, 
  Zap, 
  Scissors, 
  Camera, 
  Award, 
  BookOpen, 
  Palette, 
  Sticker, 
  Lightbulb,
  FileText,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'Печать на холстах',
      description: 'Крупноформатная печать на холстах высокого качества',
      icon: Image,
      category: 'print',
      price: 'от 5000 ₸',
      features: ['Любые размеры', 'Высокое качество', 'Быстрое выполнение']
    },
    {
      id: 2,
      title: 'Визитки',
      description: 'Профессиональные визитки для бизнеса',
      icon: CreditCard,
      category: 'business',
      price: 'от 50 ₸/шт',
      features: ['Различные материалы', 'Дизайн в подарок', 'Срочное изготовление']
    },
    {
      id: 3,
      title: 'Открытки',
      description: 'Персонализированные открытки для любых событий',
      icon: Mail,
      category: 'print',
      price: 'от 200 ₸/шт',
      features: ['Индивидуальный дизайн', 'Различные форматы', 'Качественная бумага']
    },
    {
      id: 4,
      title: 'Ламинация',
      description: 'Защита документов и материалов ламинированием',
      icon: Shield,
      category: 'services',
      price: 'от 100 ₸/лист',
      features: ['Разные толщины', 'Матовая и глянцевая', 'Любые форматы']
    },
    {
      id: 5,
      title: 'Лазерная гравировка',
      description: 'Гравировка на табличках, сувенирах и других материалах',
      icon: Zap,
      category: 'laser',
      price: 'от 1000 ₸',
      features: ['Металл, дерево, пластик', 'Высокая точность', 'Долговечность']
    },
    {
      id: 6,
      title: 'Плоттерная резка',
      description: 'Точная резка материалов на плоттере',
      icon: Scissors,
      category: 'services',
      price: 'от 500 ₸',
      features: ['Виниловые пленки', 'Сложные формы', 'Быстрое выполнение']
    },
    {
      id: 7,
      title: 'Печать для ИП и ТОО',
      description: 'Корпоративная полиграфия для бизнеса',
      icon: FileText,
      category: 'business',
      price: 'от 300 ₸',
      features: ['Бланки', 'Печати и штампы', 'Документооборот']
    },
    {
      id: 8,
      title: 'Фотопечать',
      description: 'Качественная печать фотографий любых размеров',
      icon: Camera,
      category: 'print',
      price: 'от 50 ₸/фото',
      features: ['Различные форматы', 'Матовая и глянцевая', 'Цветокоррекция']
    },
    {
      id: 9,
      title: 'Сертификаты и грамоты',
      description: 'Торжественные документы и награды',
      icon: Award,
      category: 'print',
      price: 'от 500 ₸/шт',
      features: ['Премиум бумага', 'Золотое тиснение', 'Индивидуальный дизайн']
    },
    {
      id: 10,
      title: 'Блокноты',
      description: 'Корпоративные и персональные блокноты',
      icon: BookOpen,
      category: 'print',
      price: 'от 800 ₸/шт',
      features: ['Мягкий переплет', 'Брендинг', 'Различные размеры']
    },
    {
      id: 11,
      title: 'Постеры на заказ',
      description: 'Крупноформатные постеры и плакаты',
      icon: Palette,
      category: 'print',
      price: 'от 2000 ₸',
      features: ['Любые размеры', 'Яркие цвета', 'Водостойкие чернила']
    },
    {
      id: 12,
      title: 'Стикерпаки',
      description: 'Наборы стикеров на заказ',
      icon: Sticker,
      category: 'stickers',
      price: 'от 1500 ₸/набор',
      features: ['Водостойкие', 'Яркие цвета', 'Любые формы']
    },
    {
      id: 13,
      title: 'Лайтбоксы',
      description: 'Световые короба для рекламы',
      icon: Lightbulb,
      category: 'advertising',
      price: 'от 15000 ₸',
      features: ['LED подсветка', 'Любые размеры', 'Долговечность']
    },
    {
      id: 14,
      title: 'Наклейки на пленке',
      description: 'Прозрачные и цветные наклейки',
      icon: Sticker,
      category: 'stickers',
      price: 'от 200 ₸/шт',
      features: ['Прозрачная пленка', 'Оракал', 'Водостойкие']
    }
  ]

  const categories = [
    { id: 'all', name: 'Все услуги', count: services.length },
    { id: 'print', name: 'Печать', count: services.filter(s => s.category === 'print').length },
    { id: 'business', name: 'Для бизнеса', count: services.filter(s => s.category === 'business').length },
    { id: 'laser', name: 'Лазерная гравировка', count: services.filter(s => s.category === 'laser').length },
    { id: 'stickers', name: 'Наклейки', count: services.filter(s => s.category === 'stickers').length },
    { id: 'services', name: 'Услуги', count: services.filter(s => s.category === 'services').length },
    { id: 'advertising', name: 'Реклама', count: services.filter(s => s.category === 'advertising').length }
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Palette className="w-4 h-4" />
            <span>Наши услуги</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Полный спектр
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> полиграфических услуг</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От визиток до крупноформатной печати — мы предоставляем качественные полиграфические услуги 
            для бизнеса и частных клиентов
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Icon */}
              <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Service Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-primary-600">{service.price}</span>
                  <a href="#contact" className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-200">
                    <span className="text-sm">Заказать</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Не нашли нужную услугу?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы найдем решение для любой полиграфической задачи
            </p>
            <a href="#contact" className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-block">
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
