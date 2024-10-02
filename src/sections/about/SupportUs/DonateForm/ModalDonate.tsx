import Modal from '@/components/layout/Modal';
import React from 'react';
import ModalContentDonate from './ModalContentDonate';

export interface ModalDonateProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalDonate({ isOpen, onClose }: ModalDonateProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
          <ModalContentDonate isOpen={isOpen} />
        </div>
      </Modal>
    </>
  );
}
