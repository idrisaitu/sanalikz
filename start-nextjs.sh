#!/bin/bash

echo "🚀 Запуск Sanali KZ Next.js проекта..."

# Проверяем наличие Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен. Пожалуйста, установите Node.js с https://nodejs.org/"
    exit 1
fi

# Проверяем наличие npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm не установлен. Пожалуйста, установите npm"
    exit 1
fi

echo "✅ Node.js версия: $(node --version)"
echo "✅ npm версия: $(npm --version)"

# Устанавливаем зависимости если их нет
if [ ! -d "node_modules" ]; then
    echo "📦 Устанавливаем зависимости..."
    npm install
fi

echo "🎯 Запускаем сервер разработки..."
echo "🌐 Сайт будет доступен по адресу: http://localhost:3000"
echo "⏹️  Для остановки нажмите Ctrl+C"

npm run dev
