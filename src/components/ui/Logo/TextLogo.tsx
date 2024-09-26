import { useTranslations } from 'next-intl';

const TextLogo: React.FC = () => {
  const t = useTranslations('Layout.Header');
  return (
    <>
      <h3 className="mb-[2px] text-m font-medium uppercase leading-[19.5px] text-light-background">
        {t('title')}
      </h3>
      <p className="text-xs font-normal leading-[14.63px] text-light-background">
        {t('description')}
      </p>
    </>
  );
};

export default TextLogo;
