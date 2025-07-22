'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Star, Users, Award, Zap } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Печать на холстах',
      subtitle: 'Превратите ваши фотографии в произведения искусства',
      image: '/api/placeholder/800/600',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Лазерная гравировка',
      subtitle: 'Персонализированные таблички и сувениры',
      image: '/api/placeholder/800/600',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Визитки и открытки',
      subtitle: 'Профессиональная полиграфия для бизнеса',
      image: '/api/placeholder/800/600',
      color: 'from-pink-600 to-red-600'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const stats = [
    { icon: Users, value: '1000+', label: 'Довольных клиентов' },
    { icon: Award, value: '5+', label: 'Лет опыта' },
    { icon: Zap, value: '24/7', label: 'Быстрое выполнение' },
    { icon: Star, value: '4.9', label: 'Рейтинг качества' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>Лучшая полиграфия в Казахстане</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Sanali
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Полиграфия
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Профессиональные полиграфические услуги: от визиток до крупноформатной печати. 
                Качество, скорость, индивидуальный подход.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Заказать услугу</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                Посмотреть работы
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex justify-center">
                    <stat.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Sliding showcase */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-90`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-white space-y-4">
                      <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                        <Star className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold">{slide.title}</h3>
                      <p className="text-gray-200">{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Slide indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20 animate-bounce-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full opacity-20 animate-bounce-slow delay-500"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
