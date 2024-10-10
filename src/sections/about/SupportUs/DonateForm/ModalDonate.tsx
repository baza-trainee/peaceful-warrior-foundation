import Modal from '@/components/layout/Modal';
import React from 'react';
import ModalContentDonate from './ModalContentDonate';
import useModalDonateStore from '@/state/stateModalDonate';

export interface ModalDonateProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalDonate({ isOpen, onClose }: ModalDonateProps) {
  const { isModalOpen, closeModal } = useModalDonateStore();
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <ModalContentDonate isOpen={isModalOpen} />
        </div>
      </Modal>
    </>
  );
}
