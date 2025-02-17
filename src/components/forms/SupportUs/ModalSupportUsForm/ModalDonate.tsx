import React from 'react';
import Modal from '@/components/layout/Modal';
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
  // console.log('in modal donate ', transactionStatus);
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <div>
          {transactionStatus === '' && (
            <ModalContentDonate isOpen={isModalOpen} />
          )}
          {/* change to Approved !!!!!!!*/}
          {/* {transactionStatus === 'Declined' && <ThanksModal />} */}
          {transactionStatus === 'Approved' && <ThanksModal />}
        </div>
      </Modal>
    </>
  );
}
