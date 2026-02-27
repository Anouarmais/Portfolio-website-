import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anouar Mais — Junior Full-Stack Developer',
  description:
    'Junior Full-Stack Developer with strong backend focus. Hands-on experience in Laravel, Spring Boot, React Native, and MySQL. Seeking a junior role to contribute to impactful digital products.',
  keywords: [
    'Full-Stack Developer', 'Laravel', 'React Native', 'Spring Boot',
    'Backend Developer', 'Junior Developer', 'PHP', 'Java', 'MySQL',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
