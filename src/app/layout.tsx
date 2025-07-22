import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Sanali KZ - Полиграфические услуги в Казахстане',
  description: 'Профессиональные полиграфические услуги: печать на холстах, визитки, открытки, ламинация, лазерная гравировка, плоттерная резка, печать для ИП и ТОО, фотопечать, сертификаты, грамоты, блокноты, постеры, стикерпаки, лайтбоксы, наклейки.',
  keywords: 'полиграфия, печать, Казахстан, холсты, визитки, открытки, ламинация, лазерная гравировка, плоттерная резка, фотопечать, сертификаты, грамоты, блокноты, постеры, стикерпаки, лайтбоксы, наклейки',
  authors: [{ name: 'Sanali KZ' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Sanali KZ - Полиграфические услуги',
    description: 'Профессиональные полиграфические услуги в Казахстане',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
