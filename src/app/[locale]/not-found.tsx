import NotFoundContent from '@/components/notFound/NotFoundContent';
import { useTranslations } from 'next-intl';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <>
      <NotFoundContent />
    </>
  );
}
