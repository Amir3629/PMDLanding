import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieNotice from '@/components/CookieNotice';
import SmoothMotion from "@/components/SmoothMotion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import GlobalTranslation from "@/components/GlobalTranslation";
export const metadata = {
  title: {
    default: 'PayMyDine — Restaurant Operations Platform',
    template: '%s | PayMyDine'
  },
  description: 'PayMyDine brings restaurant operations, role-based team workspaces, guest ordering, kitchen flow, payments, live insights, integrations and AI assistance into one adaptable platform.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="pmd-motion-prep">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
<SmoothMotion />
        <GlobalTranslation />
        <Header />
        <LanguageSwitcher />
        <main>{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
