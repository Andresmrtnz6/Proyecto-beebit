// frontend/app/layout.js

import localFont from 'next/font/local';
import './styles/global.css';  


const geistSans = localFont({
  src: '/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata = {
  title: 'Login - Beebit',
  description: 'Germán apruébame 😅',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Login - Beebit</title>
      </head>
      <body className={`${geistSans.variable} flex justify-center items-center min-h-screen bg-black`}>
        {children}
      </body>
    </html>
  );
}
