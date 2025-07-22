'use client'

import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      details: ['+7 (777) 123-45-67', '+7 (708) 987-65-43'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@sanali.kz', 'orders@sanali.kz'],
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      details: ['г. Алматы, ул. Абая 150/230', 'БЦ "Алатау", офис 205'],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Режим работы',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб: 10:00 - 16:00', 'Вс: выходной'],
      color: 'text-purple-600'
    }
  ]

  const services = [
    'Печать на холстах',
    'Визитки',
    'Открытки',
    'Ламинация',
    'Лазерная гравировка',
    'Плоттерная резка',
    'Фотопечать',
    'Сертификаты и грамоты',
    'Блокноты',
    'Постеры',
    'Стикерпаки',
    'Лайтбоксы',
    'Наклейки',
    'Другое'
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'text-pink-600', name: '@sanali_kz' },
    { icon: Facebook, href: '#', color: 'text-blue-600', name: 'Sanali KZ' },
    { icon: Youtube, href: '#', color: 'text-red-600', name: 'Sanali Полиграфия' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Связаться с нами</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Готовы начать
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> ваш проект?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы ответим на все ваши вопросы 
            и поможем выбрать оптимальное решение для ваших задач.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-xl flex items-center justify-center`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Мы в социальных сетях</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                  >
                    <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm text-gray-600">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Интерактивная карта</p>
                <p className="text-sm">г. Алматы, ул. Абая 150/230</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Отправить заявку</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone and Service */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+7 (777) 123-45-67"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Услуга
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Расскажите подробнее о вашем проекте..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Отправляем...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Отправить заявку</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5" />
                  <span>Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                  <AlertCircle className="w-5 h-5" />
                  <span>Произошла ошибка. Попробуйте еще раз или свяжитесь с нами по телефону.</span>
                </div>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Нажимая "Отправить заявку", вы соглашаетесь с{' '}
                <a href="#" className="text-primary-600 hover:underline">политикой конфиденциальности</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
