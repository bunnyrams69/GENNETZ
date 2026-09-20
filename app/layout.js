import { Oswald, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-head',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'GENNETZ | Strategy-Led Instagram Management',
  description: 'End-to-end Instagram management — strategy, content, shooting, editing, publishing, and reporting. We don\'t promise viral numbers. We build the process behind real growth.',
  keywords: 'Instagram management, social media agency, content creation, GENNETZ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${oswald.variable} ${plusJakarta.variable}`}>
      <body className="bg-[#070708] text-white selection:bg-teal-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
