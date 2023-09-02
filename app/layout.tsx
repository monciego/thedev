import './globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/shared/navbar';

export const metadata: Metadata = {
  title: 'THEDEV',
  description: 'Elevate your brand with our elegant webcraft.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
