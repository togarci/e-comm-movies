import type { Metadata } from 'next';
import '@/app/assets/styles/global.css';

export const metadata: Metadata = {
  title: 'E-Comm Movies',
  description: 'An e-commerce platform for movies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
