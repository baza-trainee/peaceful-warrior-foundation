'use client';

import { createPortal } from 'react-dom';
import { MouseEvent, useEffect, useState } from 'react';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  const [render, setRender] = useState(false);
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    setRender(true);
  }, []);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handler);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, isOpen]);

  if (!render || !isOpen) return null;

  const modalContainer = document.querySelector('#modal-container');

  if (!modalContainer) return null;

  return createPortal(
    isOpen && (
      <div
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="relative rounded-btn-radius bg-light-background desktop:rounded-[32px]">
          {/* p-6 shadow-lg*/}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 absolute right-4 top-4 desktop:right-8 desktop:top-8"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    ),

    modalContainer
  );
}
