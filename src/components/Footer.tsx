'use client'

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    'Печать на холстах',
    'Визитки',
    'Открытки',
    'Ламинация',
    'Лазерная гравировка',
    'Плоттерная резка',
    'Фотопечать',
    'Сертификаты и грамоты'
  ]

  const quickLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'Услуги', href: '#services' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contact' }
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">Sanali</h3>
                <p className="text-sm text-gray-400 -mt-1">Полиграфия</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Профессиональные полиграфические услуги в Казахстане. 
              Качество, скорость и индивидуальный подход к каждому клиенту.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 transition-all duration-200 group"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Документы</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Условия использования
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">+7 (777) 123-45-67</p>
                  <p className="text-sm text-gray-400">+7 (708) 987-65-43</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">info@sanali.kz</p>
                  <p className="text-sm text-gray-400">orders@sanali.kz</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">г. Алматы, ул. Абая 150/230</p>
                  <p className="text-sm text-gray-400">БЦ "Алатау", офис 205</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-sm text-gray-400">Сб: 10:00 - 16:00</p>
                  <p className="text-sm text-gray-400">Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4">Подпишитесь на новости</h4>
            <p className="text-gray-400 mb-6">
              Получайте информацию о новых услугах, акциях и специальных предложениях
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 whitespace-nowrap">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© 2024 Sanali KZ. Все права защищены.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>в Казахстане</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
