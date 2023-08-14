import './globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';
import { ThemeProvider } from '@/components/theme-provider';

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
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
