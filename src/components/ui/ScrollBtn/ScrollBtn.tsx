'use client';
import { useEffect, useState } from 'react';
import { ICONS } from '@/constants/icons/icons';

const ScrollBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);
  const offset = 450; // Відстань до футера, за якою кнопка зникне

  useEffect(() => {
    const onScroll = () => {
      const footer = document.getElementById('footer');
      if (!footer) return;

      const scrollPosition = window.scrollY + window.innerHeight; // Позиція скролу
      const footerTop = footer.getBoundingClientRect().top + window.scrollY; // Верхня частина футера

      // Логіка для показу/сховування кнопки
      // const shouldShow = window.scrollY > 450; // Показувати кнопку, якщо прокрутка більше ніж 500 пікселів
      const viewportHeight = window.innerHeight;

      const shouldShow = window.scrollY > viewportHeight; // Показувати кнопку після прокрутки більше висоти в'юпорту

      if (scrollPosition >= footerTop && window.scrollY >= footerTop - offset) {
        setHideBtn(true); // Сховати кнопку
      } else {
        setHideBtn(false); // Відобразити кнопку
      }

      setShowBtn(shouldShow && !hideBtn); // Показати кнопку тільки якщо не прихована
    };

    const handleScroll = () => {
      requestAnimationFrame(onScroll); // Використовуємо requestAnimationFrame для оптимізації
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hideBtn]); // Додаємо hideBtn для коректного контролю стану

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`scrollBtn ${showBtn ? 'show' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <ICONS.ARROW className="h-7 w-7 rotate-180 fill-gray-devider" />
    </button>
  );
};

export default ScrollBtn;
