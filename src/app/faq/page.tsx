import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import FAQPage from '@/features/faq/FAQPage';

export const metadata = {
  title: 'FAQ - GOROSEI | Frequently Asked Questions',
  description: 'Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan digital GOROSEI. Informasi lengkap tentang proses, pembayaran, dan dukungan.',
};

export default function FAQ() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <FAQPage />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}