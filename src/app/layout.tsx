import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TidioLoader from '@/components/TidioLoader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DrBalcony Lyro Test',
  description: 'A minimal Next.js app to test Tidio/Lyro chat widget integration',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </div>
        <TidioLoader />
      </body>
    </html>
  );
}
