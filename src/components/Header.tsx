'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Главная' },
    { href: '#services', label: 'Услуги' },
    { href: '#contact', label: 'Контакты' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className={`py-2 border-b border-gray-200/20 ${isScrolled ? 'hidden' : 'block'}`}>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+7 (708) 812-13-72</span>
              </div>
            </div>
            <div className="text-gray-600 hidden md:block">
              Работаем: Пн-Пт 9:00-18:00, Сб 10:00-16:00
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Sanali
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Полиграфия</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a href="#services" className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 font-medium">
                Наши услуги
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#services" className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200 font-medium mt-4 block text-center">
                  Наши услуги
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
