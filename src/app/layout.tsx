import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PowerGen Renewable Energy — Redesign Concept',
  description: 'A cinematic redesign concept for PowerGen Renewable Energy.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
