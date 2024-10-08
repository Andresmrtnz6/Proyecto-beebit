import React, { ReactNode } from 'react';
import './styles/globals.css';

export const metadata = {
  title: 'Beebit Solutions',
  description: 'Creado y diseñado por Andrés',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
