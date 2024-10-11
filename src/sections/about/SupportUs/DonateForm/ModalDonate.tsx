import Modal from '@/components/layout/Modal';
import React from 'react';
import ModalContentDonate from './ModalContentDonate';
import useModalDonateStore from '@/state/stateModalDonate';
import useTransactionStore from '@/state/TransactionState';
import ThanksModal from './ThanksModal';

export default function ModalDonate() {
  const { isModalOpen, closeModal } = useModalDonateStore();
  const { transactionStatus, setTransactionStatus } = useTransactionStore();
  const handleClose = () => {
    if (transactionStatus === 'Declined') setTransactionStatus('');
    closeModal();
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <div>
          {transactionStatus === '' && (
            <ModalContentDonate isOpen={isModalOpen} />
          )}
          {transactionStatus === 'Declined' && <ThanksModal />}
        </div>
      </Modal>
    </>
  );
}
