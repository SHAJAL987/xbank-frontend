import './globals.css'
export const metadata = {
  title: 'xbank Digital App',
  description: 'xbank is a digital banking service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
