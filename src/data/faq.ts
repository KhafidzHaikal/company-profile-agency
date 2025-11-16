export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'payment' | 'project' | 'support';
}

export const faqData: FAQItem[] = [
  {
    id: 'project-timeline',
    question: 'Berapa lama waktu pengerjaan proyek?',
    answer: 'Pembuatan website umumnya membutuhkan waktu hingga 1 bulan, dihitung setelah semua materi lengkap (logo, konten, gambar). Untuk proyek sederhana dengan materi lengkap bisa lebih cepat. Proyek custom dengan revisi kompleks akan disesuaikan waktunya.',
    category: 'project'
  },
  {
    id: 'payment-methods',
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer: 'Pembayaran dapat dilakukan melalui QRIS atau Transfer Bank atas nama GOROSEI. Kami tidak menerima pembayaran melalui rekening pribadi, e-wallet, atau kartu kredit untuk menjaga keamanan transaksi.',
    category: 'payment'
  },
  {
    id: 'custom-project',
    question: 'Apakah bisa mengerjakan proyek custom?',
    answer: 'Tentu saja. Kami menangani berbagai kebutuhan custom seperti sistem booking, integrasi API pihak ketiga, fitur unik, atau desain khusus. Silakan sampaikan kebutuhan Anda, kami akan menghitung estimasi biaya dan waktu berdasarkan kompleksitas proyek.',
    category: 'project'
  },
  {
    id: 'how-to-order',
    question: 'Bagaimana cara memesan layanan GOROSEI?',
    answer: 'Anda dapat memesan layanan melalui: (1) Mengisi form di halaman Kontak, (2) Klik tombol "Mulai Sekarang" di Beranda atau halaman Harga, (3) Hubungi kami untuk konsultasi gratis tanpa komitmen.',
    category: 'general'
  },
  {
    id: 'revision-policy',
    question: 'Berapa kali revisi yang diperbolehkan?',
    answer: 'Kami menyediakan 2-3 kali revisi mayor untuk desain UI/UX dan arsitektur sistem. Revisi minor seperti penyesuaian warna atau perbaikan kecil tetap kami layani dalam scope. Perubahan besar seperti redesign total akan dievaluasi sebagai change request dengan biaya tambahan.',
    category: 'project'
  },
  {
    id: 'feature-changes',
    question: 'Bagaimana mekanisme perubahan fitur selama proyek?',
    answer: 'Perubahan fitur dapat disampaikan kapan saja kepada System Analyst kami. Prosesnya: (1) Analisis dampak internal, (2) Estimasi waktu & biaya, (3) Persetujuan klien, (4) Implementasi. Perubahan dalam scope awal gratis, penambahan fitur baru dihitung sebagai modul tambahan.',
    category: 'project'
  },
  {
    id: 'quality-guarantee',
    question: 'Apa jaminan kualitas dan garansi layanan?',
    answer: 'Kami memberikan garansi 30-90 hari setelah rilis untuk bug fixing, error logic, inconsistency desain, dan performa dasar. Setiap deliverable melalui QA Testing lengkap: functional testing, UI/UX validation, API testing, dan load testing. Sistem dipastikan stabil sebelum diserahkan.',
    category: 'support'
  },
  {
    id: 'post-production',
    question: 'Bagaimana layanan pasca-produksi dan maintenance?',
    answer: 'Kami menyediakan paket maintenance mencakup bug fixing, update, keamanan, monitoring performa, dan backup berkala. Support melalui chat, email, atau tiket bantuan. Jika tidak puas: (1) Support 3 bulan penuh + 3x revisi besar, atau (2) Refund 50% + website live 1 tahun.',
    category: 'support'
  },
  {
    id: 'revision-guarantee',
    question: 'Apakah ada garansi revisi?',
    answer: 'Ya, setiap proyek mendapat 3 kali revisi gratis selama masih dalam scope awal yang disepakati. Penyesuaian di versi awal dapat diajukan tanpa biaya tambahan.',
    category: 'project'
  },
  {
    id: 'portfolio-access',
    question: 'Di mana bisa melihat portofolio GOROSEI?',
    answer: 'Karena banyak klien meminta privasi proyek, kami tidak menampilkan portofolio publik. Namun jika membutuhkan referensi, hubungi kami untuk melihat contoh proyek (dengan data yang disamarkan) agar Anda dapat menilai kualitas kerja kami.',
    category: 'general'
  },
  {
    id: 'consultation-process',
    question: 'Bagaimana proses konsultasi awal?',
    answer: 'Klik tombol "Konsultasi Gratis" dan isi form singkat. Kami akan menghubungi Anda via email atau WhatsApp untuk menjadwalkan sesi diskusi sesuai waktu yang nyaman untuk Anda.',
    category: 'general'
  }
];

export const faqCategories = {
  general: 'Umum',
  payment: 'Pembayaran',
  project: 'Proyek',
  support: 'Dukungan'
};