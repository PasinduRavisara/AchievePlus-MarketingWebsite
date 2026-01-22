import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ACHIEVE+ | Gamified Task Management Platform',
  description: 'Transform your team\'s productivity with ACHIEVE+ - the gamified task management platform that rewards performance, prevents burnout, and drives engagement.',
  keywords: ['task management', 'gamification', 'productivity', 'team collaboration', 'rewards', 'leaderboard'],
  authors: [{ name: 'ACHIEVE+ Team' }],
  openGraph: {
    title: 'ACHIEVE+ | Gamified Task Management Platform',
    description: 'Revolutionize your team\'s productivity with gamification',
    type: 'website',
  },
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
