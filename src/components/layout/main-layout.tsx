import { ReactNode } from 'react';
import FooterSection from '@/components/ui/footer-section';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <main className="min-h-screen">
        {children}
      </main>
      <FooterSection />
    </>
  );
}
