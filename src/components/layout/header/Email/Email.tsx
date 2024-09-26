import { useTranslations } from 'next-intl';
import Link from 'next/link';
interface EmailProps {
  linkClass?: string;
}

const Email: React.FC<EmailProps> = ({
  linkClass = 'cursor-pointer transition-all duration-200 hover:text-gray-border hover:underline',
}) => {
  const t = useTranslations('Layout.AriaLabels');
  const email = 'ukr.peaceful.warrior@gmail.com';
  return (
    <Link
      aria-label={t('email')}
      rel="nofollow noreferrer"
      target="_blank"
      href={`mailto:${email}`}
      title={`Send an email to ${email}`}
      className={`${linkClass}`}
    >
      {email}
    </Link>
  );
};

export default Email;
