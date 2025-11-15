import ServiceDetailPage from '@/features/services/ServiceDetailPage';

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}