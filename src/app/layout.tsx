import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>PacketScope</title>
        <meta name="description" content="PacketScope: Smart Armor for Server-Side Defense" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}