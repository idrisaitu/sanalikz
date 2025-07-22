'use client'

import { useState } from 'react'
import { Eye, Heart, Share2, Filter, Grid3X3, Grid2X2 } from 'lucide-react'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const portfolioItems = [
    {
      id: 1,
      title: 'Печать на холсте - Пейзаж',
      category: 'canvas',
      image: '/api/placeholder/400/300',
      description: 'Крупноформатная печать пейзажа на холсте 80x60 см',
      likes: 24,
      views: 156
    },
    {
      id: 2,
      title: 'Корпоративные визитки',
      category: 'business',
      image: '/api/placeholder/400/300',
      description: 'Элегантные визитки с тиснением для IT-компании',
      likes: 18,
      views: 89
    },
    {
      id: 3,
      title: 'Лазерная гравировка на дереве',
      category: 'laser',
      image: '/api/placeholder/400/300',
      description: 'Персонализированная табличка из дуба с гравировкой',
      likes: 32,
      views: 201
    },
    {
      id: 4,
      title: 'Свадебные открытки',
      category: 'cards',
      image: '/api/placeholder/400/300',
      description: 'Роскошные пригласительные с золотым тиснением',
      likes: 45,
      views: 278
    },
    {
      id: 5,
      title: 'Фотопечать семейного портрета',
      category: 'photo',
      image: '/api/placeholder/400/300',
      description: 'Качественная печать семейного фото 30x40 см',
      likes: 28,
      views: 134
    },
    {
      id: 6,
      title: 'Корпоративные блокноты',
      category: 'business',
      image: '/api/placeholder/400/300',
      description: 'Брендированные блокноты с логотипом компании',
      likes: 15,
      views: 67
    },
    {
      id: 7,
      title: 'Рекламный постер',
      category: 'poster',
      image: '/api/placeholder/400/300',
      description: 'Яркий постер для кафе формата A1',
      likes: 22,
      views: 145
    },
    {
      id: 8,
      title: 'Стикерпак для бренда',
      category: 'stickers',
      image: '/api/placeholder/400/300',
      description: 'Набор водостойких стикеров с логотипом',
      likes: 38,
      views: 189
    },
    {
      id: 9,
      title: 'Лайтбокс для магазина',
      category: 'lightbox',
      image: '/api/placeholder/400/300',
      description: 'Световой короб с LED подсветкой 120x80 см',
      likes: 41,
      views: 234
    },
    {
      id: 10,
      title: 'Сертификат достижений',
      category: 'certificates',
      image: '/api/placeholder/400/300',
      description: 'Торжественный сертификат на премиум бумаге',
      likes: 19,
      views: 98
    },
    {
      id: 11,
      title: 'Наклейки на оракале',
      category: 'stickers',
      image: '/api/placeholder/400/300',
      description: 'Прозрачные наклейки для витрины магазина',
      likes: 26,
      views: 167
    },
    {
      id: 12,
      title: 'Печать на холсте - Портрет',
      category: 'canvas',
      image: '/api/placeholder/400/300',
      description: 'Художественная печать портрета на холсте',
      likes: 35,
      views: 203
    }
  ]

  const categories = [
    { id: 'all', name: 'Все работы', count: portfolioItems.length },
    { id: 'canvas', name: 'Холсты', count: portfolioItems.filter(item => item.category === 'canvas').length },
    { id: 'business', name: 'Для бизнеса', count: portfolioItems.filter(item => item.category === 'business').length },
    { id: 'laser', name: 'Лазерная гравировка', count: portfolioItems.filter(item => item.category === 'laser').length },
    { id: 'photo', name: 'Фотопечать', count: portfolioItems.filter(item => item.category === 'photo').length },
    { id: 'stickers', name: 'Наклейки', count: portfolioItems.filter(item => item.category === 'stickers').length },
    { id: 'poster', name: 'Постеры', count: portfolioItems.filter(item => item.category === 'poster').length }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            <span>Наши работы</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Галерея
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> выполненных проектов</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Посмотрите на примеры наших работ — от визиток до крупноформатной печати. 
            Каждый проект выполнен с вниманием к деталям и высоким качеством.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'grid' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-500'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'masonry' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-500'
              }`}
            >
              <Grid2X2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Eye className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">{item.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setSelectedImage(item.id)}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  <span className="text-primary-600 font-medium capitalize">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
            Показать больше работ
          </button>
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">
                  {portfolioItems.find(item => item.id === selectedImage)?.title}
                </h3>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <Eye className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-gray-600">
                {portfolioItems.find(item => item.id === selectedImage)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
