import '../scss/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'Blog app for posting news feed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}