import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import "./globals.css";

export const metadata: Metadata = {
  title: "Rubik's Cube Solver",
  description: "An intuitive Rubik's cube solver application",
  icons: {
    icon: "/rubik.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`} style={{colorScheme: 'dark'}}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="antialiased bg-black text-white min-h-screen">
        <div className="flex flex-col min-h-screen">
          <header className="py-4 px-4 bg-black border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span role="img" aria-label="Rubik's Cube" className="text-2xl">🎲</span>
                <h1 className="text-xl font-bold">Rubik Solver</h1>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/minarizk5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.minasoliman.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Website
                </a>
                <div className="text-sm text-gray-400">
                  v1.0
                </div>
              </div>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
