'use client'

import { useState } from 'react'
import {
  Target,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Heart,
  TrendingUp,
  Play
} from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import AnimatedSection from './AnimatedSection'

const About = () => {
  const [activeTab, setActiveTab] = useState('story')

  const stats = [
    { icon: Users, value: 1000, suffix: '+', label: 'Довольных клиентов', color: 'text-blue-600' },
    { icon: Award, value: 5, suffix: '+', label: 'Лет на рынке', color: 'text-green-600' },
    { icon: Clock, value: 24, suffix: 'ч', label: 'Среднее время выполнения', color: 'text-purple-600' },
    { icon: Star, value: 4.9, suffix: '', label: 'Средний рейтинг', color: 'text-yellow-600' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Качество',
      description: 'Используем только современное оборудование и качественные материалы'
    },
    {
      icon: Zap,
      title: 'Скорость',
      description: 'Быстрое выполнение заказов без ущерба для качества'
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Гарантируем соблюдение сроков и качество выполненных работ'
    },
    {
      icon: Heart,
      title: 'Индивидуальный подход',
      description: 'Каждый клиент получает персональное внимание и решение'
    }
  ]

  const achievements = [
    'Более 1000 успешно выполненных проектов',
    'Собственное современное оборудование',
    'Команда опытных специалистов',
    'Работа с крупными корпоративными клиентами',
    'Постоянное развитие и внедрение новых технологий'
  ]

  const team = [
    {
      name: 'Алия Нурланова',
      position: 'Директор',
      experience: '8 лет в полиграфии',
      description: 'Эксперт в области полиграфических технологий'
    },
    {
      name: 'Данияр Касымов',
      position: 'Главный дизайнер',
      experience: '6 лет опыта',
      description: 'Специалист по корпоративному дизайну'
    },
    {
      name: 'Айгуль Сарсенова',
      position: 'Менеджер по работе с клиентами',
      experience: '4 года опыта',
      description: 'Консультант по полиграфическим услугам'
    }
  ]

  const tabs = [
    { id: 'story', label: 'Наша история', icon: Target },
    { id: 'team', label: 'Команда', icon: Users },
    { id: 'values', label: 'Ценности', icon: Heart }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>О компании</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Знакомьтесь —
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Sanali KZ</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — команда профессионалов, которая уже более 5 лет предоставляет качественные 
            полиграфические услуги в Казахстане
          </p>
        </div>

        {/* Stats */}
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-white rounded-xl p-1 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex-1 justify-center ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Наша история</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Компания Sanali KZ была основана в 2019 году с целью предоставления качественных 
                    полиграфических услуг в Казахстане. Начав с небольшой мастерской, мы постепенно 
                    расширили наши возможности и сегодня предлагаем полный спектр полиграфических услуг.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    За годы работы мы накопили богатый опыт, обзавелись современным оборудованием и 
                    сформировали команду профессионалов, которые разделяют наши ценности качества и 
                    клиентоориентированности.
                  </p>
                  
                  <div className="space-y-3 mt-6">
                    <h4 className="font-semibold text-gray-900">Наши достижения:</h4>
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Наша команда</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Наша команда состоит из опытных специалистов, каждый из которых является экспертом 
                    в своей области. Мы постоянно развиваемся и изучаем новые технологии.
                  </p>
                  
                  <div className="space-y-6">
                    {team.map((member, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                          {member.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{member.name}</h4>
                          <p className="text-primary-600 text-sm font-medium">{member.position}</p>
                          <p className="text-gray-500 text-sm">{member.experience}</p>
                          <p className="text-gray-600 text-sm mt-1">{member.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Наши ценности</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Мы руководствуемся четкими принципами в работе, которые помогают нам 
                    поддерживать высокие стандарты и строить долгосрочные отношения с клиентами.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                      <div key={index} className="space-y-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{value.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Почему выбирают нас?</h3>
                    <p className="text-primary-100">Преимущества работы с Sanali KZ</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Современное оборудование</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Качественные материалы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Быстрое выполнение</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Конкурентные цены</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Индивидуальный подход</span>
                  </div>
                </div>

                <button className="mt-8 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Смотреть видео о нас</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
