import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // window.BASE_PATH = process.env.BASE_PATH;
  return (
    <html lang="en">
      <head>
        <title>PacketScope</title>
        <meta name="description" content="PacketScope: Smart Armor for Server-Side Defense" />
        {
          process.env.BASE_PATH ? <link rel="icon" href={`${process.env.BASE_PATH}/favicon.svg`} sizes="any" /> : <link rel="icon" href={`/favicon.svg`} sizes="any" />
        }
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-GJSCVS5TD5" />
    </html>
  )
}