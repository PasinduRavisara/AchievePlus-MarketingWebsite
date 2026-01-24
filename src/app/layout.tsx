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
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" translate="no">
      <body suppressHydrationWarning className="notranslate">
        {children}
      </body>
    </html>
  );
}
